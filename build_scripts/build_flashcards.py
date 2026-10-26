# -*- coding: utf-8 -*-
"""
Generador de flashcards.js con más de 60 tarjetas de memoria interactivas
"""
import json
import os

FLASHCARDS = [
    # Separata 1
    {
        "id": "fc-1",
        "separata": "Separata 1",
        "categoria": "Metafísica Fundamental",
        "frente": "¿Cuál es la definición clásica y el objeto formal de la Metafísica?",
        "dorso": "Definición: Ciencia del ente en cuanto ente.\nObjeto Formal: El aspecto de 'ser' bajo el cual se estudian todas las cosas.",
        "mnemotecnia": "REGLA: Material = TODAS las cosas; Formal = en cuanto son (su SER)."
    },
    {
        "id": "fc-2",
        "separata": "Separata 1",
        "categoria": "Metafísica Fundamental",
        "frente": "¿Por qué la metafísica es llamada 'Filosofía Primera'?",
        "dorso": "Porque toda realidad cae bajo su mira, y estudia los principios y causas más universales y primeros de todo lo existente.",
        "mnemotecnia": "FILOSOFÍA PRIMERA = Abarca todo, busca las causas más altas."
    },
    {
        "id": "fc-3",
        "separata": "Separata 1",
        "categoria": "Metafísica Fundamental",
        "frente": "¿Qué es lo único que se encuentra fuera del alcance de la metafísica?",
        "dorso": "El no-ser absoluto (la nada). Todo lo real posee ser y cae bajo la metafísica.",
        "mnemotecnia": "FUERA DEL SER = Solo la pura nada."
    },
    {
        "id": "fc-4",
        "separata": "Separata 1",
        "categoria": "La Analogía del Ente",
        "frente": "Diferencia entre término Unívoco, Equívoco y Analógico.",
        "dorso": "- Unívoco: Mismo sentido siempre (ej. 'hombre' en Pedro y Pablo).\n- Equívoco: Sentidos completamente distintos (ej. 'sol' como astro y moneda).\n- Analógico: En parte igual y en parte distinto según proporción (ej. 'sano', 'ente').",
        "mnemotecnia": "TRIÁNGULO LÓGICO: Unívoco = 100% igual; Equívoco = 0% igual; Analógico = proporción semejante."
    },
    {
        "id": "fc-5",
        "separata": "Separata 1",
        "categoria": "La Analogía del Ente",
        "frente": "¿Cuáles son las dos categorías supremas del ente?",
        "dorso": "Substancia (ser en sí y por sí, lo permanente) y Accidente (ser en otro, lo mudable).",
        "mnemotecnia": "PAREJA ONTOLÓGICA: Substancia = sustantivo (en sí); Accidente = adjetivo (en otro)."
    },
    {
        "id": "fc-6",
        "separata": "Separata 1",
        "categoria": "Estructura del Ente",
        "frente": "Diferencia entre 'Ens' y 'Esse'.",
        "dorso": "- Ens: El ente, el sujeto que posee el acto de ser (participio).\n- Esse: El acto de ser fontal por el cual el ente existe (verbo).",
        "mnemotecnia": "Ens = el corredor; Esse = el acto de correr."
    },
    {
        "id": "fc-7",
        "separata": "Separata 1",
        "categoria": "Estructura del Ente",
        "frente": "Diferencia metafísica entre 'Esse' (ser) y 'Existencia'.",
        "dorso": "- Esse: El principio constitutivo fontal y activo.\n- Existir: El hecho resultante (factum, ex-sistere) de poseer esse.",
        "mnemotecnia": "Esse = la causa o principio; Existencia = el resultado de estar ya ahí."
    },
    {
        "id": "fc-8",
        "separata": "Separata 1",
        "categoria": "Teología Natural",
        "frente": "¿Cuál es la Esencia de Dios?",
        "dorso": "Ser (Ipsum Esse Subsistens). En Dios no hay esencia limitante: su misma Esencia es existir.",
        "mnemotecnia": "DIOS = Puro Acto de Ser sin envase limitante."
    },
    {
        "id": "fc-9",
        "separata": "Separata 1",
        "categoria": "Dinamismo del Ente",
        "frente": "¿Cómo define Aristóteles el Movimiento (motus)?",
        "dorso": "'El acto de un ser en potencia en la medida en que sigue estando en potencia'. Es un acto imperfecto.",
        "mnemotecnia": "MOVIMIENTO = Ya salió de la potencia pero aún no llegó al acto final."
    },
    {
        "id": "fc-10",
        "separata": "Separata 1",
        "categoria": "Dinamismo del Ente",
        "frente": "Diferencia entre Cambio Sustancial y Cambio Accidental.",
        "dorso": "- Sustancial: Una substancia se corrompe y surge otra nueva.\n- Accidental: El mismo sujeto cambia de lugar (local), tamaño (cuantitativo) o cualidad (alteración).",
        "mnemotecnia": "Sustancial = cambia el 'qué es'; Accidental = cambia 'cómo o dónde está'."
    },
    {
        "id": "fc-11",
        "separata": "Separata 1",
        "categoria": "Gnoseología",
        "frente": "¿Qué es el 'Ser Intencional' (esse intentionale)?",
        "dorso": "El modo inmaterial y representativo por el cual la forma de una cosa existe dentro del sujeto que la conoce.",
        "mnemotecnia": "INTENDERE = Apuntar a la realidad sin absorber su materia física."
    },
    {
        "id": "fc-12",
        "separata": "Separata 1",
        "categoria": "Gnoseología",
        "frente": "Los dos niveles de potencia y acto en el conocimiento humano.",
        "dorso": "1) De la ignorancia a la posesión del hábito (ej. graduarse de médico).\n2) Del hábito a su ejercicio activo (ej. el médico operando en este momento).",
        "mnemotecnia": "Nivel 1 = aprenderlo; Nivel 2 = ejercerlo aquí y ahora."
    },
    {
        "id": "fc-13",
        "separata": "Separata 1",
        "categoria": "Estructura del Ente",
        "frente": "Diferencia entre 'Esencia' y 'Naturaleza'.",
        "dorso": "- Esencia: Aquello que la cosa es (manera de ser).\n- Naturaleza: La misma esencia considerada como principio y origen de operaciones.",
        "mnemotecnia": "Esencia = ¿qué eres?; Naturaleza = ¿cómo actúas?"
    },

    # Separata 2
    {
        "id": "fc-14",
        "separata": "Separata 2",
        "categoria": "Substancia y Accidentes",
        "frente": "¿Qué sostuvo Platón y cómo lo corrigió Aristóteles sobre el mundo sensible?",
        "dorso": "- Platón: Todo cambia en lo sensible, por tanto solo hay opinión (doxa), no ciencia.\n- Aristóteles: Descubrió la substancia permanente que subyace al cambio, fundando la ciencia física.",
        "mnemotecnia": "Platón = todo fluye; Aristóteles = la substancia permanece."
    },
    {
        "id": "fc-15",
        "separata": "Separata 2",
        "categoria": "Substancia y Accidentes",
        "frente": "Definición clásica de 'Persona' según Boecio.",
        "dorso": "'Substancia individual de naturaleza racional'. Ser que subsiste por sí mismo dotado de espíritu y libertad.",
        "mnemotecnia": "PERSONA = Substancia + Individual + Racional."
    },
    {
        "id": "fc-16",
        "separata": "Separata 2",
        "categoria": "Substancia y Accidentes",
        "frente": "¿Cuáles son los 4 aspectos que muestran la realidad de la Substancia?",
        "dorso": "1) Sujeto/substrato (sub-stare);\n2) Subsiste por sí misma;\n3) Posee el acto de ser en sí;\n4) Satisface plenamente la noción de ens.",
        "mnemotecnia": "4 S: Sujeto, Subsiste, Ser en sí, Satisface ens."
    },
    {
        "id": "fc-17",
        "separata": "Separata 2",
        "categoria": "Substancia y Accidentes",
        "frente": "¿Cuál es la triple relación entre la Substancia y los Accidentes?",
        "dorso": "1) Como sujeto que sostiene (dependencia);\n2) Como potencia al acto (los accidentes la perfeccionan);\n3) Como causa al efecto (los accidentes brotan de ella).",
        "mnemotecnia": "TRIPLE RELACIÓN: Sujeto, Potencia/Acto, Causa/Efecto."
    },
    {
        "id": "fc-18",
        "separata": "Separata 2",
        "categoria": "Substancia y Accidentes",
        "frente": "¿Cuál fue el error de las filosofías modernas al criticar la substancia?",
        "dorso": "Intentar 'imaginar' la substancia con los sentidos, cuando es un objeto inteligible (transensible) captado por el entendimiento (intus-legere).",
        "mnemotecnia": "ERROR: Querer oler con el oído o medir el peso con un termómetro."
    },
    {
        "id": "fc-19",
        "separata": "Separata 2",
        "categoria": "Hilemorfismo",
        "frente": "En el hilemorfismo, ¿qué es la Materia y qué es la Forma?",
        "dorso": "- Materia: Principio de indeterminación cuantitativa (potencia).\n- Forma: Determinación intrínseca de la esencia que hace a la cosa ser lo que es (acto).",
        "mnemotecnia": "Hyle = materia (madera bruta); Morphe = forma (diseño de la mesa)."
    },
    {
        "id": "fc-20",
        "separata": "Separata 2",
        "categoria": "Hilemorfismo",
        "frente": "¿Por qué el alma humana es creada directamente por Dios?",
        "dorso": "Porque es espiritual e inmortal; la materia carece por completo de la potencialidad de hacerse espíritu.",
        "mnemotecnia": "ESPÍRITU = No brota del barro material; exige creación directa."
    },
    {
        "id": "fc-21",
        "separata": "Separata 2",
        "categoria": "Hilemorfismo",
        "frente": "¿Por qué la forma substancial es única en cada individuo?",
        "dorso": "Porque ella sola determina al ente en el orden sustancial, asumiendo las funciones inferiores (hace al hombre ser substancia, viviente, animal y racional).",
        "mnemotecnia": "FORMA SUBSTANCIAL ÚNICA: El alma hace todo en el hombre."
    },
    {
        "id": "fc-22",
        "separata": "Separata 2",
        "categoria": "Niveles Metafísicos",
        "frente": "Diferencia entre Nivel Predicamental y Nivel Trascendental.",
        "dorso": "- Predicamental: Nivel de las esencias divididas en 10 categorías (unidad por la forma).\n- Trascendental: Nivel del esse que trasciende categorías (unidad fontal por el acto de ser).",
        "mnemotecnia": "Predicamental = cajones de esencias; Trascendental = el mar común del Esse."
    },
    {
        "id": "fc-23",
        "separata": "Separata 2",
        "categoria": "Primeros Principios",
        "frente": "Enuncia el Principio de No-Contradicción.",
        "dorso": "'Es imposible que una cosa sea y no sea al mismo tiempo, en el mismo sujeto y bajo el mismo aspecto'.",
        "mnemotecnia": "NO-CONTRADICCIÓN = Ser y no-ser no caben a la vez."
    },
    {
        "id": "fc-24",
        "separata": "Separata 2",
        "categoria": "Primeros Principios",
        "frente": "Enuncia el Principio de Identidad.",
        "dorso": "'A es necesariamente A'; 'El ser es y el no-ser no es'. Afirma la necesidad ontológica de la esencia.",
        "mnemotecnia": "IDENTIDAD = Cada ser es fiel a lo que es."
    },
    {
        "id": "fc-25",
        "separata": "Separata 2",
        "categoria": "Primeros Principios",
        "frente": "Enuncia el Principio del Tercero Excluido (Tertium non datur).",
        "dorso": "'Cualquier cosa o es o no es; no cabe término medio entre dos proposiciones contradictorias'.",
        "mnemotecnia": "TERCERO EXCLUIDO = O blanco o negro frente a la contradicción; no hay un tercer estado fantasma."
    },
    {
        "id": "fc-26",
        "separata": "Separata 2",
        "categoria": "Primeros Principios",
        "frente": "Enuncia el Principio de Razón Suficiente.",
        "dorso": "'Todo ente tiene una razón suficiente de su existencia y de su ser'. Nada es inteligible sin fundamento.",
        "mnemotecnia": "RAZÓN SUFICIENTE = Nada ocurre por casualidad mágica de la nada."
    },

    # Separata 3
    {
        "id": "fc-27",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "¿Cuáles son las 4 causas clásicas y qué pregunta responde cada una?",
        "dorso": "1) Material: ¿De qué está hecho?;\n2) Formal: ¿Qué es esto?;\n3) Eficiente: ¿Quién lo hizo?;\n4) Final: ¿Para qué sirve?",
        "mnemotecnia": "MEFF: Material, Eficiente, Formal, Final."
    },
    {
        "id": "fc-28",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "¿Qué es la Causa Ejemplar?",
        "dorso": "La forma extrínseca o modelo que reside previamente en la mente del artífice (el plano o diseño concebido).",
        "mnemotecnia": "EJEMPLAR = El plano en la cabeza del creador."
    },
    {
        "id": "fc-29",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "En un acto de virtud sobrenatural, ¿cuál es la causa material y cuál la formal?",
        "dorso": "Causa Material: El hombre mismo (sujeto).\nCausa Formal: La gracia divina infundida que santifica el acto.",
        "mnemotecnia": "Materialmente humano, pero formalmente sobrenatural."
    },
    {
        "id": "fc-30",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "Diferencia entre Creación Divina y Causalidad de las Criaturas.",
        "dorso": "- Creación: Dar el esse total a partir de la nada (ex nihilo), solo propia de Dios.\n- Criaturas: Transforman materia preexistente produciendo el devenir (fieri).",
        "mnemotecnia": "Dios crea el ser; el hombre transforma lo creado."
    },
    {
        "id": "fc-31",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "¿Por qué las criaturas son Causas Segundas reales y no meros instrumentos?",
        "dorso": "Porque Dios participa su causalidad con ellas; negar su acción destruiría la libertad y la responsabilidad moral del hombre.",
        "mnemotecnia": "CAUSAS SEGUNDAS = Dios no quiso robots, creó agentes libres."
    },
    {
        "id": "fc-32",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "¿Qué expresa la regla 'Modus operandi sequitur modum essendi'?",
        "dorso": "El modo de obrar sigue al modo de ser. Causas necesarias obran con necesidad; causas libres obran con libertad.",
        "mnemotecnia": "OBRAR SIGUE AL SER: Eres libre, actúas con libertad."
    },
    {
        "id": "fc-33",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "Diferencia entre Instrumento Unido e Instrumento Separado.",
        "dorso": "- Unido: Forma una unidad orgánica con el agente (la propia mano; la Humanidad de Cristo).\n- Separado: Exterior al agente (la pluma del escritor; los sacramentos).",
        "mnemotecnia": "Unido = en tu propio cuerpo; Separado = una herramienta externa."
    },
    {
        "id": "fc-34",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "¿Cuáles son las dos acciones de todo instrumento?",
        "dorso": "1) Acción propia: Acorde con su forma natural (la pluma raya y echa tinta).\n2) Acción instrumental: Movida por el agente principal (escribir un poema genial).",
        "mnemotecnia": "ACCIÓN PROPIA (su forma) + ACCIÓN INSTRUMENTAL (elevada por el dueño)."
    },
    {
        "id": "fc-35",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "En los Sacramentos, ¿cómo se distribuyen las 4 causas?",
        "dorso": "- Agente Principal: Dios.\n- Instrumento unido: Humanidad de Cristo.\n- Instrumento separado: Sacramento sensible.\n- Causa formal: Gracia santificante.\n- Causa material: El hombre.",
        "mnemotecnia": "SACRAMENTO: Dios actúa por Cristo y el rito para dar gracia al hombre."
    },
    {
        "id": "fc-36",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "¿Por qué la Causa Final es la 'Causa de las causas'?",
        "dorso": "Porque ella motiva a la causa eficiente a obrar. Es primera en la intención y última en la ejecución.",
        "mnemotecnia": "CAUSA CAUSARUM = El fin manda sobre todo el proceso."
    },
    {
        "id": "fc-37",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "¿Cuál es la formulación más profunda del Principio de Causalidad según Santo Tomás?",
        "dorso": "'Todo lo que existe por participación es causado por lo que existe por esencia (Ipsum Esse Subsistens)'.",
        "mnemotecnia": "PARTICIPADO = Exige a Aquel que es por Esencia."
    },
    {
        "id": "fc-38",
        "separata": "Separata 3",
        "categoria": "Teoría de las Causas",
        "frente": "¿Cómo se refuta el escepticismo de David Hume sobre la causalidad?",
        "dorso": "Hume confundió la mera sucesión sensible (post hoc) con la producción causal real (propter hoc). Ejemplo: la noche sigue al día, pero el día no causa la noche. La inteligencia capta la causa.",
        "mnemotecnia": "REFUTACIÓN DE HUME: Sucesión ≠ Causalidad (el día no causa la noche)."
    },
    {
        "id": "fc-39",
        "separata": "Separata 3",
        "categoria": "Trascendentales",
        "frente": "¿Cuáles son los 4 trascendentales clásicos del ente?",
        "dorso": "Unum (Uno), Verum (Verdadero), Bonum (Bueno) y Pulchrum (Bello).",
        "mnemotecnia": "UVBP: Unum, Verum, Bonum, Pulchrum."
    },
    {
        "id": "fc-40",
        "separata": "Separata 3",
        "categoria": "Trascendentales",
        "frente": "¿Qué es la Unidad (Unum) del ente?",
        "dorso": "La indivisión interna en sí mismo y la división respecto a los demás (ens indivisum in se). Conservar el ser exige conservar la unidad.",
        "mnemotecnia": "UNUM = Indiviso en sí, distinto de los demás."
    },
    {
        "id": "fc-41",
        "separata": "Separata 3",
        "categoria": "Trascendentales",
        "frente": "¿Qué es la Verdad (Verum) y por qué se funda en el esse?",
        "dorso": "Adecuación de la mente a la realidad. El esse es la luz inteligible: mientras más esse posee un ente, mayor es su verdad e inteligibilidad.",
        "mnemotecnia": "VERUM = Las cosas son luminosas y comprensibles porque son reales."
    },
    {
        "id": "fc-42",
        "separata": "Separata 3",
        "categoria": "Trascendentales",
        "frente": "¿Qué significa 'Bonum est diffusivum sui'?",
        "dorso": "El bien es autoexpansivo: por su propia abundancia tiende a comunicarse, compartirse y difundirse (como Dios al crear).",
        "mnemotecnia": "DIFUSIÓN DEL BIEN = La bondad desborda generosidad."
    },
    {
        "id": "fc-43",
        "separata": "Separata 3",
        "categoria": "Trascendentales",
        "frente": "Diferencia entre Bien Común Trascendente y Bien Común Inmanente.",
        "dorso": "- Trascendente: Dios Mismo, Fin Supremo de todas las cosas.\n- Inmanente: El bien del orden social justo que permite a todos alcanzar a Dios.",
        "mnemotecnia": "Trascendente = Dios; Inmanente = La sociedad justa y en paz."
    },
    {
        "id": "fc-44",
        "separata": "Separata 3",
        "categoria": "Trascendentales",
        "frente": "¿Qué es el Mal ontológicamente (Privatio Boni)?",
        "dorso": "La privación o ausencia de un bien debido en un sujeto existente; no es substancia, sino un defecto accidental.",
        "mnemotecnia": "MAL = Agujero en la tela buena; no existe tela de puro agujero."
    },
    {
        "id": "fc-45",
        "separata": "Separata 3",
        "categoria": "Trascendentales",
        "frente": "Diferencia entre Mal Físico y Mal Moral.",
        "dorso": "- Físico: Privación natural corpórea (ceguera, dolor); es relativo y puede traer bien.\n- Moral: El pecado cometido con libertad culpable; es el único mal real absoluto.",
        "mnemotecnia": "Mal físico = dolor en el cuerpo; Mal moral = pecado en el alma libre."
    },
    {
        "id": "fc-46",
        "separata": "Separata 3",
        "categoria": "Trascendentales",
        "frente": "¿Cuáles son las 3 cualidades objetivas de la Belleza (Pulchrum) según Santo Tomás?",
        "dorso": "1) Armonía (consonantia / proporción);\n2) Plenitud (integritas / nada falta);\n3) Esplendor (claritas / claridad inteligible).",
        "mnemotecnia": "3 CUALIDADES: Armonía, Plenitud, Esplendor."
    },

    # Separata 4
    {
        "id": "fc-47",
        "separata": "Separata 4",
        "categoria": "Teología Natural",
        "frente": "¿Por qué la Teología Natural es la cima de la metafísica?",
        "dorso": "Porque al estudiar el ente alcanza en último término su Causa Primera y Fin Último, que es Dios, a la sola luz natural de la razón.",
        "mnemotecnia": "CIMA METAFÍSICA = Conocer a Dios con la inteligencia natural."
    },
    {
        "id": "fc-48",
        "separata": "Separata 4",
        "categoria": "Teología Natural",
        "frente": "Objeto Formal y Luz de la Teología Natural frente a la Sobrenatural.",
        "dorso": "- Teología Natural: Objeto formal: Dios en cuanto Ente y Causa Primera; Luz: Lumen rationis (razón).\n- Teología Sobrenatural: Objeto formal: Dios en Sí Mismo revelado; Luz: Lumen fidei (fe).",
        "mnemotecnia": "Natural = Dios Creador por la razón; Sobrenatural = Dios Padre/Trinidad por la fe."
    },
    {
        "id": "fc-49",
        "separata": "Separata 4",
        "categoria": "Teología Natural",
        "frente": "¿Cuál es el fin supremo y meta del ser humano?",
        "dorso": "Conocer y amar a Dios. Todos los demás fines temporales son solo medios subordinados a esta meta.",
        "mnemotecnia": "META HUMANA = Conocer y amar a Dios eternamente."
    },
    {
        "id": "fc-50",
        "separata": "Separata 4",
        "categoria": "Teología Natural",
        "frente": "¿Qué definió el Concilio Vaticano I (1869) sobre el conocimiento de Dios?",
        "dorso": "Definió como dogma de fe católica que Dios puede ser conocido con certeza por la luz natural de la razón a partir de las cosas creadas.",
        "mnemotecnia": "VATICANO I (1869) = La razón natural puede probar a Dios con certeza."
    },
    {
        "id": "fc-51",
        "separata": "Separata 4",
        "categoria": "Teología Natural",
        "frente": "Diferencia entre Dios Incomprensible y Dios Incognoscible.",
        "dorso": "- Incomprensible: La mente humana finita no puede abarcar la infinitud de Dios.\n- Cognoscible: Sí puede ser conocido verdaderamente porque es Plenitud de Inteligibilidad.",
        "mnemotecnia": "Cognoscible = puedes beber del mar; Incomprensible = no puedes tragarte el mar entero."
    },
    {
        "id": "fc-52",
        "separata": "Separata 4",
        "categoria": "Teología Natural",
        "frente": "Diferencia entre Ateísmo Práctico y Ateísmo Teórico.",
        "dorso": "- Práctico: Vivir en los hechos como si Dios no existiera (muy común, incluso en feligreses).\n- Teórico / Doctrinal: Defender con argumentos explícitos que Dios no existe.",
        "mnemotecnia": "Teórico = da discursos ateos; Práctico = vive pecando como si Dios no lo viera."
    },
    {
        "id": "fc-53",
        "separata": "Separata 4",
        "categoria": "Teología Natural",
        "frente": "¿Por qué 'hay que querer ser ateo para serlo'?",
        "dorso": "Porque como no hay prueba de que Dios no exista, el ateísmo nace de una opción de la voluntad moral: 'no quiero que Dios exista para no incomodar mi vida'.",
        "mnemotecnia": "ATEÍSMO = Opción del corazón rebelde antes que prueba de la mente."
    },
    {
        "id": "fc-54",
        "separata": "Separata 4",
        "categoria": "Crítica Filosófica Moderna",
        "frente": "¿Qué es el Principio de Inmanencia y quién lo inició?",
        "dorso": "Iniciado por Descartes (siglo XVII): sitúa el pensamiento como previo al ser (la filosofía empieza en la conciencia y allí permanece). Raíz de todo ateísmo moderno.",
        "mnemotecnia": "INMANENCIA (Descartes) = Encerrar la realidad dentro de la cabeza humana."
    },
    {
        "id": "fc-55",
        "separata": "Separata 4",
        "categoria": "Crítica Filosófica Moderna",
        "frente": "¿Qué frutos produjo en el siglo XX el intento de crear un 'humanismo sin Dios'?",
        "dorso": "Devaluación masiva del hombre: campos de exterminio, masacres bélicas, millones de abortos y reducción del ser humano a categoría económica esclava.",
        "mnemotecnia": "SIN DIOS = El hombre queda indefenso ante la ley de la selva y el tirano."
    },
    {
        "id": "fc-56",
        "separata": "Separata 4",
        "categoria": "Demostración de Dios",
        "frente": "¿Es la proposición 'Dios existe' evidente para nosotros (quoad nos)?",
        "dorso": "No. Es evidente en sí misma (per se nota in se), pero para nosotros requiere demostración a posteriori porque no vemos directamente la esencia de Dios.",
        "mnemotecnia": "NO ES EVIDENTE PARA NOSOTROS = Por eso hay ateos y se exige prueba a posteriori."
    },
    {
        "id": "fc-57",
        "separata": "Separata 4",
        "categoria": "Demostración de Dios",
        "frente": "¿Cuál es el punto de partida y principio de la Primera Vía (el Movimiento)?",
        "dorso": "- Punto de partida: El hecho evidente del movimiento o cambio en el mundo sensible.\n- Principio: 'Todo lo que se mueve es movido por otro' (quidquid movetur ab alio movetur).",
        "mnemotecnia": "1ª VÍA: Del cambio visible al Primer Motor Inmóvil."
    },
    {
        "id": "fc-58",
        "separata": "Separata 4",
        "categoria": "Demostración de Dios",
        "frente": "¿Por qué no se puede ir al infinito en motores subordinados?",
        "dorso": "Porque en una serie esencial actual, si no hay un Primer Motor que comunique la fuerza, los motores intermedios no se mueven ni habría movimiento hoy.",
        "mnemotecnia": "CADENA SIN CLAVO = Si no hay clavo firme primero, todos los eslabones caen."
    },
    {
        "id": "fc-59",
        "separata": "Separata 4",
        "categoria": "Demostración de Dios",
        "frente": "¿A qué término concluye la Primera Vía?",
        "dorso": "A un Primer Motor que no es movido por nadie, libre de potencia pasiva, que es Puro Acto: y este Ser es Dios.",
        "mnemotecnia": "PRIMER MOTOR INMÓVIL = Acto Puro = Dios."
    },
    {
        "id": "fc-60",
        "separata": "Separata 4",
        "categoria": "Demostración de Dios",
        "frente": "¿Por qué Santo Tomás rechazó las pruebas a priori (ontologistas)?",
        "dorso": "Porque no se puede dar el salto ilegítimo desde la sola idea en la mente hasta la existencia real en el ser. La prueba debe partir de hechos reales a posteriori.",
        "mnemotecnia": "RECHAZO AL ONTOLOGISMO: Pensar en oro no te llena los bolsillos de oro."
    }
]

def build_flashcards():
    out_dir = r"UNIDAD 2\web_estudio_filosofia"
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "flashcards.js")

    js_code = "// FLASHCARDS INTERACTIVAS PARA REPASO RÁPIDO Y MNEMOTÉCNICO (UNIDAD 2)\n"
    js_code += f"const BANCO_FLASHCARDS = {json.dumps(FLASHCARDS, indent=2, ensure_ascii=False)};\n"

    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(js_code)

    print(f"Flashcards generadas con éxito: {len(FLASHCARDS)} tarjetas en {out_path} ({os.path.getsize(out_path):,} bytes)")

if __name__ == '__main__':
    build_flashcards()
