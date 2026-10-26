# -*- coding: utf-8 -*-
import json

with open('UNIDAD 2/web_estudio_filosofia/teoria.js', encoding='utf-8') as f:
    text = f.read()

idx = text.find('const MODULOS_TEORIA =')
data = json.loads(text[idx + len('const MODULOS_TEORIA ='):-2])

# Read actual separata texts for comparison
separatas = {}
for i in range(1, 5):
    with open(f'extracted_texts/separata{i}.txt', encoding='utf-8') as f:
        separatas[i] = f.read()

for mod in data:
    print(f'\n{"="*60}')
    print(f'MODULE: {mod["titulo"]}')
    print(f'Separata claimed: {mod["separata"]}')
    for cap in mod['capitulos']:
        content = cap['contenido']
        print(f'\n  Chapter: {cap["titulo"]}')
        print(f'  Content length: {len(content)} chars')
        print(f'  First 200 chars of content:')
        print(f'  >>> {content[:200]}')
        
        # Check if content phrases appear in any separata
        # Take a sample phrase (first 60 chars after any leading whitespace)
        sample = content.strip()[:80]
        found_in = []
        for sep_num, sep_text in separatas.items():
            if sample[:40] in sep_text:
                found_in.append(sep_num)
        if found_in:
            print(f'  MATCH: Found in separata(s) {found_in}')
        else:
            print(f'  WARNING: First 40 chars NOT found verbatim in any separata')
            # Try shorter match
            if sample[:20] in sep_text:
                print(f'    (partial 20-char match found)')
