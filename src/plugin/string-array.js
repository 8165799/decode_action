import vm from 'vm'

function jsString(value) {
  return JSON.stringify(String(value))
}

function decodeLiteral(quote, raw) {
  return vm.runInNewContext(`${quote}${raw}${quote}`)
}

function collectAliases(code, decoderNames) {
  const aliases = new Map()
  for (const name of decoderNames) {
    aliases.set(name, name)
  }

  let changed = true
  const assignRe = /\b([A-Za-z_$][\w$]*)\s*=\s*([A-Za-z_$][\w$]*)\b/g
  while (changed) {
    changed = false
    let match
    while ((match = assignRe.exec(code))) {
      const [, left, right] = match
      if (!aliases.has(left) && aliases.has(right)) {
        aliases.set(left, aliases.get(right))
        changed = true
      }
    }
  }
  return aliases
}

function findDecoderNames(code) {
  const names = []
  const fnRe = /function\s+([A-Za-z_$][\w$]*)\s*\(([^)]*)\)\s*\{\s*var\s+\w+\s*=\s*a0c\s*\(\)/g
  let match
  while ((match = fnRe.exec(code))) {
    const name = match[1]
    if (name !== 'a0c') {
      names.push(name)
    }
  }
  return [...new Set(names)]
}

function replaceCalls(code, decoders, aliases) {
  let out = code
  const aliasNames = [...aliases.keys()].sort((a, b) => b.length - a.length)

  for (const name of aliasNames) {
    const decoderName = aliases.get(name)
    const fn = decoders[decoderName]
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

    const keyedRe = new RegExp(
      `\\b${escaped}\\(\\s*(0x[0-9a-fA-F]+|\\d+)\\s*,\\s*(['"])((?:\\\\.|(?!\\2).)*?)\\2\\s*\\)`,
      'g',
    )
    out = out.replace(keyedRe, (full, idx, quote, key) => {
      try {
        return jsString(fn(Number(idx), decodeLiteral(quote, key)))
      } catch {
        return full
      }
    })

    const singleArgRe = new RegExp(`\\b${escaped}\\(\\s*(0x[0-9a-fA-F]+|\\d+)\\s*\\)`, 'g')
    out = out.replace(singleArgRe, (full, idx) => {
      try {
        return jsString(fn(Number(idx)))
      } catch {
        return full
      }
    })
  }

  return out
}

export default function (code) {
  const tableStart = code.indexOf('function a0c')
  const mainStart = code.indexOf('((()=>{')
  if (tableStart < 0 || mainStart < 0 || mainStart <= tableStart) {
    return null
  }

  const decoderNames = findDecoderNames(code)
  if (!decoderNames.length) {
    return null
  }

  const decoderStart = Math.min(
    tableStart,
    ...decoderNames.map((name) => code.indexOf(`function ${name}`)).filter((idx) => idx >= 0),
  )

  const context = {
    console: { log() {}, warn() {}, error() {} },
    Math,
    Date,
    RegExp,
    String,
    Boolean,
    parseInt,
    decodeURIComponent,
  }
  vm.createContext(context)

  try {
    vm.runInContext(`${code.slice(decoderStart, mainStart)}0;`, context, { timeout: 5000 })
  } catch (error) {
    console.error(`string-array 初始化失败: ${error.message}`)
    return null
  }

  const decoders = {}
  for (const name of decoderNames) {
    if (typeof context[name] === 'function') {
      decoders[name] = context[name]
    }
  }
  if (!Object.keys(decoders).length) {
    return null
  }

  const aliases = collectAliases(code, Object.keys(decoders))
  const decoded = replaceCalls(code, decoders, aliases)
  return decoded !== code ? decoded : null
}
