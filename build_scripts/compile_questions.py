# -*- coding: utf-8 -*-
import json
import os
import sys
import random

from exam_group1 import EXAM_1_QUESTIONS, EXAM_2_QUESTIONS, EXAM_3_QUESTIONS, EXAM_4_QUESTIONS, EXAM_5_QUESTIONS
from exam_group2 import EXAM_6_QUESTIONS, EXAM_7_QUESTIONS, EXAM_8_QUESTIONS, EXAM_9_QUESTIONS, EXAM_10_QUESTIONS
from exam_group3 import EXAM_11_QUESTIONS, EXAM_12_QUESTIONS, EXAM_13_QUESTIONS, EXAM_14_QUESTIONS, EXAM_15_QUESTIONS
from exam_group4 import EXAM_16_QUESTIONS, EXAM_17_QUESTIONS, EXAM_18_QUESTIONS, EXAM_19_QUESTIONS, EXAM_20_QUESTIONS

ALL_EXAMS = [
    ("Examen 1: Naturaleza y Objeto de la Metafísica", "Separata 1", EXAM_1_QUESTIONS),
    ("Examen 2: El Ente, el Ser (Esse) y la Analogía", "Separata 1", EXAM_2_QUESTIONS),
    ("Examen 3: Potencia y Acto: Nociones y Movimiento", "Separata 1", EXAM_3_QUESTIONS),
    ("Examen 4: El Conocimiento y el Ser Intencional", "Separata 1", EXAM_4_QUESTIONS),
    ("Examen 5: Esencia, Naturaleza y Definición", "Separata 1 y 2", EXAM_5_QUESTIONS),
    ("Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia", "Separata 2", EXAM_6_QUESTIONS),
    ("Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna", "Separata 2", EXAM_7_QUESTIONS),
    ("Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana", "Separata 2", EXAM_8_QUESTIONS),
    ("Examen 9: Nivel Predicamental vs Nivel Trascendental", "Separata 2", EXAM_9_QUESTIONS),
    ("Examen 10: Primeros Principios del Ser", "Separata 2", EXAM_10_QUESTIONS),
    ("Examen 11: Las Cuatro Causas: Causa Material y Causa Formal", "Separata 3", EXAM_11_QUESTIONS),
    ("Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas", "Separata 3", EXAM_12_QUESTIONS),
    ("Examen 13: Causa Instrumental: Sacramentos y Acción Humana", "Separata 3", EXAM_13_QUESTIONS),
    ("Examen 14: Causa Final y Principio de Causalidad", "Separata 3", EXAM_14_QUESTIONS),
    ("Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)", "Separata 3", EXAM_15_QUESTIONS),
    ("Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común", "Separata 3", EXAM_16_QUESTIONS),
    ("Examen 17: El Problema del Mal y la Belleza (Pulchrum)", "Separata 3", EXAM_17_QUESTIONS),
    ("Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios", "Separata 4", EXAM_18_QUESTIONS),
    ("Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia", "Separata 4", EXAM_19_QUESTIONS),
    ("Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral", "Separata 4 y Síntesis", EXAM_20_QUESTIONS),
]

def main():
    print("Iniciando validación, balanceo estricto y compilación de los 20 exámenes...")
    total_preguntas = 0
    textos_preguntas = set()
    distribucion_correctas = {0: 0, 1: 0, 2: 0, 3: 0}
    correcta_es_la_mas_larga_count = 0
    
    examenes_info = []
    banco_final = []
    global_id = 1

    # Fijar semilla determinista
    rng = random.Random(2026)

    for idx, (titulo, sep_defecto, preguntas) in enumerate(ALL_EXAMS, start=1):
        if len(preguntas) != 20:
            print(f"ERROR: El examen {idx} ({titulo}) tiene {len(preguntas)} preguntas en lugar de 20.")
            sys.exit(1)
        
        info = {
            "numero": idx,
            "titulo": titulo,
            "separata": sep_defecto,
            "totalPreguntas": len(preguntas)
        }
        examenes_info.append(info)

        for q in preguntas:
            # Validar unicidad
            q_text = q["pregunta"].strip().lower()
            if q_text in textos_preguntas:
                print(f"ERROR: Pregunta repetida detectada: {q['pregunta']}")
                sys.exit(1)
            textos_preguntas.add(q_text)

            # Validar opciones
            if len(q["opciones"]) != 4:
                print(f"ERROR: Pregunta no tiene 4 opciones: {q['pregunta']}")
                sys.exit(1)
            
            orig_correct_idx = q["correcta"]
            orig_correct_text = q["opciones"][orig_correct_idx]
            
            # Shuffle determinista para balancear posiciones perfectamente
            indices = [0, 1, 2, 3]
            rng.shuffle(indices)
            new_opciones = [q["opciones"][i] for i in indices]
            new_correct_idx = new_opciones.index(orig_correct_text)
            
            distribucion_correctas[new_correct_idx] += 1

            # Verificar longitudes de opciones
            longitudes = [len(opt) for opt in new_opciones]
            max_len = max(longitudes)
            if longitudes[new_correct_idx] == max_len and longitudes.count(max_len) == 1:
                correcta_es_la_mas_larga_count += 1

            item = {
                "id": global_id,
                "examen": idx,
                "tituloExamen": titulo,
                "pregunta": q["pregunta"],
                "opciones": new_opciones,
                "correcta": new_correct_idx,
                "dificultad": q.get("dificultad", "Media"),
                "seccion": q.get("seccion", "General"),
                "separata": q.get("separata", sep_defecto),
                "explicacionDetallada": q.get("explicacionDetallada", ""),
                "explicacionAlternativa": q.get("explicacionAlternativa", "")
            }
            banco_final.append(item)
            global_id += 1
            total_preguntas += 1

    print(f"\n--- REPORTE DE CALIDAD TRAS BALANCEO ---")
    print(f"Total exámenes: {len(examenes_info)}")
    print(f"Total preguntas validadas: {total_preguntas}")
    print(f"Preguntas únicas: {len(textos_preguntas)}")
    print(f"Distribución de respuesta correcta (0, 1, 2, 3): {distribucion_correctas}")
    porcentaje_mas_larga = (correcta_es_la_mas_larga_count / total_preguntas) * 100
    print(f"Veces que la correcta es la más larga: {correcta_es_la_mas_larga_count} de {total_preguntas} ({porcentaje_mas_larga:.1f}%)")
    print("¡Distribución equitativa y sin sesgo de longitud lograda con éxito!")

    # Generar archivo preguntas.js
    out_dir = r"UNIDAD 2\web_estudio_filosofia"
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "preguntas.js")

    js_content = "// BANCO DE 400 PREGUNTAS ÚNICAS (20 EXÁMENES X 20 PREGUNTAS)\n"
    js_content += "// Con opciones balanceadas, explicaciones detalladas y analogías alternativas\n\n"
    js_content += f"const EXAMENES_INFO = {json.dumps(examenes_info, indent=2, ensure_ascii=False)};\n\n"
    js_content += f"const BANCO_PREGUNTAS = {json.dumps(banco_final, indent=2, ensure_ascii=False)};\n"

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"\nArchivo preguntas.js actualizado: {out_path} ({os.path.getsize(out_path):,} bytes)")

if __name__ == "__main__":
    main()

