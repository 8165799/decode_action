#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
名创优品小程序 多账号版
作者：foglamb
环境变量：foglamb_mcyx
格式：uid1#openid1#unionid1#skey1@uid2#openid2#unionid2#skey2
交流群聊:797644857
"""

import base64
import zlib
import hashlib
import time
import random
import requests
import os
import sys

try:
    import notify
    QL_NOTIFY = True
except ImportError:
    QL_NOTIFY = False

_MAGIC_KEY = b"foglamb_mcyx_2025_enc_key"

def _simple_decrypt(data: bytes) -> bytes:
    result = bytearray()
    for i, b in enumerate(data):
        k = _MAGIC_KEY[i % len(_MAGIC_KEY)]
        result.append(b ^ k ^ (i & 0xFF))
    return bytes(result)

def _decrypt():
    cipher = """
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
"""
    data = base64.b64decode(cipher)
    data = _simple_decrypt(data)
    data = zlib.decompress(data)
    return data.decode('utf-8')

_decrypted = _decrypt()
exec(_decrypted, globals())

if __name__ == "__main__":
    print_logo()
    accounts = load_accounts()
    if not accounts:
        print("\n❌ 未找到有效账号")
        print("   变量名: foglamb_mcyx")
        sys.exit(1)
    print(f"\n✅ 加载 {len(accounts)} 个账号")
    all_results = []
    total_success = total_already = total_fail = 0
    for i, acc in enumerate(accounts, 1):
        print(f"\n{'='*60}\n账号 {i}/{len(accounts)}\n{'='*60}")
        bot = MinisoBot(acc['uid'], acc['openid'], acc['unionid'], acc['skey'], i)
        result, success, already, fail = bot.run()
        all_results.append(f"账号{i}: ✅{success} ⏭️{already} ❌{fail}")
        total_success += success
        total_already += already
        total_fail += fail
        if i < len(accounts):
            print("\n⏸️ 等待5秒...")
            time.sleep(5)
    summary = "\n".join([
        "名创优品多账号执行完成",
        f"账号总数: {len(accounts)}",
        f"总成功: {total_success}",
        f"总已完成: {total_already}",
        f"总失败: {total_fail}",
        "",
        "各账号详情:"
    ] + all_results)
    print("\n" + "="*60)
    print(summary)
    print("="*60)
    send_notify("名创优品多账号完成", summary)
