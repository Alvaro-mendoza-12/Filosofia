# -*- coding: utf-8 -*-
"""
Balanceador de longitud de distractores para que la respuesta correcta
tenga exactamente ~25% de probabilidad de ser la opción más larga (azar puro).
"""
import json
import os
import random

DISTRACTOR_ENRICHMENTS = [
    " tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
    " según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
    " mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
    " de acuerdo con ciertas posturas positivistas y materialistas del pensamiento decimonónico.",
    " conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
    " según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
    " a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
    " en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser."
]

def balance_questions():
    with open(r'UNIDAD 2\web_estudio_filosofia\preguntas.js', 'r', encoding='utf-8') as f:
        content = f.read()

    info_part = content.split('const BANCO_PREGUNTAS = ')[0]
    json_part = content.split('const BANCO_PREGUNTAS = ')[1].strip().rstrip(';')
    banco = json.loads(json_part)

    rng = random.Random(777)
    
    # Queremos que la correcta sea la más larga en aprox 25% - 28% de los casos (azar puro entre 4 opciones)
    target_longest_count = int(len(banco) * 0.25) # 100 de 400
    
    current_longest = 0
    for q in banco:
        c = q['correcta']
        lens = [len(opt) for opt in q['opciones']]
        if lens[c] == max(lens) and lens.count(max(lens)) == 1:
            current_longest += 1

    print(f"Longest actual: {current_longest} de {len(banco)}")
    needed_to_reduce = current_longest - target_longest_count
    print(f"Necesitamos hacer que un distractor sea más largo en {needed_to_reduce} preguntas.")

    reduced = 0
    for q in banco:
        if reduced >= needed_to_reduce:
            break
        c = q['correcta']
        lens = [len(opt) for opt in q['opciones']]
        if lens[c] == max(lens):
            # Escoger un distractor al azar y alargarlo con un complemento filosófico plausible
            distractor_indices = [i for i in range(4) if i != c]
            target_d = rng.choice(distractor_indices)
            
            enrichment = rng.choice(DISTRACTOR_ENRICHMENTS)
            # Quitar punto final del distractor si lo tiene
            d_text = q['opciones'][target_d].rstrip('.')
            q['opciones'][target_d] = d_text + enrichment
            reduced += 1

    # Recalcular estadísticas
    new_longest_count = 0
    longest_distribution = {0: 0, 1: 0, 2: 0, 3: 0}
    for q in banco:
        lens = [len(opt) for opt in q['opciones']]
        max_idx = lens.index(max(lens))
        longest_distribution[max_idx] += 1
        if max_idx == q['correcta']:
            new_longest_count += 1

    print(f"Nuevo total de correctas más largas: {new_longest_count} ({new_longest_count/len(banco)*100:.1f}%)")
    print(f"Distribución de la opción más larga en slots (0, 1, 2, 3): {longest_distribution}")

    # Guardar
    out_path = r'UNIDAD 2\web_estudio_filosofia\preguntas.js'
    new_content = info_part + "const BANCO_PREGUNTAS = " + json.dumps(banco, indent=2, ensure_ascii=False) + ";\n"
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("¡Preguntas guardadas con éxito con balance perfecto de longitud!")

if __name__ == '__main__':
    balance_questions()
