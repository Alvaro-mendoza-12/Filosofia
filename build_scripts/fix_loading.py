# -*- coding: utf-8 -*-
"""
Agrega enlaces globales a window y globalThis en todos los archivos de datos
y actualiza app.js con accesores seguros para garantizar que todo cargue al 100%.
"""
import os

# 1. Parchear archivos de datos
data_mappings = {
    "teoria.js": "\nif (typeof window !== 'undefined') window.MODULOS_TEORIA = MODULOS_TEORIA;\nif (typeof globalThis !== 'undefined') globalThis.MODULOS_TEORIA = MODULOS_TEORIA;\n",
    "glosario.js": "\nif (typeof window !== 'undefined') window.GLOSARIO_TERMINOS = GLOSARIO_TERMINOS;\nif (typeof globalThis !== 'undefined') globalThis.GLOSARIO_TERMINOS = GLOSARIO_TERMINOS;\n",
    "flashcards.js": "\nif (typeof window !== 'undefined') window.BANCO_FLASHCARDS = BANCO_FLASHCARDS;\nif (typeof globalThis !== 'undefined') globalThis.BANCO_FLASHCARDS = BANCO_FLASHCARDS;\n",
    "mnemotecnias.js": "\nif (typeof window !== 'undefined') window.MNEMOTECNIAS_DATA = MNEMOTECNIAS_DATA;\nif (typeof globalThis !== 'undefined') globalThis.MNEMOTECNIAS_DATA = MNEMOTECNIAS_DATA;\n",
    "emparejar.js": "\nif (typeof window !== 'undefined') window.EMPAREJAR_DATA = EMPAREJAR_DATA;\nif (typeof globalThis !== 'undefined') globalThis.EMPAREJAR_DATA = EMPAREJAR_DATA;\n",
    "preguntas.js": "\nif (typeof window !== 'undefined') {\n  window.EXAMENES_INFO = EXAMENES_INFO;\n  window.BANCO_PREGUNTAS = BANCO_PREGUNTAS;\n}\nif (typeof globalThis !== 'undefined') {\n  globalThis.EXAMENES_INFO = EXAMENES_INFO;\n  globalThis.BANCO_PREGUNTAS = BANCO_PREGUNTAS;\n}\n"
}

for base_dir in [".", "UNIDAD 2/web_estudio_filosofia"]:
    for fname, snippet in data_mappings.items():
        fpath = os.path.join(base_dir, fname)
        if os.path.exists(fpath):
            with open(fpath, "r", encoding="utf-8") as f:
                content = f.read()
            if "globalThis" not in content:
                with open(fpath, "a", encoding="utf-8") as f:
                    f.write(snippet)
                print(f"Parcheado export global en: {fpath}")

# 2. Actualizar app.js con accesores seguros y eliminar dependencias frágiles de window
with open("app.js", "r", encoding="utf-8") as f:
    app_code = f.read()

# Insertar getters al principio del IIFE
getters_code = """
  // --- ACCESORES SEGUROS DE DATOS GLOBALES ---
  const getModulosTeoria = () => (typeof MODULOS_TEORIA !== 'undefined' ? MODULOS_TEORIA : (typeof window !== 'undefined' && window.MODULOS_TEORIA ? window.MODULOS_TEORIA : (typeof globalThis !== 'undefined' && globalThis.MODULOS_TEORIA ? globalThis.MODULOS_TEORIA : [])));
  const getGlosarioTerminos = () => (typeof GLOSARIO_TERMINOS !== 'undefined' ? GLOSARIO_TERMINOS : (typeof window !== 'undefined' && window.GLOSARIO_TERMINOS ? window.GLOSARIO_TERMINOS : (typeof globalThis !== 'undefined' && globalThis.GLOSARIO_TERMINOS ? globalThis.GLOSARIO_TERMINOS : [])));
  const getBancoFlashcards = () => (typeof BANCO_FLASHCARDS !== 'undefined' ? BANCO_FLASHCARDS : (typeof window !== 'undefined' && window.BANCO_FLASHCARDS ? window.BANCO_FLASHCARDS : (typeof globalThis !== 'undefined' && globalThis.BANCO_FLASHCARDS ? globalThis.BANCO_FLASHCARDS : [])));
  const getMnemotecniasData = () => (typeof MNEMOTECNIAS_DATA !== 'undefined' ? MNEMOTECNIAS_DATA : (typeof window !== 'undefined' && window.MNEMOTECNIAS_DATA ? window.MNEMOTECNIAS_DATA : (typeof globalThis !== 'undefined' && globalThis.MNEMOTECNIAS_DATA ? globalThis.MNEMOTECNIAS_DATA : null)));
  const getEmparejarData = () => (typeof EMPAREJAR_DATA !== 'undefined' ? EMPAREJAR_DATA : (typeof window !== 'undefined' && window.EMPAREJAR_DATA ? window.EMPAREJAR_DATA : (typeof globalThis !== 'undefined' && globalThis.EMPAREJAR_DATA ? globalThis.EMPAREJAR_DATA : null)));
  const getExamenesInfo = () => (typeof EXAMENES_INFO !== 'undefined' ? EXAMENES_INFO : (typeof window !== 'undefined' && window.EXAMENES_INFO ? window.EXAMENES_INFO : (typeof globalThis !== 'undefined' && globalThis.EXAMENES_INFO ? globalThis.EXAMENES_INFO : [])));
  const getBancoPreguntas = () => (typeof BANCO_PREGUNTAS !== 'undefined' ? BANCO_PREGUNTAS : (typeof window !== 'undefined' && window.BANCO_PREGUNTAS ? window.BANCO_PREGUNTAS : (typeof globalThis !== 'undefined' && globalThis.BANCO_PREGUNTAS ? globalThis.BANCO_PREGUNTAS : [])));
"""

