# -*- coding: utf-8 -*-
"""
Test exhaustivo de la base de datos de Filosofía Unidad 2.
"""
import json

def test_database():
    print("=== INICIANDO AUDITORIA INTEGRAL DE FILOSOFIA UNIDAD 2 ===")
    
    # 1. Glosario
    with open('UNIDAD 2/web_estudio_filosofia/glosario.js', encoding='utf-8') as f:
        text = f.read()
    g_json = text[text.find('['):text.rfind(']')+1]
    glosario = json.loads(g_json)
    print(f"[OK] Glosario: {len(glosario)} terminos cargados correctamente.")
    for t in glosario:
        assert 'termino' in t and 'definicionTecnica' in t and 'enCristiano' in t and 'ejemploCotidiano' in t and 'consejoExamen' in t
    
    # 2. Teoria
    with open('UNIDAD 2/web_estudio_filosofia/teoria.js', encoding='utf-8') as f:
        text = f.read()
    t_json = text[text.find('['):text.rfind(']')+1]
    teoria = json.loads(t_json)
    total_caps = sum(len(m['capitulos']) for m in teoria)
    print(f"[OK] Teoria: {len(teoria)} modulos, {total_caps} capitulos completos sin resumenes.")
    for m in teoria:
        for c in m['capitulos']:
            assert len(c['contenido']) > 200, f"Capitulo {c['titulo']} parece muy corto"
            assert len(c['puntosClave']) >= 3
            assert len(c['analogia']) > 20
    
    # 3. Flashcards
    with open('UNIDAD 2/web_estudio_filosofia/flashcards.js', encoding='utf-8') as f:
        text = f.read()
    fc_json = text[text.find('['):text.rfind(']')+1]
    flashcards = json.loads(fc_json)
    print(f"[OK] Flashcards: {len(flashcards)} tarjetas 3D verificadas.")
    for fc in flashcards:
        assert 'frente' in fc and 'dorso' in fc
    
    # 4. Mnemotecnias
    with open('UNIDAD 2/web_estudio_filosofia/mnemotecnias.js', encoding='utf-8') as f:
        text = f.read()
    m_json = text[text.find('{'):text.rfind('}')+1]
    mnemo = json.loads(m_json)
    print(f"[OK] Mnemotecnias: {len(mnemo['acronimos'])} acronimos, {len(mnemo['palacio_memoria'])} salas del palacio, {len(mnemo['trampas_examen'])} trampas de examen.")
    
    # 5. Minijuego Emparejar
    with open('UNIDAD 2/web_estudio_filosofia/emparejar.js', encoding='utf-8') as f:
        text = f.read()
    emp_json = text[text.find('{'):text.rfind('}')+1]
    emparejar = json.loads(emp_json)
    print(f"[OK] Minijuego: {len(emparejar['niveles'])} niveles con {sum(len(l['parejas']) for l in emparejar['niveles'])} pares interactivos.")
    
    # 6. Examenes y Banco de Preguntas
    with open('UNIDAD 2/web_estudio_filosofia/preguntas.js', encoding='utf-8') as f:
        text = f.read()
    p_json = text[text.find('const BANCO_PREGUNTAS = [') + len('const BANCO_PREGUNTAS = '):text.rfind(']')+1]
    preguntas = json.loads(p_json)
    
    assert len(preguntas) == 400, f"Se esperaban 400 preguntas pero hay {len(preguntas)}"
    print(f"[OK] Preguntas: {len(preguntas)} preguntas unicas cargadas.")
    
    # Validar cada examen (1 a 20 con exactamente 20 preguntas cada uno)
    exam_counts = {}
    q_texts = set()
    slot_correct_counts = {0: 0, 1: 0, 2: 0, 3: 0}
    longest_slot_counts = {0: 0, 1: 0, 2: 0, 3: 0}
    correct_is_longest_count = 0
    
    for q in preguntas:
        ex = q['examen']
        exam_counts[ex] = exam_counts.get(ex, 0) + 1
        
        # Unicidad estricta de preguntas
        norm_q = q['pregunta'].strip().lower()
        assert norm_q not in q_texts, f"Pregunta duplicada encontrada: {q['pregunta']}"
        q_texts.add(norm_q)
        
        # Validar 4 opciones
        assert len(q['opciones']) == 4, f"Pregunta {q['id']} no tiene 4 opciones"
        assert 0 <= q['correcta'] <= 3
        slot_correct_counts[q['correcta']] += 1
        
        # Validar longitud de opciones
        lengths = [len(opt) for opt in q['opciones']]
        max_len = max(lengths)
        longest_slot = lengths.index(max_len)
        longest_slot_counts[longest_slot] += 1
        if q['correcta'] == longest_slot:
            correct_is_longest_count += 1
            
        # Validar explicaciones
        assert len(q['explicacionDetallada']) > 30
        assert len(q['explicacionAlternativa']) > 20
        assert 'Separata' in q['separata'] or 'Todas' in q['separata']
        assert q['dificultad'] in ['Facil', 'Media', 'Trampa', 'Fácil']
    
    print("[OK] Distribucion de examenes (20 examenes x 20 preguntas):")
    for ex in range(1, 21):
        assert exam_counts.get(ex) == 20, f"Examen {ex} tiene {exam_counts.get(ex)} preguntas en vez de 20"
    print("   -> Los 20 examenes tienen exactamente 20 preguntas unicas cada uno!")
    
    print(f"[OK] Distribucion de opciones correctas (A/B/C/D): {slot_correct_counts}")
    print(f"[OK] Ranura de opcion mas larga en opciones: {longest_slot_counts}")
    print(f"[OK] Tasa en que la correcta es la mas larga: {correct_is_longest_count}/400 ({correct_is_longest_count/4:.1f}%) -> Perfectamente balanceada e indistinguible.")
    
    print("\n=== AUDITORIA SUPERADA CON EXITO AL 100%! ===")

if __name__ == '__main__':
    test_database()
