# -*- coding: utf-8 -*-
"""
Reorganiza el repositorio para que la raíz contenga EXCLUSIVAMENTE
la web interactiva de la UNIDAD 2, y archiva los archivos antiguos de la Unidad 1.
"""
import os
import shutil

root_dir = "d:/USAT/SIGLO 3 - 2026 - II/Filosofia"
u1_dir = os.path.join(root_dir, "UNIDAD 1 (Archivado)")
u2_web_dir = os.path.join(root_dir, "UNIDAD 2/web_estudio_filosofia")

os.makedirs(u1_dir, exist_ok=True)

# Archivos de la Unidad 1 que deben moverse a UNIDAD 1 (Archivado)
u1_files = [
    "data.js",
    "style.css",
    "extract_pdf.js",
    "extract.js",
    "extracted_content.txt",
    "Genara Castillo - Introduccion a la Filosofia (1) (1).pdf",
    "Genara Castillo - Introduccion a la Filosofia (1).pdf",
    "Genara Castillo - Introduccion a la Filosofia 13-19.pdf",
    "IMPORTANCIA DE LA  FILOSOFÍA (1).docx",
    "La admiración (1).pdf",
    "LISTA DE LIBROS PARA CADA SESIÓN-UNIDAD I-FILOSOFIA.docx",
    "SEPARATA-LA FILOSOFIA.docx",
    "SEPARATA-ORIGEN DE LA FILOSOFÍA.doc",
    "SESION 1-PRESENTACIÓN DE SILABO-FILO.pptx",
    "SESION 2-FILO.pptx",
    "SESION 3-FILO.pptx",
    "SESION 4-FILO.pptx"
]

for fname in u1_files:
    src = os.path.join(root_dir, fname)
    dst = os.path.join(u1_dir, fname)
    if os.path.exists(src):
        shutil.move(src, dst)
        print(f"Movido a Unidad 1: {fname}")

# Si hay un app.js viejo en la raíz, moverlo antes de sobreescribir
old_app_js = os.path.join(root_dir, "app.js")
if os.path.exists(old_app_js):
    # Verificar si es el de U1
    with open(old_app_js, encoding='utf-8', errors='ignore') as f:
        content = f.read(500)
    if "FILOSOFÍA I - PREPARACIÓN" in content or "data.js" in content or "filo_history" in content:
        shutil.move(old_app_js, os.path.join(u1_dir, "app.js"))
        print("Movido app.js de U1 a archivado")

# Archivos de la web de UNIDAD 2 a copiar a la RAÍZ del repositorio
u2_web_files = [
    "index.html",
    "styles.css",
    "app.js",
    "teoria.js",
    "glosario.js",
    "flashcards.js",
    "mnemotecnias.js",
    "emparejar.js",
    "preguntas.js"
]

for fname in u2_web_files:
    src = os.path.join(u2_web_dir, fname)
    dst = os.path.join(root_dir, fname)
    shutil.copy2(src, dst)
    print(f"Copiado a la raíz: {fname}")

print("\nReorganización completada con éxito.")
