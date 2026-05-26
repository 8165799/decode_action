import fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';
import process from 'process';

async function loadPlugin(name, modulePath) {
  try {
    const module = await import(modulePath);
    return module.default || module;
  } catch (error) {
    console.error(`插件 ${name} 加载失败: ${error.message}`);
    return null;
  }
}

// Read command-line arguments
let encodeFile = 'input.js';
let decodeFile = 'output.js';

for (let i = 2; i < process.argv.length; i += 2) {
  if (process.argv[i] === '-i') {
    encodeFile = process.argv[i + 1];
  } else if (process.argv[i] === '-o') {
    decodeFile = process.argv[i + 1];
  }
}

console.log(`输入: ${encodeFile}`);
console.log(`输出: ${decodeFile}`);

// Read source code
const sourceCode = fs.readFileSync(encodeFile, { encoding: 'utf-8' });

let processedCode = sourceCode;
let pluginUsed = '';
let time;

// Try plugins in sequence until the processed code differs from the original
const plugins = [
  { name: 'string-array', modulePath: './plugin/string-array.js' },
  { name: 'obfuscator', modulePath: './plugin/obfuscator.js' },
  { name: 'sojsonv7', modulePath: './plugin/sojsonv7.js' },
  { name: 'sojson', modulePath: './plugin/sojson.js' },
  { name: 'jsconfuser', modulePath: './plugin/jsconfuser.js' },
  { name: 'awsc', modulePath: './plugin/awsc.js' },
  { name: 'jjencode', modulePath: './plugin/jjencode.js' },
  { name: 'common', modulePath: './plugin/common.js' }, // Use common plugin last
];

for (const plugin of plugins) {
  // Check for specific string in sourceCode to break early
  if (sourceCode.indexOf('smEcV') !== -1) {
    break;
  }

  try {
    const pluginFn = await loadPlugin(plugin.name, plugin.modulePath);
    if (!pluginFn) {
      continue;
    }
    const code = pluginFn(sourceCode);
    if (code && code !== processedCode) {
      processedCode = code;
      pluginUsed = plugin.name;
      break;
    }
  } catch (error) {
    console.error(`插件 ${plugin.name} 处理时发生错误: ${error.message}`);
  }
}

// Check if processed code differs from source code
if (processedCode !== sourceCode) {
  time = new Date();
  const header = [
    `//${time}`,
    "//Base:<url id=\"cv1cref6o68qmpt26ol0\" type=\"url\" status=\"parsed\" title=\"GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code\" wc=\"2165\">https://github.com/echo094/decode-js</url>",
    "//Modify:<url id=\"cv1cref6o68qmpt26olg\" type=\"url\" status=\"parsed\" title=\"GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密\" wc=\"741\">https://github.com/smallfawn/decode_action</url>"
  ].join('\n');

  // Combine header and processed code
  const outputCode = header + '\n' + processedCode;

  // Write to file
  fs.writeFile(decodeFile, outputCode, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`使用插件 ${pluginUsed} 成功处理并写入文件 ${decodeFile}`);
    }
  });
} else {
  console.log(`所有插件处理后的代码与原代码一致，未写入文件。`);
}