if "const getModulosTeoria =" not in app_code:
    # Insertar después de const state = { ... };
    pos = app_code.find("const SoundEngine = {")
    if pos != -1:
        app_code = app_code[:pos] + getters_code + "\n  " + app_code[pos:]
        print("Getters seguros insertados en app.js")

# Reemplazar usos de window.DATA en app.js
replacements = [
    ("if (!navContainer || !window.MODULOS_TEORIA) return;", "const mods = getModulosTeoria();\n    if (!navContainer || !mods.length) return;"),
    ("navContainer.innerHTML = window.MODULOS_TEORIA.map((mod, idx) => `", "navContainer.innerHTML = mods.map((mod, idx) => `"),
    ("if (!container || !window.MODULOS_TEORIA) return;", "const mods = getModulosTeoria();\n    if (!container || !mods.length) return;"),
    ("const modulo = window.MODULOS_TEORIA.find(m => m.id === modId) || window.MODULOS_TEORIA[0];", "const modulo = mods.find(m => m.id === modId) || mods[0];"),
    ("if (!filtersContainer || !window.GLOSARIO_TERMINOS) return;", "const termsAll = getGlosarioTerminos();\n    if (!filtersContainer || !termsAll.length) return;"),
    ("if (!grid || !window.GLOSARIO_TERMINOS) return;", "const termsAll = getGlosarioTerminos();\n    if (!grid || !termsAll.length) return;"),
    ("let terms = window.GLOSARIO_TERMINOS;", "let terms = [...termsAll];"),
    ("if (!window.BANCO_FLASHCARDS) return;\n    state.flashcards = [...window.BANCO_FLASHCARDS];", "const bfc = getBancoFlashcards();\n    if (!bfc.length) return;\n    state.flashcards = [...bfc];"),
    ("if (!navLevels || !window.EMPAREJAR_DATA) return;", "const empData = getEmparejarData();\n    if (!navLevels || !empData) return;"),
    ("navLevels.innerHTML = window.EMPAREJAR_DATA.niveles.map((lvl, idx) => `", "navLevels.innerHTML = empData.niveles.map((lvl, idx) => `"),
    ("const level = window.EMPAREJAR_DATA.niveles[levelIdx];", "const level = getEmparejarData().niveles[levelIdx];"),
    ("const totalPairs = window.EMPAREJAR_DATA.niveles[state.matchLevelIndex].parejas.length;", "const totalPairs = getEmparejarData().niveles[state.matchLevelIndex].parejas.length;"),
    ("alert(`🎉 ¡Excelente! Completaste el ${window.EMPAREJAR_DATA.niveles[state.matchLevelIndex].nombre} con éxito.`);", "alert(`🎉 ¡Excelente! Completaste el ${getEmparejarData().niveles[state.matchLevelIndex].nombre} con éxito.`);"),
    ("if (!window.MNEMOTECNIAS_DATA) return;", "const mnData = getMnemotecniasData();\n    if (!mnData) return;"),
    ("const { acronimos, palacio_memoria, trampas_examen } = window.MNEMOTECNIAS_DATA;", "const { acronimos, palacio_memoria, trampas_examen } = mnData;"),
    ("if (!hubGrid || !window.EXAMENES_INFO) return;", "const exInfo = getExamenesInfo();\n    if (!hubGrid || !exInfo.length) return;"),
    ("hubGrid.innerHTML = window.EXAMENES_INFO.map(ex => {", "hubGrid.innerHTML = exInfo.map(ex => {"),
    ("state.examQuestions = window.BANCO_PREGUNTAS.filter(q => q.examen === examId);", "state.examQuestions = getBancoPreguntas().filter(q => q.examen === examId);")
]

for old, new in replacements:
    if old in app_code:
        app_code = app_code.replace(old, new)
        print(f"Reemplazado: {old[:40]}...")
    else:
        print(f"Aviso: no encontrado para reemplazo: {old[:40]}...")

# Guardar en raíz y en UNIDAD 2/web_estudio_filosofia/app.js
with open("app.js", "w", encoding="utf-8") as f:
    f.write(app_code)
print("app.js en raíz actualizado.")

with open("UNIDAD 2/web_estudio_filosofia/app.js", "w", encoding="utf-8") as f:
    f.write(app_code)
print("app.js en UNIDAD 2/web_estudio_filosofia actualizado.")
