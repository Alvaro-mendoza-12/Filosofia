# -*- coding: utf-8 -*-
"""
Construye teoria.js con el texto 100% LITERAL Y VERBATIM de las 4 separatas oficiales de la UNIDAD 2.
"""
import json

with open('extracted_texts/separata1.txt', encoding='utf-8') as f:
    s1 = f.read()

with open('extracted_texts/separata2.txt', encoding='utf-8') as f:
    s2 = f.read()

with open('extracted_texts/separata3.txt', encoding='utf-8') as f:
    s3 = f.read()

with open('extracted_texts/separata4.txt', encoding='utf-8') as f:
    s4 = f.read()

# Helper para cortar texto de forma segura y limpia
def cut(text, start_str, end_str=None):
    s_idx = text.find(start_str)
    if s_idx == -1:
        raise ValueError(f"No se encontró start_str: {start_str[:30]}")
    if end_str:
        e_idx = text.find(end_str, s_idx + len(start_str))
        if e_idx == -1:
            raise ValueError(f"No se encontró end_str: {end_str[:30]}")
        return text[s_idx:e_idx].strip()
    return text[s_idx:].strip()

modulos = [
    {
        "id": "mod-1",
        "numero": 1,
        "titulo": "MÓDULO 1: Naturaleza de la Metafísica y Estructura del Ente (Parte 1)",
        "separata": "1-Separata- Naturaleza de la metafísica y estructura metaficisa del ente parte 1.doc (Joseph De Torre, 1990)",
        "descripcion": "Estudio fundacional de la metafísica como ciencia del ente en cuanto ente, la analogía del ser, las nociones de ens y esse, potencia y acto, el movimiento, el ser intencional y la esencia.",
        "capitulos": [
            {
                "id": "cap-1-1",
                "titulo": "1. La Ciencia del Ente en Cuanto Ente",
                "subtitulo": "Definición, etimología, principios, causas universales y Filosofía Primera",
                "puntosClave": [
                    "Metafísica: Ciencia de los principios y causas del ente en cuanto ente; va más allá de lo sensible hacia el orden inteligible.",
                    "Ciencia en sentido estricto: Conocimiento por causas y, por tanto, cierto, universal y necesario.",
                    "Filosofía Primera: Toda la realidad cae bajo su mira; estudia la totalidad (afecta a todo) y la unidad (todas las cosas coinciden en que son).",
                    "El 'no-ser': Es lo único que queda fuera del alcance de la metafísica."
                ],
                "analogia": "Imagina que la botánica estudia las hojas y la zoología los animales; la metafísica va a la raíz común más profunda y se pregunta qué hace que tanto la hoja como el animal existan en lugar de ser nada.",
                "contenido": cut(s1, "1-INTRODUCCIÒN", "El objeto de la metafísica.")
            },
            {
                "id": "cap-1-2",
                "titulo": "2. El Objeto de la Metafísica y la Inclinación Natural",
                "subtitulo": "Objeto material y formal, inclinación natural del hombre y relación con la fe",
                "puntosClave": [
                    "Objeto material: Todas las cosas (el sujeto-material).",
                    "Objeto formal: El aspecto considerado, a saber, el aspecto del ser (punto de vista del esse).",
                    "Inclinación natural: Los niños al tener uso de razón preguntan ¿qué es esto? y ¿para qué es? porque el objeto natural de la inteligencia es el ser.",
                    "Metafísica y Fe cristiana: La simplicidad y profundidad de la fe sobrenatural se acompaña de la simplicidad y profundidad de la metafísica natural."
                ],
                "analogia": "Un cuadro puede ser examinado por un químico (pigmentos), un historiador (época) o un comerciante (precio); el metafísico lo examina bajo el aspecto más radical: que ese cuadro existe y tiene ser.",
                "contenido": cut(s1, "El objeto de la metafísica.", "El ente es análogo")
            },
            {
                "id": "cap-1-3",
                "titulo": "3. La Analogía del Ente",
                "subtitulo": "Términos unívocos, equívocos y analógicos; primacía de la substancia y accidente",
                "puntosClave": [
                    "Unívoco: Se aplica a muchas cosas siempre en el mismo sentido (ej. 'hombre' dicho de Pedro y Pablo).",
                    "Equívoco: Término con significados completamente distintos (ej. 'sol' como astro rey y como moneda).",
                    "Analógico: Se aplica en parte en el mismo sentido y en parte en sentido diferente, según una proporción (ej. 'sano' para cuerpo, medicina o color).",
                    "El Ente es el más analógico de los términos: Conviene primariamente a la substancia (ser en sí) y secundariamente al accidente (ser en otro)."
                ],
                "analogia": "Decir que una comida es sana y que una persona es sana usa la palabra 'sano' por analogía de proporción: la comida causa la salud y la persona la posee en su cuerpo.",
                "contenido": cut(s1, "El ente es análogo", "2-EL PUNTO DE PARTIDA DEL CAMINO DE LA   METAFÍSICA")
            },
            {
                "id": "cap-1-4",
                "titulo": "4. Ente, Ser (Esse), Esencia y Existencia",
                "subtitulo": "Estructura del ens, la composición de esencia y esse, y distinción con la existencia",
                "puntosClave": [
                    "Ens (Ente): Aquello que posee el acto de ser; compuesto de sujeto (esencia) y acto de ser (esse).",
                    "Esse: Acto de ser; actualidad de las cosas, componente metafísico real, no una cosa abstracta.",
                    "Esencia: Aquello que la cosa es; contrae y limita al acto de ser en los entes creados.",
                    "Existencia vs Esse: Existencia (ex-sistere) es el hecho de ser (resultado), mientras que esse es el principio metafísico radical.",
                    "En Dios: La esencia es el mismo Ser (puro acto de ser sin esencia que lo limite). Sólo Dios es por esencia."
                ],
                "analogia": "El bombillo y la electricidad: la bombilla (esencia) determina qué forma de luz se emite, pero la corriente viva que la hace brillar en la realidad es el esse (acto de ser).",
                "contenido": cut(s1, "2-EL PUNTO DE PARTIDA DEL CAMINO DE LA   METAFÍSICA", "3-POTENCIA Y ACTO.")
            },
            {
                "id": "cap-1-5",
                "titulo": "5. Potencia y Acto",
                "subtitulo": "Simplicidad de los conceptos, experiencia del cambio y principio de no-contradicción",
                "puntosClave": [
                    "Potencia: Aquello que puede ser algo pero todavía no lo es; capacidad real arraigada en el ser.",
                    "Acto: Aquello que es ya en la realidad.",
                    "Movimiento (motus): El paso de la potencia al acto correspondiente.",
                    "No contradicción: El cambio confirma que estar aquí no es lo mismo que estar allí; el marxismo niega este principio al absolutizar el puro devenir."
                ],
                "analogia": "Una semilla de roble: no es un roble en acto, pero tiene la capacidad real (potencia) de llegar a ser un árbol frondoso, capacidad que una piedra jamás tendrá.",
                "contenido": cut(s1, "3-POTENCIA Y ACTO.", "El movimiento como paso de la potencia al acto.")
            },
            {
                "id": "cap-1-6",
                "titulo": "6. El Movimiento y el Ser Intencional",
                "subtitulo": "Definición aristotélica de movimiento, inmaterialidad y niveles de cognición",
                "puntosClave": [
                    "Definición de movimiento (Aristóteles): Acto de un ser en potencia en la medida en que sigue estando en potencia; acto imperfecto.",
                    "Dos tipos de cambio: Substancial (generación y corrupción de substancias) y Accidental (local, cuantitativo o cualitativo/alteración).",
                    "Ser intencional (intendere): La adquisición de formas sensibles de modo inmaterial por el ser vivo sin perder la forma propia.",
                    "Niveles en el hombre: 1. De la ignorancia al hábito de la ciencia; 2. De poseer el hábito a ejercerlo en acto."
                ],
                "analogia": "Cuando ves y conoces un elefante, no te conviertes en elefante ni te aplasta un animal físico; tu entendimiento se apropia inmaterialmente de su forma mediante el ser intencional.",
                "contenido": cut(s1, "El movimiento como paso de la potencia al acto.", "4-LA ESENCIA")
            },
            {
                "id": "cap-1-7",
                "titulo": "7. La Esencia y la Naturaleza",
                "subtitulo": "Esencia como manera de ser, naturaleza como principio de operaciones y determinación",
                "puntosClave": [
                    "Esencia: Aquello que una cosa es, o aquello por lo cual una cosa es lo que es (manera de ser).",
                    "Naturaleza: La esencia considerada como principio, origen o fuente de las operaciones propias de una cosa.",
                    "Determinación de la substancia: Expresa qué tipo de substancia es una realidad.",
                    "Accidentes: En sentido estricto no tienen esencia propia, pues sólo existen en relación con la substancia."
                ],
                "analogia": "La esencia humana hace que seas humano; esa misma esencia, cuando te lleva a razonar, hablar o vivir en sociedad, actúa como naturaleza (principio operativo).",
                "contenido": cut(s1, "4-LA ESENCIA")
            }
        ]
    },
    {
        "id": "mod-2",
        "numero": 2,
        "titulo": "MÓDULO 2: Estructura Metafísica del Ente (Parte 2)",
        "separata": "2-Separata- Estructura metaficisa del  ente parte 2.doc (Joseph De Torre, 1990)",
        "descripcion": "Estudio de la substancia y los accidentes, el hilemorfismo (materia prima y forma substancial), el alma humana y los primeros principios del ser (no-contradicción, identidad, tercero excluido y razón suficiente).",
        "capitulos": [
            {
                "id": "cap-2-1",
                "titulo": "1. Substancia y Accidentes: La Evidencia del Cambio",
                "subtitulo": "Naturaleza, multiplicidad, cambio y la superación de Platón por Aristóteles",
                "puntosClave": [
                    "Evidencia del cambio: La mente se sorprende ante el cambio y descubre 'lo cambiante' (accidente) y 'lo que permanece' (substancia).",
                    "Sin permanencia no hay conocimiento: Platón negó la ciencia del mundo sensible creyendo que todo fluía (sólo opinión / doxa).",
                    "Aristóteles y la ciencia: Al descubrir la substancia permanente, fundamentó la posibilidad del conocimiento científico (episteme) de la naturaleza."
                ],
                "analogia": "Un semáforo que cambia de verde a amarillo y rojo: los colores cambian (accidentes), pero el semáforo físico sigue siendo el mismo objeto permanente (substancia).",
                "contenido": cut(s2, "-SUBSTANCIA Y ACCIDENTES.", "b-La noción de ente conviene primariamente a la substancia.")
            },
            {
                "id": "cap-2-2",
                "titulo": "2. La Noción de Ente Conviene Primariamente a la Substancia",
                "subtitulo": "Definición de substancia, persona humana y los 4 aspectos ontológicos",
                "puntosClave": [
                    "Definición de substancia: Aquello que existe por sí mismo y en sí mismo (ens en sentido estricto).",
                    "Persona: Substancia individual de naturaleza racional (ser que existe por sí mismo con naturaleza racional).",
                    "4 aspectos de la substancia: 1. Sujeto/substrato (sub-stare); 2. Subsiste por sí misma; 3. Posee el esse en sí misma; 4. Satisface plenamente la noción de ens."
                ],
                "analogia": "Tú eres una substancia (un ser humano que existe en sí mismo); tu altura, tu buen humor o tu ropa son accidentes que existen en ti.",
                "contenido": cut(s2, "b-La noción de ente conviene primariamente a la substancia.", "c.\tAccidentes: modos secundarios del ente.")
            },
            {
                "id": "cap-2-3",
                "titulo": "3. Los Accidentes: Modos Secundarios del Ente",
                "subtitulo": "Entes del ente, necesidad de perfeccionamiento y clasificación por predicación",
                "puntosClave": [
                    "Accidentes: Modos secundarios del ente que existen en la substancia ('entes del ente').",
                    "Tres descripciones: Determinaciones multiplicadas en un sujeto, determinaciones mudables de un sujeto permanente, y determinaciones secundarias.",
                    "Perfección accidental: Las substancias creadas son limitadas y necesitan perfeccionarse mediante formas accidentales.",
                    "Predicación: La división de los accidentes surge del modo en que se afirman o niegan de un sujeto en el juicio."
                ],
                "analogia": "El conocimiento de inglés o la habilidad para nadar son accidentes: no caminan solos por la calle, existen como perfecciones adquiridas en una persona.",
                "contenido": cut(s2, "c.\tAccidentes: modos secundarios del ente.", "d-Substancia y accidente se relacionan de tres formas.")
            },
            {
                "id": "cap-2-4",
                "titulo": "4. Triple Relación entre Substancia y Accidente",
                "subtitulo": "Sujeto, potencia a acto, causa a efecto y crítica a los errores modernos",
                "puntosClave": [
                    "Triple relación: 1. Substancia como sujeto que sostiene (dependencia metafísica); 2. Como potencia respecto al acto (los accidentes la perfeccionan); 3. Como causa respecto al efecto.",
                    "Manifestación: El accidente no oculta la substancia, sino que la revela al entendimiento.",
                    "Error moderno: Intentar imaginar la substancia sensiblemente; la substancia es un objeto transensible puramente inteligible (intus-legere)."
                ],
                "analogia": "Intentar ver la substancia con los ojos físicos es tan absurdo como intentar oler una canción con los oídos o medir el peso de un gato con un termómetro.",
                "contenido": cut(s2, "d-Substancia y accidente se relacionan de tres formas.", "MATERIA Y FORMA")
            },
            {
                "id": "cap-2-5",
                "titulo": "5. Materia y Forma: Hilemorfismo y Niveles del Ente",
                "subtitulo": "Determinación e indeterminación, alma humana, nivel predicamental vs trascendental",
                "puntosClave": [
                    "Hilemorfismo: La esencia material se compone de Forma (principio de determinación) y Materia (principio de indeterminación y partes cuantitativas).",
                    "Forma superior a la materia: La materia está en función de la forma (comemos para vivir, no vivimos para comer; lo material sirve a lo espiritual).",
                    "Alma humana: Creada directamente por Dios; forma substancial que no puede ser extraída de la materia.",
                    "Nivel Predicamental vs Trascendental: El predicamental es el de la esencia (10 categorías); el trascendental es el del esse (trasciende las categorías y fundamenta la unidad radical)."
                ],
                "analogia": "Una estatua de bronce: el bronce es la materia (indeterminada, podría ser espada o campana), y la figura del héroe es la forma substancial que hace que sea esa estatua.",
                "contenido": cut(s2, "MATERIA Y FORMA", "Principios del ser")
            },
            {
                "id": "cap-2-6",
                "titulo": "6. El Principio Supremo de No-Contradicción",
                "subtitulo": "Enunciado, génesis en la inteligencia (concepto y juicio) y crítica al marxismo",
                "puntosClave": [
                    "Principio supremo: Es imposible que algo sea y no sea al mismo tiempo en el mismo sujeto y en el mismo sentido.",
                    "Operaciones de la mente: 1. Formar conceptos (la primera noción es 'ente', la segunda 'no-ser', la tercera 'división'); 2. Juzgar (primer juicio: ser no es no-ser).",
                    "Fundamento ontológico: Es imposible porque la realidad es así, no por una mera regla del pensamiento subjetivo.",
                    "Autoevidente e indemostrable: Es el primer principio de toda demostración; negarlo implica usarlo.",
                    "Marxismo: Niega la no-contradicción por su ateísmo intrínseco, sustituyendo el ser por el puro devenir dialéctico."
                ],
                "analogia": "Una puerta no puede estar totalmente cerrada y totalmente abierta al mismo tiempo y bajo el mismo aspecto; pretenderlo choca con la realidad misma.",
                "contenido": cut(s2, "Principios del ser", "Qué es un principio.")
            },
            {
                "id": "cap-2-7",
                "titulo": "7. Los Primeros Principios del Ser",
                "subtitulo": "Definición, propiedades y formulación de los principios de Identidad, Tercero Excluido y Razón Suficiente",
                "puntosClave": [
                    "Definición de principio: Aquello de lo cual procede una cosa (del movimiento, ontológico o lógico).",
                    "Propiedades de los primeros principios: Evidentes (captados de inmediato), Universales (se aplican a todo ente) y Necesarios (absurdo que dejen de valer).",
                    "Principio de Identidad: 'A es necesariamente A' / 'El ser es; el no-ser no es'; expresa la necesidad del ente de ser lo que es.",
                    "Principio del Tercero Excluido: 'Cualquier cosa, o es o no es, no cabe término medio'; no hay opción entre ser y no-ser.",
                    "Principio de Razón Suficiente: 'Todo ente tiene una razón suficiente de su existencia'."
                ],
                "analogia": "En un juicio penal, una persona o disparó o no disparó el arma en ese instante preciso; no existe una tercera opción metafísica intermedia entre haberlo hecho y no haberlo hecho.",
                "contenido": cut(s2, "Qué es un principio.")
            }
        ]
    },
    {
        "id": "mod-3",
        "numero": 3,
        "titulo": "MÓDULO 3: Las Causas y los Trascendentales del Ente",
        "separata": "3-Separata -Las causas y  los trascendentales del ente.doc (Joseph De Torre, 1990)",
        "descripcion": "Estudio exhaustivo de las cuatro causas (material, formal, eficiente, final), la causa ejemplar, la causa instrumental, el principio de causalidad, la refutación de Hume, y las propiedades trascendentales del ente (Unum, Verum, Bonum, Pulchrum) con el problema del mal.",
        "capitulos": [
            {
                "id": "cap-3-1",
                "titulo": "1. Causa Material, Formal y Ejemplar",
                "subtitulo": "Forma intrínseca y extrínseca (ejemplar), niveles de materia y aplicación teológica",
                "puntosClave": [
                    "Ejemplo de la silla: Madera = causa material; diseño = causa formal (en la mente del carpintero y dentro de la silla).",
                    "Causa ejemplar: Forma extrínseca al efecto; el modelo o diseño previo en la mente del artífice.",
                    "Causa material: A nivel accidental es substancia en acto; a nivel substancial es materia prima (pura potencia).",
                    "Aplicación teológica: En un acto de virtud sobrenatural, la causa material es el hombre y la causa formal es la gracia divina.",
                    "Ángeles: Forma pura sin materia; su única potencia es respecto al acto de ser (esse recibido)."
                ],
                "analogia": "Un arquitecto diseña los planos de una catedral: el plano en su mente es la causa ejemplar; los sillares de piedra son la causa material; la estructura gótica construida es la causa formal intrínseca.",
                "contenido": cut(s3, "Las causas del ente", "La causa eficiente: creación y causalidad.")
            },
            {
                "id": "cap-3-2",
                "titulo": "2. Causa Eficiente: Creación y Causas Segundas",
                "subtitulo": "Diferencia entre creación y transformación, Causa Primera y libertad de las criaturas",
                "puntosClave": [
                    "Causa eficiente (agente): Lo que hace que algo sea o devenga real.",
                    "Creación vs Transformación: La creación es la producción total de esse (exclusiva de Dios como Causa Primera); las criaturas son causas segundas que transforman el ser ya existente (producen el fieri).",
                    "Causas reales: Las criaturas causan realmente de modo participado; negar su causalidad destruiría la libertad y la responsabilidad moral.",
                    "Modus operandi sequitur modum essendi: Causas necesarias actúan con necesidad; causas libres (hombres, ángeles, Dios) actúan libremente."
                ],
                "analogia": "Un escultor no crea el mármol de la nada; toma un bloque de piedra preexistente y lo transforma labrando la figura de Moisés (causa segunda por transformación).",
                "contenido": cut(s3, "La causa eficiente: creación y causalidad.", "La causa instrumental.")
            },
            {
                "id": "cap-3-3",
                "titulo": "3. La Causa Instrumental",
                "subtitulo": "Definición, instrumentos unidos y separados, sacramentos, acción propia e instrumental",
                "puntosClave": [
                    "Causa instrumental: Aquella que actúa no sólo en virtud de su propia forma, sino movida por el agente principal.",
                    "Instrumento unido vs separado: La mano es instrumento unido; la pluma es instrumento separado.",
                    "Doctrina sacramental: Dios es Causa Principal; la humanidad de Cristo es instrumento unido; el sacramento es instrumento separado; la gracia es el efecto y causa formal.",
                    "Acción propia e instrumental: La pluma escribe un poema por el poder del escritor (acción instrumental), pero lo hace conforme a su propia capacidad de trazar tinta (acción propia)."
                ],
                "analogia": "Un cirujano salva una vida usando un bisturí: el bisturí es causa instrumental separada; por sí solo no sabe operar, pero su filo permite al cirujano ejecutar la incisión.",
                "contenido": cut(s3, "La causa instrumental.", "La causa final: causa de todas las causas")
            },
            {
                "id": "cap-3-4",
                "titulo": "4. La Causa Final: Causa de Todas las Causas",
                "subtitulo": "Causa causarum, primacía en la intención, finalidad natural y orden cósmico",
                "puntosClave": [
                    "Causa final: Motiva a la causa eficiente para actuar; es la causa de todas las causas (causa causarum).",
                    "Primera en la intención, última en la ejecución: Pone en marcha todo el dinamismo causal.",
                    "Causalidad recíproca: La materia recibe la forma, la forma determina la materia, la eficiente las une, y la final mueve a la eficiente.",
                    "Finalidad en la naturaleza: Todo actúa por un fin (consciente en inteligentes, inconsciente en seres irracionales). 'Orden' es la disposición de las cosas respecto a un fin (Cosmos vs Caos)."
                ],
                "analogia": "Decides estudiar medicina: graduarte como médico es la causa final; es lo primero que concebiste en tu mente y lo último que lograrás tras años de esfuerzo, pero fue el fin lo que motivó todo tu estudio.",
                "contenido": cut(s3, "La causa final: causa de todas las causas", "Importancia del principio de causalidad.")
            },
            {
                "id": "cap-3-5",
                "titulo": "5. El Principio de Causalidad y Refutación de David Hume",
                "subtitulo": "Formulaciones tomistas, Ipsum Esse Subsistens y falacia del post hoc ergo propter hoc",
                "puntosClave": [
                    "Principio de causalidad: 'Lo que llega a ser movido, es movido por otro'.",
                    "Formulación tomista profunda: Todo lo que existe por participación es causado por lo que existe por esencia (Ipsum Esse Subsistens = Dios).",
                    "Ataque de Hume: Redujo la causalidad a una mera costumbre sensible de ver que a un fenómeno X le sigue habitualmente Y.",
                    "Refutación a Hume: Confundió sucesión temporal (post hoc) con producción causal (propter hoc). La noche sigue al día, pero el día no causa la noche; la inteligencia capta la dependencia ontológica real."
                ],
                "analogia": "El canto del gallo ocurre invariablemente antes de que salga el sol todos los días (sucesión temporal), pero sería absurdo afirmar que el gallo causa la salida del sol.",
                "contenido": cut(s3, "Importancia del principio de causalidad.", "Propiedades trascendentales del ente")
            },
            {
                "id": "cap-3-6",
                "titulo": "6. Las Propiedades Trascendentales del Ente",
                "subtitulo": "Nivel predicamental vs trascendental, y descubrimiento experiencial de las propiedades",
                "puntosClave": [
                    "Trascendental: Lo referente al esse o al ens como sujeto de esse; trasciende las diez categorías predicamentales.",
                    "Propiedad: Lo que se sigue necesariamente del sujeto en tanto que ente (ens inquantum ens).",
                    "Descubrimiento por experiencia: Al mirar la realidad (res), vemos que cada cosa es indivisa (Unum), inteligible a la mente (Verum) y apetecible (Bonum); su conjunción radiante es la belleza (Pulchrum)."
                ],
                "analogia": "El color rojo es un accidente que pertenece sólo a ciertas cosas; en cambio, ser uno, verdadero y bueno pertenece a toda cosa existente simplemente por el hecho de tener ser.",
                "contenido": cut(s3, "Propiedades trascendentales del ente", "c. La unidad del ente.")
            },
            {
                "id": "cap-3-7",
                "titulo": "7. La Unidad del Ente (Unum)",
                "subtitulo": "Negación de división, grados de unidad: unidad de simplicidad vs de composición",
                "puntosClave": [
                    "Unum: Negación de la división en la cosa; fidelidad al propio ser (conservar el ser es conservar la unidad).",
                    "Unidad de simplicidad: Máxima unidad, propia de Dios (sin partes de ninguna clase).",
                    "Unidad de composición: Propia de entes compuestos; grados: mesa < río < flor < animal < hombre < ángel < Dios.",
                    "Agregados: Mínima unidad, sea por naturaleza (nube, montaña) o por obra humana (casa, familia, ejército)."
                ],
                "analogia": "Un montón de ladrillos sueltos tiene una unidad mínima de agregado; un perro vivo tiene una unidad biológica mucho más profunda; Dios tiene la unidad absoluta de simplicidad sin composición alguna.",
                "contenido": cut(s3, "c. La unidad del ente.", "d. La verdad del ente.")
            },
            {
                "id": "cap-3-8",
                "titulo": "8. La Verdad del Ente (Verum)",
                "subtitulo": "Conformidad con la mente, luz del esse, primacía de la realidad sobre el cognoscente",
                "puntosClave": [
                    "Verdad: Conformidad de la mente con la realidad; la realidad causa la verdad en la inteligencia.",
                    "Fundamento en el esse: El acto de ser es la luz de inteligibilidad de las cosas; más esse implica mayor verdad.",
                    "Crítica al antropocentrismo moderno: Es un error metafísico reducir el ser a ser-conocido; la mente humana debe ajustarse al ente y no al revés.",
                    "Mente divina: Causa, norma y medida de todas las cosas. La verdad creada depende de Dios."
                ],
                "analogia": "Un billete auténtico es 'verdadero' porque se conforma con el cuño oficial de la casa de moneda; de igual modo, las cosas son verdaderas porque responden a la idea creadora en la mente de Dios.",
                "contenido": cut(s3, "d. La verdad del ente.", "e. La bondad del ente.")
            },
            {
                "id": "cap-3-9",
                "titulo": "9. La Bondad del Ente (Bonum)",
                "subtitulo": "Aquello que todas las cosas desean, perfección del esse y comunicación difusiva",
                "puntosClave": [
                    "Definición tomista: 'Bien es aquello que todas las cosas desean'; el fin hacia el cual tiende un agente.",
                    "Bondad y Esse: La bondad se funda en el acto de ser; hace al ente más ente.",
                    "Bonum est diffusivum sui: El bien es autoexpansivo, tiende a comunicarse por sobreabundancia (propio de la bondad divina).",
                    "Dios vs criaturas: Dios es bueno por esencia; las criaturas son buenas por participación.",
                    "Pluralidad cósmica: El universo entero representa la bondad de Dios mejor que una sola criatura aislada."
                ],
                "analogia": "Una fogata brillante calienta espontáneamente a quienes la rodean por sobreabundancia de calor; así la bondad divina se difunde en la creación sin perder nada de su ser.",
                "contenido": cut(s3, "e. La bondad del ente.", "f.  El bien común: ley y justicia.")
            },
            {
                "id": "cap-3-10",
                "titulo": "10. El Bien Común, Ley y Justicia",
                "subtitulo": "Bien absoluto vs bien de orden, bien común trascendente e inmanente, bases de la ética social",
                "puntosClave": [
                    "Bien de orden: El orden universal donde todas las cosas están dirigidas a su perfección y a Dios.",
                    "Bien común trascendente: Dios mismo, fin último de todas las cosas y de la sociedad humana.",
                    "Bien común inmanente: La adecuada organización social para que cada persona alcance su fin último.",
                    "Ley y justicia: La ley dirige al hombre al bien común evitando la tiranía; la justicia es el ordenamiento legal donde derechos y deberes se respetan fundados en Dios."
                ],
                "analogia": "En una orquesta, cada músico toca su instrumento (bien individual), pero la armonía de la sinfonía entera (bien común de orden) supera a cada instrumento y eleva a todos los oyentes.",
                "contenido": cut(s3, "f.  El bien común: ley y justicia.", "g. El mal como ausencia de bien.")
            },
            {
                "id": "cap-3-11",
                "titulo": "11. El Mal como Ausencia de Bien (Privatio Boni)",
                "subtitulo": "Naturaleza accidental del mal, mal físico vs mal moral (pecado) y respuesta ética",
                "puntosClave": [
                    "Naturaleza del mal: No es una substancia positiva; es la ausencia (privación) de un bien debido en una substancia.",
                    "Ser es mejor que no ser: Todo mal se da en un sujeto bueno en cuanto tiene ser; 'más vale ser con sufrimiento que no ser en absoluto'.",
                    "Vencer el mal con el bien: Combatir el mal con el mal sólo lo empeora; se vence haciendo cosas mejores.",
                    "Mal físico vs Mal moral: El mal físico (enfermedad, ceguera) es relativo; el mal absoluto y real es el mal moral (pecado), violación libre y consciente de la ley de Dios."
                ],
                "analogia": "La oscuridad no es una entidad física producida por 'focos de sombra'; es simplemente la ausencia de luz. La ceguera no es un órgano, es la privación de la vista en un ojo.",
                "contenido": cut(s3, "g. El mal como ausencia de bien.", "h. La belleza del ente.")
            },
            {
                "id": "cap-3-12",
                "titulo": "12. La Belleza del Ente (Pulchrum)",
                "subtitulo": "Síntesis de trascendentales, tres cualidades estéticas y la Belleza Suprema en Dios",
                "puntosClave": [
                    "Belleza: Síntesis de unidad, verdad y bien percibida por los sentidos superiores (vista y oído) y reconocida por el entendimiento.",
                    "Tres cualidades de la belleza: 1. Armonía (unidad en la diversidad); 2. Plenitud o perfección (sin partes faltantes); 3. Claridad o brillantez de inteligibilidad.",
                    "Belleza en Dios: Máxima armonía (unidad con diversidad de perfecciones), máxima plenitud (puro acto de ser) y máxima inteligibilidad.",
                    "Amor y visión: Dios deslumbra la inteligencia; 'mi amor es mi ojo' (Santo Tomás)."
                ],
                "analogia": "Una catedral majestuosa: admiras la proporción de sus arcos (armonía), que no le falten torres (integridad/plenitud) y cómo la luz baña sus vitrales (claridad resplandeciente).",
                "contenido": cut(s3, "h. La belleza del ente.")
            }
        ]
    },
    {
        "id": "mod-4",
        "numero": 4,
        "titulo": "MÓDULO 4: Teología Natural, Existencia de Dios y las Vías Tomistas",
        "separata": "4-Separata sobre la existencia de Dios.pdf (Capítulos 21 y 22 - Joseph De Torre, 1990)",
        "descripcion": "Estudio de la teología natural como cima de la metafísica, el conocimiento natural y sobrenatural de Dios, crítica al agnosticismo y al ateísmo, el principio de inmanencia moderno, y las vías tomistas con desarrollo de la primera vía del movimiento.",
        "capitulos": [
            {
                "id": "cap-4-1",
                "titulo": "1. El Conocimiento Natural y Sobrenatural de Dios",
                "subtitulo": "Cima de la metafísica, conocimiento espontáneo vs científico, y los tres lúmenes",
                "puntosClave": [
                    "Teología natural: Cima y coronación de la metafísica; conoce la Causa Primera y Fin Último a la luz natural de la razón.",
                    "Conocimiento espontáneo vs científico: El espontáneo (sentido común) conoce que Dios es; el científico (metafísico) conoce el porqué mediante causas.",
                    "Tres luces (lúmenes): 1. Luz de la razón (lumen rationis - natural); 2. Luz de la fe (lumen fidei - sobrenatural); 3. Luz de la gloria / visión beatífica (lumen gloriae - sobrenatural suprema).",
                    "Fin del hombre: Conocer y amar a Dios; la vida es un don de Dios ('ser es mejor que no ser')."
                ],
                "analogia": "Ver una montaña desde lejos a la luz del atardecer (luz de la razón), verla con binoculares claros (luz de la fe), o estar en la cima contemplándolo todo a pleno mediodía (visión beatífica de la gloria).",
                "contenido": cut(s4, "a. El hombre puede conocer a Dios: conocimiento natural y sobrenatural", "b. La teología natural, cima de la metafísica")
            },
            {
                "id": "cap-4-2",
                "titulo": "2. La Teología Natural: Cima de la Metafísica",
                "subtitulo": "Objeto material y formal, Ipsum Esse Subsistens y su papel de trampolín hacia la fe",
                "puntosClave": [
                    "Objeto de la teología natural: Material = Dios; Formal = Dios en cuanto Ente y Causa Primera de todo ente.",
                    "Lumen: Razón natural mediante el método metafísico (observación sensible -> principios inteligibles -> deducción).",
                    "Teología natural vs Sobrenatural: La natural estudia a Dios como Ente por la razón; la sobrenatural estudia a Dios en Sí Mismo (sub ratione deitatis) por la fe.",
                    "Trampolín: La teología natural prepara el camino racional para acoger los misterios de la revelación divina."
                ],
                "analogia": "La teología natural es la rampa de despegue construida con la más fina ingeniería de la razón humana; la teología sobrenatural es el vuelo divino guiado por la fe.",
                "contenido": cut(s4, "b. La teología natural, cima de la metafísica", "c. La filosofía no puede ignorar a Dios")
            },
            {
                "id": "cap-4-3",
                "titulo": "3. La Filosofía no Puede Ignorar a Dios",
                "subtitulo": "Centralidad del problema de Dios en el pensamiento y orientación del intelecto al infinito",
                "puntosClave": [
                    "Centralidad ineludible: 'Dime lo que este filósofo dice de Dios, y te diré el resto de su filosofía'.",
                    "Orientación al infinito: La mente y la voluntad humanas están intrínsecamente orientadas a lo infinito, por lo que toda filosofía afronta a Dios.",
                    "Dependencia ontológica: Todo el universo depende de Dios, quien otorga el significado último a la realidad."
                ],
                "analogia": "Dios en un sistema filosófico es como la clave de sol en una partitura musical: según dónde se coloque, cambia el tono y sentido de todas las demás notas.",
                "contenido": cut(s4, "c. La filosofía no puede ignorar a Dios", "d. La razón se orienta hacia Dios")
            },
            {
                "id": "cap-4-4",
                "titulo": "4. La Razón se Orienta Hacia Dios",
                "subtitulo": "Conocimiento espontáneo universal en todos los pueblos y su elevación filosófica",
                "puntosClave": [
                    "Universalidad de la religión: Ningún pueblo carece de sentido de lo divino o de una instancia superior ante la cual ser responsable.",
                    "No es instintivo ciego: Implica un razonamiento implícito elemental, pues no vemos a Dios con los ojos.",
                    "Labor de la filosofía: Toma ese conocimiento espontáneo y lo hace riguroso y explícito (paso del mundo como efecto a Dios como Causa)."
                ],
                "analogia": "Cualquier persona que ve huellas frescas en la arena de una isla desierta deduce espontáneamente que alguien caminó por allí; el metafísico convierte esa intuición en una prueba concluyente.",
                "contenido": cut(s4, "d. La razón se orienta hacia Dios", "e. La razón no es el único factor en nuestro conocimiento de Dios")
            },
            {
                "id": "cap-4-5",
                "titulo": "5. Disposición Moral y la Voluntad ante Dios",
                "subtitulo": "Influencia de la voluntad, el egoísmo y la naturaleza de las pruebas a posteriori",
                "puntosClave": [
                    "No es sólo tarea intelectual: La aceptación de Dios compromete la moral y la conducta humana.",
                    "Influencia de la voluntad: La buena voluntad acoge la verdad; el egoísmo o soberbia busca objeciones para no someterse a Alguien supremo.",
                    "Demostración a posteriori: De los efectos sensibles (lo posterior) a la Causa Primera (lo anterior)."
                ],
                "analogia": "Un deudor que no quiere pagar finge dudar de la legitimidad de su contrato no por un fallo en el texto, sino porque su voluntad se resiste a desembolsar el dinero.",
                "contenido": cut(s4, "e. La razón no es el único factor en nuestro conocimiento de Dios", "f. El agnosticismo no es razonable")
            },
            {
                "id": "cap-4-6",
                "titulo": "6. El Agnosticismo no es Razonable",
                "subtitulo": "Falsa humildad intelectual, dogma del Concilio Vaticano I y la pregunta del por qué",
                "puntosClave": [
                    "Agnosticismo: Suspensión del juicio ('no podemos saber si Dios existe'), disfrazada de falsa humildad.",
                    "Verdadera humildad: Someterse a la evidencia de la verdad; el agnosticismo cae en escepticismo soberbio.",
                    "Error empirista: Exigir 'ver o tocar' a Dios; Dios es puro espíritu, sólo captable por la inteligencia como Causa de lo sensible.",
                    "Pregunta clave: La ciencia pregunta ¿cómo es el mundo?; la metafísica pregunta ¿por qué hay un universo?",
                    "Dogma católico (Vaticano I, 1869): Es dogma de fe que Dios puede ser conocido con certeza por la luz de la razón natural a partir de las criaturas."
                ],
                "analogia": "Negar que exista el viento o la gravedad porque no puedes 'verlos con tus ojos', ignorando las ramas que se mueven o los cuerpos que caen, es la trampa del agnóstico.",
                "contenido": cut(s4, "f. El agnosticismo no es razonable", "g. Importancia de la demostración racional de la existencia de Dios")
            },
            {
                "id": "cap-4-7",
                "titulo": "7. Importancia de la Demostración Racional para el Cristiano",
                "subtitulo": "De la fe inicial aprendida al robustecimiento racional y diálogo apologético",
                "puntosClave": [
                    "Madurez del creyente: El cristiano suele comenzar creyendo por fe recibida en la familia o catecismo; la demostración racional robustece su fe haciéndola razonable.",
                    "Diálogo con los demás: Permite mostrar a los no creyentes la verdad de Dios mediante la razón común.",
                    "Correlación fe-razón: Ambas proceden de la misma fuente divina y se iluminan mutuamente."
                ],
                "analogia": "Un niño cree que la tierra es redonda porque se lo dijo su maestra; al crecer y estudiar astronomía, comprueba las ecuaciones matemáticas por sí mismo y su certeza se hace inquebrantable.",
                "contenido": cut(s4, "g. Importancia de la demostración racional de la existencia de Dios", "h. Límites del conocimiento humano de Dios")
            },
            {
                "id": "cap-4-8",
                "titulo": "8. Límites del Conocimiento Humano de Dios",
                "subtitulo": "Dios es incomprensible pero no incognoscible; afirmación, negación y eminencia",
                "puntosClave": [
                    "Conocimiento verdadero pero imperfecto: Desproporción entre la mente finita y el Dios infinito.",
                    "Incomprensible vs Incognoscible: Incomprensible significa que nunca podremos agotar Su misterio; no significa que sea incognoscible (es plenitud de inteligibilidad).",
                    "Vía de atribución: 1. Conocer a Dios como Causa; 2. Atribuirle en grado infinito las perfecciones puras creadas, excluyendo toda imperfección material."
                ],
                "analogia": "Puedes beber agua del océano y saciar tu sed de verdad (es cognoscible), aunque jamás puedas beberte el océano entero de una sola vez (es incomprensible).",
                "contenido": cut(s4, "h. Límites del conocimiento humano de Dios", "i. El problema del ateísmo")
            },
            {
                "id": "cap-4-9",
                "titulo": "9. El Problema del Ateísmo",
                "subtitulo": "Ateísmo práctico vs teórico; raíz moral y psicológica de la negación de Dios",
                "puntosClave": [
                    "Posibilidad del error: El proceso de razonamiento no es directo ni infalible; intervienen factores morales y afectivos.",
                    "Ateísmo práctico: Ignorar a Dios en la conducta diaria viviendo como si no existiera (mucho más común).",
                    "Ateísmo teórico: Afirmar explícitamente que Dios no existe usando argumentos doctrinales.",
                    "Raíz moral: Como no se puede demostrar la no-existencia de Dios, para ser ateo 'hay que querer serlo' (no querer que Dios exista para no someterse a Sus leyes)."
                ],
                "analogia": "El avestruz que entierra la cabeza en la arena para no ver al león no hace desaparecer al león; el ateo práctico vive ignorando a Dios para no incomodar su estilo de vida.",
                "contenido": cut(s4, "i. El problema del ateísmo", "j. El principio de inmanencia")
            },
            {
                "id": "cap-4-10",
                "titulo": "10. El Principio de Inmanencia y el Falso Humanismo",
                "subtitulo": "Giro cartesiano, subjetivismo moderno, degradación del hombre sin Dios (Marx, Nietzsche, Sartre)",
                "puntosClave": [
                    "Principio de Inmanencia: Nace con Descartes (s. XVII); el pensamiento humano se coloca como previo al ser (la realidad depende de la conciencia).",
                    "Consecuencia atea: Si el hombre se cree creador del ser, Dios es desplazado.",
                    "Falso humanismo: Prometieron que 'desplazando a Dios el hombre sería libre y viviría' (Feuerbach, Marx, Nietzsche, Sartre).",
                    "Trágico resultado histórico: Sin Dios, el hombre no fue ennoblecido sino degradado a engranaje económico, masacres, campos de concentración y abortos masivos; 'si Dios no existe, triunfa la ley de la selva'."
                ],
                "analogia": "Un avión que corta contacto con la torre de control creyendo que así es 'totalmente autónomo' termina estrellándose sin rumbo; así termina el humanismo ateo sin Dios.",
                "contenido": cut(s4, "j. El principio de inmanencia", "CAPITULO 22: Vías para la demostración de la existencia de Dios")
            },
            {
                "id": "cap-4-11",
                "titulo": "11. Vías para la Demostración de Dios: Elucidación",
                "subtitulo": "¿Es evidente la proposición 'Dios existe'? Demostración a posteriori y síntesis tomista",
                "puntosClave": [
                    "No es evidente para nosotros: Si fuera autoevidente, no habría ateos; el sujeto y predicado no son conocidos de forma directa e inmediata.",
                    "Verdadera pero demostrable: Requiere demostración a posteriori (del efecto observable a la causa invisible).",
                    "Santo Tomás (Summa Theologiae): Rechaza pruebas a priori (como la de San Anselmo) y selecciona cinco vías a posteriori basadas en acto, potencia y causalidad."
                ],
                "analogia": "Que una habitación está a 20°C no es evidente a simple vista; necesitas un termómetro (prueba a posteriori) para verificar con rigor la verdad de la afirmación.",
                "contenido": cut(s4, "CAPITULO 22: Vías para la demostración de la existencia de Dios", "b. La primera vía: el movimiento")
            },
            {
                "id": "cap-4-12",
                "titulo": "12. La Primera Vía: El Movimiento",
                "subtitulo": "Punto de partida observable, definición de movimiento como acto imperfecto y el Primer Motor",
                "puntosClave": [
                    "Punto de partida: El hecho indudable del cambio y movimiento en el mundo sensible.",
                    "Definición de movimiento: 'Acto imperfecto'; acto de un ser en potencia en cuanto está en potencia hacia un acto ulterior.",
                    "Principio metafísico: Todo lo que se mueve es movido por otro; nada pasa de la potencia al acto sino por un ser que ya está en acto.",
                    "Imposibilidad del regreso al infinito en motores subordinados: Exige llegar a un Primer Motor Inmóvil que sea Acto Puro sin potencia alguna, al cual todos llaman Dios."
                ],
                "analogia": "Un palo mueve una piedra, el brazo mueve el palo, el músculo mueve el brazo; si quitas el principio primero que mueve con energía propia (la persona viva), ningún eslabón intermedio se moverá jamás.",
                "contenido": cut(s4, "b. La primera vía: el movimiento")
            }
        ]
    }
]

# Guardar en UNIDAD 2/web_estudio_filosofia/teoria.js
js_content = "// TEORIA COMPLETA ESTRUCTURADA - UNIDAD 2 FILOSOFIA USAT\n"
js_content += "// Texto 100% literal y verbatim extraido de las 4 separatas oficiales (Joseph De Torre, 1990)\n\n"
js_content += "const MODULOS_TEORIA = " + json.dumps(modulos, ensure_ascii=False, indent=2) + ";\n"

with open('UNIDAD 2/web_estudio_filosofia/teoria.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"teoria.js generado exitosamente con {len(modulos)} módulos y {sum(len(m['capitulos']) for m in modulos)} capítulos literales.")
