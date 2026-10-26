# -*- coding: utf-8 -*-
import re

with open('UNIDAD 2/web_estudio_filosofia/app.js', encoding='utf-8') as f:
    app_text = f.read()

with open('UNIDAD 2/web_estudio_filosofia/index.html', encoding='utf-8') as f:
    html_text = f.read()

ids_in_app = set(re.findall(r"getElementById\(['\"]([a-zA-Z0-9_\-]+)['\"]\)", app_text))
ids_in_html = set(re.findall(r"id=['\"]([a-zA-Z0-9_\-]+)['\"]", html_text))

print('Total IDs queried in app.js:', len(ids_in_app))
missing_ids = [id_name for id_name in ids_in_app if id_name not in ids_in_html]
print('IDs in app.js not in static index.html:')
for m in sorted(missing_ids):
    print(' -', m)
