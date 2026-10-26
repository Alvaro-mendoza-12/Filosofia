// BANCO DE 400 PREGUNTAS ÚNICAS (20 EXÁMENES X 20 PREGUNTAS)
// Con opciones balanceadas, explicaciones detalladas y analogías alternativas

const EXAMENES_INFO = [
  {
    "numero": 1,
    "titulo": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "separata": "Separata 1",
    "totalPreguntas": 20
  },
  {
    "numero": 2,
    "titulo": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "separata": "Separata 1",
    "totalPreguntas": 20
  },
  {
    "numero": 3,
    "titulo": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "separata": "Separata 1",
    "totalPreguntas": 20
  },
  {
    "numero": 4,
    "titulo": "Examen 4: El Conocimiento y el Ser Intencional",
    "separata": "Separata 1",
    "totalPreguntas": 20
  },
  {
    "numero": 5,
    "titulo": "Examen 5: Esencia, Naturaleza y Definición",
    "separata": "Separata 1 y 2",
    "totalPreguntas": 20
  },
  {
    "numero": 6,
    "titulo": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "separata": "Separata 2",
    "totalPreguntas": 20
  },
  {
    "numero": 7,
    "titulo": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "separata": "Separata 2",
    "totalPreguntas": 20
  },
  {
    "numero": 8,
    "titulo": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "separata": "Separata 2",
    "totalPreguntas": 20
  },
  {
    "numero": 9,
    "titulo": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "separata": "Separata 2",
    "totalPreguntas": 20
  },
  {
    "numero": 10,
    "titulo": "Examen 10: Primeros Principios del Ser",
    "separata": "Separata 2",
    "totalPreguntas": 20
  },
  {
    "numero": 11,
    "titulo": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "separata": "Separata 3",
    "totalPreguntas": 20
  },
  {
    "numero": 12,
    "titulo": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "separata": "Separata 3",
    "totalPreguntas": 20
  },
  {
    "numero": 13,
    "titulo": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "separata": "Separata 3",
    "totalPreguntas": 20
  },
  {
    "numero": 14,
    "titulo": "Examen 14: Causa Final y Principio de Causalidad",
    "separata": "Separata 3",
    "totalPreguntas": 20
  },
  {
    "numero": 15,
    "titulo": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "separata": "Separata 3",
    "totalPreguntas": 20
  },
  {
    "numero": 16,
    "titulo": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "separata": "Separata 3",
    "totalPreguntas": 20
  },
  {
    "numero": 17,
    "titulo": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "separata": "Separata 3",
    "totalPreguntas": 20
  },
  {
    "numero": 18,
    "titulo": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "separata": "Separata 4",
    "totalPreguntas": 20
  },
  {
    "numero": 19,
    "titulo": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "separata": "Separata 4",
    "totalPreguntas": 20
  },
  {
    "numero": 20,
    "titulo": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "separata": "Separata 4 y Síntesis",
    "totalPreguntas": 20
  }
];

const BANCO_PREGUNTAS = [
  {
    "id": 1,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Cuál es la definición clásica y técnica de la metafísica según el texto?",
    "opciones": [
      "La ciencia del ente en cuanto ente y de sus causas más universales.",
      "El estudio psicológico de cómo la mente concibe las ideas subjetivas.",
      "La ciencia de las causas segundas y los fenómenos empíricos medibles.",
      "La ciencia que estudia las leyes físicas y astronómicas del cosmos."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "1. Introducción: La ciencia del ente en cuanto ente",
    "separata": "Separata 1",
    "explicacionDetallada": "La metafísica es la ciencia del ente en cuanto ente. Se llama así porque va más allá de lo sensible hacia el orden puramente inteligible de la realidad, estudiando los más altos y últimos principios y causas de todas las cosas.",
    "explicacionAlternativa": "Imagina que la física estudia cómo cae una manzana; la metafísica va más al fondo y se pregunta qué hace que la manzana 'sea' una realidad existente y no nada."
  },
  {
    "id": 2,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Por qué la metafísica recibe el título aristotélico de 'Filosofía Primera'?",
    "opciones": [
      "Porque toda realidad, sin excepción de ninguna cosa, cae bajo su objeto de estudio.",
      "Porque se ocupa exclusivamente de los fenómenos observables en el primer instante en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Porque es la ciencia más sencilla de entender para los estudiantes principiantes.",
      "Porque históricamente fue la primera materia enseñada en las academias antiguas."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "1. Introducción: La ciencia del ente en cuanto ente",
    "separata": "Separata 1",
    "explicacionDetallada": "La metafísica es llamada 'filosofía primera' porque el conjunto de la realidad, absolutamente toda realidad, cae bajo su mira y estudia los primeros y más universales principios.",
    "explicacionAlternativa": "Es como el mapa que abarca todo el planeta, mientras que las otras ciencias son planos detallados de una sola ciudad o habitación."
  },
  {
    "id": 3,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "En el estudio metafísico, ¿cuál es el 'objeto material' de esta disciplina?",
    "opciones": [
      "El método empírico de comprobación experimental en laboratorios.",
      "Todas las cosas que existen, es decir, la totalidad de la realidad.",
      "Únicamente los cuerpos materiales que poseen volumen, peso y masa según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Las estructuras puramente lógicas del lenguaje y sus proposiciones."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "El objeto de la metafísica",
    "separata": "Separata 1",
    "explicacionDetallada": "El objeto material de la metafísica es su sujeto-materia, a saber, todas las cosas. En cambio, su objeto formal es el aspecto de 'ser' bajo el cual se consideran.",
    "explicacionAlternativa": "El objeto material es 'qué mira' (todo lo que existe); el objeto formal es 'con qué lentes lo mira' (bajo la perspectiva del ser)."
  },
  {
    "id": 4,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Cuál es el 'objeto formal' que distingue a la metafísica de cualquier otra ciencia?",
    "opciones": [
      "La evolución temporal y las transformaciones químicas de los elementos.",
      "El aspecto de ser que poseen las cosas y su condición ontológica.",
      "El comportamiento observable de los seres vivos en su hábitat natural.",
      "La estructura matemática y la formulación cuantitativa de los cuerpos."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "El objeto de la metafísica",
    "separata": "Separata 1",
    "explicacionDetallada": "El objeto formal es el aspecto considerado por la metafísica, a saber, el aspecto de ser. Esto la distingue de otras ciencias que estudian partes o aspectos particulares.",
    "explicacionAlternativa": "Un médico ve al paciente como cuerpo biológico; el metafísico lo contempla en cuanto ente real existente."
  },
  {
    "id": 5,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Qué es lo único que se encuentra estrictamente fuera del alcance de la metafísica?",
    "opciones": [
      "Los pensamientos abstractos y las fórmulas lógicas formales.",
      "Los objetos materiales microscópicos imperceptibles a la vista.",
      "El no-ser absoluto (la nada), pues todo lo real cae bajo el ser.",
      "Las realidades puramente espirituales como Dios y los ángeles conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "1. Introducción: Totalidad y unidad",
    "separata": "Separata 1",
    "explicacionDetallada": "Lo único que se halla fuera del alcance de la metafísica es 'el no-ser', porque el hecho de ser afecta absolutamente a todas las realidades.",
    "explicacionAlternativa": "Si algo existe, la metafísica lo abarca. Sólo lo que es 'absolutamente nada' queda afuera."
  },
  {
    "id": 6,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Por qué se afirma en el texto que la metafísica es la ciencia más natural y congénita al hombre?",
    "opciones": [
      "Porque la sociedad obliga a todos los ciudadanos a estudiar filosofía básica.",
      "Porque la inteligencia humana tiene por objeto natural y espontáneo el ser.",
      "Porque todo ser humano nace conociendo las categorías aristotélicas de memoria.",
      "Porque el ser humano no necesita de los sentidos para formular ningún conocimiento."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "El objeto de la metafísica",
    "separata": "Separata 1",
    "explicacionDetallada": "La primera tendencia del ser humano al alcanzar el uso de razón (como en las preguntas infantiles '¿qué es esto?', '¿para qué es?') es buscar el ser, pues el objeto natural de la inteligencia es el ser.",
    "explicacionAlternativa": "Un niño pequeño preguntando incansablemente '¿por qué?' o '¿qué es eso?' ya está actuando como un filósofo metafísico natural."
  },
  {
    "id": 7,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Qué ocurre inevitablemente cuando una sociedad o cultura rechaza u olvida la metafísica?",
    "opciones": [
      "La ciencia experimental pierde completamente la capacidad de inventar cosas.",
      "Se produce una mejora radical en las costumbres morales y en la vida común.",
      "Se logra de inmediato un progreso tecnológico perfecto sin errores éticos.",
      "Algo debe fallar necesariamente en la moral, costumbres y sentido de vida."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "El objeto de la metafísica",
    "separata": "Separata 1",
    "explicacionDetallada": "Si la metafísica es rechazada, olvidada o despreciada, algo necesariamente debe fallar en alguna parte: en la moral, en las costumbres o en el acercamiento a la vida.",
    "explicacionAlternativa": "Si olvidas los cimientos de una casa para fijarte sólo en la pintura, tarde o temprano las paredes se agrietan."
  },
  {
    "id": 8,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Cuál es la causa por la que la metafísica es considerada el conocimiento natural más difícil?",
    "opciones": [
      "Por utilizar un lenguaje oscuro diseñado para ocultar secretos a la gente.",
      "Por ser una disciplina reservada a personas con capacidades extrasensoriales.",
      "Por ser el saber más comprensivo, abarcante y profundo de la realidad.",
      "Por exigir cálculos matemáticos superiores y experimentos de laboratorio."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "1. Introducción: Totalidad y unidad",
    "separata": "Separata 1",
    "explicacionDetallada": "No es difícil por ser complicada, sino por ser la más comprensiva, abarcante y profunda; exige superar lo sensorial para captar lo puramente inteligible.",
    "explicacionAlternativa": "No es difícil como resolver una ecuación kilométrica, sino como contemplar el horizonte completo sin distraerse con las hojas de un árbol."
  },
  {
    "id": 9,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Cómo define la filosofía clásica el concepto estricto de 'ciencia'?",
    "opciones": [
      "Recopilación tentativa de opiniones que cambian con cada generación.",
      "Conocimiento por causas, y por lo tanto cierto, universal y necesario.",
      "Descripción sensorial de apariencias externas acumuladas estadísticamente.",
      "Habilidad técnica orientada a la producción de artefactos industriales."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "1. Introducción: La ciencia del ente en cuanto ente",
    "separata": "Separata 1",
    "explicacionDetallada": "'Ciencia' es conocimiento por causas y, por lo tanto, cierto, universal y necesario. Es saber el porqué reconociendo una causa necesaria.",
    "explicacionAlternativa": "No es saber simplemente 'qué pasa', sino conocer la causa de fondo que hace que necesariamente ocurra así."
  },
  {
    "id": 10,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "[Caso Práctico] Un niño de cuatro años pregunta a su padre: 'Papá, ¿qué es esa cosa y para qué sirve?'. Según el texto, esta actitud demuestra:",
    "opciones": [
      "El influjo de ideas innatas que se recuerdan desde una vida anterior.",
      "La inclinación espontánea y metafísica de la inteligencia hacia el ser.",
      "Una falta de educación formal que debe ser corregida con datos físicos tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "Un pensamiento mágico primitivo ajeno a cualquier tipo de racionalidad."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "El objeto de la metafísica",
    "separata": "Separata 1",
    "explicacionDetallada": "Cuando los niños alcanzan el uso de razón formulan preguntas sobre el ser y fin de las cosas, demostrando que la metafísica es la ciencia natural del hombre.",
    "explicacionAlternativa": "La curiosidad infantil sobre el fondo de las cosas es el primer destello de la metafísica en el ser humano."
  },
  {
    "id": 11,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Qué tienen en común todas las realidades que componen el universo según la metafísica?",
    "opciones": [
      "Que todas están sujetas al espacio, al tiempo y a la descomposición.",
      "Que todas poseen la misma forma física, densidad, color y estructura a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Que todas coinciden exactamente en el hecho de que son, es decir, existen.",
      "Que todas han sido producidas por las manos del ser humano en la historia."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "1. Introducción: Totalidad y unidad",
    "separata": "Separata 1",
    "explicacionDetallada": "Las cosas difieren en muchos aspectos, pero en una cosa son exactamente lo mismo: en que son, existen. Lo que hace de todas ellas una es el ser.",
    "explicacionAlternativa": "Una estrella, un perro y una piedra son completamente distintos, pero los tres comparten el hecho de que 'son'."
  },
  {
    "id": 12,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Cómo se vincula la fe cristiana y la doctrina del catecismo con la metafísica?",
    "opciones": [
      "Ambas sostienen que Dios es un ente material compuesto de partes físicas.",
      "El catecismo ofrece la explicación última de la vida y Dios de modo metafísico.",
      "La fe cristiana rechaza la metafísica por considerarla un saber pagano inútil.",
      "La metafísica sustituye los sacramentos y elimina la necesidad de la gracia conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "El objeto de la metafísica",
    "separata": "Separata 1",
    "explicacionDetallada": "El catecismo está repleto de metafísica al dar la explicación última sobre el propósito humano, Dios y la moral. La simplicidad de la fe es acompañada por la profundidad de la metafísica.",
    "explicacionAlternativa": "Ambas buscan el sentido último y verdadero de la existencia humana y de la realidad."
  },
  {
    "id": 13,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Qué término describe el paso más allá de lo meramente físico hacia lo inteligible?",
    "opciones": [
      "Empirismo radical.",
      "Positivismo cuantitativo.",
      "Metafísica.",
      "Fisiología analítica."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "1. Introducción: La ciencia del ente en cuanto ente",
    "separata": "Separata 1",
    "explicacionDetallada": "Se llama metafísica precisamente porque trasciende lo físico sensible hacia el orden puramente inteligible de la realidad.",
    "explicacionAlternativa": "'Meta' significa más allá: traspasar la corteza sensible para mirar el ser de las cosas."
  },
  {
    "id": 14,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Por qué un conocimiento por causas fortuitas o accidentales no constituye ciencia estricta?",
    "opciones": [
      "Porque la mente humana solo puede percibir causas matemáticas exactas.",
      "Porque Aristóteles prohibió formalmente estudiar cosas que cambian de color.",
      "Porque las causas accidentales son siempre falsas y producto de la fantasía.",
      "Porque la ciencia requiere causas necesarias que brinden certeza universal."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "1. Introducción: La ciencia del ente en cuanto ente",
    "separata": "Separata 1",
    "explicacionDetallada": "La ciencia es conocimiento por causas y, por tanto, cierto, universal y necesario; no versa sobre lo puramente fortuito o accidental, sino sobre lo necesario.",
    "explicacionAlternativa": "Si algo ocurre por pura casualidad una sola vez, no funda una ley científica estable."
  },
  {
    "id": 15,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "La distinción entre objeto material y objeto formal sirve fundamentalmente para:",
    "opciones": [
      "Separar los seres vivos de los objetos inanimados en la tabla periódica según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "Dividir a los científicos entre empiristas puros y filósofos abstractos.",
      "Diferenciar qué campo de la realidad estudia una ciencia y bajo qué perspectiva.",
      "Demostrar que las cosas materiales carecen por completo de realidad objetiva."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "El objeto de la metafísica",
    "separata": "Separata 1",
    "explicacionDetallada": "Permite entender que varias ciencias pueden coincidir en el objeto material (todas estudian cosas), pero difieren radicalmente en su objeto formal (la perspectiva formal o punto de vista).",
    "explicacionAlternativa": "Una escultura puede ser analizada por el químico (su bronce) o por el artista (su belleza): mismo objeto material, distinto objeto formal."
  },
  {
    "id": 16,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "[Pregunta Trampa] Si la metafísica estudia la totalidad de las cosas, ¿podría decirse que es una enciclopedia que reúne todas las ciencias particulares?",
    "opciones": [
      "Sí, porque resume los resultados experimentales de la física y la biología.",
      "No, porque las estudia bajo la razón unitaria de ser, en sus causas últimas.",
      "Sí, ya que no existe ninguna distinción de método entre filosofía y física.",
      "No, porque la metafísica solo estudia entidades espirituales inexistentes según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios."
    ],
    "correcta": 1,
    "dificultad": "Trampa",
    "seccion": "1. Introducción: Totalidad y unidad",
    "separata": "Separata 1",
    "explicacionDetallada": "No es una suma de ciencias particulares. La metafísica estudia la totalidad bajo el aspecto formal y unificador del ser, buscando las causas más altas y universales.",
    "explicacionAlternativa": "No junta pedacitos de conocimientos particulares; capta la raíz común y el fundamento ontológico de todo lo que es."
  },
  {
    "id": 17,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Qué pregunta típicamente metafísica expresa la búsqueda de la causa final de una cosa?",
    "opciones": [
      "¿Cuánto pesa exactamente este objeto medido en gramos?",
      "¿Para qué es o cuál es el propósito de esta realidad?",
      "¿Qué temperatura registra en la escala de grados Celsius?",
      "¿A qué velocidad promedio se desplaza en el espacio?"
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "El objeto de la metafísica",
    "separata": "Separata 1",
    "explicacionDetallada": "Preguntas como '¿para qué es?' indagan sobre el fin o propósito de la cosa, que es uno de los cuestionamientos metafísicos naturales de la inteligencia.",
    "explicacionAlternativa": "Preguntar '¿para qué sirve?' es buscar el sentido y la finalidad del ente."
  },
  {
    "id": 18,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "Cuando decimos que la metafísica estudia la 'unidad' de todas las cosas, nos referimos a que:",
    "opciones": [
      "Todas las cosas coinciden en el ser, que es lo que hace de todas ellas una comunidad real.",
      "Todos los seres humanos piensan exactamente lo mismo sin ninguna discrepancia.",
      "Solo existe un único objeto en el universo y los demás son ilusiones sensoriales según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "Todas las cosas se funden en una masa homogénea donde desaparecen las diferencias."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "1. Introducción: Totalidad y unidad",
    "separata": "Separata 1",
    "explicacionDetallada": "Lo que todas las cosas tienen en común y hace de todas una es el ser. La metafísica estudia esa unidad profunda sin suprimir las diferencias individuales.",
    "explicacionAlternativa": "Aunque una casa tenga puertas, ventanas y ladrillos diferentes, todos están unidos en el hecho de ser parte de la casa existente."
  },
  {
    "id": 19,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "¿Cuál de las siguientes afirmaciones describe con mayor rigor la relación entre entendimiento humano y realidad?",
    "opciones": [
      "El entendimiento solo puede percibir cualidades sensibles como el tacto.",
      "La inteligencia está incapacitada por naturaleza para conocer la verdad.",
      "El entendimiento humano crea la realidad mediante sus conceptos subjetivos tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "El ser de las cosas es el objeto proporcionado y natural de la inteligencia."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "El objeto de la metafísica",
    "separata": "Separata 1",
    "explicacionDetallada": "El objeto natural de la inteligencia es el ser. El entendimiento está intrínsecamente diseñado para captar y desvelar la inteligibilidad de lo real.",
    "explicacionAlternativa": "Así como el ojo está hecho para ver la luz, la mente está hecha para comprender el ser de las cosas."
  },
  {
    "id": 20,
    "examen": 1,
    "tituloExamen": "Examen 1: Naturaleza y Objeto de la Metafísica",
    "pregunta": "En la metafísica clásica, ¿por qué la moral y las costumbres dependen del saber metafísico?",
    "opciones": [
      "Porque los valores morales son puras convenciones arbitrarias sin verdad objetiva.",
      "Porque las leyes civiles son redactadas siempre por profesores de metafísica.",
      "Porque la comprensión del fin último y del valor del hombre fundamenta la ética.",
      "Porque sin conocer la física cuántica nadie puede saber qué acciones son buenas."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "El objeto de la metafísica",
    "separata": "Separata 1",
    "explicacionDetallada": "La metafísica fundamenta la finalidad del ser humano y su dependencia de Dios. Si se desprecia la metafísica, se pierde el sentido del hombre y la moral colapsa.",
    "explicacionAlternativa": "Si no sabes qué es el ser humano ni para qué existe, es imposible saber cómo debe actuar rectamente."
  },
  {
    "id": 21,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "¿Cómo se define un término 'unívoco' en la lógica y metafísica clásica?",
    "opciones": [
      "Aquel que posee múltiples significados totalmente desconectados entre sí.",
      "Aquel que solo puede emplearse para describir entidades mitológicas.",
      "Aquel que se aplica a diversas realidades siempre con el mismo significado.",
      "Aquel que cambia de sentido según el estado de ánimo de quien lo pronuncia según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "El ente es análogo",
    "separata": "Separata 1",
    "explicacionDetallada": "Un término es unívoco cuando se predica de muchas cosas siempre en el mismo sentido, como 'hombre' aplicado a Pedro y a Pablo.",
    "explicacionAlternativa": "La palabra 'hombre' significa exactamente lo mismo al aplicarla a Sócrates que a Platón: especie humana."
  },
  {
    "id": 22,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "¿Qué caracteriza a un término 'equívoco'?",
    "opciones": [
      "Se aplica a muchas cosas siempre con idéntica definición y esencia.",
      "Tiene significados totalmente distintos cuando se predica de varias cosas.",
      "Posee un sentido semejante y proporcionado pero no completamente idéntico conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "Es un término inventado que carece de cualquier referencia a la realidad."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "El ente es análogo",
    "separata": "Separata 1",
    "explicacionDetallada": "Un término es equívoco si tiene significados enteramente distintos; por ejemplo 'sol' como astro celeste y como unidad monetaria.",
    "explicacionAlternativa": "'Gato' como animal peludo y 'gato' como herramienta para levantar autos: la misma palabra para cosas que no tienen nada que ver."
  },
  {
    "id": 23,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "¿Por qué el término 'ente' es clasificado como análogo y no como unívoco ni equívoco?",
    "opciones": [
      "Porque no significa absolutamente nada y puede ser ignorado por completo.",
      "Porque conviene a todas las cosas en parte igual y en parte diferente.",
      "Porque solo es válido en el idioma latín y no en los idiomas modernos.",
      "Porque significa exactamente lo mismo en Dios que en una piedra material."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "El ente es análogo",
    "separata": "Separata 1",
    "explicacionDetallada": "El término ente es análogo: se predica de todas las realidades en parte en el mismo sentido (todas son) y en parte diferente (el ser de Dios difiere del ser de una piedra).",
    "explicacionAlternativa": "Un niño, una silla y Dios 'son entes' (coinciden en que son), pero su modo de ser es abismalmente diferente."
  },
  {
    "id": 24,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "[Ejemplo del texto] Cuando decimos 'este alimento es sano' y 'este hombre es sano', usamos el término de modo:",
    "opciones": [
      "Unívoco, porque el alimento y el hombre tienen idéntica circulación sanguínea.",
      "Equívoco, porque no existe ninguna conexión entre comida y salud biológica.",
      "Metafórico, porque los alimentos nunca pueden tener ningún tipo de propiedad.",
      "Analógico, porque la salud se predica con proporción semejante pero distinta."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "El ente es análogo",
    "separata": "Separata 1",
    "explicacionDetallada": "El término 'sano' es el ejemplo clásico de analogía: conviene al cuerpo como sujeto de la salud, y al alimento como causante de la salud en el cuerpo.",
    "explicacionAlternativa": "La ensalada es 'sana' porque produce salud; la persona es 'sana' porque goza de salud: hay una proporción compartida."
  },
  {
    "id": 25,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "Etimológicamente, ¿de qué palabra griega procede el concepto de analogía y qué significa?",
    "opciones": [
      "De 'antinomia', que denota una contradicción insalvable entre proposiciones de acuerdo con ciertas posturas positivistas y materialistas del pensamiento decimonónico.",
      "De 'anarquía', que significa ausencia de gobierno o control central.",
      "De 'analogía', que se traduce originalmente como proporción o correspondencia.",
      "De 'análisis', que significa descomponer un objeto en partes diminutas."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "El ente es análogo",
    "separata": "Separata 1",
    "explicacionDetallada": "Término griego que significa 'proporción'. Los sujetos a los que conviene son semejantes de forma proporcionada, no idénticos.",
    "explicacionAlternativa": "Analogía es proporción: 2 es a 4 lo que 4 es a 8. Hay una relación semejante pero en niveles distintos."
  },
  {
    "id": 26,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "¿Cuáles son las dos categorías o clasificaciones supremas en las que se divide todo ente real?",
    "opciones": [
      "Pensamiento y lenguaje simbólico.",
      "Materia y vacío espacial.",
      "Substancia y accidente.",
      "Átomo y molécula compleja."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "El ente es análogo: Substancia y accidente",
    "separata": "Separata 1",
    "explicacionDetallada": "La clasificación última del ente es la substancia (lo que es en sí) o el accidente (lo que es en otro). Todo lo que existe pertenece a una de estas dos categorías.",
    "explicacionAlternativa": "La manzana es la substancia (existe por sí); su color rojo o peso son accidentes (existen apoyados en la manzana)."
  },
  {
    "id": 27,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "¿Cómo se distingue el modo de ser de la substancia respecto al modo de ser del accidente?",
    "opciones": [
      "El accidente existe por sí mismo, mientras que la substancia necesita apoyo.",
      "La substancia cambia permanentemente, mientras que el accidente nunca varía.",
      "Ambos poseen exactamente el mismo tipo de ser de forma unívoca y rígida.",
      "La substancia es un ser en sí, mientras que el accidente es un ser en otro."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "El ente es análogo: Substancia y accidente",
    "separata": "Separata 1",
    "explicacionDetallada": "El ser de la substancia es 'ser en sí y por sí', mientras que el ser del accidente es 'ser en otro', inherente a la substancia.",
    "explicacionAlternativa": "El sustantivo vive por su cuenta ('perro'); el adjetivo necesita pegarse al sustantivo ('perro blanco')."
  },
  {
    "id": 28,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "En la analogía del ente, ¿de quién se predica el ser de manera primordial y directa?",
    "opciones": [
      "De la nada, porque representa la ausencia absoluta de contradicciones lógicas.",
      "De los accidentes, porque son los primeros que captan los sentidos físicos.",
      "De la substancia, porque ella posee el acto de ser en sí misma y subsiste.",
      "De las palabras abstractas, porque tienen mayor fijeza gramatical que las cosas."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "El ente es análogo",
    "separata": "Separata 1",
    "explicacionDetallada": "La noción de ente conviene primariamente a la substancia (que existe en sí) y secundariamente a los accidentes (entes del ente).",
    "explicacionAlternativa": "La substancia es el protagonista de la película; los accidentes son sus trajes o accesorios."
  },
  {
    "id": 29,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "¿Cuál es la diferencia precisa entre los términos latinos 'ens' y 'esse'?",
    "opciones": [
      "Ens es el acto de ser puro, mientras que esse es la materia cuantitativa.",
      "Ens es el ente (lo que tiene ser), mientras que esse es el acto mismo de ser.",
      "No existe ninguna diferencia; son sinónimos gramaticalmente intercambiables mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Esse es una posibilidad mental abstracta, mientras que ens es un accidente."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "Ens es el participio (aquello que posee el acto de ser, el sujeto), mientras que esse es el verbo (el acto mismo de ser por el cual las cosas son).",
    "explicacionAlternativa": "'Ens' es el que corre (el corredor); 'esse' es el acto de correr que lo hace estar corriendo."
  },
  {
    "id": 30,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "Todo 'ens' (ente concreto creado) se compone necesariamente de dos principios metafísicos:",
    "opciones": [
      "Átomos pesados y electrones libres en movimiento.",
      "Sujeto del acto de ser (esencia) y el acto de ser (esse).",
      "Materia sensorial y percepciones psicológicas subjetivas tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "Un sustantivo gramatical y un adjetivo calificativo."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "El ens no es simple, sino compuesto: tiene el sujeto del acto de ser (la esencia o manera de ser) y el acto de ser (esse), que hace real a esa posibilidad.",
    "explicacionAlternativa": "Una jarra con agua: la jarra (esencia) da la forma y limita al agua; el agua (esse) es el contenido real que la llena."
  },
  {
    "id": 31,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "¿Qué papel cumple la esencia respecto al 'esse' (acto de ser) en las criaturas?",
    "opciones": [
      "Limita, contrae y especifica al acto de ser a un determinado modo de existencia.",
      "Multiplica al infinito la fuerza creadora del acto de ser sin ninguna traba.",
      "Destruye al acto de ser convirtiéndolo en un no-ser absoluto y transitorio mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Es completamente idéntica al acto de ser en todos los seres del universo."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "La composición es tal que el esse es contraído o limitado por la esencia: el ente creado no es cualquier cosa, sino sólo este tipo particular de ser.",
    "explicacionAlternativa": "El molde de galleta (esencia) delimita la masa (ser); la galleta no es masa infinita, es sólo una galleta redonda."
  },
  {
    "id": 32,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "Etimológicamente, ¿de dónde proviene la palabra 'existencia' y qué significa de modo riguroso?",
    "opciones": [
      "Del griego 'ex-odo', que alude a la marcha de un grupo hacia una tierra prometida.",
      "Del término 'éxtasis', que denota un trance emocional de carácter místico.",
      "Del latín 'ex-sistere', que literalmente significa 'estar alzado fuera' de las causas.",
      "Del latín 'ex-actum', que se refiere a una medición matemática sin margen de error según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "'Existir' viene de ex-sistere (estar alzado fuera). Significa el hecho de ser (factum), haber dejado de ser mera posibilidad para estar ya ahí.",
    "explicacionAlternativa": "Estar alzado fuera de la nada o de las causas: la estatua que ya salió del taller y está parada en la plaza."
  },
  {
    "id": 33,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "¿Cuál es la diferencia metafísica crucial entre 'ser' (esse) y 'existencia'?",
    "opciones": [
      "No existe ninguna distinción metafísica real entre ambos términos en la filosofía clásica.",
      "El esse solo pertenece a los seres inanimados, mientras que existir es propio de animales.",
      "La existencia es una entidad material concreta, mientras que el esse es solo una ilusión.",
      "El esse es un principio activo causal, mientras que la existencia es el hecho resultante."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "Esse es un principio metafísico fontal por el cual la cosa es; existir es el resultado de poseer esse (el hecho de que la cosa ya está ahí).",
    "explicacionAlternativa": "El fuego es el principio (esse); el estar caliente es el estado o resultado (existencia)."
  },
  {
    "id": 34,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "¿En qué único Ser coinciden de modo absoluto la esencia y el acto de ser (esse)?",
    "opciones": [
      "En los ángeles superiores que carecen de cuerpo material.",
      "En Dios, quien es el Ser Subsistente Mismo sin esencia limitante.",
      "En el alma espiritual del hombre dotada de inmortalidad.",
      "En el universo físico considerado en su totalidad cósmica conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "¿Cuál es la esencia de Dios? Ser. Dios es puro acto de ser sin esencia limitante alguna. Nada es por esencia sino Dios.",
    "explicacionAlternativa": "En nosotros 'tener ser' es un regalo recibido en un recipiente limitado; Dios ES el Ser mismo, sin límites ni envases."
  },
  {
    "id": 35,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "[Pregunta Trampa] Si un arquitecto concibe el plano de un edificio que jamás se construye, ¿es ese plano en su mente un 'ens' en sentido propio?",
    "opciones": [
      "Sí, ya que no existe ninguna diferencia metafísica entre pensar y existir en acto.",
      "No, es solo una esencia o posibilidad de ser, pues carece de acto de ser real.",
      "Sí, porque cualquier pensamiento mental ya posee el acto de ser real del edificio.",
      "No, porque las creaciones arquitectónicas son consideradas accidentes sin esencia."
    ],
    "correcta": 1,
    "dificultad": "Trampa",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "Puede haber algo concebido que no existe en acto, siendo mera posibilidad; no es un ens real en la medida en que no posee el acto de ser exterior.",
    "explicacionAlternativa": "El plano en el papel muestra 'cómo sería' la casa (posibilidad), pero no puedes resguardarte de la lluvia en una casa dibujada."
  },
  {
    "id": 36,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "Cuando decimos que el 'esse' es contraído por la esencia, esto implica directamente que:",
    "opciones": [
      "Toda criatura se transforma automáticamente en Dios con el tiempo.",
      "El acto de ser desaparece y es reemplazado por la materia atómica.",
      "La criatura no es el ser infinito, sino un tipo delimitado de ente.",
      "El universo carece de estabilidad ontológica y cae en el absurdo en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "La esencia contrae el esse: el ente es sólo lo que su esencia le permite ser (un perro, un árbol, un hombre), no la plenitud del ser.",
    "explicacionAlternativa": "La botella azul tiñe y contiene el agua: el agua adopta el tamaño y forma exacta de la botella."
  },
  {
    "id": 37,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "¿Por qué no debemos confundir nuestros conceptos abstractos con la realidad o actualidad de las cosas?",
    "opciones": [
      "Porque los conceptos son esencias abstractas, mientras que el esse es actualidad concreta.",
      "Porque las cosas exteriores cambian tan rápido que ningún concepto dura un segundo en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Porque la mente solo puede pensar en números matemáticos y no en realidades vivas.",
      "Porque los conceptos son siempre ilusorios y falsos frente a los sentidos físicos."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "No debemos confundir nuestros conceptos (esencias abstractas) con la realidad; el esse no es una idea abstracta, sino la actualidad viva de las cosas singulares.",
    "explicacionAlternativa": "Tener la receta de un pastel en la cabeza no te quita el hambre; necesitas comer el pastel horneado en acto."
  },
  {
    "id": 38,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "En términos gramaticales, ¿por qué el verbo expresa dinamismo o cambio a diferencia del nombre?",
    "opciones": [
      "Porque los nombres cambian de género y número cada vez que se pronuncian tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "Porque los verbos carecen de significado y solo sirven de adornos poéticos.",
      "Porque las reglas sintácticas del latín prohíben usar verbos para cosas estables.",
      "Porque el verbo designa acción o pasión, derivado de la raíz de potencia y movimiento."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "El nombre designa lo permanente (substancia), mientras que el verbo designa acción o pasión (accidentes y movimiento dinámico).",
    "explicacionAlternativa": "El sustantivo 'roca' expresa solidez estática; el verbo 'rodar' expresa acción y cambio."
  },
  {
    "id": 39,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "¿Qué consecuencia metafísica se deduce de que las criaturas tengan un ser limitado por su esencia?",
    "opciones": [
      "Que las criaturas son totalmente independientes de cualquier causa externa.",
      "Que su ser es causado y recibido, debiendo provenir de un Ser subsistente puro.",
      "Que la realidad material es una contradicción lógica destinada a la nada conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "Que las criaturas existen por sí mismas desde una eternidad sin principio."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "El hecho de que las cosas posean acto de ser limitado por sus esencias indica que su ser es recibido; alguien debió traerlas al ser: un Ser que sea puro esse.",
    "explicacionAlternativa": "Si tienes una vela encendida que no se enciende sola, alguien con fuego tuvo que haber encendido su mecha."
  },
  {
    "id": 40,
    "examen": 2,
    "tituloExamen": "Examen 2: El Ente, el Ser (Esse) y la Analogía",
    "pregunta": "Cuando contemplamos el término alemán 'Dasein' citado en el texto, ¿a qué noción equivale?",
    "opciones": [
      "A la existencia concebida textualmente como 'ser-ahí' presente.",
      "Al no-ser dialéctico que se contradice continuamente a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "A la potencia pasiva de los cuerpos inanimados.",
      "Al acto puro de ser sin ninguna limitación espacial."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "2.1 Ente, ser, esencia, existencia",
    "separata": "Separata 1",
    "explicacionDetallada": "En alemán 'ser' se dice sein, y 'existencia' es Dasein (ser-ahí), lo cual recalca el hecho de estar ya dado o situado fuera de las causas.",
    "explicacionAlternativa": "Estar 'ahí parado en el mundo': el hecho palpable de existir."
  },
  {
    "id": 41,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Cómo define Aristóteles el concepto de movimiento (motus) en su física y metafísica?",
    "opciones": [
      "El paso repentino del no-ser absoluto al acto supremo perfecto y definitivo a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "La ilusión sensorial que engaña a los seres humanos al observar el espacio.",
      "La aniquilación permanente de la materia para dar lugar a ideas puras.",
      "El acto de un ser en potencia en la medida en que sigue estando en potencia."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "3. Potencia y acto: El movimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Aristóteles definió el movimiento como el acto de un ser en potencia en la medida en que sigue siendo en potencia. Es un acto imperfecto que tiende hacia un término.",
    "explicacionAlternativa": "Cuando un agua tibia se está calentando, ya no está totalmente fría (acto relativo), pero todavía no hirvió (sigue en potencia)."
  },
  {
    "id": 42,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Por qué el movimiento es clasificado rigurosamente como un 'acto imperfecto'?",
    "opciones": [
      "Porque siempre comete errores morales y destruye a las substancias vivas en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Porque si fuera potencia no se movería, y si fuera acto perfecto ya habría terminado.",
      "Porque no puede ser descrito con fórmulas matemáticas de aceleración física.",
      "Porque solo ocurre en la mente de personas que tienen poca concentración."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "3. Potencia y acto: El movimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Es más perfecto que la mera potencia (ya comenzó), pero menos perfecto que el acto final (si alcanzara el acto perfecto, el movimiento cesaría).",
    "explicacionAlternativa": "Un tren en viaje ya no está en la estación inicial, pero mientras siga en movimiento aún no llegó a su destino."
  },
  {
    "id": 43,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Qué es la 'potencia' (potentia) según la metafísica clásica?",
    "opciones": [
      "La nada absoluta incapaz de recibir jamás ninguna determinación real.",
      "La certeza demostrada de que todos los seres humanos serán doctores.",
      "Una energía mística oculta que desafía las leyes naturales de la física.",
      "Aquello que puede ser algo pero que todavía no lo es en el presente."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "3. Potencia y acto",
    "separata": "Separata 1",
    "explicacionDetallada": "Llamamos potencia a aquello que puede ser algo pero todavía no lo es. Está arraigada realmente en el ser como capacidad ontológica.",
    "explicacionAlternativa": "Una semilla de manzana tiene la potencia real de ser un manzano; pero no tiene la potencia de ser un elefante."
  },
  {
    "id": 44,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Por qué la potencia es considerada algo real y no una simple nada o fantasía?",
    "opciones": [
      "Porque la mente humana puede inventar cualquier fantasía y hacerla material.",
      "Porque las cosas tienen capacidades objetivas arraigadas en su propia naturaleza.",
      "Porque la potencia ya posee peso físico medible en balanzas de laboratorio.",
      "Porque no existe ninguna distinción ontológica entre lo posible y lo actual según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "3. Potencia y acto",
    "separata": "Separata 1",
    "explicacionDetallada": "La madera tiene la potencia real de ser mesa o silla, pero no de convertirse en un ser humano vivo. Las potencias son capacidades objetivas inscritas en el ser.",
    "explicacionAlternativa": "Un bebé de meses puede llegar a ser médico (potencia real); una roca jamás podrá ejercer la medicina."
  },
  {
    "id": 45,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Cuál es la formulación metafísica del 'cambio sustancial'?",
    "opciones": [
      "El desplazamiento de un objeto desde un punto cardinal hacia otro diferente.",
      "El cambio en el cual una substancia se corrompe y surge una nueva substancia.",
      "El aumento de temperatura o de tamaño corporal por ingestión de alimentos.",
      "La variación del color superficial de un cuerpo manteniendo su misma especie a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "3. Potencia y acto: El movimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "El cambio sustancial es el cambio de un sujeto a otro: una nueva substancia es generada al tiempo que otra es corrompida (ej. la digestión o la combustión de madera en ceniza).",
    "explicacionAlternativa": "Cuando quemas un tronco y queda ceniza y humo: dejó de ser madera, cambió de substancia."
  },
  {
    "id": 46,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Cuáles son los tres tipos clásicos de cambio accidental citados en la separata?",
    "opciones": [
      "Generación espontánea, reencarnación biológica y traslación estelar.",
      "Movimiento local (lugar), cuantitativo (cantidad) y cualitativo (alteración).",
      "Movimiento atómico, fisión nuclear y radiación cuántica electromagnética.",
      "Cambio sustancial, cambio imaginario y mutación genética artificial según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "3. Potencia y acto: El movimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Si el cambio concierne al lugar es movimiento local; a la cantidad, aumento o disminución; a la cualidad, alteración.",
    "explicacionAlternativa": "Caminar (local), engordar 2 kilos (cuantitativo), o sonrojarse de vergüenza (cualitativo)."
  },
  {
    "id": 47,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "[Ejemplo del texto] Cuando una persona pinta una pared blanca de color azul, ha ocurrido un cambio de tipo:",
    "opciones": [
      "Local puro, porque las moléculas de cal viajaron a otra dimensión.",
      "Cuantitativo decreciente, porque el color azul pesa menos que el blanco de acuerdo con ciertas posturas positivistas y materialistas del pensamiento decimonónico.",
      "Sustancial, pues la pared ha dejado de existir convirtiéndose en aire.",
      "Accidental cualitativo (alteración), pues la substancia sigue siendo pared."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "3. Potencia y acto: El movimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Es una alteración cualitativa: la cualidad accidental (el color) cambió de blanco a azul, pero la pared sigue conservando su misma substancia.",
    "explicacionAlternativa": "Cambió el color de la camiseta, pero la camiseta sigue siendo la misma prenda."
  },
  {
    "id": 48,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Por qué el marxismo y la dialéctica hegeliana niegan el principio de no-contradicción según el texto?",
    "opciones": [
      "Porque defienden que la religión es la única fuente válida de certeza científica mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Porque afirman que la física moderna ya superó todas las categorías griegas.",
      "Porque para ellos no existe un ser estable, sino solo el continuo devenir y proceso.",
      "Porque sostienen que Dios es acto puro e inmutable por encima del universo."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "3. Potencia y acto",
    "separata": "Separata 1",
    "explicacionDetallada": "Para el marxismo no existe el ser inmutable, sino sólo el devenir y el cambio constante, derivado de su ateísmo intrínseco que niega al Ser supremo inmutable.",
    "explicacionAlternativa": "Si crees que todo fluye y nada 'es', pretendes que una cosa puede ser y no ser al mismo tiempo."
  },
  {
    "id": 49,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Por qué el movimiento y el acto no pueden ser demostrados formalmente mediante un silogismo?",
    "opciones": [
      "Porque los sentidos humanos son incapaces de notar si algo cambia de posición.",
      "Porque son conceptos absurdos inventados por los sofistas para confundir.",
      "Porque se necesita un telescopio espacial para poder registrar el movimiento.",
      "Porque son nociones inmediatas y evidentes por sí mismas a la experiencia."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "3. Potencia y acto: El movimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Las realidades del movimiento y el acto son nociones directas e inmediatas; no pueden ser demostradas porque son evidentes de modo primordial a la inteligencia.",
    "explicacionAlternativa": "No necesitas demostrar con fórmulas que una pelota está rodando frente a tus ojos: lo ves y lo entiendes al instante."
  },
  {
    "id": 50,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "Si estar aquí significara lo mismo que estar allá, ¿qué sucedería con el movimiento?",
    "opciones": [
      "El cambio se volvería eterno e indestructible en todas las galaxias tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "Las cosas pasarían a ser actos puros sin necesidad de ninguna potencia.",
      "No habría movimiento alguno, pues se destruiría la diferencia real de lugares.",
      "El movimiento se aceleraría hasta alcanzar la velocidad de la luz."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "3. Potencia y acto",
    "separata": "Separata 1",
    "explicacionDetallada": "La experiencia del cambio conlleva la verdad del principio de no-contradicción: si estar aquí fuera idéntico a no estar aquí, no existiría desplazamiento ni cambio.",
    "explicacionAlternativa": "Si Lima fuera exactamente lo mismo que París, viajar de Lima a París carecería de sentido."
  },
  {
    "id": 51,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "[Pregunta Trampa] ¿Puede una entidad pasar de la potencia al acto por sí misma sin ayuda de ningún principio en acto?",
    "opciones": [
      "Solo si se trata de un cuerpo inanimado sometido a la gravedad terrestre en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Sí, porque la potencia contiene en su seno todos los actos ya realizados.",
      "No, porque lo que está en potencia solo puede ser actualizado por algo en acto.",
      "Sí, siempre que tenga suficiente fuerza de voluntad en su mente material."
    ],
    "correcta": 2,
    "dificultad": "Trampa",
    "seccion": "3. Potencia y acto",
    "separata": "Separata 1",
    "explicacionDetallada": "Nadie da lo que no tiene. Una cosa en potencia carece todavía de ese acto; por ende, requiere un agente que ya esté en acto para ser actualizada.",
    "explicacionAlternativa": "La leña fría no puede encenderse a sí misma: necesita una llama ya encendida que le prenda fuego."
  },
  {
    "id": 52,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "Cuando una bellota se transforma en un roble adulto, ¿cuál era la potencia y cuál es el acto?",
    "opciones": [
      "Ambos estados son meras apariencias subjetivas sin ninguna relación causal.",
      "La bellota tenía la potencia de ser roble; el roble adulto es esa potencia en acto.",
      "El árbol adulto es una potencia pasiva que jamás tuvo semillas previas.",
      "La bellota era el acto perfecto y el roble es una potencia degradada conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "3. Potencia y acto",
    "separata": "Separata 1",
    "explicacionDetallada": "La bellota posee la potencia activa-receptiva de desarrollarse en árbol; al crecer y ser roble adulto, ha alcanzado el acto de su forma vegetal.",
    "explicacionAlternativa": "La semilla 'puede ser' árbol (potencia); el árbol gigante 'ya es' (acto)."
  },
  {
    "id": 53,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Qué ocurre con una sustancia cuando sufre un cambio sustancial completo?",
    "opciones": [
      "Conserva su misma forma sustancial y solo varía su posición espacial.",
      "Pierde su forma sustancial anterior y adquiere una nueva forma sustancial.",
      "Aumenta su peso físico al doble sin experimentar alteración química.",
      "Deja de poseer materia prima y se convierte en espíritu puro increado conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "3. Potencia y acto: El movimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "En el cambio sustancial, la materia prima se despoja de una forma sustancial y se informa con otra (corrupción de la anterior y generación de la nueva).",
    "explicacionAlternativa": "Cuando un animal muere, su cadáver deja de ser sustancia viva y pasa a ser un compuesto químico en descomposición."
  },
  {
    "id": 54,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Por qué el crecimiento biológico de un niño es un cambio accidental cuantitativo?",
    "opciones": [
      "Porque la cantidad no tiene ninguna relación con los cuerpos materiales mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Porque el niño deja de ser un ser humano para convertirse en otra especie.",
      "Porque varía la magnitud y dimensiones corporales permaneciendo el mismo sujeto.",
      "Porque el niño adquiere un alma espiritual totalmente nueva cada año."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "3. Potencia y acto: El movimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "El cambio cuantitativo (aumento o disminución) altera la dimensión accidental del sujeto, mientras que la substancia humana sigue siendo idéntica a sí misma.",
    "explicacionAlternativa": "Crecer 10 centímetros no te convierte en otra persona: eres el mismo individuo, pero más alto."
  },
  {
    "id": 55,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Qué papel desempeña el concepto de 'término' (ad quem) en el análisis del movimiento?",
    "opciones": [
      "Es el punto de partida inicial de donde brota la materia sin forma.",
      "Representa la muerte inevitable de todo pensamiento racional humano.",
      "Es el estado de acto final hacia el cual se orienta el paso de la potencia.",
      "Es una regla gramatical que impide colocar verbos al final de la oración según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "3. Potencia y acto: El movimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Todo movimiento va de un término inicial (a quo, en potencia) a un término final (ad quem, en acto). Al llegar al término, el movimiento cesa.",
    "explicacionAlternativa": "La meta de una carrera: cuando cruzas la línea de llegada, la carrera terminó porque alcanzaste el objetivo."
  },
  {
    "id": 56,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "Si una estatua de mármol es pulida para que brille más intensamente, ¿qué cambio ha tenido lugar?",
    "opciones": [
      "Cambio local hacia otra dimensión del universo.",
      "Cambio sustancial de mármol a oro puro.",
      "Cambio de creación ex nihilo sin causas materiales en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Cambio accidental cualitativo (alteración de superficie)."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "3. Potencia y acto: El movimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "El pulido es una alteración de las cualidades superficiales del mármol (brillo, textura), manteniéndose la misma estatua sustancial.",
    "explicacionAlternativa": "Lavar y encerar tu auto no cambia de auto: solo mejora su apariencia externa."
  },
  {
    "id": 57,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Por qué Aristóteles dedicó tanto esfuerzo a refutar a quienes negaban la estabilidad del ser?",
    "opciones": [
      "Porque si no hay nada estable, la ciencia y la verdad se vuelven imposibles.",
      "Porque deseaba proteger los privilegios económicos de los gobernantes griegos.",
      "Porque sostenía que los ojos engañan y que solo debemos confiar en mitos.",
      "Porque temía que la tecnología mecánica hiciera innecesaria la agricultura."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "3. Potencia y acto",
    "separata": "Separata 1",
    "explicacionDetallada": "Si todo fuera cambio puro sin substancia permanente, nada podría ser conocido con certeza, cayendo en el escepticismo o la contradicción.",
    "explicacionAlternativa": "Si las letras de un libro cambiaran de significado cada segundo, sería imposible leer y aprender nada."
  },
  {
    "id": 58,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "En la relación de potencia y acto, ¿cuál de los dos principios posee primacía ontológica y valor superior?",
    "opciones": [
      "El acto, porque representa la realidad acabada, la perfección y el ser.",
      "La potencia, porque contiene infinitas posibilidades que jamás se agotan.",
      "Ambos son rigurosamente idénticos en dignidad, función y efectividad.",
      "Ninguno, pues para la metafísica clásica solo existe la pura nada."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "3. Potencia y acto",
    "separata": "Separata 1",
    "explicacionDetallada": "El acto es superior a la potencia: la perfección reside en lo que ya es real. La potencia solo tiene sentido y se define en referencia al acto.",
    "explicacionAlternativa": "Tener el dinero en la mano (acto) es superior a tener la posibilidad remota de ganarlo en la lotería (potencia)."
  },
  {
    "id": 59,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "[Ejemplo de la mesa y la silla] Una mesa de madera puede ser desarmada y transformada en silla, pero no en un león vivo. Esto demuestra que:",
    "opciones": [
      "No existe ninguna diferencia entre seres animados e inanimados.",
      "La potencia está limitada y arraigada en la naturaleza real de la materia.",
      "Los carpinteros tienen poderes mágicos para crear vida animal según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "La madera carece de cualquier propiedad o determinación material."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "3. Potencia y acto",
    "separata": "Separata 1",
    "explicacionDetallada": "La potencia no es indeterminación absoluta infinita: la madera tiene capacidad de recibir la forma de silla, pero no la forma de un organismo vivo.",
    "explicacionAlternativa": "Con plastilina puedes hacer una figura de elefante, pero jamás podrás hacer que camine y respire."
  },
  {
    "id": 60,
    "examen": 3,
    "tituloExamen": "Examen 3: Potencia y Acto: Nociones y Movimiento",
    "pregunta": "¿Qué relación existe entre la experiencia del cambio y el principio de no-contradicción?",
    "opciones": [
      "El cambio presupone que ser algo excluye no serlo en el mismo aspecto y tiempo.",
      "La contradicción solo aparece en los libros de matemáticas y no en la vida física.",
      "El principio de no-contradicción impide que los cuerpos materiales se muevan.",
      "El cambio demuestra que las contradicciones son perfectamente reales y cotidianas."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "3. Potencia y acto",
    "separata": "Separata 1",
    "explicacionDetallada": "Percibir el cambio exige reconocer que algo pasa de no tener una forma a tenerla; si tenerla y no tenerla fuera lo mismo, no habría cambio alguno.",
    "explicacionAlternativa": "Para saber que te moviste de la sala a la cocina, es indispensable que estar en la cocina no sea lo mismo que seguir en la sala."
  },
  {
    "id": 61,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿En qué consiste metafísicamente la operación de 'conocer' en los seres vivos?",
    "opciones": [
      "En la adquisición inmaterial de formas ajenas sin perder la propia forma.",
      "En la creación subjetiva de objetos imaginarios sin relación con la realidad.",
      "En un intercambio puramente sensorial de calor y humedad con el entorno.",
      "En la destrucción química del objeto exterior para absorber sus átomos."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "'Conocer' significa adquirir nuevas formas de modo inmaterial. A diferencia de las cosas materiales que pierden su forma al adquirir otra, el cognoscente asimila la forma ajena conservando la suya.",
    "explicacionAlternativa": "Si a una mesa le das forma de silla, deja de ser mesa; pero cuando tú aprendes qué es un caballo, tu mente adquiere la idea sin convertirte en caballo."
  },
  {
    "id": 62,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "[Ejemplo del texto] Cuando un perro observa un hueso apetitoso, ¿cómo se hace presente la forma del hueso en el animal?",
    "opciones": [
      "La forma sensible del hueso entra inmaterialmente en su conocimiento.",
      "El hueso entra físicamente triturado dentro del cerebro del animal.",
      "El perro sufre un cambio sustancial y se transforma en materia inorgánica.",
      "No hay ninguna captación real, pues los animales son autómatas ciegos."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "El hueso no penetra físicamente en el perro, pero su forma sensible ha entrado en su conciencia cognoscitiva de modo inmaterial y permanente.",
    "explicacionAlternativa": "La foto del hueso entra en su mente sin que el objeto físico haya ocupado espacio dentro de su cabeza."
  },
  {
    "id": 63,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿Qué es el 'ser intencional' (esse intentionale) según la filosofía clásica?",
    "opciones": [
      "El modo de ser inmaterial que adquiere la forma de una cosa en el cognoscente.",
      "Una energía psíquica que busca dominar la voluntad de las demás personas.",
      "El deseo egoísta de poseer bienes económicos materiales en el futuro.",
      "Una ley moral que castiga a quienes tienen malas intenciones subjetivas en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "El ser de la forma en el cognoscente no es físico sino inmaterial, y se llama 'ser intencional' (del latín intendere, apuntar o tender hacia la realidad exterior).",
    "explicacionAlternativa": "La imagen de un león en tu pensamiento tiene ser intencional: representa al león real sin morderte ni ocupar tres metros de sala."
  },
  {
    "id": 64,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿Cuál es la diferencia fundamental entre el conocimiento puramente sensible (animal) y el conocimiento humano?",
    "opciones": [
      "No existe ninguna diferencia; ambos captan esencias abstractas del mismo modo.",
      "El conocimiento animal es inmaterial; el humano es además espiritual y universal.",
      "Los animales razonan lógicamente silogismos y los hombres solo usan instintos.",
      "El conocimiento humano es solo físico, mientras que los animales captan ideas puras."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Incluso la percepción animal es inmaterial (capta formas sensibles), pero el conocimiento humano trasciende lo sensible siendo además espiritual e intelectual.",
    "explicacionAlternativa": "El perro reconoce la figura y olor de su dueño; el humano además entiende el concepto abstracto de 'fidelidad' y 'justicia'."
  },
  {
    "id": 65,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "En el conocimiento humano se distinguen dos niveles de potencia y acto. El primer nivel consiste en:",
    "opciones": [
      "La pérdida de la memoria por falta de uso de las capacidades racionales.",
      "La formulación de hipótesis científicas sin necesidad de aprender nada.",
      "El paso de la ignorancia a la posesión del saber como hábito o ciencia.",
      "El cambio súbito de una materia inorgánica a un organismo vivo superior."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "El primer nivel es el paso de la ignorancia al conocimiento poseído habitualmente (por ejemplo, de no ser médico ni saber medicina, a graduarse de médico).",
    "explicacionAlternativa": "Estudiar la carrera de medicina y aprobar: pasaste de no saber nada a tener el título y el conocimiento guardado en tu memoria."
  },
  {
    "id": 66,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿En qué consiste el segundo nivel de potencia y acto en el conocimiento humano?",
    "opciones": [
      "En olvidar los conocimientos antiguos para adquirir nuevas experiencias.",
      "En la transformación de los conceptos racionales en reflejos corporales a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "En el paso de un conocimiento poseído como hábito a su consideración en acto.",
      "En la invención de un lenguaje nuevo incomprensible para los demás."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "El segundo nivel es el paso del conocimiento poseído como hábito a su ejercicio activo (el médico que está ahora mismo diagnosticando a un paciente).",
    "explicacionAlternativa": "Saber hablar inglés (hábito) frente a estar conversando en inglés en este preciso instante (acto segundo)."
  },
  {
    "id": 67,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "[Ejemplo del texto: Doctor en filosofía] Un filósofo que está profundamente dormido en su cama se encuentra en:",
    "opciones": [
      "Acto segundo perfecto, porque soñar es la máxima actividad filosófica.",
      "Acto primero (posee el hábito en su mente), pero en potencia respecto al acto segundo.",
      "Ignorancia absoluta de la filosofía, pues ha perdido todo su conocimiento en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Un estado de cambio sustancial que ha disuelto su naturaleza humana."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Posee el hábito (es filósofo, no lo ha olvidado), pero está en potencia de considerarlo y ejercerlo en acto cuando despierte y piense en ello.",
    "explicacionAlternativa": "El guitarrista dormido sigue sabiendo tocar la guitarra (hábito), pero tocará en acto recién cuando tome el instrumento."
  },
  {
    "id": 68,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿Por qué las cosas materiales, en tanto que puramente materiales, pierden su forma cuando reciben otra?",
    "opciones": [
      "Porque los sentidos humanos imponen un límite artificial a la materia inerte.",
      "Porque la materia odia las formas geométricas y busca volver al caos según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Porque la materia física solo puede soportar una determinación contraria a la vez.",
      "Porque carecen de espacio suficiente en sus átomos para conservar colores."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "La materia física está determinada por su forma actual; para recibir la forma de silla, la madera debe perder su forma previa de mesa o árbol. No puede tener dos formas incompatibles a la vez.",
    "explicacionAlternativa": "Si derrites una moneda de plata para hacer un anillo, el anillo se forma pero la moneda desaparece."
  },
  {
    "id": 69,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿Qué facultad humana es capaz de abstraer la esencia universal de las cosas sensibles?",
    "opciones": [
      "La vista ocular mediante la retina y el nervio óptico.",
      "El sentido del tacto mediante receptores nerviosos en la piel.",
      "La memoria mecánica que almacena sonidos y colores exactos tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "El entendimiento (inteligencia), mediante la inmaterialidad espiritual."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "El entendimiento trasciende los datos singulares sensibles para captar la esencia inteligible universal de la realidad.",
    "explicacionAlternativa": "Los ojos ven este perro blanco particular; la inteligencia comprende qué es 'el perro' en general."
  },
  {
    "id": 70,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿Por qué el conocimiento enriquece el ser del sujeto cognoscente sin aumentarle peso físico?",
    "opciones": [
      "Porque el aumento de ser es de orden inmaterial y perfecciona la actualidad mental.",
      "Porque los conocimientos adquiridos son ilusiones sin ningún valor real.",
      "Porque la mente expulsa calor corporal para compensar el peso de las ideas.",
      "Porque la memoria humana borra células cerebrales cada vez que aprende algo tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Hay un aumento real del ser y un incremento de actualidad, pero al ser inmaterial, enriquece ontológicamente al ser sin modificar su masa física.",
    "explicacionAlternativa": "Aprender tres idiomas nuevos te hace más sabio y culto, pero no aumentas tres kilos de peso en la balanza."
  },
  {
    "id": 71,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "[Pregunta Trampa] Si un animal capta inmaterialmente formas sensibles, ¿significa que el animal posee un alma espiritual inmortal?",
    "opciones": [
      "Sí, ya que no existe diferencia entre alma sensitiva y entendimiento racional.",
      "No, la inmaterialidad sensitiva sigue ligada intrínsecamente a órganos corpóreos.",
      "Sí, porque cualquier grado de inmaterialidad implica ya vida eterna en el cielo conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "No, porque los animales son máquinas creadas artificialmente por el ser humano."
    ],
    "correcta": 1,
    "dificultad": "Trampa",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "El conocimiento sensitivo es inmaterial en cuanto recibe formas sin la materia del objeto, pero depende totalmente de órganos corporales y no alcanza el nivel espiritual universal propio del hombre.",
    "explicacionAlternativa": "La cámara de tu celular capta la imagen de la flor sin tragarse la flor, pero la cámara sigue siendo un aparato material perecedero."
  },
  {
    "id": 72,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "Etimológicamente, ¿qué raíz latina tiene el concepto de 'ser intencional' y qué sugiere?",
    "opciones": [
      "De 'intus', que denota permanecer encerrado sin mirar al exterior.",
      "De 'intentio', que alude a cometer un delito con premeditación legal.",
      "De 'intendere', que significa tender hacia, apuntar o dirigirse a un objeto.",
      "De 'intensa', que describe una emoción desbordante de alegría o tristeza a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Viene de intendere (apuntar a, dirigirse a): la forma en la mente no se encierra en sí misma, sino que apunta intencionalmente a la realidad externa.",
    "explicacionAlternativa": "Es como una flecha mental que apunta a la diana del mundo real."
  },
  {
    "id": 73,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿Qué ocurre con el objeto conocido cuando es captado por el entendimiento humano?",
    "opciones": [
      "Permanece inalterado en su ser real mientras su forma es reproducida en la mente.",
      "Pierde de inmediato su acto de ser y se convierte en una simple quimera conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "Sufre una descomposición física irreversible en su estructura externa.",
      "Es transportado mágicamente al interior del cráneo de la persona que piensa."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "El conocimiento no altera físicamente la cosa conocida; el objeto permanece en la realidad exterior mientras su forma adquiere ser intencional en la mente.",
    "explicacionAlternativa": "Mirar una montaña nevada no derrite la nieve de la montaña real."
  },
  {
    "id": 74,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿Por qué se afirma que la inmaterialidad es la raíz misma del conocimiento?",
    "opciones": [
      "Porque las ideas filosóficas son invisibles a los microscopios de laboratorio.",
      "Porque la materia odia las sensaciones y bloquea la luz del sol en los ojos.",
      "Porque solo los seres sin cuerpo pueden comunicarse entre sí en el universo en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Porque conocer exige abrirse y recibir formas ajenas sin destruirlas físicamente."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "La inmaterialidad permite poseer la perfección de lo otro en cuanto otro, sin que se produzca una absorción física material destructiva.",
    "explicacionAlternativa": "Para poder reflejar todo el paisaje, el espejo debe ser transparente y plano, no un pedazo de tierra opaca."
  },
  {
    "id": 75,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "Cuando un estudiante asiste a su primera clase de anatomía sin saber nada del cuerpo humano, se halla:",
    "opciones": [
      "En acto de ciencia médica porque ya pagó su matrícula universitaria.",
      "En potencia pura respecto al hábito cognoscitivo de la ciencia anatómica.",
      "En imposibilidad ontológica de aprender nada por carecer de experiencia previa.",
      "En posesión inconsciente de todos los tratados médicos de la historia."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Está en ignorancia (potencia respecto al hábito); al estudiar e incorporar los conocimientos, pasará al acto primero (hábito científico).",
    "explicacionAlternativa": "Un cuaderno con todas sus hojas en blanco esperando ser llenado de apuntes."
  },
  {
    "id": 76,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿Cuál es la causa de que un animal no pueda arrebatar a otro la forma aprendida en su mente?",
    "opciones": [
      "Porque los animales firman contratos de propiedad intelectual entre ellos.",
      "Porque las formas cognoscitivas quedan integradas de modo inmaterial en su ser.",
      "Porque la forma sensible pesa tanto que ningún otro ser puede cargarla.",
      "Porque los sentidos corporales destruyen el objeto sensible al mirarlo a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Nadie puede arrebatarle esa forma sensible adquirida, pues ha pasado a enriquecer la actualidad inmaterial interior de su propia conciencia.",
    "explicacionAlternativa": "Alguien puede quitarte la manzana de la mano, pero nadie puede quitarte el recuerdo del sabor de la manzana."
  },
  {
    "id": 77,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "Si un científico conoce de memoria la tabla periódica pero en este momento está jugando fútbol, ¿en qué estado está?",
    "opciones": [
      "Está ejerciendo la química en acto segundo mediante los músculos de sus piernas conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "Se encuentra en contradicción ontológica insalvable que destruye su mente.",
      "Posee la ciencia como hábito (acto primero), pero no la ejerce en este instante (potencia de acto segundo).",
      "Ha perdido para siempre su título universitario de químico profesional."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Tiene el hábito grabado en la memoria intelectual (acto primero), pero no está pensando en la tabla periódica en ese momento (está en potencia de actualizarla).",
    "explicacionAlternativa": "El archivo guardado en el disco duro está disponible, pero no está abierto en la pantalla de la computadora."
  },
  {
    "id": 78,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿Por qué el conocimiento humano supera infinitamente el rango de los sentidos corporales?",
    "opciones": [
      "Porque los ojos humanos tienen más megapíxeles ópticos que los de las águilas.",
      "Porque con la inteligencia el hombre puede alcanzar nociones universales e infinitas.",
      "Porque el hombre no necesita dormir ni descansar para seguir pensando ideas según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Porque el oído humano puede percibir frecuencias ultrasónicas submarinas."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "Los sentidos están atados a lo singular y material; la inteligencia humana es capaz de elevarse a las causas primeras, al ser y al infinito (Dios).",
    "explicacionAlternativa": "El ojo solo ve una piedra; la mente comprende el concepto universal de 'gravedad' y el 'origen del universo'."
  },
  {
    "id": 79,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "La operación por la cual la mente abstrae la forma prescindiendo de la materia individual se denomina:",
    "opciones": [
      "Sensación periférica.",
      "Abstracción intelectual.",
      "Imaginación alucinatoria.",
      "Fisión atómica mental."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "La abstracción es la operación intelectiva que separa la esencia universal de las condiciones materiales individualizantes de las cosas sensibles.",
    "explicacionAlternativa": "Extraer la receta común de todas las pizzas del mundo, sin importar de qué ingredientes particulares esté cubierta cada una."
  },
  {
    "id": 80,
    "examen": 4,
    "tituloExamen": "Examen 4: El Conocimiento y el Ser Intencional",
    "pregunta": "¿Qué demuestra que el conocimiento sea una perfección del ser y no una mera pérdida pasiva?",
    "opciones": [
      "Que el cognoscente se hace en cierto modo todas las cosas ampliando su ser.",
      "Que los animales inteligentes dejan de necesitar comida y agua para vivir.",
      "Que los libros de filosofía ocupan espacio físico en los estantes de madera.",
      "Que quien estudia mucho se vuelve físicamente más pesado y corpulento."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Potencia y acto en los seres vivos y el conocimiento",
    "separata": "Separata 1",
    "explicacionDetallada": "El alma es en cierto modo todas las cosas (Aristóteles): el conocer enriquece ontológicamente al sujeto haciéndole partícipe de las perfecciones de lo real.",
    "explicacionAlternativa": "Conocer el mundo no te achica: hace que tu mente sea un universo interior infinito."
  },
  {
    "id": 81,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "Etimológica y metafísicamente, ¿qué es la 'esencia' (essentia) de un ente?",
    "opciones": [
      "Aquello que una cosa es, o la manera particular de ser de ese ente.",
      "El acto supremo que crea de la nada galaxias y sistemas estelares.",
      "Una palabra mágica que usan los poetas para describir sentimientos.",
      "El conjunto accidental de colores que se borran con la luz del día en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "Esencia proviene de esse: si esse es ser, esencia es 'manera de ser', aquello que la cosa es, o aquello por lo cual una cosa es lo que es.",
    "explicacionAlternativa": "Es el ADN o diseño fundamental: lo que hace que un gato sea gato y no un caballo."
  },
  {
    "id": 82,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Cuándo se denomina con propiedad 'naturaleza' a la esencia de una cosa?",
    "opciones": [
      "Cuando deja de tener leyes racionales y actúa por puro capricho ciego mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Cuando se mide la cantidad de minerales presentes en su estructura física.",
      "Cuando es considerada como principio y fuente de las operaciones propias del ente.",
      "Cuando se considera exclusivamente a los bosques vírgenes no talados."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "La esencia considerada como principio u origen de las operaciones propias de una cosa se llama naturaleza (ej. es propio de la naturaleza humana asociarse).",
    "explicacionAlternativa": "'Esencia' es lo que eres; 'naturaleza' es esa misma esencia vista como motor de cómo te comportas y actúas."
  },
  {
    "id": 83,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "[Ejemplo del texto] Decir que 'es conforme a la naturaleza humana entrar en sociedad con otros hombres' significa que:",
    "opciones": [
      "Esa operación brota directamente de la esencia del hombre como principio de acción.",
      "Los seres humanos no tienen libre albedrío y actúan igual que las abejas obreras.",
      "Los hombres fueron forzados por tiranos primitivos a vivir agrupados en tribus según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "La sociedad es una convención artificial que destruye la bondad natural humana."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "La operación por la cual el hombre se asocia con otros se deriva de su naturaleza, es decir, de su esencia que determina que esas operaciones sean específicamente humanas.",
    "explicacionAlternativa": "Un pez nada porque su naturaleza acuática lo determina a nadar; el ser humano convive porque su naturaleza es social y racional."
  },
  {
    "id": 84,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Qué relación existe entre la esencia y la substancia según la separata?",
    "opciones": [
      "La substancia no tiene ninguna relación con la esencia en el mundo visible.",
      "Son dos términos antagónicos que jamás pueden encontrarse en el mismo sujeto conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "La esencia destruye a la substancia transformándola en un accidente secundario.",
      "La esencia es la determinación metafísica que especifica qué tipo de substancia es."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "La esencia es la determinación metafísica de la substancia. Si decimos 'esto es una substancia', la pregunta siguiente es '¿qué tipo de substancia?', cuya respuesta expresa la esencia.",
    "explicacionAlternativa": "'Substancia' te dice que existe en sí; 'esencia' te dice qué tipo de ser es (un roble, un león o un ser humano)."
  },
  {
    "id": 85,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Tienen los 'accidentes' esencia en sentido riguroso y estricto?",
    "opciones": [
      "Solo los accidentes de color y peso poseen esencia estricta según Aristóteles.",
      "En sentido estricto no, porque solo existen en relación y dependencia de la substancia.",
      "Sí, y su esencia es infinitamente superior a la esencia de cualquier ser vivo a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Sí, porque los accidentes son substancias independientes que flotan en el aire."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "En sentido estricto no tienen esencia propia independiente, porque su ser no es 'en sí' sino 'en otro', en la substancia. Solo tienen esencia en sentido analógico o secundario.",
    "explicacionAlternativa": "La 'blancura' no camina sola por la calle; solo existe si hay una pared blanca, leche blanca o nieve blanca."
  },
  {
    "id": 86,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Cómo se vincula el concepto mental abstracto con la esencia de las cosas?",
    "opciones": [
      "El concepto es una pintura material de los colores exteriores del objeto sensible.",
      "El concepto es la representación inteligible en nuestra mente de la esencia real.",
      "El concepto es más pesado físicamente que el objeto material que describe.",
      "El concepto es una mentira subjetiva que inventa la razón sin ningún valor."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "El concepto o idea es el medio por el cual la inteligencia capta y retiene de modo abstracto y universal la esencia objetiva de la realidad.",
    "explicacionAlternativa": "La esencia del triángulo está en la figura real; el concepto de triángulo está en tu mente entendiendo sus propiedades."
  },
  {
    "id": 87,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Qué es la 'definición' en la lógica aristotélica y metafísica clásica?",
    "opciones": [
      "Una opinión personal que cambia según las encuestas de opinión pública en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "La descripción poética de las sensaciones subjetivas que causa un paisaje.",
      "La expresión verbal o lógica que delimita y manifiesta la esencia de un ente.",
      "La lista de los precios de mercado que tienen los objetos comerciales hoy."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "La definición expresa de forma conceptual y discursiva la esencia o límites formales de una cosa (ej. 'el hombre es un animal racional').",
    "explicacionAlternativa": "Poner en palabras exactas los límites que definen qué es esa cosa y qué no es."
  },
  {
    "id": 88,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "[Pregunta Trampa] Si dos gemelos idénticos tienen la misma esencia específica humana, ¿por qué son dos individuos diferentes?",
    "opciones": [
      "Porque uno posee alma espiritual y el otro es un androide creado en laboratorios.",
      "Porque uno de ellos carece por completo de naturaleza y de dignidad humana.",
      "Porque la esencia común es recibida e individualizada en materias cuantitativas distintas.",
      "Porque la esencia humana cambia de definición con cada recién nacido en el mundo mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos."
    ],
    "correcta": 2,
    "dificultad": "Trampa",
    "seccion": "4. La esencia y la individualización",
    "separata": "Separata 1 y 2",
    "explicacionDetallada": "La esencia específica ('humanidad') es idéntica en ambos; pero está individualizada por la materia signada por la cantidad (materia quantitate signata), dando dos individuos numéricamente distintos.",
    "explicacionAlternativa": "Dos pastelitos horneados con el mismo molde: la forma es la misma, pero están hechos de porciones separadas de masa."
  },
  {
    "id": 89,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Por qué se afirma que la esencia se relaciona con el acto de ser (esse) como la potencia al acto?",
    "opciones": [
      "Porque ninguna criatura puede tener esencia sin ser antes Dios todopoderoso en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Porque el esse es un accidente pasajero y la esencia es una substancia inerte.",
      "Porque la esencia es la capacidad o molde potencial de recibir el acto real de ser.",
      "Porque la esencia destruye al esse cuando ambos entran en contacto físico."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "2.1 y 4. La esencia",
    "separata": "Separata 1",
    "explicacionDetallada": "La esencia es la potencia de ser (qué puede ser la cosa), y el esse es el acto realizador de esa posibilidad en la existencia concreta.",
    "explicacionAlternativa": "La lámpara tiene la potencia de iluminar (esencia); la electricidad que la enciende aquí y ahora es su acto (esse)."
  },
  {
    "id": 90,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Cuál es la esencia del ser humano según la célebre fórmula tradicional?",
    "opciones": [
      "Animal racional (substancia compuesta de cuerpo material y alma intelectiva).",
      "Un haz de impresiones sensoriales pasajeras condenadas a la disolución según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Un cuerpo biológico guiado por impulsos eléctricos sin voluntad alguna.",
      "Un ser puramente económico determinado por las relaciones de producción."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "El hombre es un animal racional: especie compuesta de género próximo (animalidad) y diferencia específica (racionalidad espiritual).",
    "explicacionAlternativa": "Compartimos funciones biológicas con los animales, pero nuestra capacidad de pensar y amar libremente nos hace humanos."
  },
  {
    "id": 91,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Qué ocurre si intentamos definir una cosa únicamente por sus accidentes externos (como su peso o color)?",
    "opciones": [
      "Obtenemos solo una descripción fenoménica, pero no su definición esencial real.",
      "La cosa se transforma de inmediato en una substancia espiritual invisible a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Demostramos que los objetos materiales carecen de materia y de forma.",
      "Logramos la definición metafísica más perfecta y duradera posible."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "Los accidentes varían y no son la esencia; describir a Sócrates como 'gordo y calvo' no define su esencia humana, sino sus rasgos mudables accidentales.",
    "explicacionAlternativa": "Decir que un libro 'pesa 300 gramos y tiene tapa roja' no te dice de qué trata el libro ni qué historia cuenta."
  },
  {
    "id": 92,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Por qué la esencia de una sustancia creada nunca es 'ser' a secas?",
    "opciones": [
      "Porque las criaturas están hechas exclusivamente de lenguaje gramatical.",
      "Porque Aristóteles determinó que las substancias solo duran cien años.",
      "Porque si fuera ser por esencia sería infinita, increada y Dios mismo.",
      "Porque la materia física impide que cualquier objeto exista en la realidad."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "2.1 y 4. La esencia",
    "separata": "Separata 1",
    "explicacionDetallada": "Si la esencia de una criatura fuera el ser mismo, existiría necesariamente por sí misma sin poder no existir; eso solo le compete a Dios (Ipsum Esse Subsistens).",
    "explicacionAlternativa": "Si tú fueras la vida misma por esencia, jamás podrías morir ni enfermar; pero eres alguien que 'recibió' la vida prestada."
  },
  {
    "id": 93,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "Cuando decimos que 'el perro ladra por naturaleza', el término naturaleza alude a:",
    "opciones": [
      "El bosque o campo abierto donde los animales cazan presas libres.",
      "La influencia de las constelaciones astrales sobre la conducta biológica.",
      "La esencia canina como principio operativo interno que produce el ladrido.",
      "Una orden dada por los dueños que enseñaron trucos al animal doméstico de acuerdo con ciertas posturas positivistas y materialistas del pensamiento decimonónico."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "La naturaleza es la esencia en cuanto principio de operaciones; ladrar es una operación que brota connaturalmente de la esencia del perro.",
    "explicacionAlternativa": "Nadie tiene que enseñar a un pájaro a volar: vuela porque su propia constitución orgánica lo lleva a eso."
  },
  {
    "id": 94,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Puede una cosa cambiar de esencia sin dejar de ser lo que era?",
    "opciones": [
      "Sí, porque la esencia es un accidente mudable semejante al corte de cabello.",
      "Solo si se trata de un mineral sumergido en agua salada a gran presión.",
      "No, si cambia de esencia deja de ser esa cosa y se convierte en otra sustancia.",
      "Sí, las cosas cambian de esencia todos los días según la moda contemporánea mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "La esencia es aquello por lo cual la cosa es lo que es; si se altera la esencia, la cosa deja de ser lo que era (ocurre un cambio sustancial).",
    "explicacionAlternativa": "Si le quitas las tres esquinas y los tres lados a un triángulo, ya no es un triángulo: lo destruiste."
  },
  {
    "id": 95,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "En las sustancias inmateriales (como los ángeles), ¿cómo se constituye su esencia?",
    "opciones": [
      "Se compone de átomos espirituales de densidad cuántica infinita.",
      "Se compone de cuerpo humano transfigurado sin órganos internos.",
      "Carecen totalmente de esencia y de cualquier acto de existencia real.",
      "Es pura forma sin materia alguna, siendo su forma toda su esencia."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Materia y forma: Substancias inmateriales",
    "separata": "Separata 1 y 2",
    "explicacionDetallada": "En las sustancias simples o inmateriales la forma es toda la esencia, pues carecen de materia. En las materiales, la esencia es compuesta de materia y forma.",
    "explicacionAlternativa": "Un círculo geométrico perfecto pensado en la mente: no tiene grosor de madera ni de hierro, es puro diseño formal."
  },
  {
    "id": 96,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Qué expresa la diferencia específica dentro de una definición esencial clásica?",
    "opciones": [
      "El rasgo propio que distingue a la especie de las demás del mismo género.",
      "El peso numérico del individuo en una balanza de precisión decimal.",
      "El nombre del creador o fabricante del artefacto industrial analizado.",
      "La fecha exacta en que el objeto fue descubierto por los arqueólogos según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "La definición se compone de género próximo y diferencia específica; en 'animal racional', el género es animal y la diferencia específica es racional.",
    "explicacionAlternativa": "Decir 'vehículo' abarca autos, motos y aviones (género); decir 'terrestre de cuatro ruedas' especifica el auto."
  },
  {
    "id": 97,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "[Pregunta Trampa] ¿Es la esencia de una cosa un invento subjetivo del lenguaje creado por la sociedad?",
    "opciones": [
      "Sí, porque las palabras no tienen ninguna conexión objetiva con el mundo real.",
      "No, la esencia es una estructura metafísica real ontológicamente presente en el ente.",
      "Sí, ya que cada individuo tiene derecho a redefinir la realidad a su gusto.",
      "Solo en las culturas occidentales que adoptaron el alfabeto latino tradicional conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas."
    ],
    "correcta": 1,
    "dificultad": "Trampa",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "Para el realismo metafísico clásico, la esencia no es una convención lingüística arbitraria, sino el modo de ser real que funda la inteligibilidad objetiva del ente.",
    "explicacionAlternativa": "El león era carnívoro y cazador mucho antes de que el ser humano inventara la palabra 'león'."
  },
  {
    "id": 98,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Cuál es la función del concepto mental frente a la multiplicidad de individuos de una misma especie?",
    "opciones": [
      "Confundir a la mente para que no pueda reconocer a las personas por su nombre.",
      "Eliminar físicamente a los individuos dejando solo un dibujo en papel.",
      "Unificar bajo una misma noción inteligible universal la esencia compartida.",
      "Impedir que las ciencias biológicas puedan clasificar a los animales vivos."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "El concepto de 'árbol' o 'hombre' recoge de modo unitario la esencia que se halla multiplicada en millones de individuos concretos de la realidad.",
    "explicacionAlternativa": "Una sola palabra ('árbol') te permite entender qué tienen en común los millones de árboles del planeta."
  },
  {
    "id": 99,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "Cuando una persona afirma 'actuó contra su propia naturaleza', en sentido filosófico significa que:",
    "opciones": [
      "Viajó en avión en vez de caminar por sus propios medios corporales.",
      "Realizó una acción contraria a las exigencias y fines de su esencia racional.",
      "Dejó de comer vegetales para alimentarse exclusivamente de comida rápida a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Fue al campo a talar árboles sin permiso de las autoridades forestales."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "4. La esencia: Esclarecimiento de términos",
    "separata": "Separata 1",
    "explicacionDetallada": "Dado que la naturaleza es el principio del obrar conforme a la razón, actuar de modo inhumano o irracional es contradecir los fines propios de la naturaleza humana.",
    "explicacionAlternativa": "Un ser humano comportándose como una bestia despiadada traiciona su propia dignidad racional."
  },
  {
    "id": 100,
    "examen": 5,
    "tituloExamen": "Examen 5: Esencia, Naturaleza y Definición",
    "pregunta": "¿Por qué la metafísica de Santo Tomás es llamada la 'metafísica del esse' frente a otras filosofías esencialistas?",
    "opciones": [
      "Porque sostiene que las esencias flotan en un mundo celeste de ideas puras.",
      "Porque prohíbe estudiar las causas materiales de las cosas en la naturaleza.",
      "Porque reconoce que el acto de ser (esse) es el acto último y cumbre de toda perfección.",
      "Porque niega la existencia de las esencias y afirma el caos ontológico a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "2.1 y síntesis de la esencia",
    "separata": "Separata 1",
    "explicacionDetallada": "Para Santo Tomás, la esencia no es lo supremo; la esencia es solo potencia que recibe y limita al esse. El esse (acto de ser) es el acto de todos los actos y la perfección fontal.",
    "explicacionAlternativa": "Un automóvil hermosísimo (esencia) no sirve de nada sin el combustible y motor encendido que lo hace funcionar (esse)."
  },
  {
    "id": 101,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Cuál fue el error de Platón respecto a la posibilidad de conocer con certeza el mundo sensible?",
    "opciones": [
      "Concluir que como todo cambia en lo sensible, solo cabe opinión (doxa) y no ciencia.",
      "Creer que los sentidos corporales eran infalibles y nunca cometían equivocaciones tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "Sostener que la materia está compuesta de pequeñas esferas de fuego y agua pura.",
      "Afirmar que las cosas materiales eran dioses dotados de inteligencia inmortal."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Substancia y accidentes: Evidencia del cambio y verdad del ser",
    "separata": "Separata 2",
    "explicacionDetallada": "Platón veía que todo cambiaba en el mundo sensible, de lo cual concluyó que no podemos tener ciencia (episteme) de este mundo, sino a lo sumo mera opinión cambiante.",
    "explicacionAlternativa": "Platón pensó: 'si el río corre y el agua cambia a cada segundo, es imposible estudiar el río de forma fija'."
  },
  {
    "id": 102,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Cómo superó Aristóteles la postura platónica para fundar las ciencias de la naturaleza?",
    "opciones": [
      "Inventando telescopios y microscopios de gran alcance en los templos atenienses.",
      "Prohibiendo a sus discípulos observar las plantas y los animales del campo.",
      "Descubriendo la substancia como el elemento permanente que subyace a los cambios.",
      "Negando por completo la existencia del cambio y afirmando que nada se mueve jamás."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Substancia y accidentes: Evidencia del cambio y verdad del ser",
    "separata": "Separata 2",
    "explicacionDetallada": "Aristóteles alcanzó la substancia: no hay cambio sin algo que cambie. Ese elemento permanente que permanece a través del cambio justifica la ciencia del mundo físico.",
    "explicacionAlternativa": "Aristóteles dijo: 'El agua cambia de temperatura o de lugar, pero sigue habiendo un elemento permanente (el agua) que podemos estudiar'."
  },
  {
    "id": 103,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Cuál es la definición clásica y técnica de 'substancia' según la metafísica?",
    "opciones": [
      "El conjunto de palabras que un hablante utiliza para convencer a su público según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Aquello a lo que le compete existir por sí mismo y en sí mismo (ens per se).",
      "Cualquier cualidad superficial que cambia con el calor o la luz ambiental.",
      "Una energía química invisible que fluye entre los cuerpos celestes."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "La noción de ente conviene primariamente a la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "Substancia es aquello que existe o es por sí mismo y en sí mismo. Es el sujeto primario al cual le conviene de modo principal la noción de ens.",
    "explicacionAlternativa": "Un perro existe por sí mismo; sus ladridos o su color canela no pueden existir flotando en el aire sin el perro."
  },
  {
    "id": 104,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "Etimológicamente, ¿de qué verbo latino deriva la palabra 'substancia' y qué describe?",
    "opciones": [
      "De 'sub-stituere', que indica reemplazar un objeto viejo por uno moderno mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "De 'sub-cedere', que denota retirarse o huir cobardemente ante el peligro.",
      "De 'sub-limare', que alude a elevar los deseos corporales al mundo del arte.",
      "De 'sub-stare', que literalmente significa 'estar debajo' como soporte de otros."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Cuatro aspectos de la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "Proviene de sub-stare (estar debajo), señalando que es el sujeto o substrato que sostiene y soporta a los accidentes.",
    "explicacionAlternativa": "Es la mesa firme que aguanta sobre su lomo todos los platos, vasos y cubiertos (accidentes)."
  },
  {
    "id": 105,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Cómo se define de forma clásica y célebre el concepto filosófico de 'persona'?",
    "opciones": [
      "Substancia individual de naturaleza racional que subsiste por sí misma.",
      "Un conjunto variable de sensaciones emocionales sin ningún núcleo firme.",
      "Cualquier ciudadano registrado legalmente en el padrón electoral de un país.",
      "Un organismo biológico que consume oxígeno para mantenerse con vida."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "La noción de ente conviene primariamente a la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "Definición clásica de Boecio: 'persona es una substancia individual de naturaleza racional', un ser que existe por sí mismo dotado de inteligencia y libertad.",
    "explicacionAlternativa": "No eres un montón de piezas sueltas ni una masa social anónima: eres un ser único, subsistente y capaz de pensar y amar."
  },
  {
    "id": 106,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Por qué los accidentes son denominados por los metafísicos 'entes del ente' (entia entis)?",
    "opciones": [
      "Porque su modo de ser es secundario y solo existen adheridos a una substancia.",
      "Porque fueron inventados por los filósofos para complicar las explicaciones lógicas.",
      "Porque poseen mayor perfección y eternidad que cualquier substancia creada.",
      "Porque son seres independientes que compiten con las substancias vivas."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Accidentes: modos secundarios del ente",
    "separata": "Separata 2",
    "explicacionDetallada": "Los accidentes tienen como modo de ser el 'ser en otro' (in alio esse). No son propiamente entes en sí, sino modos o afecciones de un ente (entia entis).",
    "explicacionAlternativa": "El color azul no camina solo por la calle; es un 'accidente' que tiñe a un auto, a un libro o a una camisa."
  },
  {
    "id": 107,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "Cuando contemplamos a un perro correr por el jardín, su peso, pelaje y velocidad son:",
    "opciones": [
      "Substancias espirituales que habitan dentro del cuerpo del animal.",
      "Determinaciones accidentales secundarias y mudables de ese sujeto permanente.",
      "Las causas finales primeras que ordenan la creación del cosmos universal en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Ilusiones ópticas provocadas por el sol que no guardan relación con el perro."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Accidentes: modos secundarios del ente",
    "separata": "Separata 2",
    "explicacionDetallada": "Son accidentes: determinaciones que aparecen multiplicadas en un sujeto permanente, realmente distintas de la substancia a la que informan.",
    "explicacionAlternativa": "El perro puede correr rápido, engordar o cortarse el pelo, pero sigue siendo el mismo perro sustancial."
  },
  {
    "id": 108,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Por qué las substancias creadas necesitan perfeccionarse mediante accidentes?",
    "opciones": [
      "Porque carecen por completo de materia y requieren átomos para verse en el mundo.",
      "Porque de lo contrario no podrían ser pronunciadas en el lenguaje gramatical.",
      "Porque su acto de ser es limitado por su esencia y precisan de formas accidentales.",
      "Porque son tan perfectas que necesitan inventar defectos para entretenerse según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Accidentes: modos secundarios del ente",
    "separata": "Separata 2",
    "explicacionDetallada": "Las substancias creadas son finitas e imperfectas; necesitan enriquecerse y actualizar sus potencias mediante formas accidentales (conocimientos, virtudes, operaciones).",
    "explicacionAlternativa": "Un ser humano nace sin saber leer ni escribir; adquiere el hábito de la lectura (accidente de cualidad) para ser más pleno y culto."
  },
  {
    "id": 109,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Cuáles son los cuatro aspectos fundamentales que manifiestan la realidad última de la substancia?",
    "opciones": [
      "Peso, volumen, aceleración gravitatoria y temperatura corporal.",
      "Gobernante político, leyes civiles, castigos penitenciarios y tributos fiscales tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "Sujeto de accidentes, subsiste por sí misma, acto de ser en sí, y llena la noción de ens.",
      "Materia inerte, vacío espacial, energía electromagnética y tiempo cósmico."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Cuatro aspectos de la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "1) Sujeto o substrato (sub-stare); 2) Aquello que subsiste por sí mismo; 3) Posee el esse en sí y no en otro; 4) Satisface con plenitud la noción de ens.",
    "explicacionAlternativa": "Es el pilar central: aguanta el techo, se sostiene sobre sus pies, tiene vida propia y es el verdadero ser del edificio."
  },
  {
    "id": 110,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "[Pregunta Trampa] Si una persona pierde un brazo en un accidente, ¿ha perdido su substancia humana?",
    "opciones": [
      "Sí, pues a partir de ese momento pasa a pertenecer a la categoría de los vegetales.",
      "No, ha sufrido una alteración accidental de su cantidad y conformación física.",
      "Sí, porque la substancia humana se divide matemáticamente según los órganos.",
      "Solo si no recibe asistencia médica inmediata antes de cumplirse veinticuatro horas."
    ],
    "correcta": 1,
    "dificultad": "Trampa",
    "seccion": "Substancia y accidentes: Evidencia del cambio",
    "separata": "Separata 2",
    "explicacionDetallada": "La substancia permanece a través del cambio accidental. La pérdida de un miembro afecta la integridad accidental del cuerpo, pero no destruye la substancia del ser humano.",
    "explicacionAlternativa": "Si a un automóvil se le pincha o rompe una rueda, sigue siendo sustancialmente un automóvil, no una bicicleta."
  },
  {
    "id": 111,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Qué ocurre si una filosofía intenta captar la substancia mediante la imaginación sensorial?",
    "opciones": [
      "Logra sustituir los tratados de metafísica por fotografías digitales de alta definición.",
      "Descubre que todos los cuerpos del universo están formados por pura energía lumínica.",
      "Alcanza el conocimiento científico más riguroso y perfecto de la realidad a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Fracasa inevitablemente, pues la substancia es inteligible (transensible) y no una imagen."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Crítica moderna a la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "La substancia no es un objeto sensible, sino un concepto inteligible captado por el entendimiento (intus-legere). Querer verla con los ojos es como querer oler con el oído.",
    "explicacionAlternativa": "Tus ojos ven colores y figuras, pero solo tu cerebro entiende qué cosa sustancial está detrás de esos colores."
  },
  {
    "id": 112,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "[Comparación del texto] Intentar usar los sentidos corporales para ver la substancia equivale a:",
    "opciones": [
      "Intentar pintar un cuadro al óleo utilizando exclusivamente palabras habladas.",
      "Intentar oler con el oído o medir el peso de un animal con un termómetro.",
      "Intentar escuchar música mediante el tacto de los dedos sobre una mesa fría.",
      "Intentar oler con los ojos o medir la temperatura con una regla milimetrada."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Crítica moderna a la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "El texto señala expresamente que pretender captar la substancia con los sentidos corporales es como 'intentar oler con el oído o medir el peso de un animal con un termómetro'.",
    "explicacionAlternativa": "Usar la herramienta equivocada para el trabajo: los sentidos perciben accidentes; solo el entendimiento capta la sustancia."
  },
  {
    "id": 113,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Cuál es la función cognoscitiva de los accidentes respecto a la substancia a la que pertenecen?",
    "opciones": [
      "Manifestar y revelar la substancia a la inteligencia a través de los sentidos.",
      "Multiplicar los átomos de la substancia hasta hacerla invisible al ojo humano.",
      "Ocultar perversamente la substancia para que el ser humano jamás la conozca conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "Destruir paulatinamente la substancia hasta transformarla en nada pura."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Substancia y accidentes: Revelación de la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "Los accidentes no son una envoltura que oculte la substancia, sino precisamente aquello que manifiesta y revela la substancia a nuestro entendimiento.",
    "explicacionAlternativa": "La voz, las palabras y las acciones de una persona (accidentes) te permiten conocer su personalidad y su fondo (sustancia)."
  },
  {
    "id": 114,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "Etimológicamente, ¿de qué expresión latina proviene 'inteligencia' y cuál es su significado?",
    "opciones": [
      "De 'intra-gerere', que alude a transportar mercancías pesadas entre ciudades según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "De 'intus-legere', que describe la capacidad de 'leer hacia adentro' de la realidad.",
      "De 'inter-mittere', que describe pausar una conversación durante unos minutos.",
      "De 'inter-legere', que significa coleccionar leyes civiles en los juzgados."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Crítica moderna a la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "Inteligencia proviene de intus-legere (leer en el interior): la capacidad intelectiva de penetrar la superficie sensorial para alcanzar la verdad interior del ser.",
    "explicacionAlternativa": "No quedarse con la tapa del libro, sino abrirlo y leer el mensaje de fondo que lleva adentro."
  },
  {
    "id": 115,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "En la analogía del lenguaje, ¿con qué parte de la oración se compara a la substancia y al accidente?",
    "opciones": [
      "La substancia es la conjunción coordinante y el accidente es la preposición simple.",
      "La substancia es el punto final y los accidentes son los signos de exclamación.",
      "La substancia es el sustantivo y los accidentes corresponden a los adjetivos.",
      "La substancia es el adverbio de tiempo y los accidentes son los pronombres personales."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "El ente es análogo: Substancia y accidente",
    "separata": "Separata 1 y 2",
    "explicacionDetallada": "Ocurre como en el lenguaje: el sustantivo da sentido y soporte al adjetivo, que por sí solo suelto no indica ninguna realidad concreta.",
    "explicacionAlternativa": "Si dices 'verde' nadie sabe de qué hablas; pero si dices 'árbol verde', el sustantivo le da sentido al adjetivo."
  },
  {
    "id": 116,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Por qué la permanencia en el cambio es un rasgo característico indispensable de la substancia?",
    "opciones": [
      "Porque impide que los seres humanos puedan envejecer o morir biológicamente conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "Porque permite a los científicos predecir con exactitud el futuro astrológico.",
      "Porque garantiza que los objetos mantengan su identidad a través de las mutaciones.",
      "Porque congela los átomos en una temperatura fija de cero grados absolutos."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Substancia y accidentes: Evidencia del cambio",
    "separata": "Separata 2",
    "explicacionDetallada": "Si no hubiera nada permanente en las mutaciones accidentales, no habría el cambio 'de algo', sino una continua sucesión inconexa de aniquilaciones y creaciones.",
    "explicacionAlternativa": "Para poder decir que Juan aprendió a tocar el piano, Juan debe seguir siendo Juan antes y después de aprender."
  },
  {
    "id": 117,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "Cuando una substancia ejerce una acción propia (como un caballo trotando), esa acción es:",
    "opciones": [
      "Una violación directa de las leyes metafísicas de la potencia y el acto.",
      "Una nueva substancia que brota del cuerpo del animal y camina sola.",
      "Una prueba científica de que los caballos son seres puramente imaginarios tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "Un accidente operativo que perfecciona en acto la potencia activa del sujeto."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Accidentes: modos secundarios del ente",
    "separata": "Separata 2",
    "explicacionDetallada": "La acción es uno de los nueve accidentes aristotélicos; brota de la potencia operativa de la substancia y actualiza su capacidad natural de movimiento.",
    "explicacionAlternativa": "El acto de correr es una actividad que tú realizas: te pone en movimiento, pero no se desprende de ti."
  },
  {
    "id": 118,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Qué consecuencia tuvo en ciertas teologías modernas el rechazo o crítica empirista a la substancia?",
    "opciones": [
      "Lograron explicar con absoluta claridad matemática todos los dogmas de fe según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "Demostraron que el ser humano no necesita de Dios para alcanzar la salvación.",
      "Cayeron en el error de prescindir de la substancia, desvirtuando dogmas como la Eucaristía.",
      "Convencieron a todos los científicos del mundo de adoptar el catecismo cristiano."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Crítica moderna a la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "Al intentar prescindir de la substancia debido a prejuicios empiristas, ciertas teologías deformaron verdades como la transustanciación eucarística o la persona de Cristo.",
    "explicacionAlternativa": "Si eliminas el concepto de 'sustancia', no puedes explicar cómo el pan se convierte sustancialmente en el Cuerpo de Cristo manteniendo los accidentes visibles de pan."
  },
  {
    "id": 119,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "La substancia es descrita como 'unidad de ser en la multiplicidad' porque:",
    "opciones": [
      "Destruye todas las diferencias individuales de los seres haciéndolos iguales mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Solo existe en los grupos políticos que logran unanimidad en sus votos.",
      "Se multiplica en infinitos dioses materiales repartidos por el universo.",
      "Reúne en un único sujeto individual una gran variedad de partes y accidentes."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "La noción de ente conviene primariamente a la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "En un sujeto concreto (ej. un hombre) concurren múltiples determinaciones (altura, peso, saberes, relaciones), pero todas integradas en una unidad perfecta sustancial.",
    "explicacionAlternativa": "Tienes dos ojos, dos brazos, pensamientos y recuerdos, pero todos ellos pertenecen a un único e indivisible 'tú'."
  },
  {
    "id": 120,
    "examen": 6,
    "tituloExamen": "Examen 6: Substancia y Accidentes: Noción, Evidencia y Subsistencia",
    "pregunta": "¿Por qué un árbol plantado en una plaza es una substancia y la sombra que proyecta es un accidente?",
    "opciones": [
      "Porque los árboles son seres inmortales mientras que las sombras mueren al mediodía.",
      "Porque el árbol existe por sí mismo en la tierra, mientras que la sombra depende del árbol y la luz.",
      "Porque la sombra pesa más kilos en la balanza física que el tronco de madera del árbol.",
      "Porque el árbol es de color verde y las sombras solo pueden ser de color blanco puro en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Accidentes: modos secundarios del ente",
    "separata": "Separata 2",
    "explicacionDetallada": "El árbol subsiste por sí mismo (substancia); la sombra es una privación accidental de luz sobre una superficie que solo existe por la presencia interpuesta del árbol.",
    "explicacionAlternativa": "Tala el árbol y la sombra desaparece; pero el árbol no desaparece si apagas la luz."
  },
  {
    "id": 121,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "¿Cuáles son las tres formas en que la substancia se relaciona metafísicamente con los accidentes?",
    "opciones": [
      "Como el sólido, el líquido y el gaseoso en las fases de la materia.",
      "Como el padre, la madre y el hijo en una familia biológica humana de acuerdo con ciertas posturas positivistas y materialistas del pensamiento decimonónico.",
      "Como el tiempo pasado, el presente y el futuro en un reloj digital.",
      "Como sujeto de ellos, como potencia al acto, y como causa al efecto."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "d. Substancia y accidente se relacionan de tres formas",
    "separata": "Separata 2",
    "explicacionDetallada": "1) Sujeto que soporta (dependencia); 2) Potencia al acto (los accidentes perfeccionan la substancia); 3) Causa al efecto (los accidentes brotan de la substancia).",
    "explicacionAlternativa": "La substancia aguanta los accidentes (sujeto), se completa con ellos (potencia a acto) y es quien los engendra (causa a efecto)."
  },
  {
    "id": 122,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "Cuando se afirma que 'la substancia es sujeto de los accidentes', ¿qué significa en sentido metafísico?",
    "opciones": [
      "Que la substancia es esclava y está sometida al castigo de los accidentes.",
      "Que es el substrato ontológico que sostiene y da base al ser de los accidentes.",
      "Que la substancia desaparece cada vez que un accidente se hace presente en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Que solo los reyes y gobernantes tienen derecho a poseer substancias propias."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "d. Substancia y accidente se relacionan de tres formas",
    "separata": "Separata 2",
    "explicacionDetallada": "Sujeto significa 'el que sostiene o soporta, aquello que subyace'. Esto indica la dependencia metafísica radical de los accidentes respecto a la substancia.",
    "explicacionAlternativa": "Los cimientos que sostienen el edificio: si quitas la base de cemento, todo el piso se derrumba."
  },
  {
    "id": 123,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "¿Por qué se dice que la substancia se relaciona con los accidentes como la 'potencia al acto'?",
    "opciones": [
      "Porque la substancia destruye todas las potencias para convertirse en nada según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Porque la potencia siempre es superior en dignidad al acto en toda la filosofía.",
      "Porque los accidentes tienen mayor antigüedad histórica que la substancia misma.",
      "Porque la substancia es perfeccionada y determinada por las formas accidentales."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "d. Substancia y accidente se relacionan de tres formas",
    "separata": "Separata 2",
    "explicacionDetallada": "La substancia está en potencia de adquirir múltiples determinaciones; cuando adquiere una cualidad (ej. ciencia, virtud, salud), pasa al acto y se perfecciona.",
    "explicacionAlternativa": "Un lienzo en blanco tiene la capacidad (potencia) de recibir la pintura; la obra de arte terminada (accidente) lo lleva a su máxima belleza (acto)."
  },
  {
    "id": 124,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "¿En qué sentido la substancia se relaciona con los accidentes como 'la causa al efecto'?",
    "opciones": [
      "En que no existe ninguna relación causal entre el sujeto y sus propiedades en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "En que la substancia castiga a los accidentes con leyes jurídicas estrictas.",
      "En que los accidentes brotan de los principios constitutivos de la substancia.",
      "En que los accidentes son producidos por artesanos ajenos a la naturaleza."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "d. Substancia y accidente se relacionan de tres formas",
    "separata": "Separata 2",
    "explicacionDetallada": "Los accidentes propios provienen de la naturaleza misma de la substancia como efectos suyos (ej. el sentido del humor o el lenguaje brotan de la racionalidad humana).",
    "explicacionAlternativa": "El calor brota naturalmente de la brasa de fuego encendida como su efecto connatural."
  },
  {
    "id": 125,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "¿En qué consiste la predicación lógica de los accidentes según el texto?",
    "opciones": [
      "En un sermón religioso dictado por los sacerdotes los domingos por la mañana.",
      "En la traducción de textos antiguos griegos a los idiomas contemporáneos.",
      "En el acto intelectivo de afirmar o negar un concepto de otro en un juicio.",
      "En la clasificación química de los elementos según su número de protones."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Accidentes: predicación y juicio",
    "separata": "Separata 2",
    "explicacionDetallada": "La predicación es el acto de afirmar o negar un predicado de un sujeto en una proposición (ej. 'la mesa es negra'). De aquí surgen las categorías aristotélicas.",
    "explicacionAlternativa": "Decir 'el perro es grande': estás predicando (atribuyendo) la cualidad de 'grande' al sujeto 'perro'."
  },
  {
    "id": 126,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "[Ejemplo del texto: 'La mesa es negra'] En este juicio clásico, ¿cuál es el sujeto sustancial y cuál es el accidente?",
    "opciones": [
      "El sujeto sustancial es 'negra' y el accidente pasajero es 'la mesa'.",
      "El sujeto sustancial es 'la mesa' y el accidente predicado es 'negra'.",
      "Ambos términos son accidentes sin que exista ninguna substancia real.",
      "Es un juicio contradictorio que viola el principio de no-contradicción."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Accidentes: predicación y juicio",
    "separata": "Separata 2",
    "explicacionDetallada": "La mesa corresponde al sujeto (substancia que subsiste), mientras que el color negro es el predicado accidental que determina su cualidad visible.",
    "explicacionAlternativa": "La mesa sostiene el color negro; no existe la 'negrura' flotando en el aire sin mesa."
  },
  {
    "id": 127,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "¿Cuántos son los predicamentos o categorías tradicionales en los que Aristóteles divide el ente?",
    "opciones": [
      "Cincuenta categorías: una por cada estado físico de la materia.",
      "Dos categorías únicas: la nada absoluta y las ideas divinas.",
      "Tres categorías: cuerpo, mente y lenguaje simbólico.",
      "Diez categorías: una substancia y nueve géneros de accidentes."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Accidentes: clasificación de los predicamentos",
    "separata": "Separata 2",
    "explicacionDetallada": "Se divide en 10 categorías o predicamentos supremos: la substancia (sujeto principal) y los 9 accidentes (cantidad, cualidad, relación, acción, pasión, lugar, tiempo, posición y hábito).",
    "explicacionAlternativa": "Un armario con 10 cajones principales para clasificar todo lo que existe en el mundo creado."
  },
  {
    "id": 128,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "El accidente que confiere a los cuerpos materiales extensión y divisibilidad en partes se llama:",
    "opciones": [
      "Relación causal.",
      "Cualidad pura.",
      "Tiempo cronológico.",
      "Cantidad."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Accidentes: predicamentos",
    "separata": "Separata 2",
    "explicacionDetallada": "La cantidad es el primer accidente propio de las substancias corpóreas; es la que otorga partes cuantitativas, volumen y extensión espacial a la materia.",
    "explicacionAlternativa": "Medir 1.80 metros o pesar 75 kilos: la cantidad te da volumen y tamaño material."
  },
  {
    "id": 129,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "¿Qué tipo de accidente es la sabiduría, la virtud o la salud en un ser humano?",
    "opciones": [
      "Accidente de cantidad dimensional a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Accidente de cualidad (disposición o hábito perfeccionador).",
      "Accidente de tiempo calendárico.",
      "Accidente de lugar geográfico."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Accidentes: predicamentos",
    "separata": "Separata 2",
    "explicacionDetallada": "La cualidad es el accidente que determina cómo es la substancia (hábitos, facultades, cualidades sensibles, figura). Las virtudes y ciencias son cualidades estables.",
    "explicacionAlternativa": "Ser paciente, inteligente o tener buena salud describe 'cómo eres' (tus cualidades)."
  },
  {
    "id": 130,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "[Caso Práctico] La afirmación 'Pedro es el hermano mayor de Juan' expresa principalmente un accidente de:",
    "opciones": [
      "Relación (referencia real de un sujeto a otro).",
      "Cantidad continua divisible.",
      "Posición espacial corporal.",
      "Acción violenta sobre la materia de acuerdo con ciertas posturas positivistas y materialistas del pensamiento decimonónico."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Accidentes: predicamentos",
    "separata": "Separata 2",
    "explicacionDetallada": "La relación (ad aliquid) es el orden o referencia de una substancia hacia otra; la fraternidad es una relación real fundamentada en el origen familiar común.",
    "explicacionAlternativa": "Ser hermano, hijo, padre o amigo expresa cómo estás conectado o referido a otra persona."
  },
  {
    "id": 131,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "¿Por qué el empirismo moderno (como el de Locke o Hume) criticó y terminó negando la substancia?",
    "opciones": [
      "Porque no sabían leer los textos griegos de la biblioteca de Alejandría conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "Porque consideraban que la religión católica tenía demasiada influencia política.",
      "Porque pretendían verificar todo con impresiones sensibles y la substancia no se ve con los ojos.",
      "Porque descubrieron que los átomos eran esferas geométricas indestructibles."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Crítica moderna a la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "El empirismo reduce todo conocimiento válido a las sensaciones sensibles inmediatas. Como la substancia es inteligible y no una imagen sensible coloreada, la redujeron a una quimera.",
    "explicacionAlternativa": "Dijeron: 'Como no puedo tocar la sustancia pura sin tocar el color o la piel, la sustancia no existe'."
  },
  {
    "id": 132,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "¿Qué error comete quien afirma que los accidentes son una 'cáscara' que impide conocer el ser real?",
    "opciones": [
      "Aplica correctamente las reglas de la experimentación de laboratorio.",
      "Demuestra que el universo es una proyección matemática de números pares conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "Confunde la manifestación ontológica con un obstáculo físico artificial.",
      "Descubre la auténtica naturaleza espiritual del alma humana increada."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Substancia y accidentes: Revelación de la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "Los accidentes no ocultan la substancia; al contrario, son precisamente aquello que revela su naturaleza a la mente. Conocemos lo que una cosa es a través de cómo se manifiesta.",
    "explicacionAlternativa": "Las palabras de una carta no ocultan el mensaje: son el único medio para que leas y comprendas el mensaje."
  },
  {
    "id": 133,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "[Pregunta Trampa] Si los accidentes necesitan de la substancia para existir, ¿puede Dios mediante su omnipotencia hacer que los accidentes de pan subsistan sin substancia de pan?",
    "opciones": [
      "Sí, como enseña la doctrina teológica de la Eucaristía, donde subsisten por poder divino.",
      "Solo si los accidentes son observados con microscopios ópticos de gran potencia.",
      "No, porque eso violaría el principio de no-contradicción en el orden matemático a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "No, porque Dios está sometido rígidamente a las opiniones de los filósofos griegos."
    ],
    "correcta": 0,
    "dificultad": "Trampa",
    "seccion": "La noción de substancia en teología",
    "separata": "Separata 2",
    "explicacionDetallada": "En el misterio eucarístico, la substancia del pan se convierte en el Cuerpo de Cristo, mientras que las especies o accidentes sensibles del pan milagrosamente subsisten sin su sujeto por el poder de Dios.",
    "explicacionAlternativa": "Dios, que sostiene a la substancia en el ser, puede sostener directamente a los accidentes en el milagro eucarístico."
  },
  {
    "id": 134,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "Cuando una substancia padece el efecto de una causa exterior (como un hierro calentado por el fuego), exhibe el accidente de:",
    "opciones": [
      "Pasión (receptividad de una acción ajena).",
      "Acción creadora libre.",
      "Cantidad discontinua a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Relación ficticia sin base real."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Accidentes: predicamentos",
    "separata": "Separata 2",
    "explicacionDetallada": "La pasión es el accidente por el cual la substancia recibe pasivamente el influjo modificador de un agente exterior (el hierro calentándose).",
    "explicacionAlternativa": "La 'acción' es dar el golpe; la 'pasión' es recibir el impacto del golpe."
  },
  {
    "id": 135,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "¿Qué diferencia existe entre los accidentes 'inseparables' (propiedades) y los accidentes 'separables'?",
    "opciones": [
      "Los separables son eternos como Dios y los inseparables desaparecen al ponerse el sol mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Los inseparables brotan de la esencia del ente; los separables pueden variar sin destruir la especie.",
      "Los inseparables son visibles al ojo humano y los separables solo se escuchan con audífonos.",
      "No existe ninguna distinción; todos los accidentes se separan cada cinco minutos."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Accidentes: modos secundarios del ente",
    "separata": "Separata 2",
    "explicacionDetallada": "Los accidentes propios o propiedades manan necesariamente de la esencia (como la sociabilidad en el hombre); los accidentes comunes o separables son contingentes (como estar sentado o de pie).",
    "explicacionAlternativa": "Tener capacidad de reír es propio del ser humano (inseparable); estar vestido con camisa roja es contingente (separable)."
  },
  {
    "id": 136,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "En una escultura de mármol que representa a Julio César, ¿qué elemento corresponde a la substancia?",
    "opciones": [
      "El bloque de mármol como sujeto físico que subsiste bajo la figura esculpida.",
      "El precio en monedas que pagó el museo para adquirirla en una subasta tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "El asombro estético de los turistas que visitan la galería italiana.",
      "El nombre latino del emperador romano tallado en la placa inferior."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "La noción de ente conviene primariamente a la substancia",
    "separata": "Separata 2",
    "explicacionDetallada": "El mármol es la materia y substancia física real; la figura de César es una determinación accidental artificial impresa por el cincel del escultor.",
    "explicacionAlternativa": "La piedra es la substancia real; la silueta de César tallada es su forma accidental visible."
  },
  {
    "id": 137,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "¿Por qué se afirma que los accidentes son 'realmente distintos' de la substancia a la que modifican?",
    "opciones": [
      "Porque la substancia puede perder o cambiar muchos accidentes conservando su misma identidad.",
      "Porque la ciencia demostró que los accidentes tienen vida biológica propia mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Porque los accidentes viven en planetas diferentes a los que habita la materia.",
      "Porque de lo contrario sería imposible que las personas cambiaran de vestimenta."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Accidentes: modos secundarios del ente",
    "separata": "Separata 2",
    "explicacionDetallada": "Hay distinción real entre substancia y accidente, pues el sujeto permanece idéntico mientras sus cualidades, tamaños, lugares o relaciones cambian continuamente.",
    "explicacionAlternativa": "Sócrates de pie y Sócrates sentado es el mismo Sócrates sustancial con accidentes diferentes de postura."
  },
  {
    "id": 138,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "Cuando una persona viaja de Madrid a Roma, ¿qué categoría accidental ha experimentado mutación?",
    "opciones": [
      "El lugar (ubi) o accidente espacial.",
      "La esencia universal de la especie.",
      "La substancia humana fundamental a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "La naturaleza espiritual del alma."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Accidentes: predicamentos",
    "separata": "Separata 2",
    "explicacionDetallada": "El lugar (ubi) es el predicamento accidental que determina la localización del cuerpo en el espacio físico.",
    "explicacionAlternativa": "Estar en tu casa o en el aula de clases: cambia tu ubicación espacial (lugar), pero no tu ser."
  },
  {
    "id": 139,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "¿Qué papel juega el tiempo (quando) como predicamento accidental del ente?",
    "opciones": [
      "Destruye instantáneamente a Dios en cada campanada de los relojes.",
      "Impide que los seres humanos puedan recordar sucesos de su infancia pasada.",
      "Es una ley inventada por los bancos para cobrar intereses por los préstamos a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Sitúa la duración y cambios sucesivos de la substancia creada en el devenir."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Accidentes: predicamentos",
    "separata": "Separata 2",
    "explicacionDetallada": "El predicamento 'quando' ubica a la substancia mutable en la corriente temporal y sucesiva de la historia cósmica.",
    "explicacionAlternativa": "Haber nacido en 2005 o vivir en el año 2026: tu posición en la línea del tiempo."
  },
  {
    "id": 140,
    "examen": 7,
    "tituloExamen": "Examen 7: Triple Relación Substancia-Accidente y Crítica Moderna",
    "pregunta": "Si resumimos la doctrina metafísica de la substancia y el accidente, ¿cuál es la conclusión central?",
    "opciones": [
      "El ser de los accidentes es infinitamente superior e independiente del ser de Dios en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Todo lo que existe o es substancia (en sí) o es accidente (en otro), manifestando la analogía del ente.",
      "Solo los accidentes son reales, mientras que la substancia es una superstición medieval.",
      "La materia no existe y el universo es una alucinación óptica de los dioses olímpicos."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Síntesis de substancia y accidente",
    "separata": "Separata 2",
    "explicacionDetallada": "Todo lo creado se divide en substancia y accidente; ambos poseen el ser de modo análogo (la substancia en sí, el accidente en otro), revelando la riqueza del ens.",
    "explicacionAlternativa": "En el mundo hay cosas que existen por sí mismas (árboles, hombres) y cosas que existen apoyadas en ellas (colores, tamaños, posturas)."
  },
  {
    "id": 141,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Qué es la 'forma' (morphe) en la teoría del hilemorfismo metafísico?",
    "opciones": [
      "La determinación intrínseca de la esencia que hace que una cosa sea lo que es.",
      "Una mezcla caótica de polvos químicos sometidos a combustión atómica.",
      "El contorno superficial visible de un dibujo pintado en un papel en blanco según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Una opinión subjetiva que cambia según las encuestas políticas del año."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Materia y forma: Forma",
    "separata": "Separata 2",
    "explicacionDetallada": "La forma es la determinación de la esencia: es el principio determinante que hace que un ente sea lo que es (acto de la esencia).",
    "explicacionAlternativa": "Es el molde y diseño esencial que hace que el oro sea oro o que un roble sea roble."
  },
  {
    "id": 142,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Qué es la 'materia' (hyle) en la estructura de los entes corpóreos?",
    "opciones": [
      "El principio de indeterminación y receptividad que hace que el ente tenga partes cuantitativas.",
      "La causa final primera que ordena todas las cosas hacia el conocimiento de Dios conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "El pensamiento puramente espiritual e inmortal de los seres humanos conscientes.",
      "Una ilusión matemática inventada por los físicos para medir la velocidad de la luz."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Materia y forma",
    "separata": "Separata 2",
    "explicacionDetallada": "La materia es el principio de indeterminación en las substancias corpóreas; es lo que hace que el ente tenga partes cuantitativas y extensión divisible.",
    "explicacionAlternativa": "La arcilla cruda que no tiene figura hasta que las manos del alfarero le dan forma de vasija."
  },
  {
    "id": 143,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "[Ejemplo del texto: La materialidad del hombre y de la mesa] ¿Por qué mi materialidad no me distingue de una mesa?",
    "opciones": [
      "Porque tanto los hombres como las mesas poseen alma racional con libre albedrío a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Porque los seres humanos estamos fabricados con madera de pino y barniz químico.",
      "Porque la mente humana es incapaz de notar si está sentada sobre una silla o un piso.",
      "Porque la materialidad en ambos es solo principio común de indeterminación cuantitativa."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Materia y forma",
    "separata": "Separata 2",
    "explicacionDetallada": "La materialidad hace que tanto el hombre como la mesa tengan partes cuantitativas en el espacio; lo que distingue radicalmente al hombre es su forma específica (el alma humana).",
    "explicacionAlternativa": "Un lingote de oro y un lingote de plomo comparten el tener masa y volumen (materia), pero su naturaleza atómica es distinta (forma)."
  },
  {
    "id": 144,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Cómo se relacionan la materia y la forma dentro de la substancia material?",
    "opciones": [
      "Como dos adjetivos gramaticales que no tienen ningún sustantivo de apoyo.",
      "Como dos enemigos que luchan a muerte hasta destruirse completamente en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Como dos espíritus incorpóreos que no necesitan espacio ni tiempo para ser.",
      "Como la potencia se relaciona con el acto (la materia es potencia; la forma es acto)."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Materia y forma: Relación de materia y forma",
    "separata": "Separata 2",
    "explicacionDetallada": "La relación de la materia a la forma es como la de la potencia al acto. La forma conduce la determinación potencial de la materia a la actualidad viva.",
    "explicacionAlternativa": "La masa de pan cruda (potencia/materia) recibe el horneado y la forma de hogaza crujiente (acto/forma)."
  },
  {
    "id": 145,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Por qué se afirma tajantemente en la separata que 'la forma es más importante y noble que la materia'?",
    "opciones": [
      "Porque los filósofos siempre prefieren las ideas que no tienen aplicación práctica.",
      "Porque la materia física deja de existir en cuanto sale el sol por las mañanas.",
      "Porque la forma cuesta más dinero en las tiendas de antigüedades griegas.",
      "Porque la materia está en función de la forma y es perfeccionada por ella."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Materia y forma: Primacía de la forma",
    "separata": "Separata 2",
    "explicacionDetallada": "La materia está teleológicamente subordinada a la forma: el acto es superior a la potencia. 'No vivimos para comer, sino que comemos para vivir'.",
    "explicacionAlternativa": "El cuerpo físico come para mantener viva y enérgica el alma y el pensamiento: lo material sirve a lo superior."
  },
  {
    "id": 146,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "[Fundamento del orden social] ¿Por qué los bienes materiales deben subordinarse a los bienes espirituales?",
    "opciones": [
      "Porque los seres humanos solo deberían vestirse con harapos y vivir en cavernas.",
      "Porque las leyes de la física prohíben que una persona compre casas o terrenos.",
      "Porque el dinero material debe ser confiscado por los gobiernos para crear fábricas a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Porque el aspecto material es indeterminado y está en función de la forma y la dignidad humana."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Materia y forma: Base metafísica del orden social",
    "separata": "Separata 2",
    "explicacionDetallada": "La metafísica fundamenta que la materia está al servicio del espíritu; por ende, la economía y bienes materiales están al servicio del bien moral y espiritual de la persona.",
    "explicacionAlternativa": "El dinero y la tecnología son herramientas para que las personas vivan con justicia, amor y verdad, no al revés."
  },
  {
    "id": 147,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Puede una forma subsistir sin materia en el orden natural o creado?",
    "opciones": [
      "Sí, pero únicamente si se trata de formas artificiales como mesas de madera tallada.",
      "Nunca, porque toda forma desaparece si no está encerrada en una roca de granito tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "Sí, en el caso de substancias espirituales (ángeles) y el alma humana tras la muerte.",
      "Solo si es cocinada a altas temperaturas en un reactor termonuclear industrial."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Materia y forma",
    "separata": "Separata 2",
    "explicacionDetallada": "Mientras la materia no puede existir sin forma, la forma en sí no requiere necesariamente materia: los ángeles son formas puras y el alma humana subsiste tras la separación del cuerpo.",
    "explicacionAlternativa": "Un diseño mental de arquitectura puede existir en la mente sin necesidad de que el edificio físico de ladrillos haya sido levantado."
  },
  {
    "id": 148,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Por qué el alma humana no puede ser extraída o evolucionada a partir de la sola materia?",
    "opciones": [
      "Porque las leyes de la evolución biológica prohíben el nacimiento de seres bípedos.",
      "Porque los científicos no tienen suficientes probetas de vidrio en sus laboratorios.",
      "Porque el alma humana pesa diez mil toneladas y no cabría en ningún cuerpo vivo.",
      "Porque la materia carece por completo de la potencialidad de hacerse espíritu."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Materia y forma: El alma humana",
    "separata": "Separata 2",
    "explicacionDetallada": "La materia no posee en su seno la potencialidad de generar un espíritu inmortal e inteligente. El alma humana es de naturaleza espiritual y es creada directamente por Dios.",
    "explicacionAlternativa": "Por mucho que mezcles y calientes piedras y metales, jamás saldrá de esa mezcla una idea de justicia o un poema de amor."
  },
  {
    "id": 149,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Qué es la 'forma substancial' y cuántas puede poseer una substancia a la vez?",
    "opciones": [
      "Es una etiqueta de cartón pegada por los comerciantes en los productos nuevos.",
      "Es un accidente secundario que cambia de lugar cada vez que sopla el viento.",
      "Es una colección de colores cambiantes y cada objeto posee más de cincuenta mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Es el principio determinante único e indivisible de la substancia en cada ser."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Materia y forma: Forma substancial",
    "separata": "Separata 2",
    "explicacionDetallada": "La forma substancial es el principio constitutivo que determina al ente a ser lo que es en el orden sustancial. Es única e indivisible en cada substancia individual.",
    "explicacionAlternativa": "Eres un único ser humano unificado; no tienes 'medio alma de mono' y 'medio alma de humano' mezcladas."
  },
  {
    "id": 150,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Cómo asume el alma humana las funciones de las formas inferiores (vegetativa y sensitiva)?",
    "opciones": [
      "Recogiendo en su única forma espiritual superior las perfecciones de las formas más bajas.",
      "Dividiendo el cuerpo humano en tres sectores incomunicados entre sí.",
      "Alojando en el estómago pequeños animales que hacen la digestión por ella.",
      "Renunciando a pensar racionalmente para poder asimilar los nutrientes de la comida conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Materia y forma: Forma substancial",
    "separata": "Separata 2",
    "explicacionDetallada": "La forma substancial humana recoge en sí las perfecciones inferiores: hace al hombre ser substancia, ser viviente, animal sensitivo y ser racional espiritual.",
    "explicacionAlternativa": "Un teléfono moderno de alta gama no necesita llevar pegada una radio vieja ni una linterna a pilas: su procesador lo hace todo."
  },
  {
    "id": 151,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Cuál es la diferencia capital entre el 'acto formal' (forma) y el 'acto de ser' (esse)?",
    "opciones": [
      "La forma determina qué es la cosa; el esse determina y hace que la cosa exista en la realidad.",
      "El esse es un accidente superficial y la forma es Dios mismo increado en las cosas.",
      "La forma es un gas químico inflamable y el esse es un sólido cristalizado muy duro a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "No existe ninguna diferencia; son dos términos idénticos inventados por Aristóteles."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Materia y forma",
    "separata": "Separata 2",
    "explicacionDetallada": "La forma es el acto esencial (lo que determina a la esencia a ser lo que es). El esse es el acto realizador que hace que esa esencia y esa forma tengan ser real exterior.",
    "explicacionAlternativa": "La forma es el diseño del coche de carreras (su velocidad y elegancia); el esse es tener el motor encendido rodando en la pista real."
  },
  {
    "id": 152,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "[Pregunta Trampa] Si la madera de un árbol talado se utiliza para fabricar una mesa, ¿la forma de mesa es una forma substancial?",
    "opciones": [
      "Solo si el carpintero que la fabricó tenía un título universitario en metafísica.",
      "Sí, ya que todas las creaciones humanas adquieren un alma inmortal propia según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "No, la mesa es una forma accidental artificial sobre la substancia natural de la madera.",
      "Sí, porque la madera dejó de ser materia y se transformó en un ser espiritual."
    ],
    "correcta": 2,
    "dificultad": "Trampa",
    "seccion": "Materia y forma",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "Los artefactos fabricados por el hombre tienen forma accidental: la madera sigue siendo madera sustancialmente; lo que el carpintero añade es un ordenamiento o figura accidental externa.",
    "explicacionAlternativa": "Si cortas la mesa en pedazos pequeños, sigue siendo madera: la 'forma de mesa' era solo un arreglo externo de la madera."
  },
  {
    "id": 153,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Por qué se dice que 'la forma es principio de operación y acción' en los entes?",
    "opciones": [
      "Porque la forma mueve físicamente los átomos empujándolos con palancas invisibles.",
      "Porque las cosas solo pueden actuar cuando una persona humana les da una orden verbal mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Porque la potencia activa de obrar se fundamenta en el acto formal que determina la esencia.",
      "Porque la materia odia el reposo y obliga a la forma a saltar continuamente en el espacio."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Materia y forma: Principio de acción",
    "separata": "Separata 2",
    "explicacionDetallada": "El obrar sigue al ser (agere sequitur esse): dado que la forma determina la manera de ser de la substancia (naturaleza), también determina el modo propio de sus operaciones.",
    "explicacionAlternativa": "Un león caza y ruge porque tiene forma y naturaleza de león; un águila vuela alto porque su forma la capacita para volar."
  },
  {
    "id": 154,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "Cuando una substancia material se corrompe y se convierte en otra (ej. digestión), ¿qué permanece como substrato común?",
    "opciones": [
      "La forma sustancial del alimento anterior intacta y sin digerir según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "La materia prima como pura potencialidad receptiva de una nueva forma.",
      "Ningún elemento, pues la materia desaparece por completo en la nada.",
      "El alma espiritual de la comida que sube al cielo de los vegetales."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Materia y forma",
    "separata": "Separata 2",
    "explicacionDetallada": "En el cambio sustancial, lo que subyace es la materia prima (pura potencia pasiva de cualquier determinación corpórea), que pierde una forma y adquiere otra.",
    "explicacionAlternativa": "La plastilina básica sigue estando allí cuando deshaces un barquito para moldear una casita."
  },
  {
    "id": 155,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Qué es la 'materia prima' en la cosmología metafísica tomista?",
    "opciones": [
      "Pura potencia pasiva sustancial, incapaz de existir sola sin ninguna forma actual.",
      "La primera criatura viviente que apareció en los océanos primitivos del planeta.",
      "El petróleo crudo antes de ser refinado en gasolineras comerciales según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Un conjunto de partículas atómicas con masa y peso perfectamente medidos."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Materia y forma: Materia prima",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "La materia prima es pura potencia substancial; no es un cuerpo determinado en acto, sino el principio radical receptivo de las formas corporales en los cambios sustanciales.",
    "explicacionAlternativa": "Es la pura capacidad de ser algo material, pero que no puede existir sin tener 'ya' alguna forma concreta."
  },
  {
    "id": 156,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "En el ser humano, ¿qué constituye la forma substancial y qué constituye la materia?",
    "opciones": [
      "Los pensamientos conscientes son la materia y el cuerpo físico es la forma externa.",
      "La sangre es la forma pura y los huesos esqueléticos son la materia cuantitativa.",
      "El alma espiritual es la forma sustancial; el cuerpo vivificado es la materia.",
      "El cerebro es la forma y las extremidades corporales son la materia inerte."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Materia y forma: El hombre",
    "separata": "Separata 2",
    "explicacionDetallada": "El hombre es una unidad sustancial: el alma intelectiva es la forma substancial que vivifica y organiza la materia corporal haciéndola cuerpo humano.",
    "explicacionAlternativa": "El alma es la vida y diseño espiritual interior que hace que ese conjunto de carne y huesos sea una persona viva."
  },
  {
    "id": 157,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Por qué un ángel es ontológicamente 'más actual' que un ser humano?",
    "opciones": [
      "Porque su esencia es pura forma espiritual sin la potencialidad limitante de la materia.",
      "Porque los ángeles fueron creados hace más millones de años que la tierra.",
      "Porque tienen alas cubiertas de plumas de oro indestructible y resplandeciente mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Porque los ángeles pueden volar más rápido que las naves espaciales humanas."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Materia y forma",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "El ángel carece de materia en su orden sustancial; es pura forma creada. Por ende, tiene mayor grado de actualidad que las criaturas corpóreas compuestas de materia y forma.",
    "explicacionAlternativa": "Una luz pura sin ningún cristal opaco que la filtre brilla con mayor intensidad que una linterna detrás de un vidrio ahumado."
  },
  {
    "id": 158,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "A pesar de ser pura forma, ¿por qué un ángel NO es 'Acto Puro' en sentido absoluto?",
    "opciones": [
      "Porque comete pecados morales de envidia cada vez que mira a los hombres a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Porque su cuerpo espiritual necesita comer maná celestial para no desvanecerse.",
      "Porque Dios le prohíbe tener conocimientos intelectuales de matemáticas puras.",
      "Porque ha recibido el acto de ser (esse) como don, siendo su esencia potencia ante el esse."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Materia y forma: Ángeles y acto de ser",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "Solo Dios es Acto Puro de ser. El ángel es acto puro en el orden de la esencia (no tiene materia), pero respecto al esse es una criatura limitada que recibió el ser por don divino.",
    "explicacionAlternativa": "Un recipiente de cristal purísimo no tiene barro (sin materia), pero sigue siendo un recipiente que necesita ser llenado de agua (esse recibido)."
  },
  {
    "id": 159,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "¿Qué determina que las acciones de una persona sean calificadas de 'humanas' y morales?",
    "opciones": [
      "Que proceden del principio formal racional y libre (el alma) propio del hombre.",
      "Que generan riquezas monetarias abundantes para los bancos de la ciudad.",
      "Que están respaldadas por un documento notarial firmado ante las autoridades civiles.",
      "Que no producen ningún ruido sonoro cuando se ejecutan en lugares públicos."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Materia y forma: Principio de acción",
    "separata": "Separata 2",
    "explicacionDetallada": "El principio del obrar humano es el alma racional; los actos que brotan de la deliberación inteligente y de la voluntad libre son propiamente actos humanos y morales.",
    "explicacionAlternativa": "Pensar, decidir con libertad y amar son acciones que solo un ser con alma racional puede realizar."
  },
  {
    "id": 160,
    "examen": 8,
    "tituloExamen": "Examen 8: Materia y Forma: Hilemorfismo y el Alma Humana",
    "pregunta": "Si la materia no puede existir sin forma, ¿qué demuestra esto sobre el origen del universo físico?",
    "opciones": [
      "Que las cosas materiales surgieron por casualidades ciegas sin ningún orden lógico.",
      "Que la materia es un dios eterno que siempre estuvo perfectamente organizado según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Que el universo material requirió una Inteligencia Creadora que le diera forma y ser.",
      "Que la física de los cuerpos es un sueño del cual despertaremos tras la muerte."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Materia y forma: Relación con la creación",
    "separata": "Separata 2",
    "explicacionDetallada": "La materia no puede subsistir en el caos o pura nada; requiere un principio ordenador formal y una Causa Primera que comunique el acto de ser a la realidad corpórea.",
    "explicacionAlternativa": "Un reloj con engranajes perfectamente sincronizados exige un relojero sabio que haya diseñado y ensamblado la máquina."
  },
  {
    "id": 161,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Qué distingue radicalmente el 'nivel predicamental' del 'nivel trascendental' en metafísica?",
    "opciones": [
      "El trascendental es un método matemático de cálculo y el predicamental es poético.",
      "El predicamental se refiere a las esencias categoriales; el trascendental al esse (acto de ser).",
      "No existe ninguna diferencia; ambos conceptos fueron rechazados por Santo Tomás.",
      "El predicamental solo estudia minerales y el trascendental estudia seres marinos vivos conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "El nivel predicamental es el de las esencias divididas en los diez predicamentos o categorías. El nivel trascendental es el del esse, que trasciende toda categoría y abarca a todas.",
    "explicacionAlternativa": "Nivel predicamental: clasificar los libros en estantes (historia, ciencia, arte); nivel trascendental: el hecho común de que todos los libros 'existen y están impresos'."
  },
  {
    "id": 162,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Por qué el 'esse' (ser) no puede ser clasificado como uno de los diez predicamentos o categorías?",
    "opciones": [
      "Porque los filósofos antiguos olvidaron escribir una categoría número once en el libro en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Porque el esse solo pertenece a las almas humanas y jamás a los cuerpos físicos.",
      "Porque si el ser fuera una categoría particular exclusiva, todas las demás categorías no serían nada.",
      "Porque el ser es un concepto matemático que solo puede medirse con geometría euclidiana."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 2",
    "explicacionDetallada": "El esse afecta a la cantidad, cualidad, relación, etc. Todos los predicamentos tienen esse. Si el ser fuera un predicamento excluyente, los otros nueve carecerían de ser (serían la nada).",
    "explicacionAlternativa": "La luz ilumina todos los objetos de la habitación; no puedes decir que la luz es solo una silla más en la esquina."
  },
  {
    "id": 163,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Cuál es la causa y raíz más profunda de la unidad de cualquier ente?",
    "opciones": [
      "El acto último del ente, que es el esse (acto de ser), perfección de perfecciones.",
      "La cinta adhesiva o pegamento químico con el que los hombres unen las cosas en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "La fuerza de atracción gravitatoria que une a los átomos de la materia.",
      "El acuerdo unánime de los científicos que votan la clasificación biológica."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 2",
    "explicacionDetallada": "A nivel de esencia, la unidad descansa en la forma substancial; pero al nivel más profundo y radical de la realidad (trascendental), la unidad brota del acto de ser (esse).",
    "explicacionAlternativa": "El diseño de la casa la hace una (forma), pero lo que hace que sea una casa real en pie es el acto de estar construida y existir (esse)."
  },
  {
    "id": 164,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Por qué se denomina 'trascendental' al ámbito del esse y sus propiedades?",
    "opciones": [
      "Porque requiere viajar en naves espaciales hacia las órbitas planetarias exteriores según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Porque trasciende y cruza todas las categorías sin pertenecer con exclusividad a ninguna.",
      "Porque solo puede ser comprendido por personas que han entrado en trance hipnótico.",
      "Porque fue un invento de los filósofos orientales que rechazaban la lógica occidental."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "Se llama trascendental porque trasciende los géneros y categorías: pertenece a la substancia, pero también a los accidentes; conviene a todo cuanto es.",
    "explicacionAlternativa": "Es transversal: no se queda encerrado en una sola caja, sino que baña y atraviesa todas las cajas."
  },
  {
    "id": 165,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "A nivel de la esencia (predicamental), ¿cuál es el principio que confiere unidad al ente compuesto?",
    "opciones": [
      "La cantidad continua divisible en milímetros.",
      "El color superficial reflejado por los rayos solares.",
      "La forma substancial, como acto supremo del orden de la esencia.",
      "La materia prima informe y desprovista de determinación en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 2",
    "explicacionDetallada": "Al nivel predicamental (de la esencia), la raíz de la unidad es la forma, pues ella determina y unifica la multiplicidad de la materia en una sola naturaleza.",
    "explicacionAlternativa": "El plano arquitectónico unifica ladrillos, vigas y tubos sueltos en un único hogar."
  },
  {
    "id": 166,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Qué ocurre si una corriente filosófica olvida el nivel trascendental del esse y se queda solo en el predicamental?",
    "opciones": [
      "Convierte a todos los seres humanos en matemáticos puros sin pasiones corporales.",
      "Elimina todas las guerras políticas del mundo mediante decretos educativos según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Cae en el 'esencialismo' o conceptualismo abstracto, perdiendo el contacto con la actualidad viva del ser.",
      "Descubre la fórmula química de la inmortalidad física del cuerpo humano."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 2",
    "explicacionDetallada": "Olvida el acto de ser y reduce la realidad a esencias abstractas, definiciones mentales o categorías estáticas, como ocurrió en el racionalismo moderno.",
    "explicacionAlternativa": "Es como estudiar los planos de un avión durante años pero olvidar que para que vuele necesita combustible y estar en el aire."
  },
  {
    "id": 167,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "[Pregunta Trampa] ¿Es el 'esse' una sustancia suprema que flota sobre las cosas como un techo?",
    "opciones": [
      "Sí, y está compuesta de átomos de éter celestial invisibles a los microscopios.",
      "Sí, porque es el rey de todas las sustancias materiales del universo sensible de acuerdo con ciertas posturas positivistas y materialistas del pensamiento decimonónico.",
      "No, no es una sustancia ni una 'cosa', sino el acto intrínseco por el cual las cosas son.",
      "Solo si es analizada por la teología mística y no por la metafísica racional."
    ],
    "correcta": 2,
    "dificultad": "Trampa",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 1 y 2",
    "explicacionDetallada": "El esse no es una 'cosa' o sujeto que subsista aparte en el aire; es el principio y acto constitutivo más íntimo y profundo del ente singular.",
    "explicacionAlternativa": "La vida de un perro no es otro perro montado en su lomo: es el acto vivo que hace que el perro esté respirando y latiendo."
  },
  {
    "id": 168,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Por qué el nivel de los predicamentos se llama precisamente 'predicamental'?",
    "opciones": [
      "Porque se basa en discursos políticos pronunciados ante los senados republicanos.",
      "Porque fue predicado por los profetas antiguos en las montañas del desierto.",
      "Porque se deriva de los diez modos supremos en que los conceptos se predican de un sujeto.",
      "Porque describe las predicciones meteorológicas del clima para la agricultura en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 2",
    "explicacionDetallada": "Se llama predicamental porque las esencias se dividen en los diez géneros supremos de predicados (predicamentos) que podemos atribuir a un sujeto.",
    "explicacionAlternativa": "Son los 10 tipos de cosas que puedes afirmar de algo: qué es, cuánto mide, cómo es, dónde está, etc."
  },
  {
    "id": 169,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "En la metafísica tomista, ¿cuál es la 'perfección de todas las perfecciones'?",
    "opciones": [
      "La capacidad de viajar en el tiempo hacia épocas históricas pasadas mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "El tamaño gigantesco medido en años luz cósmicos.",
      "La posesión de riquezas y metales preciosos en cuentas bancarias seguras.",
      "El acto de ser (esse), porque nada puede tener ninguna perfección si primero no es."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 2",
    "explicacionDetallada": "El esse es el acto fontal y la perfección de todas las perfecciones de un ente: la bondad, la belleza, la inteligencia o la fuerza solo son reales si poseen ser.",
    "explicacionAlternativa": "De nada te sirve tener alas de oro, ojos de diamante y sabiduría infinita si no existes en la realidad."
  },
  {
    "id": 170,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Qué relación existe entre la multiplicidad de las esencias y la unidad del esse?",
    "opciones": [
      "Las esencias multiplican y limitan el ser común en una infinita variedad de criaturas.",
      "No existe ninguna relación; la multiplicidad y el ser son incompatibles lógicamente.",
      "Las esencias destruyen la unidad del cosmos sumergiendo a las cosas en el absurdo.",
      "El esse aniquila todas las esencias convirtiendo al universo en un único agujero negro."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 2",
    "explicacionDetallada": "El ser es participado: las diversas esencias reciben y delimitan el acto de ser, creando una maravillosa sinfonía de entes diversos pero unidos en el ser.",
    "explicacionAlternativa": "La misma luz blanca del sol refractada en un prisma de cristal produce un hermoso arcoíris de colores."
  },
  {
    "id": 171,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Por qué las propiedades trascendentales (como la verdad o la bondad) brotan del nivel del esse?",
    "opciones": [
      "Porque fueron dictadas por un tribunal judicial supremo de la antigüedad clásica.",
      "Porque acompañan a todo ente en cuanto posee acto de ser, sin importar su especie particular.",
      "Porque solo se encuentran en las nubes y en los cuerpos celestes incorpóreos.",
      "Porque impiden que los seres humanos puedan cometer equivocaciones intelectuales en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "Los trascendentales (uno, verdadero, bueno, bello) son aspectos o propiedades del ente en cuanto ente; se fundamentan en el esse y convienen a toda realidad que es.",
    "explicacionAlternativa": "Cualquier cosa real, por el mero hecho de existir, tiene unidad, es verdadera y posee alguna bondad."
  },
  {
    "id": 172,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "Cuando contemplamos una flor, una estrella y un ser humano, ¿en qué nivel encontramos sus diferencias específicas?",
    "opciones": [
      "En el nivel trascendental del puro esse sin esencia alguna de acuerdo con ciertas posturas positivistas y materialistas del pensamiento decimonónico.",
      "En el nivel predicamental de sus respectivas esencias y naturalezas particulares.",
      "En el nivel de los decretos gubernamentales de los países donde habitan.",
      "En el nivel de la nada absoluta que las confunde en una misma ilusión."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Nivel trascendental y nivel predicamental",
    "separata": "Separata 2",
    "explicacionDetallada": "Sus diferencias provienen de sus esencias (vegetal, inorgánica estelar, humana racional); su coincidencia radical reside en el nivel trascendental del ser.",
    "explicacionAlternativa": "Difieren en qué son (esencia); coinciden en que son (esse)."
  },
  {
    "id": 173,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Qué filósofo moderno es célebre por situar el 'pensamiento' por encima del ser, invirtiendo la metafísica clásica?",
    "opciones": [
      "Boecio de Roma.",
      "René Descartes.",
      "Aristóteles de Estagira.",
      "Santo Tomás de Aquino."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Crítica moderna y principio de inmanencia",
    "separata": "Separata 2 y 4",
    "explicacionDetallada": "René Descartes situó el cogito (pensamiento) como primera certeza y realidad, haciendo depender el ser de la conciencia subjetiva (inmanencia).",
    "explicacionAlternativa": "Descartes dijo: 'Pienso, luego existo'. La metafísica clásica dice: 'Existo y las cosas son, luego puedo conocerlas'."
  },
  {
    "id": 174,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "Para la metafísica del esse, ¿el conocimiento humano crea el ser de las cosas o se ajusta a él?",
    "opciones": [
      "La mente humana inventa el mundo cada vez que abre los ojos por las mañanas según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "Las cosas no tienen ningún ser hasta que son aprobadas por un parlamento legal.",
      "La realidad y el pensamiento son dos ilusiones sin ninguna conexión posible.",
      "El entendimiento humano debe ajustarse dócilmente al ser real objetivo de las cosas."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Nivel trascendental y primacía del ser",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "El realismo metafísico afirma la primacía del ser sobre el pensar: la realidad está ahí y es la medida y causa de la verdad en nuestro entendimiento.",
    "explicacionAlternativa": "Si ves un árbol, el árbol no existe porque tú lo miras: tú lo miras porque el árbol ya está plantado allí."
  },
  {
    "id": 175,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Por qué el esse es comparado metafóricamente en el texto con 'la luz de las cosas'?",
    "opciones": [
      "Porque el sol astronómico es el creador supremo de los tratados de lógica.",
      "Porque es la fuente radical de actualidad que hace que todo sea inteligible y real.",
      "Porque emite fotones térmicos que queman la piel de quien lo contempla.",
      "Porque solo puede verse cuando se apagan las lámparas eléctricas de noche conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "La verdad del ente y el esse",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "El acto de ser es como la luz que ilumina la inteligibilidad de lo real; mientras más actualidad y esse posee un ente, más cognoscible, verdadero y pleno es.",
    "explicacionAlternativa": "El sol hace visibles los colores del paisaje; el esse hace reales y comprensibles todas las perfecciones del mundo."
  },
  {
    "id": 176,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "En las criaturas compuestas, ¿cómo se distribuye la causalidad del esse y de la esencia?",
    "opciones": [
      "La materia prima es la madre de Dios y le otorga el ser a la Trinidad.",
      "Los accidentes producen a la substancia y la substancia engendra el universo.",
      "El esse procede de Dios como Causa Primera, y la esencia limita ese ser recibido.",
      "La criatura se da el esse a sí misma mediante su propio esfuerzo de concentración."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Nivel trascendental y participación",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "Todo lo que existe por participación tiene el esse recibido de Dios (Causa Primera), mientras que su esencia particular modula y especifica ese don recibido.",
    "explicacionAlternativa": "Dios proporciona la energía vital infinita; cada especie la recibe en su propio molde delimitado."
  },
  {
    "id": 177,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "El nivel de las esencias es llamado también 'orden del qué' (quiditas), mientras que el nivel trascendental es:",
    "opciones": [
      "El orden de las palabras gramaticales escritas con plumas antiguas.",
      "El orden del 'que es' (an est), es decir, de la actualidad fontal de la existencia.",
      "El orden de la nada pasajera y del olvido histórico según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "El orden de las opiniones subjetivas y las encuestas electorales."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Nivel trascendental y predicamental",
    "separata": "Separata 2",
    "explicacionDetallada": "Quiditas responde a '¿qué es esto?' (esencia); el esse responde a la pregunta previa y más profunda: '¿es o no es real?' (actualidad ontológica).",
    "explicacionAlternativa": "Primero confirmas si un león está realmente frente a ti (an est); luego analizas su especie y garras (quiditas)."
  },
  {
    "id": 178,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Por qué un ángel superior difiere de un ángel inferior en el orden predicamental?",
    "opciones": [
      "Porque tienen alas de diferente plumaje y estatura física en metros.",
      "Porque los ángeles superiores comen pan bendito y los inferiores no comen nada.",
      "Porque cada ángel constituye por sí mismo una especie distinta y única de forma pura.",
      "Porque se pelean constantemente por cargos políticos en el parlamento divino según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Materia y forma: Ángeles",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "Al carecer de materia que los multiplique individualmente dentro de una misma especie, cada sustancia angélica agota su propia especie: cada ángel es una especie formal completa.",
    "explicacionAlternativa": "Así como el caballo y el león son dos especies distintas, el arcángel Gabriel y el arcángel Miguel difieren en especie formal."
  },
  {
    "id": 179,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "Cuando afirmamos que 'todo ente es inteligible', nos estamos apoyando en:",
    "opciones": [
      "La ley de la gravedad universal formulada por Isaac Newton en Inglaterra.",
      "Una suposición arbitraria que ningún ser humano sensato puede defender hoy según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "El nivel trascendental, donde la verdad es propiedad inseparable del ente en cuanto es.",
      "El código de tránsito municipal de las grandes metrópolis europeas."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Nivel trascendental y verdad del ente",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "La verdad ontológica es un trascendental: todo ente, en la medida en que es en acto, es cognoscible e inteligible en sí mismo y ante la mente divina.",
    "explicacionAlternativa": "Si algo existe en la realidad, lleva consigo una estructura lógica y coherente que la mente puede entender."
  },
  {
    "id": 180,
    "examen": 9,
    "tituloExamen": "Examen 9: Nivel Predicamental vs Nivel Trascendental",
    "pregunta": "¿Cuál es la síntesis final del nivel trascendental respecto a toda la metafísica?",
    "opciones": [
      "Reemplazar a las personas humanas por sistemas automáticos de cálculo lógico.",
      "Concluir que nada tiene sentido y que la vida es una contradicción absurda.",
      "Demostrar que las ciencias físicas particulares deben cerrar sus laboratorios conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "Mostrar que la cumbre de la realidad es el Esse Subsistente (Dios), fuente y meta de todo ente."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Nivel trascendental: Conclusión",
    "separata": "Separata 2, 3 y 4",
    "explicacionDetallada": "El camino trascendental eleva la mirada desde los entes finitos y participados hacia la Causa Primera y Fuente Fontal del ser: Dios, Ipsum Esse Subsistens.",
    "explicacionAlternativa": "Seguir el curso del agua de los ríos (entes creados) hasta llegar al inmenso océano infinito de donde brotan (Dios)."
  },
  {
    "id": 181,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Cuál es el 'Principio Supremo' de toda la metafísica y del pensamiento humano?",
    "opciones": [
      "El principio de la relatividad espacio-temporal universal formulado en física.",
      "El principio del libre mercado y de la oferta y la demanda económica.",
      "El principio de no-contradicción.",
      "El principio de la duda metódica absoluta sobre cualquier experiencia."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Principios del ser: El principio de no-contradicción",
    "separata": "Separata 2",
    "explicacionDetallada": "El principio supremo de la metafísica es el principio de no-contradicción: es imposible que algo sea y no sea al mismo tiempo, en el mismo sujeto y bajo el mismo aspecto.",
    "explicacionAlternativa": "Una puerta no puede estar totalmente cerrada y totalmente abierta al mismo tiempo y en el mismo sentido."
  },
  {
    "id": 182,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Cuáles son las dos operaciones fundamentales de la inteligencia humana citadas en el texto?",
    "opciones": [
      "Inhalar oxígeno y bombear sangre a través de las arterias del cuerpo.",
      "Dudar de todo lo visible y crear mundos de fantasía poética sin fundamento.",
      "Calcular números fraccionarios y archivar datos estadísticos en carpetas de papel de acuerdo con ciertas posturas positivistas y materialistas del pensamiento decimonónico.",
      "Forjar un concepto (primera operación) y afirmar o negar mediante el juicio (segunda operación)."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Las dos operaciones de la inteligencia",
    "separata": "Separata 2",
    "explicacionDetallada": "1) Aprehensión: forjar un concepto o idea; 2) Juicio: afirmar o negar, ajustando la propia mente a la realidad.",
    "explicacionAlternativa": "Primero captas la idea de 'árbol' y 'verde'; luego formulas el juicio: 'el árbol es verde'."
  },
  {
    "id": 183,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Cuál es la primera noción que de modo natural y espontáneo viene a la mente humana al empezar a conocer?",
    "opciones": [
      "La noción de ente (ser).",
      "La noción de gravedad newtoniana acelerada.",
      "La noción de dinero y comercio bancario.",
      "La noción de átomo cuántico microscópico."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Principios del ser: El proceso de la mente",
    "separata": "Separata 2",
    "explicacionDetallada": "En la primera operación, la mente forma la noción de 'ente', sin la cual ninguna otra cosa puede ser concebida. Todos nuestros conceptos implican el concepto de ente.",
    "explicacionAlternativa": "Antes de saber si algo es un perro, una nube o una canción, sabes que esa cosa 'es algo'."
  },
  {
    "id": 184,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "Siguiendo el orden de reconstrucción intelectual de la mente, ¿cuál es la segunda y tercera idea después del ser?",
    "opciones": [
      "La segunda es el 'no-ser' (nada) y la tercera es la 'división' entre ser y no-ser.",
      "La segunda es la geometría y la tercera es la medicina curativa a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "La segunda es el lenguaje griego y la tercera es la gramática latina.",
      "La segunda es el dinero y la tercera es la ley penal."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Principios del ser: El proceso de la mente",
    "separata": "Separata 2",
    "explicacionDetallada": "Diciendo 'ser', nada queda excluido; por tanto, la segunda idea es el 'no-ser'; y al confrontar ambos surge la tercera: la 'división' (ser no es no-ser). Con ello se formula el primer juicio.",
    "explicacionAlternativa": "Captas 'ser', te das cuenta de lo opuesto 'nada', y comprendes que 'ser algo no es ser nada'."
  },
  {
    "id": 185,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Por qué la contradicción es metafísicamente imposible?",
    "opciones": [
      "Porque el cerebro humano carece de neuronas suficientes para pensar absurdos.",
      "Porque la realidad misma es así objetivamente, no por una simple convención del pensamiento.",
      "Porque las leyes penales de los países castigan a quienes dicen paradojas.",
      "Porque los diccionarios de la lengua prohibieron el uso de palabras compuestas tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Principios del ser: Fundamento real de la no-contradicción",
    "separata": "Separata 2",
    "explicacionDetallada": "La contradicción es imposible no porque sea impensable, sino porque no puede tener lugar en la realidad. El principio no está fundamentado en el pensamiento subjetivo, sino en el ser objetivo.",
    "explicacionAlternativa": "No puedes pintar un círculo cuadrado en una pared real, no por falta de pintura, sino porque la figura se contradice en su misma estructura real."
  },
  {
    "id": 186,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Cómo se define de forma general un 'principio' según Aristóteles?",
    "opciones": [
      "Un experimento de laboratorio que fracasa tres veces consecutivas en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Una ley escrita por los jueces en los tribunales de justicia constitucional.",
      "El final irremediable de una discusión familiar cuando se termina la paciencia.",
      "Aquello de lo cual procede una cosa en el orden del ser, del movimiento o del conocer."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Qué es un principio",
    "separata": "Separata 2",
    "explicacionDetallada": "Un principio en general es 'aquello de lo cual procede una cosa' (Aristóteles). Hay principios del movimiento (punto de partida), ontológicos (causas) y lógicos (fundamento del raciocinio).",
    "explicacionAlternativa": "El manantial es el principio del río; la chispa es el principio del fuego; el cimiento es el principio del muro."
  },
  {
    "id": 187,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Cuáles son las tres características indispensables de todo 'primer principio' de la razón?",
    "opciones": [
      "Matemático, medible con balanzas y expresable en números decimales.",
      "Evidente (autoevidente), universal (se aplica a todo ente) y necesario.",
      "Complicado, secreto y reservado a personas con cargos eclesiásticos a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico.",
      "Dudoso, temporal y revisable por votación popular democrática cada año."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Qué es un principio",
    "separata": "Separata 2",
    "explicacionDetallada": "Un primer principio es una proposición verdadera, absolutamente evidente, universal y necesaria. No necesita demostración, sino que es la base supuesta de cualquier prueba.",
    "explicacionAlternativa": "Son los cimientos de la verdad: tan claros que no necesitan prueba y tan firmes que soportan todo el edificio del conocimiento."
  },
  {
    "id": 188,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Por qué es rigurosamente imposible 'demostrar' el principio de no-contradicción mediante una prueba previa?",
    "opciones": [
      "Porque las matemáticas modernas demostraron que todos los principios son falsos.",
      "Porque fue declarado secreto de estado por los emperadores del imperio romano tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "Porque los filósofos nunca tuvieron tiempo de terminar de redactar la demostración.",
      "Porque es el principio y fundamento de toda demostración; cualquier prueba ya lo presupone."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Principios del ser: Demostración y reducción al absurdo",
    "separata": "Separata 2",
    "explicacionDetallada": "No puede ser demostrado por otro principio más evidente, porque no existe nada anterior ni más claro que él. Cualquier intento de prueba ya tiene que asumir que no se puede afirmar y negar a la vez.",
    "explicacionAlternativa": "No puedes usar una linterna para ver si hay luz en la habitación: la luz de la linterna ya está iluminando el cuarto."
  },
  {
    "id": 189,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Cómo se defiende entonces la verdad del principio de no-contradicción frente a quienes pretenden negarlo?",
    "opciones": [
      "Cambiando de tema y hablando de fútbol o de recetas gastronómicas populares.",
      "Encerrando a los opositores en prisiones de máxima seguridad sin juicio previo en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Mostrando el absurdo de negarlo, demostrando que quien habla ya lo asume para decir algo inteligible.",
      "Aceptando que cada quien tiene su propia verdad contradictoria y que nada importa."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Principios del ser: Demostración y reducción al absurdo",
    "separata": "Separata 2",
    "explicacionDetallada": "Se demuestra por 'reducción al absurdo' (el método elénctico de Aristóteles): si alguien dice que el principio es falso, para afirmar su tesis debe asumir que su tesis es verdadera y no falsa a la vez.",
    "explicacionAlternativa": "Si alguien te dice 'las palabras no significan nada', para decirte eso tuvo que usar palabras esperando que entiendas su significado."
  },
  {
    "id": 190,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Cuál es la principal aplicación práctica del principio de no-contradicción en un tratado científico o filosófico?",
    "opciones": [
      "Permitir que los estudiantes aprueben los exámenes sin necesidad de estudiar los temas según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "Adornar las portadas de los libros con citas en letras doradas elegantes.",
      "Aumentar el número de páginas impresas para vender el libro a un costo más alto.",
      "Servir como piedra de toque: si un tratado contiene contradicciones internas, ya es defectuoso y falso."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "El principio de no contradicción: Aplicación",
    "separata": "Separata 2",
    "explicacionDetallada": "Sirve como piedra de toque: si una serie de proposiciones científicas no resiste el principio de no-contradicción (encierra contradicciones internas), queda invalidada de raíz.",
    "explicacionAlternativa": "Es el detector de fallas: si un testigo en un juicio dice que estaba en dos ciudades distintas a la misma hora, su testimonio se derrumba."
  },
  {
    "id": 191,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Cómo se formula el 'Principio de Identidad' en la metafísica clásica?",
    "opciones": [
      "Todo ser humano debe portar un documento nacional de identidad con fotografía reciente.",
      "'A es necesariamente A', o bien: 'El ser es; el no-ser no es'.",
      "Todas las personas piensan de la misma manera cuando pertenecen al mismo partido.",
      "Los objetos materiales pierden su forma cuando cambian de temperatura ambiental."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "El principio de identidad",
    "separata": "Separata 2",
    "explicacionDetallada": "Se enuncia: 'A es necesariamente A', o 'El ser es; el no-ser no es'. Añade al sujeto la necesidad ontológica de ser lo que es y no otra cosa en cuanto a su esencia.",
    "explicacionAlternativa": "Un perro es un perro y una piedra es una piedra; cada ser es fiel a su propia identidad esencial."
  },
  {
    "id": 192,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Por qué el principio de identidad NO es una simple 'tautología inútil' como afirman algunos críticos?",
    "opciones": [
      "Porque genera millones de dólares en regalías a las editoriales de filosofía.",
      "Porque permite calcular la velocidad de los cometas en el espacio astronómico.",
      "Porque añade al sujeto el carácter de necesidad ontológica de ser lo que es según su esencia.",
      "Porque fue escrito en pergaminos sagrados que nadie tiene derecho a cuestionar mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "El principio de identidad",
    "separata": "Separata 2",
    "explicacionDetallada": "No es una redundancia vacía: afirma la estabilidad y necesidad ontológica de la realidad frente al caos o al relativismo que disuelve las identidades de las cosas.",
    "explicacionAlternativa": "No es repetir una palabra como loro; es afirmar con fuerza que la realidad tiene solidez y que las cosas no se desvanecen en su contrario."
  },
  {
    "id": 193,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Cómo se formula el 'Principio del Tercero Excluido' (tertium non datur)?",
    "opciones": [
      "En un juicio civil solo pueden hablar dos abogados y se expulsa al tercer testigo.",
      "Los grupos sociales están compuestos siempre por tres clases socioeconómicas fijas en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "'Cualquier cosa, o es o no es; no cabe término medio entre dos proposiciones contradictorias'.",
      "El tercer día de la semana laboral es obligatorio suspender las actividades comerciales."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "El principio del tercero excluido",
    "separata": "Separata 2",
    "explicacionDetallada": "Cualquier cosa o es o no es, no hay término medio. Entre dos proposiciones contradictorias (A y no-A), una es necesariamente verdadera y la otra falsa.",
    "explicacionAlternativa": "Una mujer o está embarazada o no lo está; es imposible estar 'un tercio embarazada'."
  },
  {
    "id": 194,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Qué nueva idea añade el principio del tercero excluido respecto al de no-contradicción?",
    "opciones": [
      "Que los silogismos aristotélicos deben contener exactamente tres premisas mayores.",
      "Que los filósofos deben cobrar honorarios triples por dar conferencias públicas mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "La idea de que no se puede encontrar una tercera opción o estado intermedio entre el ser y el no-ser.",
      "Que las cosas materiales poseen tres dimensiones espaciales: alto, ancho y profundidad."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "El principio del tercero excluido",
    "separata": "Separata 2",
    "explicacionDetallada": "No es idéntico al de no-contradicción: añade la exigencia real de que no existe una alternativa intermedia o híbrida entre existir y no existir.",
    "explicacionAlternativa": "La luz de un interruptor: o circula corriente o no circula corriente; no hay un tercer estado fantasma."
  },
  {
    "id": 195,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Cuál es la formulación metafísica del 'Principio de Razón Suficiente'?",
    "opciones": [
      "'Todo ente tiene una razón suficiente de su existencia y de su ser'.",
      "Solo las personas con título universitario de doctorado tienen razones para opinar.",
      "Todos los seres humanos deben dar explicaciones verbales a sus jefes en el trabajo.",
      "Las causas científicas deben ser aprobadas por mayoría de votos parlamentarios."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "El principio de razón suficiente",
    "separata": "Separata 2",
    "explicacionDetallada": "Se enuncia: 'Todo ente tiene una razón suficiente de su existencia' o 'Todo ser tiene una razón suficiente de ser'. Nada es inteligible sin un fundamento suficiente.",
    "explicacionAlternativa": "Nada ocurre porque sí ni brota de la nada mágica: si algo existe o cambia, hay una razón suficiente que explica por qué es así."
  },
  {
    "id": 196,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "[Caso Práctico] Un político afirma en un debate: 'Esta ley es justa y a la vez es injusta para el mismo ciudadano y bajo la misma ley'. Esta afirmación viola:",
    "opciones": [
      "El principio de la gravedad terrestre.",
      "El principio de la flotabilidad de Arquímedes.",
      "El principio supremo de no-contradicción.",
      "Las reglas ortográficas del uso de las letras mayúsculas."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "El principio de no contradicción",
    "separata": "Separata 2",
    "explicacionDetallada": "Viola directamente el principio de no-contradicción: atribuye predicados absolutamente contradictorios (justo e injusto) al mismo sujeto al mismo tiempo y bajo el mismo aspecto.",
    "explicacionAlternativa": "Decir que una comida es deliciosa y repugnante al mismo paladar en el mismo bocado es una contradicción absurda."
  },
  {
    "id": 197,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Por qué los primeros principios son 'universales'?",
    "opciones": [
      "Porque solo son válidos para los astronautas que viajan por el universo espacial exterior.",
      "Porque fueron aprobados por la Asamblea General de las Naciones Unidas en Nueva York.",
      "Porque se aplican a absolutamente cualquier ente, categoría y ciencia sin excepción.",
      "Porque cambian de significado cada vez que una nave viaja a otro planeta del sistema."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Qué es un principio",
    "separata": "Separata 2",
    "explicacionDetallada": "Son universales porque se aplican a cualquier ente, cualquiera que sea su categoría, género o ciencia particular que lo investigue (física, biología, teología, derecho).",
    "explicacionAlternativa": "La no-contradicción rige tanto para un mosquito, como para una estrella lejana, como para un dilema ético."
  },
  {
    "id": 198,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Por qué los primeros principios son 'necesarios'?",
    "opciones": [
      "Porque sería metafísicamente absurdo que en algún momento dejaran de tener validez real.",
      "Porque los profesores de filosofía necesitan cobrar salarios enseñando sus nombres.",
      "Porque las bibliotecas públicas exigen archivarlos en cajas de metal antiincendios.",
      "Porque sin ellos los automóviles no podrían encender sus motores de gasolina en invierno."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Qué es un principio",
    "separata": "Separata 2",
    "explicacionDetallada": "Son necesarios de tal manera que su opuesto es ontológicamente imposible: sería un absurdo absoluto que una cosa fuera y no fuera a la vez.",
    "explicacionAlternativa": "No son leyes que el gobierno pueda derogar mañana: rigen con necesidad eterna."
  },
  {
    "id": 199,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "[Pregunta Trampa] Si dos enunciados dicen: 'Sócrates está en Atenas' y 'Sócrates está en Esparta', ¿son necesariamente proposiciones contradictorias?",
    "opciones": [
      "Solo si se refieren al mismo tiempo; si se refieren a horas distintas no hay contradicción.",
      "Sí, porque Atenas y Esparta fueron dos ciudades rivales durante la guerra del Peloponeso.",
      "Sí, siempre son contradictorias sin importar ningún otro factor cronológico tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "No, porque Sócrates tenía poderes mágicos de bilocación cuántica permanente."
    ],
    "correcta": 0,
    "dificultad": "Trampa",
    "seccion": "El principio de no contradicción",
    "separata": "Separata 2",
    "explicacionDetallada": "Para que haya contradicción debe ser 'al mismo tiempo y bajo el mismo aspecto'. Si Sócrates estuvo por la mañana en Atenas y por la tarde viajó a Esparta, ambas proposiciones son verdaderas sin contradecirse.",
    "explicacionAlternativa": "Estar en el trabajo a las 9 am y en tu casa a las 8 pm no es ninguna contradicción: ocurrió en tiempos distintos."
  },
  {
    "id": 200,
    "examen": 10,
    "tituloExamen": "Examen 10: Primeros Principios del Ser",
    "pregunta": "¿Cuál es la relación entre el Principio de Razón Suficiente y la demostración de la existencia de Dios?",
    "opciones": [
      "Demuestra que el universo se creó a sí mismo de la nada sin necesidad de Creador.",
      "Exige que el universo participado y contingente tenga una causa proporcionada que explique su existencia.",
      "Ninguna, porque la existencia de Dios es una cuestión de gustos personales sin razones en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Impide que la razón humana formule preguntas sobre el origen y sentido del cosmos."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "El principio de razón suficiente",
    "separata": "Separata 2, 3 y 4",
    "explicacionDetallada": "Dado que las criaturas no tienen en sí mismas la razón de su propio ser (son contingentes), el Principio de Razón Suficiente exige una Causa por esencia (Dios) que sea la razón fundante de que existan.",
    "explicacionAlternativa": "Si encuentras una fogata ardiendo en medio del bosque, sabes con certeza que alguien con fuego estuvo allí y la encendió."
  },
  {
    "id": 201,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "[Ejemplo clásico del texto: La silla de madera] ¿Cuál es la causa material y cuál la causa formal intrínseca de la silla?",
    "opciones": [
      "La causa material es la madera y la causa formal es el diseño configurador de la silla.",
      "La causa material es el barniz y la causa formal es el dinero que costó la madera mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "La causa material es el carpintero y la causa formal es el taller donde se fabricó.",
      "La causa material es la fatiga del trabajador y la formal es el cansancio de sentarse."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Causa material y causa formal: su relevancia teológica",
    "separata": "Separata 3",
    "explicacionDetallada": "En la silla, la madera es la causa material (aquello de lo cual está hecha); el diseño o estructura intrínseca que la hace silla es la causa formal.",
    "explicacionAlternativa": "La masa es la causa material de la galleta; la figura de estrella es su causa formal."
  },
  {
    "id": 202,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Qué es la 'causa ejemplar' y en qué se diferencia de la forma intrínseca?",
    "opciones": [
      "Es un castigo ejemplar impuesto por los jueces a los fabricantes de muebles defectuosos.",
      "Es el precio comercial que sirve de ejemplo a las demás tiendas del mercado local.",
      "Es la forma extrínseca o modelo que se encuentra previamente en la mente del artífice.",
      "Es la herramienta de hierro con la que el carpintero corta los tablones de madera."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Causa material y causa formal",
    "separata": "Separata 3",
    "explicacionDetallada": "El diseño está en la mente del fabricante antes de plasmarse en la cosa: esa forma extrínseca es la causa ejemplar (el plano o modelo ideal concebido).",
    "explicacionAlternativa": "El plano del arquitecto dibujado en su cuaderno: es el modelo o causa ejemplar según el cual se construirá la casa real."
  },
  {
    "id": 203,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "En la causalidad material, ¿cuáles son los dos niveles fundamentales distinguidos en el texto?",
    "opciones": [
      "El nivel del costo de compra y el de los impuestos aduaneros de importación mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "El nivel atómico cuántico y el nivel astronómico de los planetas gigantes.",
      "El nivel substancial (materia prima) y el nivel accidental (substancia en acto).",
      "El nivel de los sólidos cristalizados y el de los gases fluorescentes fríos."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Causa material y causa formal: dos niveles",
    "separata": "Separata 3",
    "explicacionDetallada": "A nivel accidental, la materia es una substancia en acto y la forma es un accidente; a nivel substancial, la materia es materia prima (pura potencia) y la forma es sustancial.",
    "explicacionAlternativa": "La pared que recibe pintura es materia accidental; la materia prima que recibe la vida en un organismo es materia sustancial."
  },
  {
    "id": 204,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "[Aplicación Teológica] En un acto sobrenatural de virtud o de caridad realizado por el hombre, ¿cuál es la causa material y cuál la formal?",
    "opciones": [
      "La causa material es el hombre (sujeto) y la causa formal es la gracia divina recibida.",
      "Ambas causas son humanas, pues la religión es un invento moral de la sociedad civil tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "La causa material es la iglesia física y la formal es el sermón del predicador.",
      "La causa material es el dinero donado y la formal es el recibo bancario firmado."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Relevancia teológica de la causa material y formal",
    "separata": "Separata 3",
    "explicacionDetallada": "El acto es materialmente humano (lo realiza el hombre como sujeto receptor), pero es formalmente sobrenatural gracias a la gracia que Dios le infunde.",
    "explicacionAlternativa": "Un trozo de hierro puesto al fuego se vuelve incandescente: el hierro es el sujeto (materia), pero el fuego que lo ilumina y calienta es la forma que lo transforma."
  },
  {
    "id": 205,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Cómo se define de modo riguroso la 'causa formal' según la metafísica tomista?",
    "opciones": [
      "La etiqueta exterior pegada con adhesivo sobre los empaques comerciales.",
      "El acto o perfección por la cual una cosa es o viene a ser lo que es en acto.",
      "Una ley escrita en el código penal que prohíbe el uso de materiales tóxicos en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "La fuerza muscular aplicada por los obreros en las fábricas metalúrgicas."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Causa formal",
    "separata": "Separata 3",
    "explicacionDetallada": "La causa formal es la forma, acto o perfección determinante por la cual una cosa es lo que es (forma sustancial en lo sustancial, forma accidental en lo accidental).",
    "explicacionAlternativa": "Es el molde que le da identidad y carácter a la masa: define si serás pan dulce, galleta o tarta."
  },
  {
    "id": 206,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Por qué la causa formal es superior en nobleza, perfección y rango a la causa material?",
    "opciones": [
      "Porque la materia está en función de la forma y requiere ser actualizada por ella.",
      "Porque los filósofos siempre prefieren el trabajo intelectual antes que el físico.",
      "Porque la materia se pudre con el tiempo mientras que las palabras escritas no mueren.",
      "Porque la forma cuesta más cara en las listas de precios de las empresas industriales."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Primacía de la forma sobre la materia",
    "separata": "Separata 3",
    "explicacionDetallada": "Materia y forma se relacionan como potencia y acto. La materia solo es cognoscible y real cuando es determinada por la forma; por ello la materia está al servicio de la forma.",
    "explicacionAlternativa": "El mármol bruto tirado en una cantera no dice nada; la escultura de Moisés tallada por Miguel Ángel despierta admiración universal."
  },
  {
    "id": 207,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Cuál es el tipo más elevado de 'forma creada' que existe en el universo?",
    "opciones": [
      "Los planetas gaseosos gigantes que giran alrededor de las estrellas lejanas.",
      "Las computadoras cuánticas más avanzadas construidas por la tecnología humana.",
      "La pura forma espiritual subsistente de los ángeles, libre de materia.",
      "El cuerpo físico de las ballenas azules en los océanos profundos."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Formas creadas más elevadas",
    "separata": "Separata 3",
    "explicacionDetallada": "El tipo más elevado de forma creada es la pura forma de los ángeles, pues su única potencialidad es de orden sustancial dirigida directamente hacia el esse recibido.",
    "explicacionAlternativa": "Los ángeles son espíritus puros: luz formal sin la opacidad o pesadez del barro corporal."
  },
  {
    "id": 208,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Por qué un ser humano posee en el orden sustancial más potencialidad que una sustancia angélica?",
    "opciones": [
      "Porque los seres humanos duermen ocho horas diarias para recuperar energías.",
      "Porque el ser humano tiene cuerpo material compuesto de materia prima y forma.",
      "Porque la sociedad humana cambia de gobernantes en elecciones periódicas.",
      "Porque los hombres cometen errores de cálculo matemático todos los días según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Formas creadas y potencia substancial",
    "separata": "Separata 3",
    "explicacionDetallada": "El hombre tiene la potencia de la materia prima hacia la forma, más la potencia de la esencia hacia el acto de ser; el ángel carece de materia corpórea.",
    "explicacionAlternativa": "El hombre tiene dos niveles de recipiente (cuerpo y alma); el ángel es un solo cáliz espiritual que recibe el ser."
  },
  {
    "id": 209,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "[Pregunta Trampa] Si un escultor hace una estatua de bronce, ¿cuál es la causa formal de la estatua?",
    "opciones": [
      "El metal de bronce que se fundió en el horno de fundición a mil grados.",
      "El dinero que pagó el mecenas para que el artista comprara los materiales.",
      "El martillo y el cincel de acero templado que golpearon el metal frío mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "La figura esculpida que determina accidentalmente al bronce en esa imagen."
    ],
    "correcta": 3,
    "dificultad": "Trampa",
    "seccion": "Causa material y formal en artefactos",
    "separata": "Separata 3",
    "explicacionDetallada": "El bronce es la causa material; la figura (ej. figura de caballo) es la causa formal accidental que hace que ese bronce sea una estatua determinada.",
    "explicacionAlternativa": "La figura o silueta del caballo es la forma; el metal fundido es la materia."
  },
  {
    "id": 210,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Cómo se causa recíprocamente la causa material y la causa formal entre sí?",
    "opciones": [
      "Luchando como dos fieras salvajes hasta que una de las dos es destruida.",
      "Emitiendo sonidos musicales audibles para el oído de los transeúntes.",
      "Multiplicando el valor económico de las mercancías en los mercados libres mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "La material recibe a la formal, y la formal determina y actualiza a la material."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Causalidad recíproca de materia y forma",
    "separata": "Separata 3",
    "explicacionDetallada": "Causae ad invicem sunt causae: las causas material y formal no actúan por sí solas; se causan mutuamente. La materia sostiene a la forma recibiéndola, y la forma actualiza a la materia.",
    "explicacionAlternativa": "El molde da forma a la gelatina, y la gelatina rellena y hace visible al molde: se necesitan mutuamente para que haya postre."
  },
  {
    "id": 211,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Por qué las causas material y formal requieren obligatoriamente de una 'causa eficiente' para unirse?",
    "opciones": [
      "Porque la materia y la forma son pasivas en sí mismas y no pueden unirse solas.",
      "Porque los tratados de física prohíben que los cuerpos se toquen sin permiso legal.",
      "Porque la materia odia a la forma y huye de ella cuando no hay obreros cerca.",
      "Porque la causa eficiente es un dios pagano que exige sacrificios rituales."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Acción de la causa eficiente sobre materia y forma",
    "separata": "Separata 3",
    "explicacionDetallada": "Las causas material y formal no actúan: es la causa eficiente la que actúa introduciendo la forma en la materia o extrayéndola de su potencia.",
    "explicacionAlternativa": "Por mucho que tengas madera y un plano de silla en el suelo, jamás se formará una silla sola sin un carpintero que trabaje."
  },
  {
    "id": 212,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "Cuando una persona aprende una nueva ciencia (como la filosofía), ¿qué tipo de causa formal adquiere?",
    "opciones": [
      "Una materia prima informe que pesa cinco kilogramos adicionales en su cabeza.",
      "Una causa ejemplar externa que solo vive en los libros de la biblioteca.",
      "Una nueva forma sustancial que disuelve su naturaleza biológica anterior.",
      "Una forma accidental de cualidad que perfecciona su hábito intelectual."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Causa formal accidental",
    "separata": "Separata 3",
    "explicacionDetallada": "El conocimiento adquirido es un hábito (cualidad accidental), que actúa como forma accidental perfeccionando la potencia intelectiva del sujeto.",
    "explicacionAlternativa": "Aprender a tocar piano no te cambia de especie: te añade una hermosa habilidad accidental que te enriquece."
  },
  {
    "id": 213,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Cuál es la causa material de un libro impreso en una imprenta?",
    "opciones": [
      "El precio en monedas que cobra el editor por cada ejemplar vendido.",
      "La librería donde se colocó el libro a la venta para los lectores.",
      "El pensamiento genial del autor cuando redactó los primeros capítulos.",
      "El papel de celulosa y la tinta química utilizados en la impresión."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Causa material en artefactos",
    "separata": "Separata 3",
    "explicacionDetallada": "La causa material es aquello de lo cual algo está hecho; en el libro físico, es el papel y la tinta que reciben la impresión de las letras.",
    "explicacionAlternativa": "Las hojas y la tinta son el cuerpo físico (materia) donde están escritas las palabras."
  },
  {
    "id": 214,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Cuál es la causa formal de ese mismo libro impreso?",
    "opciones": [
      "La electricidad consumida por las máquinas rotativas durante la noche.",
      "El camión de transporte que repartió las cajas de libros por la ciudad en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "La ordenación sintáctica y el texto con significado que informa a las páginas.",
      "El peso total medido en gramos en una balanza de precisión postal."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Causa formal en artefactos",
    "separata": "Separata 3",
    "explicacionDetallada": "La disposición estructurada de las letras, oraciones y capítulos que otorgan sentido al texto es la causa formal que hace que sea ese libro determinado.",
    "explicacionAlternativa": "Manchas de tinta negra sin orden son solo manchas; las mismas manchas ordenadas en palabras forman una novela hermosa."
  },
  {
    "id": 215,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Por qué Dios no tiene causa material ni causa formal extrínseca?",
    "opciones": [
      "Porque los teólogos medievales no tenían permiso papal para analizar a Dios.",
      "Porque la causa formal solo puede aplicarse a los animales de cuatro patas.",
      "Porque Dios es un concepto imaginario inventado por los seres humanos primitivos.",
      "Porque Dios es absolutamente simple, inmaterial, Acto Puro y Causa Incausada."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Simplicidad divina y causalidad",
    "separata": "Separata 3 y 4",
    "explicacionDetallada": "Dios carece de causas porque es la Causa Primera y el Ser Subsistente Mismo (Ipsum Esse Subsistens). No tiene materia (es puro espíritu) ni composición formal.",
    "explicacionAlternativa": "El Creador de todas las cosas no fue creado ni fabricado por nadie: existe por Sí Mismo con plenitud infinita."
  },
  {
    "id": 216,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "[Pregunta Trampa] ¿Puede la causa material de un artefacto ser a su vez una substancia en acto?",
    "opciones": [
      "No, porque las substancias jamás pueden ser modificadas por el trabajo humano.",
      "Sí, en los cambios accidentales la materia es una substancia ya existente (como la madera).",
      "No, la causa material siempre tiene que ser materia prima pura sin forma alguna.",
      "Solo si el artefacto fue bendecido por un sacerdote en una ceremonia pública según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios."
    ],
    "correcta": 1,
    "dificultad": "Trampa",
    "seccion": "Causa material: dos niveles",
    "separata": "Separata 3",
    "explicacionDetallada": "A nivel accidental, la materia sobre la que recae la nueva forma accidental es una sustancia real ya en acto (ej. el bloque de mármol o el tablón de madera).",
    "explicacionAlternativa": "La tela de algodón ya es una tela completa en acto; el sastre la usa como materia prima para confeccionar un traje elegante."
  },
  {
    "id": 217,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "En la doctrina católica sobre los sacramentos citada en el texto, ¿cuál es la causa formal de la santificación?",
    "opciones": [
      "El certificado de bautismo emitido en papel por la parroquia local.",
      "La campana de bronce del templo que suena durante la celebración tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "El agua bendita fría que se derrama sobre la cabeza del bebé.",
      "La gracia santificante infundida por Dios en el alma del cristiano."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Causalidad y sacramentos",
    "separata": "Separata 3",
    "explicacionDetallada": "En la santificación, la gracia es la causa formal que hace al alma santa y agradable a Dios; el hombre es la causa material receptiva.",
    "explicacionAlternativa": "La gracia viste y embellece al alma humana por dentro como una luz divina formal."
  },
  {
    "id": 218,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Qué ocurre si un maestro carpintero concibe un diseño maravilloso pero jamás consigue madera para tallarlo?",
    "opciones": [
      "El carpintero comete un pecado mortal por no haber talado un árbol del bosque.",
      "La silla existe en la realidad con todos sus cuatro pies y asiento sólido.",
      "La madera se materializa por telepatía cósmica en el centro de su taller según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "La causa ejemplar permanece en su mente, pero la silla no llega a existir en el ser real exterior."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Causa ejemplar y formal",
    "separata": "Separata 3",
    "explicacionDetallada": "La causa ejemplar es solo la forma pensada en la mente del artífice. Para que haya un ente real se requiere causa material, causa eficiente y realización del esse.",
    "explicacionAlternativa": "Soñar con una mansión no te protege del frío: necesitas ladrillos, cemento y albañiles trabajando."
  },
  {
    "id": 219,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "¿Por qué se dice que el entendimiento humano solo conoce las cosas en la medida en que están 'determinadas'?",
    "opciones": [
      "Porque la indeterminación pura (la materia informe) es ininteligible en sí misma.",
      "Porque los seres humanos solo pueden leer libros que tengan menos de diez páginas.",
      "Porque las cosas indeterminadas brillan tanto que ciegan la vista de los sabios.",
      "Porque Aristóteles prohibió que la inteligencia formulara preguntas difíciles."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Primacía de la forma sobre la materia",
    "separata": "Separata 3",
    "explicacionDetallada": "La inteligibilidad proviene de la forma (acto determinante). La materia prima por ser pura potencialidad indeterminada solo puede conocerse por analogía con la forma.",
    "explicacionAlternativa": "No puedes describir una mancha borrosa e informe; solo puedes reconocer una figura cuando tiene líneas y contornos definidos."
  },
  {
    "id": 220,
    "examen": 11,
    "tituloExamen": "Examen 11: Las Cuatro Causas: Causa Material y Causa Formal",
    "pregunta": "La síntesis de la doctrina de las causas material y formal demuestra que todo cuerpo sensible es:",
    "opciones": [
      "Una emanación directa de la luz solar sin ninguna consistencia ontológica.",
      "Una substancia espiritual que se disfraza con átomos temporales para jugar según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "Un compuesto hilemórfico de materia potencial receptiva y forma sustancial determinante.",
      "Una ilusión óptica generada por el cerebro que desaparecerá al morir."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Síntesis de materia y forma",
    "separata": "Separata 3",
    "explicacionDetallada": "La doctrina hilemórfica aristotélico-tomista establece que los entes corpóreos son una unidad indisociable de materia (potencia) y forma (acto).",
    "explicacionAlternativa": "Todo objeto del mundo real tiene de qué está hecho (materia) y qué figura y orden tiene (forma)."
  },
  {
    "id": 221,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Qué es la 'causa eficiente' o agente según el sentido común y la metafísica?",
    "opciones": [
      "El principio activo que con su acción hace que algo sea o devenga real.",
      "La meta lejana hacia la cual camina un viajero durante varios meses.",
      "El costo económico calculado en monedas que tiene un proyecto público.",
      "El material de arcilla con el que los niños juegan en las guarderías mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "La causa eficiente: creación y causalidad",
    "separata": "Separata 3",
    "explicacionDetallada": "La causa eficiente o agente es aquello que hace que algo sea; es el principio del cual proviene primariamente el movimiento o la producción de un efecto.",
    "explicacionAlternativa": "El bateador que golpea la pelota: su golpe es la causa eficiente que pone a volar la bola."
  },
  {
    "id": 222,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Cuál es la diferencia radical entre la 'Creación' divina y la causalidad productiva de las criaturas?",
    "opciones": [
      "La creación requiere millones de obreros; las criaturas trabajan siempre en soledad.",
      "La Creación es dar el esse total de la nada (ex nihilo); las criaturas solo transforman seres preexistentes.",
      "La Creación solo produce minerales y las criaturas son capaces de crear almas inmortales según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "No existe ninguna diferencia; cualquier carpintero crea cosas de la nada todos los días."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Creación vs causalidad de las criaturas",
    "separata": "Separata 3",
    "explicacionDetallada": "La creación es la producción total de ser a partir de la nada (efecto exclusivo de la Causa Primera). Las criaturas solo causan el devenir (fieri), transformando cosas ya existentes.",
    "explicacionAlternativa": "El alfarero transforma el barro en jarra (fieri); solo Dios puede traer el barro y al alfarero a la existencia desde la nada absoluta."
  },
  {
    "id": 223,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "[Error Teológico Histórico] ¿Qué doctrina errónea pretendía que las criaturas no causan nada para exaltar a Dios?",
    "opciones": [
      "El panteísmo cósmico de los estoicos griegos.",
      "El ateísmo marxista contemporáneo mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "El hilemorfismo aristotélico tradicional.",
      "El ocasionalismo, que reduce a las criaturas a meros espectadores o títeres pasivos."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Causas segundas reales vs ocasionalismo",
    "separata": "Separata 3",
    "explicacionDetallada": "Doctrinas como el ocasionalismo sostenían que solo Dios actúa y que las criaturas son meros títeres sin causalidad real. El texto refuta esto con energía.",
    "explicacionAlternativa": "Pensar que el fuego no quema el papel, sino que Dios quema el papel cada vez que el fuego se acerca: un error que anula la naturaleza creada."
  },
  {
    "id": 224,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Por qué negar la causalidad real de las criaturas disminuye paradójicamente el poder de Dios?",
    "opciones": [
      "Porque los tribunales de justicia humanos multarían a Dios por monopolio causal mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Porque obligaría a Dios a construir fábricas industriales para producir alimentos.",
      "Porque demuestra mayor poder supremo ser capaz de comunicar y compartir causalidad real con las criaturas.",
      "Porque Dios necesita la ayuda de los hombres para poder vencer a los demonios."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Causalidad de las criaturas y poder divino",
    "separata": "Separata 3",
    "explicacionDetallada": "Demuestra más poder y generosidad infinita crear seres que sean verdaderamente causas reales y libres, que fabricar títeres inertes incapaces de causar nada.",
    "explicacionAlternativa": "Un gran maestro es más admirable cuando enseña a sus alumnos a resolver problemas por sí mismos que si él hace toda la tarea."
  },
  {
    "id": 225,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Qué título metafísico reciben las criaturas en el orden de la causalidad eficiente?",
    "opciones": [
      "Causas Fantasmas sin efecto objetivo.",
      "Causas Segundas reales y verdaderas.",
      "Causas Inexistentes condenadas a la nada.",
      "Causas Primeras Absolutas."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Causas segundas",
    "separata": "Separata 3",
    "explicacionDetallada": "Dios es la Causa Primera fontal; las cosas creadas se denominan causas segundas. Son causas verdaderas cuya actividad participa del poder divino.",
    "explicacionAlternativa": "El sol es la fuente de calor primera; el radiador caliente en tu cuarto es una causa segunda real que calienta el ambiente."
  },
  {
    "id": 226,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Qué grave consecuencia moral se seguiría si negáramos la causalidad real de los seres humanos?",
    "opciones": [
      "Los médicos descubrirían remedios instantáneos para todas las enfermedades según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Se reducirían los accidentes de tránsito en las carreteras principales.",
      "Se negaría la libertad humana y, por tanto, se destruiría toda responsabilidad moral.",
      "Todos los seres humanos aprobarían los exámenes de metafísica automáticamente."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Libertad y responsabilidad moral",
    "separata": "Separata 3",
    "explicacionDetallada": "Si el hombre no causa realmente sus acciones, no es libre ni dueño de sus actos; sin libertad no hay mérito, ni culpa, ni responsabilidad moral alguna.",
    "explicacionAlternativa": "Si alguien te empuja la mano para romper un jarrón, tú no eres el culpable: eres responsable solo de lo que causas libremente."
  },
  {
    "id": 227,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "[Principio escolástico: 'Modus operandi sequitur modum essendi'] ¿Qué significa esta célebre regla metafísica?",
    "opciones": [
      "Que las leyes penales deben cambiar de contenido cada vez que cambia el clima.",
      "Que todos los trabajadores deben vestir uniforme formal durante las horas de trabajo.",
      "Que las máquinas automáticas son más perfectas moralmente que los sabios humanos.",
      "Que el modo de obrar de una causa sigue y se corresponde con su modo propio de ser."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Modus operandi sequitur modum essendi",
    "separata": "Separata 3",
    "explicacionDetallada": "El obrar sigue al ser: causas necesarias actúan necesariamente (el fuego quema); causas libres actúan libremente (el hombre elige). El ser fundamenta la acción.",
    "explicacionAlternativa": "Un pájaro vuela porque es pájaro; un ser humano delibera y decide porque es una persona racional libre."
  },
  {
    "id": 228,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Cuáles son los agentes espirituales citados en el texto que actúan como causas libres?",
    "opciones": [
      "Las computadoras digitales, los robots industriales y las redes sociales.",
      "Los insectos voladores, los peces de río y los reptiles venenosos.",
      "Los seres racionales y espirituales: los hombres, los ángeles y Dios.",
      "Los minerales pesados, las corrientes marinas y los vientos huracanados."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Causas libres y necesarias",
    "separata": "Separata 3",
    "explicacionDetallada": "Los agentes dotados de inteligencia y voluntad espiritual (hombres, ángeles y Dios) actúan como causas libres con capacidad de elegir sus acciones.",
    "explicacionAlternativa": "Una piedra cae por gravedad (necesidad); tú decides ayudar a un anciano a cruzar la calle (libertad)."
  },
  {
    "id": 229,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "[Ejemplo del carpintero y la mesa] Cuando el carpintero fabrica una mesa, ¿produce el ser (esse) de la mesa de la nada?",
    "opciones": [
      "Sí, exactamente igual a como Dios creó el universo cósmico al principio.",
      "No, porque las mesas no existen en el mundo real y son puras ilusiones.",
      "Sí, crea los átomos de madera de la nada mediante su gran inteligencia conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "No, produce la transformación y disposición formal de materiales que ya tenían ser."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Causalidad creada como transformación",
    "separata": "Separata 3",
    "explicacionDetallada": "El carpintero no crea el ser de la nada: los materiales ya existían. Lo que él hace es ordenar la materia en una nueva forma: hace que la mesa devenga (fieri), no que sea ex nihilo.",
    "explicacionAlternativa": "Un chef prepara una ensalada deliciosa: corta y mezcla los vegetales que ya existían, no hace brotar lechugas mágicamente del aire."
  },
  {
    "id": 230,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Cómo actúa Dios en la acción de las causas segundas creadas?",
    "opciones": [
      "Eliminando la naturaleza de la criatura para sustituirla por su mano física.",
      "Obligando a todas las criaturas a cometer errores para que aprendan la lección.",
      "Contemplando pasivamente desde el cielo sin intervenir en ningún momento.",
      "Moviéndolas como Causa Primera de modo íntimo, fundando su propia actividad."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Cooperación divina y causas segundas",
    "separata": "Separata 3",
    "explicacionDetallada": "Dios opera en toda causa segunda dándole el ser y la fuerza de obrar; este influjo divino no destruye la causalidad creada, sino que es su fundamento más íntimo.",
    "explicacionAlternativa": "La planta generadora de luz que envía electricidad: no sustituye a tu licuadora, sino que le da la corriente que necesita para girar."
  },
  {
    "id": 231,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Por qué la causalidad de las criaturas es llamada causalidad 'participada'?",
    "opciones": [
      "Porque solo funciona cuando un grupo de personas se reúne a cantar en coro según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios.",
      "Porque todas las empresas privadas cotizan sus acciones en la bolsa de valores.",
      "Porque desaparece en cuanto el sol se oculta en el horizonte por las noches.",
      "Porque deriva su capacidad activa de la Fuente Primaria de todo poder, que es Dios."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Causalidad participada",
    "separata": "Separata 3",
    "explicacionDetallada": "Exactamente del mismo modo en que el ser de las criaturas es participado y limitado pero real, su causalidad activa es participada y limitada, pero verdadera.",
    "explicacionAlternativa": "Una bombilla eléctrica ilumina el cuarto con luz real, pero esa luz proviene de la red eléctrica central a la que está conectada."
  },
  {
    "id": 232,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "[Pregunta Trampa] Si Dios es la Causa Primera de todo lo que es, ¿es Dios también el autor del pecado moral cometido por el hombre?",
    "opciones": [
      "Sí, porque Dios obliga al pecador a desobedecer las leyes morales de los diez mandamientos tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "No, el ser del acto proviene de Dios, pero el desvío o defecto moral proviene de la libertad creada.",
      "Sí, ya que no existe ninguna distinción entre causalidad física y responsabilidad culpable.",
      "Solo si el pecador no confiesa sus culpas ante el tribunal civil en un plazo de tres días."
    ],
    "correcta": 1,
    "dificultad": "Trampa",
    "seccion": "Causalidad divina y mal moral",
    "separata": "Separata 3",
    "explicacionDetallada": "Dios da la energía de actuar (el ser del acto), pero la falta de rectitud (la deficiencia moral o pecado) procede exclusivamente de la voluntad humana defectible que rechaza la ley divina.",
    "explicacionAlternativa": "La corriente eléctrica mueve el motor del auto, pero si el conductor gira el timón hacia el abismo, la culpa del choque es del conductor, no de la batería."
  },
  {
    "id": 233,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Qué tipo de causas son el calor del fuego o la atracción magnética de un imán?",
    "opciones": [
      "Causas milagrosas sobrenaturales sin fundamento físico.",
      "Causas libres con discernimiento espiritual.",
      "Causas naturales necesarias que obran de modo determinado por su naturaleza.",
      "Causas ficticias inventadas por los poetas en el renacimiento tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Causas necesarias y libres",
    "separata": "Separata 3",
    "explicacionDetallada": "Son causas naturales necesarias: no pueden elegir si calientan o atraen; puestas las condiciones adecuadas, actúan infaliblemente conforme a su naturaleza física.",
    "explicacionAlternativa": "El agua puesta al fuego hierve por necesidad física; no puede 'decidir' si hoy se calienta o no."
  },
  {
    "id": 234,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Cómo experimentamos de modo cotidiano nuestra propia condición de causa eficiente?",
    "opciones": [
      "Mediante la experiencia interna de deliberar, elegir libremente y producir efectos reales.",
      "Leyendo periódicos extranjeros para enterarnos de las leyes de otros países.",
      "Sometiéndonos ciegamente al destino fatal sin pensar jamás en nada según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual.",
      "Cerrando los ojos y esperando que las cosas se muevan por poderes psíquicos."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Experiencia interna de la causalidad",
    "separata": "Separata 3",
    "explicacionDetallada": "En nuestra conciencia interna nos experimentamos a nosotros mismos tomando decisiones libres y causando efectos en el mundo material y moral con plena responsabilidad.",
    "explicacionAlternativa": "Decidiste levantar el brazo derecho y lo levantaste: sentiste tu voluntad causando directamente el movimiento del cuerpo."
  },
  {
    "id": 235,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "Cuando una causa produce un efecto, ¿el efecto puede ser superior en perfección a la causa total?",
    "opciones": [
      "No, nadie puede dar lo que no tiene; la causa total debe contener la perfección del efecto.",
      "Solo si el efecto es producido durante un eclipse de luna en el hemisferio sur.",
      "Sí, los efectos siempre son infinitamente más perfectos que todas sus causas juntas mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Sí, porque en el universo las cosas siempre brotan de la nada más absoluta y vacía."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Principio de causalidad y perfección",
    "separata": "Separata 3",
    "explicacionDetallada": "Nemo dat quod non habet (nadie da lo que no posee): la causa total debe contener la perfección del efecto de modo formal, virtual o eminente.",
    "explicacionAlternativa": "Un maestro no puede enseñarte a hablar alemán fluido si él mismo no conoce ni una palabra de alemán."
  },
  {
    "id": 236,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Por qué la creación no es un cambio ni un movimiento en sentido estricto?",
    "opciones": [
      "Porque los movimientos solo pueden realizarse dentro de laboratorios científicos cerrados mediante observaciones experimentales cuantitativas acumuladas a lo largo de los siglos.",
      "Porque las galaxias creadas se quedan congeladas en un solo punto del espacio estelar.",
      "Porque el movimiento exige un sujeto previo que cambia; en la creación no hay nada previo.",
      "Porque Dios se cansa mucho al crear y tiene que descansar durante varios siglos."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Naturaleza de la creación",
    "separata": "Separata 3",
    "explicacionDetallada": "El movimiento es el paso de un sujeto en potencia al acto. En la creación no hay sujeto previo ni materia prima preexistente: es la emanación total de todo el ser desde la nada.",
    "explicacionAlternativa": "Pintar una pared es un cambio (la pared ya estaba ahí); hacer aparecer la pared de la nada no es pintar: es crear."
  },
  {
    "id": 237,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "En la historia de la filosofía, ¿qué filósofo afirmó que solo existe el devenir perpetuo negando la substancia eficiente?",
    "opciones": [
      "Heráclito en la antigüedad y Karl Marx en la modernidad dialéctica.",
      "Santo Tomás de Aquino en la Edad Media.",
      "Isaac Newton en sus Principios Matemáticos.",
      "Boecio en su tratado teológico de la Trinidad según las interpretaciones sociológicas y reduccionistas comunes en manuales secundarios."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Devenir vs ser estable",
    "separata": "Separata 1, 2 y 3",
    "explicacionDetallada": "Heráclito afirmaba el río del cambio perpetuo ('panta rhei'); el marxismo retomó la dialéctica hegeliana negando el ser inmutable y reduciendo todo a proceso material dialéctico.",
    "explicacionAlternativa": "Quienes dicen que 'nada es, todo cambia continuamente sin causa inicial ni fin último'."
  },
  {
    "id": 238,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "¿Cuál es la relación entre la causa eficiente y la causa final?",
    "opciones": [
      "La causa eficiente destruye a la causa final antes de comenzar cualquier trabajo.",
      "Ambas causas se anulan mutuamente dejando a la materia en el reposo eterno.",
      "La causa final solo existe en los relojes digitales de última generación tecnológica.",
      "La causa final atrae y motiva a la causa eficiente para que se ponga en acción."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "La causa final y la causa eficiente",
    "separata": "Separata 3",
    "explicacionDetallada": "La causa final es la causa de las causas: es la que mueve a la causa eficiente a obrar. Todo agente actúa por un fin que busca alcanzar.",
    "explicacionAlternativa": "El deseo de comer una pizza deliciosa (causa final) es lo que te levanta del sofá y te hace cocinar (causa eficiente)."
  },
  {
    "id": 239,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "Cuando decimos que 'el universo no es un caos sino un cosmos', nos referimos a que:",
    "opciones": [
      "Los seres humanos no necesitan comer alimentos para mantenerse saludables y vivos.",
      "Las cosas y sus causas eficientes están ordenadas de forma armónica hacia sus propios fines.",
      "Todas las estrellas del firmamento tienen el mismo tamaño y la misma masa física.",
      "Los gobiernos de la tierra han firmado tratados de paz universales definitivos de acuerdo con ciertas posturas positivistas y materialistas del pensamiento decimonónico."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Cosmos vs caos",
    "separata": "Separata 3",
    "explicacionDetallada": "Cosmos significa orden y belleza en griego; las causas operan con regularidad teleológica, reflejando el orden universal dispuesto por la Sabiduría divina.",
    "explicacionAlternativa": "Una orquesta sinfónica donde cada instrumento toca en el momento justo formando una bella melodía, no ruidos caóticos."
  },
  {
    "id": 240,
    "examen": 12,
    "tituloExamen": "Examen 12: Causa Eficiente: Creación vs Causalidad de las Criaturas",
    "pregunta": "La conclusión metafísica capital sobre la causalidad eficiente de las criaturas es que:",
    "opciones": [
      "Son causas verdaderas, participantes del poder de Dios, dotadas de libertad y dignidad.",
      "Están totalmente sometidas a un destino mecánico ciego que las priva de toda moral.",
      "Poseen poder infinito para crear nuevos universos estelares a partir de la nada tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "Las criaturas son meras ilusiones teatrales sin ninguna consistencia en el mundo."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Síntesis de la causa eficiente",
    "separata": "Separata 3",
    "explicacionDetallada": "La doctrina de las causas segundas dignifica a la criatura: no la rebaja a la nada ni la endiosa, sino que la reconoce como causa real participada de la fecundidad divina.",
    "explicacionAlternativa": "Dios no quiso marionetas en un teatrillo: creó hijos y seres capaces de actuar, construir y amar en el mundo real."
  },
  {
    "id": 241,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "¿Qué es una 'causa instrumental' según la distinción metafísica clásica?",
    "opciones": [
      "Un violín o trompeta que se utiliza en los conciertos de música clásica.",
      "Cualquier causa que no produce ningún efecto en el mundo material sensible conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "Aquella que no actúa por su propia virtud formal, sino por la moción del agente principal.",
      "Un contrato bancario que garantiza el pago puntual de una deuda civil."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "La causa instrumental",
    "separata": "Separata 3",
    "explicacionDetallada": "La causa instrumental no obra por la sola virtud de su forma, sino en cuanto es movida por un agente principal; por ende, su efecto supremo se corresponde con la forma del agente principal.",
    "explicacionAlternativa": "El pincel no pinta cuadros solo: pinta obras maestras únicamente cuando está en la mano de un artista genial."
  },
  {
    "id": 242,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "[Ejemplo del texto: La pluma al escribir un poema] ¿Por qué la pluma es una causa instrumental?",
    "opciones": [
      "Porque los escritores compran plumas en las papelerías de los barrios comerciales tal como sostienen algunos empiristas y tratadistas modernos de la época contemporánea.",
      "Porque por su sola forma de pluma jamás podría componer poemas sin la mente del escritor.",
      "Porque la tinta derramada contiene ideas poéticas archivadas en sus moléculas.",
      "Porque el metal de la punta de la pluma se desgasta con el paso de los años."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "La causa instrumental: ejemplo de la pluma",
    "separata": "Separata 3",
    "explicacionDetallada": "La forma de la pluma (objeto afilado que retiene tinta) no basta para alcanzar el efecto de un bello poema; requiere el influjo intelectual transitorio del poeta que la mueve.",
    "explicacionAlternativa": "Una pluma tirada sobre una mesa nunca escribirá una carta de amor si nadie la toma y escribe."
  },
  {
    "id": 243,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "¿Cuál es la diferencia entre un 'instrumento unido' y un 'instrumento separado'?",
    "opciones": [
      "El unido cuesta más dinero de fabricar y el separado se vende con descuento.",
      "El separado es espiritual e invisible y el unido está hecho de hierro templado.",
      "El instrumento unido forma una unidad sustancial con el agente (ej. la propia mano); el separado es exterior (ej. la pluma).",
      "No existe ninguna diferencia; los filósofos usan ambos nombres indistintamente según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Instrumento unido y separado",
    "separata": "Separata 3",
    "explicacionDetallada": "Instrumento unido es el que pertenece a la constitución corpórea del agente (su mano o su lengua); instrumento separado es extrínseco (un martillo, una pluma, un sacramento).",
    "explicacionAlternativa": "Tus dedos para teclear son un instrumento unido; el teclado de la computadora es un instrumento separado."
  },
  {
    "id": 244,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "[Relevancia Teológica Cristológica] En los misterios de Jesucristo, ¿qué papel cumple su Sagrada Humanidad?",
    "opciones": [
      "Es el instrumento unido a la Persona Divina del Verbo para realizar la salvación.",
      "Es un obstáculo material que impidió a Jesús manifestar su sabiduría infinita.",
      "Es una apariencia fantasmal sin carne ni sangre reales sobre la tierra.",
      "Es una causa principal independiente que compite contra la voluntad de Dios Padre."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Cristología y causalidad instrumental",
    "separata": "Separata 3",
    "explicacionDetallada": "La Persona Divina del Verbo es el Agente Principal; la Humanidad de Cristo es el instrumento unido a la divinidad por la Unión Hipostática para comunicar la gracia.",
    "explicacionAlternativa": "La mano de Cristo tocando al leproso curaba con poder divino a través de su humanidad unida a Dios."
  },
  {
    "id": 245,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "En la doctrina de los sacramentos citada en la separata, ¿cómo se distribuyen las causas?",
    "opciones": [
      "Agente principal: El demonio; Instrumento: El pecado; Efecto: La aniquilación del ser.",
      "Agente principal: Dios; Instrumento separado: Sacramento; Efecto: Gracia santificante.",
      "Agente principal: El gobierno; Instrumento: La ley fiscal; Efecto: La pobreza.",
      "Agente principal: El campanero; Instrumento unido: El órgano; Efecto: El silencio de acuerdo con ciertas posturas positivistas y materialistas del pensamiento decimonónico."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Doctrina de los sacramentos",
    "separata": "Separata 3",
    "explicacionDetallada": "La causa eficiente principal es la Persona Divina; el instrumento unido es la humanidad de Cristo; el instrumento separado es el sacramento; el efecto formal es la gracia en el hombre.",
    "explicacionAlternativa": "Dios santifica a una persona (efecto de gracia) usando el agua bautismal como instrumento visible de su poder."
  },
  {
    "id": 246,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "¿Cuáles son las dos acciones inseparables que coexisten en toda causa instrumental?",
    "opciones": [
      "Una acción de compraventa comercial y una acción de transporte marítimo.",
      "Una acción gramatical de sujeto y una acción matemática de división.",
      "Su acción propia (acorde a su forma) y la acción instrumental (por poder del agente principal).",
      "Una acción de calentamiento térmico y una acción de enfriamiento polar conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Acción propia y acción instrumental",
    "separata": "Separata 3",
    "explicacionDetallada": "El instrumento tiene su acción propia según su forma (la pluma desliza tinta) y la acción instrumental transitoria comunicada por el agente principal (redactar un poema sublime).",
    "explicacionAlternativa": "El serrucho corta madera con sus dientes afilados (acción propia), pero solo hace un corte recto guiado por el carpintero (acción instrumental)."
  },
  {
    "id": 247,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "¿Por qué Dios tiene en cuenta y respeta la naturaleza de los seres humanos cuando los utiliza como instrumentos?",
    "opciones": [
      "Porque los seres humanos tienen más sabiduría política que los arcángeles celestiales.",
      "Porque si no lo hiciera los seres humanos le pondrían una demanda en los tribunales civiles.",
      "Porque Dios carece de fuerza suficiente para mover a una persona contra su voluntad.",
      "Porque el hombre es una persona libre e inteligente, y la gracia no destruye la naturaleza."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "El hombre como instrumento libre",
    "separata": "Separata 3",
    "explicacionDetallada": "Cuando Dios actúa a través del hombre, respeta su libertad y personalidad; la acción instrumental se ejerce a través de las capacidades propias del instrumento humano.",
    "explicacionAlternativa": "Si un maestro artesano usa un pincel fino, pinta líneas finas; Dios utiliza las características únicas de cada persona respetando su libertad."
  },
  {
    "id": 248,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "[Ejemplo de los escritores bíblicos] En la inspiración de las Sagradas Escrituras, ¿cómo actuaron los hagiógrafos (autores humanos)?",
    "opciones": [
      "Como verdaderas causas instrumentales libres cuyos estilos, lenguajes y culturas fueron respetados.",
      "Como secretarios mecánicos hipnotizados que no sabían qué idioma estaban escribiendo.",
      "Como ángeles celestiales que bajaron del cielo con pergaminos ya impresos de fábrica.",
      "Como autores independientes que inventaron fábulas mitológicas sin ninguna ayuda de Dios a través de deducciones matemáticas puramente formales desconectadas del orden real ontológico."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Inspiración bíblica y causa instrumental",
    "separata": "Separata 3",
    "explicacionDetallada": "Dios es el Autor Principal de la Biblia; los autores humanos fueron causas instrumentales vivas que emplearon sus facultades mentales, vocabulario y estilo bajo la inspiración divina.",
    "explicacionAlternativa": "San Pablo escribió con su propio estilo y temperamento enérgico, pero inspirado por el Espíritu Santo."
  },
  {
    "id": 249,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "¿Por qué un animal irracional jamás podría ser utilizado por Dios como instrumento para recibir la santificación sacramental?",
    "opciones": [
      "Porque los animales no tienen suficiente dinero para pagar las ceremonias religiosas.",
      "Porque los sacerdotes tienen prohibido permitir el ingreso de mascotas en los templos.",
      "Porque el instrumento requiere una capacidad propia proporcionada; el animal carece de alma espiritual.",
      "Porque la piel de los animales repele el agua bendita por tener aceites naturales según los postulados convencionales del relativismo y del subjetivismo gnoseológico actual."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Capacidad propia del instrumento",
    "separata": "Separata 3",
    "explicacionDetallada": "Algo del poder propio del instrumento ha de servir de base. Un animal carece de inteligencia y voluntad espiritual; es intrínsecamente incapaz de recibir gracia santificante o mérito moral.",
    "explicacionAlternativa": "No puedes usar un tenedor de metal para inflar una llanta de bicicleta: la herramienta debe tener una proporción básica con la tarea."
  },
  {
    "id": 250,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "Durante cuánto tiempo perdura el 'poder instrumental' en la causa instrumental:",
    "opciones": [
      "Permanece archivado en las bibliotecas de los conventos medievales europeos en conformidad con las doctrinas dialécticas que absolutizan el puro devenir y el cambio sin ser.",
      "Se evapora a los tres segundos de haberse terminado la fabricación del objeto.",
      "Fluye transitoriamente en el instrumento solo durante el tiempo en que el agente principal lo está usando.",
      "Queda grabado para siempre en la materia convirtiendo al objeto en un dios eterno."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Acción instrumental transitoria",
    "separata": "Separata 3",
    "explicacionDetallada": "La fuerza instrumental no es una propiedad estática inherente: fluye de modo transitorio desde el agente principal en el acto mismo de su empleo operativo.",
    "explicacionAlternativa": "La espada solo tiene la fuerza letal del guerrero mientras el guerrero la empuña con su brazo."
  },
  {
    "id": 251,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "[Pregunta Trampa] Si un sacerdote comete pecados graves en su vida privada, ¿los sacramentos que celebra pierden su validez y eficacia de gracia?",
    "opciones": [
      "No, porque el Agente Principal es Cristo Dios; el sacerdote actúa solo como ministro instrumental.",
      "Solo pierden validez los sacramentos celebrados en días de fiesta conmemorativa nacional.",
      "Sí, y todas las personas bautizadas por él deben ser rebautizadas de inmediato conforme a las hipótesis mecanicistas formuladas por autores racionalistas y empiristas.",
      "Sí, porque la gracia depende exclusivamente de la santidad personal del sacerdote humano."
    ],
    "correcta": 0,
    "dificultad": "Trampa",
    "seccion": "Causa instrumental y ministros sacramentales",
    "separata": "Separata 3",
    "explicacionDetallada": "Doctrina de *ex opere operato*: como Cristo es la causa eficiente principal, la imperfección del instrumento humano ministerial no anula el poder infinito del Agente Divino.",
    "explicacionAlternativa": "Una carta firmada por el Rey con una orden de indulto salva la vida del prisionero, aunque el cartero que la entregue sea un pecador."
  },
  {
    "id": 252,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "¿Qué ocurre si una persona intenta utilizar una sierra mecánica para escribir una carta de amor en un papel?",
    "opciones": [
      "El papel de celulosa se vuelve indestructible ante cualquier golpe de metal.",
      "Fracasa y destruye el papel, pues la acción propia del instrumento no es apta para ese fin.",
      "La sierra mecánica se transforma en un ángel celestial con alas de fuego puro.",
      "Logra redactar la carta más poética y conmovedora de la literatura universal."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Acción propia del instrumento",
    "separata": "Separata 3",
    "explicacionDetallada": "La acción instrumental presupone la acción propia: la pluma escribe porque tiene punta; una sierra solo puede aserrar. No se puede forzar un instrumento contra su naturaleza sin gracia extraordinaria.",
    "explicacionAlternativa": "No puedes coser un botón de camisa usando un martillo de construcción de cinco kilos."
  },
  {
    "id": 253,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "¿Por qué la humanidad de Cristo es el instrumento más sublime de la salvación?",
    "opciones": [
      "Porque los filósofos griegos habían profetizado su llegada en tratados de lógica.",
      "Porque fue fabricada en un taller artesanal de Nazaret con maderas de olivo.",
      "Porque está unida hipostáticamente a la Persona Divina del Verbo en perfecta armonía.",
      "Porque tenía más fuerza física que todos los soldados del imperio romano."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Cristología y causa instrumental unida",
    "separata": "Separata 3",
    "explicacionDetallada": "En Cristo, la naturaleza humana no es una persona independiente, sino el instrumento sustancialmente unido a la Segunda Persona de la Trinidad.",
    "explicacionAlternativa": "Es el puente perfecto: siendo verdadero hombre toca nuestras debilidades; siendo verdadero Dios nos comunica la vida eterna."
  },
  {
    "id": 254,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "Cuando un médico utiliza un bisturí de acero para extirpar un tumor maligno, ¿cuál es la causa principal y cuál la instrumental?",
    "opciones": [
      "La causa principal es el médico cirujano y la causa instrumental separada es el bisturí.",
      "La causa principal es el bisturí de acero y la instrumental es la mano del cirujano.",
      "Ambas son causas materiales sin ninguna intervención de causalidad eficiente.",
      "La causa principal es el hospital y la instrumental es la factura de cobro médico."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "La causa instrumental",
    "separata": "Separata 3",
    "explicacionDetallada": "El médico es el agente principal que posee la ciencia médica (forma) e intencionalidad; el bisturí es el instrumento material que ejecuta el corte bajo su pericia.",
    "explicacionAlternativa": "El cirujano cura; el bisturí solo corta según el pulso y saber del cirujano."
  },
  {
    "id": 255,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "¿Puede una causa instrumental alcanzar por sí misma un efecto que sobrepase su propia capacidad formal?",
    "opciones": [
      "Solo si es sumergida en aceites aromáticos bendecidos en los monasterios.",
      "Sí, las herramientas siempre son más inteligentes que los hombres que las fabricaron.",
      "Sí, porque en el mundo material los objetos inertes tienen voluntad de superación.",
      "No, solo puede alcanzar un efecto superior en la medida en que es elevada por el agente principal."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Elevación de la causa instrumental",
    "separata": "Separata 3",
    "explicacionDetallada": "El instrumento produce un efecto superior a su naturaleza (ej. el agua física produciendo gracia en el alma) porque es elevado por el poder del Agente Principal que actúa a través de él.",
    "explicacionAlternativa": "Un trozo de tiza vale centavos, pero en manos de Einstein sirvió para escribir la teoría de la relatividad."
  },
  {
    "id": 256,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "En la causalidad instrumental, ¿hacia dónde apunta la forma final del efecto producido?",
    "opciones": [
      "Hacia la nada absoluta que devora todos los artefactos de la tierra.",
      "Hacia la forma y propósito concebidos por el agente principal que lo guía.",
      "Hacia la pérdida del tiempo de los operarios que trabajan en las fábricas.",
      "Hacia la forma tosca y limitada del instrumento material empleado."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Efecto de la causa instrumental",
    "separata": "Separata 3",
    "explicacionDetallada": "El efecto no se parece a la forma del instrumento, sino a la forma preconcebida en la mente del agente principal (el cuadro se parece a la idea del pintor, no al pelo del pincel).",
    "explicacionAlternativa": "La estatua tallada se parece al rostro de Julio César, no al mango de madera del cincel."
  },
  {
    "id": 257,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "¿Por qué los sacramentos de la Iglesia son llamados 'causas instrumentales separadas' de Dios?",
    "opciones": [
      "Porque fueron prohibidos por los papas durante las guerras del renacimiento italiano.",
      "Porque solo pueden ser administrados en islas lejanas separadas del continente.",
      "Porque no tienen ninguna relación con la gracia ni con la salvación del hombre.",
      "Porque están físicamente desconectados de la Persona divina pero transmiten su poder activo."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Doctrina de los sacramentos",
    "separata": "Separata 3",
    "explicacionDetallada": "Son instrumentos externos o separados (como signos visibles de pan, vino o agua) a través de los cuales la Persona divina comunica invisiblemente la gracia formal.",
    "explicacionAlternativa": "Como una carta enviada por correo: el papel viaja lejos del remitente, pero transmite fielmente su voluntad y cariño."
  },
  {
    "id": 258,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "Si Dios utiliza a una persona sencilla y humilde para realizar una gran misión apostólica, esto manifiesta:",
    "opciones": [
      "La grandeza de la causalidad divina que eleva instrumentos desproporcionados con su gracia.",
      "Que las leyes de la física y de la educación universitaria deben ser abolidas.",
      "Que la Iglesia no necesita teólogos ni personas formadas en la fe racional.",
      "Que Dios prefiere a personas ignorantes para que no le hagan preguntas difíciles."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Instrumentos desproporcionados y gracia",
    "separata": "Separata 3",
    "explicacionDetallada": "Dios suele escoger lo que es débil o desproporcionado según el mundo para que brille con más claridad que la fuerza del efecto procede del Agente Principal Divino.",
    "explicacionAlternativa": "Como David venciendo al gigante Goliat con una pequeña honda de pastor: el mérito supremo es del Señor."
  },
  {
    "id": 259,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "La distinción entre causa principal y causa instrumental es fundamental en teología para:",
    "opciones": [
      "Demostrar que los seres humanos no necesitan rezar para comunicarse con Dios.",
      "Entender la inspiración bíblica, la acción sacramental y el sacerdocio ministerial.",
      "Prohibir que los laicos puedan leer los libros sagrados en sus hogares.",
      "Calcular el costo financiero de construir catedrales góticas de piedra."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Importancia teológica de la causa instrumental",
    "separata": "Separata 3",
    "explicacionDetallada": "Es una doctrina hondamente metafísica que ilumina cómo Dios actúa en la historia de la salvación utilizando mediaciones e instrumentos creados sin rebajarse.",
    "explicacionAlternativa": "Explica con precisión cómo Dios hace maravillas en el mundo a través de personas de carne y hueso."
  },
  {
    "id": 260,
    "examen": 13,
    "tituloExamen": "Examen 13: Causa Instrumental: Sacramentos y Acción Humana",
    "pregunta": "¿Qué demuestra la causalidad instrumental sobre la armonía del universo creado?",
    "opciones": [
      "Que los seres se hallan concatenados y subordinados en un orden inteligente de cooperación.",
      "Que el universo es una máquina absurda que marcha sin rumbo hacia el abismo.",
      "Que cada átomo del espacio es un dios aislado que no se comunica con nadie.",
      "Que las cosas materiales se destruyen entre sí por odio biológico natural."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Síntesis de la causa instrumental",
    "separata": "Separata 3",
    "explicacionDetallada": "Muestra que el cosmos es una jerarquía ordenada de causas donde los seres superiores comunican perfecciones a través de causas intermedias instrumentales con admirable sabiduría.",
    "explicacionAlternativa": "Una hermosa cadena de solidaridad cósmica donde todo coopera para el bien común del conjunto."
  },
  {
    "id": 261,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Por qué la causa final recibe el título metafísico de 'Causa de todas las causas' (causa causarum)?",
    "opciones": [
      "Porque es la primera que se construye físicamente en los talleres industriales.",
      "Porque destruye a las causas material y formal antes de que comiencen a operar.",
      "Porque fue la única causa que Aristóteles aceptó en su primer libro de física.",
      "Porque ella motiva a la causa eficiente a actuar y pone en marcha todo el proceso."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "La causa final: causa de todas las causas",
    "separata": "Separata 3",
    "explicacionDetallada": "La causa final es la causa causarum: mueve a la causa eficiente a obrar, y esta a su vez une la materia y la forma. Sin un fin, ninguna causa eficiente actuaría jamás.",
    "explicacionAlternativa": "El hambre o el apetito de postre es lo que te hace levantar, buscar los ingredientes y encender el horno: el fin manda sobre todo."
  },
  {
    "id": 262,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "[Axioma escolástico] ¿Por qué se dice que el fin es 'primero en la intención y último en la ejecución'?",
    "opciones": [
      "Porque las causas finales se olvidan fácilmente en cuanto comienza la mañana.",
      "Porque los trabajadores siempre cobran su salario antes de empezar a trabajar.",
      "Porque el universo comenzó con la muerte y terminará con el nacimiento del hombre.",
      "Porque el fin se concibe primero en la mente, pero se alcanza al final del trabajo real."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "La causa final: intención y ejecución",
    "separata": "Separata 3",
    "explicacionDetallada": "Es la primera causa en concebirse mentalmente como meta querida (intención), pero es la última en alcanzarse efectivamente tras completarse las operaciones (ejecución).",
    "explicacionAlternativa": "Primero sueñas con graduarte de médico (intención); luego estudias 7 duros años; finalmente recibes tu diploma en mano (ejecución)."
  },
  {
    "id": 263,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Cómo define la filosofía clásica el concepto de 'orden'?",
    "opciones": [
      "La acumulación de muchos libros ordenados por el color de sus cubiertas.",
      "Un decreto militar emitido por un general en tiempos de conflicto bélico.",
      "La recta disposición de las cosas con relación a un determinado fin.",
      "La fila india que hacen los niños en la puerta de la escuela primaria."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Orden y cosmos",
    "separata": "Separata 3",
    "explicacionDetallada": "'Orden' es la disposición de las cosas con relación a un fin (Aristóteles/Tomás). Cuando cada elemento está puesto en su lugar adecuado para cumplir su meta, hay orden.",
    "explicacionAlternativa": "En un motor de auto, cada bujía, pistón y cable está colocado exactamente donde debe para que el vehículo avance: eso es orden."
  },
  {
    "id": 264,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Cómo se formula con rigor el Principio de Causalidad para evitar que sea una mera tautología?",
    "opciones": [
      "'Lo que llega a ser o es movido, llega a ser o es movido por otro'.",
      "'Todas las cosas cambian de lugar cuando los hombres las empujan con fuerza'.",
      "'Todo efecto tiene su causa, porque los efectos son efectos de causas'.",
      "'El ser humano debe buscar trabajo productivo para ganar dinero en la vida'."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Importancia del principio de causalidad",
    "separata": "Separata 3",
    "explicacionDetallada": "Para no caer en una afirmación tautológica ('todo efecto tiene causa'), se formula: 'Todo lo que llega a ser o se mueve, es movido por otro' (quidquid movetur ab alio movetur).",
    "explicacionAlternativa": "Si algo no tenía existencia o movimiento y de pronto comienza a tenerlo, la razón de ese cambio no está en sí mismo, sino en otro."
  },
  {
    "id": 265,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Cuál es la formulación más profunda del principio de causalidad debida a Santo Tomás de Aquino?",
    "opciones": [
      "'Todo lo que existe por participación es causado por lo que existe por esencia'.",
      "'Las causas segundas son superiores en poder a la Causa Primera increada'.",
      "'Los cuerpos pesados caen hacia el centro de la tierra por mandato legal'.",
      "'El movimiento cósmico es un círculo cerrado que se repite eternamente sin Dios'."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Formulación tomista del principio de causalidad",
    "separata": "Separata 3",
    "explicacionDetallada": "Todo lo que existe por participación (las criaturas, cuyo ser es recibido y limitado) es causado necesariamente por Aquel que es el Ser por esencia: Ipsum Esse Subsistens (Dios).",
    "explicacionAlternativa": "Todo lo que tiene luz prestada (como la luna reflejando luz) exige una fuente que tenga luz propia (como el sol)."
  },
  {
    "id": 266,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Qué filósofo empirista del siglo XVIII atacó frontalmente la validez universal del principio de causalidad?",
    "opciones": [
      "Aristóteles de Estagira.",
      "David Hume.",
      "Santo Tomás de Aquino.",
      "Gottfried Leibniz."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Crítica de David Hume a la causalidad",
    "separata": "Separata 3",
    "explicacionDetallada": "David Hume, filósofo empirista escocés del s. XVIII, negó la validez objetiva y universal del principio de causalidad, reduciéndolo a un mero hábito subjetivo de la mente.",
    "explicacionAlternativa": "Hume dijo que solo vemos sucesiones de hechos, pero no vemos el 'pegamento' invisible de la causa."
  },
  {
    "id": 267,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Cómo intentó David Hume 'refutar' la causalidad objetiva en su filosofía?",
    "opciones": [
      "Demostrando con matemáticas cuánticas que los átomos no chocan entre sí.",
      "Afirmando que la causa es un post hoc transformado ilegítimamente por la costumbre en propter hoc.",
      "Sosteniendo que los milagros bíblicos son los únicos hechos reales de la historia.",
      "Obligando a los científicos a cerrar los laboratorios de física en Escocia."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Crítica de David Hume a la causalidad",
    "separata": "Separata 3",
    "explicacionDetallada": "Hume argumentó que los sentidos solo ven que el fenómeno Y sigue al fenómeno X (post hoc); saltar a decir que Y es causado por X (propter hoc) es una costumbre psicológica sin certeza racional.",
    "explicacionAlternativa": "Como siempre ves fuego y luego humo, te acostumbras a esperar humo, pero según Hume no puedes probar que el fuego lo cause."
  },
  {
    "id": 268,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Por qué la postura escéptica de David Hume es un error metafísico radical según el texto?",
    "opciones": [
      "Porque Hume fue encarcelado por escribir libros de poesías tristes en Inglaterra.",
      "Porque se queda solo en el nivel de los sentidos, ignorando que la inteligencia penetra la causa.",
      "Porque Hume era de origen escocés y no entendía los tratados en latín.",
      "Porque las leyes de la gravedad universal demostraron que Hume era un impostor."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Refutación de Hume: Sucesión vs causalidad",
    "separata": "Separata 3",
    "explicacionDetallada": "Hume permanece atrapado en lo sensorial. Los sentidos solo ven fenómenos sucesivos; pero la inteligencia (intus-legere) trasciende lo visible y capta la producción ontológica real de la causa.",
    "explicacionAlternativa": "Tus ojos solo ven una piedra volando y un vidrio que se quiebra; tu inteligencia comprende con certeza que la piedra quebró el vidrio."
  },
  {
    "id": 269,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "[Contraejemplo del texto] El hecho de que la noche suceda regularmente al día demuestra que:",
    "opciones": [
      "El sol se apaga dentro del océano atlántico cada vez que llega el atardecer.",
      "La mera sucesión temporal de fenómenos no es en absoluto lo mismo que la causalidad real.",
      "Los seres humanos no deberían dormir durante las horas de oscuridad nocturna.",
      "El día es la causa eficiente física que engendra y produce a la noche."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Refutación de Hume: Ejemplo de la noche y el día",
    "separata": "Separata 3",
    "explicacionDetallada": "La noche sigue indefectiblemente al día (sucesión), pero nadie en su sano juicio diría que el día es la causa de la noche. Esto destruye la falacia de Hume.",
    "explicacionAlternativa": "Que el martes siga al lunes no significa que el lunes haya fabricado al martes: son sucesiones, no causas."
  },
  {
    "id": 270,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Qué consecuencia social y teológica buscaba el ataque de Hume a la causalidad?",
    "opciones": [
      "Promover la construcción de barcos a vapor para comerciar con las colonias de América.",
      "Volver a la sociedad más cristiana y devota de los sacramentos eclesiásticos.",
      "Demostrar que los reyes ingleses tenían derecho divino a gobernar sobre el pueblo.",
      "Destruir el puente racional hacia Dios, recluyendo la religión en el puro subjetivismo privado."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Consecuencias del escepticismo de Hume",
    "separata": "Separata 3",
    "explicacionDetallada": "Al destruir la causalidad, se destruye la prueba racional de la existencia de Dios. La creencia en Dios pasaría a ser un sentimiento subjetivo privado sin derecho a influir en la vida pública o moral.",
    "explicacionAlternativa": "Si dices que no hay causas, no puedes demostrar que el universo necesita a Dios, y tratas la fe como un capricho personal sin verdad."
  },
  {
    "id": 271,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Cómo actúan los entes que carecen de inteligencia respecto a su propio fin natural?",
    "opciones": [
      "Actúan por puro azar ciego sin obedecer ninguna ley física del universo.",
      "Inventan sus propios fines morales tras reunirse en asambleas en los bosques.",
      "Actúan orientados hacia un fin por la sabiduría de la Inteligencia Ordenadora que los creó.",
      "Se rebelan continuamente contra la naturaleza intentando autodestruirse."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Finalidad en los entes no inteligentes",
    "separata": "Separata 3",
    "explicacionDetallada": "Los entes no inteligentes también actúan con un propósito (ej. las abejas construyendo panales), no porque sean conscientes de él, sino dirigidos por la Inteligencia Suprema Creadora.",
    "explicacionAlternativa": "La flecha viaja certera hacia el blanco, no porque la flecha piense, sino porque fue disparada por un arquero experto."
  },
  {
    "id": 272,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "[Pregunta Trampa] ¿Puede una serie de causas eficientes subordinadas esencialmente prolongarse al infinito en el pasado sin una causa primera?",
    "opciones": [
      "Solo si las causas son números matemáticos escritos en una pizarra escolar.",
      "Sí, porque el tiempo espacial no tiene principio ni fin según las leyes de la física.",
      "No, en una serie subordinada esencialmente es forzoso llegar a una Causa Primera incausada.",
      "Sí, las causas pueden ser infinitas sin necesidad de ningún principio o inicio."
    ],
    "correcta": 2,
    "dificultad": "Trampa",
    "seccion": "Regresión al infinito en las causas",
    "separata": "Separata 3 y 4",
    "explicacionDetallada": "En las causas esencialmente subordinadas en el presente (el vagón movido por otro vagón), no se puede proceder al infinito: si no hay locomotora primera en marcha, ningún vagón se movería.",
    "explicacionAlternativa": "Si para prestarte un libro Juan tiene que pedirle permiso a Pedro, y Pedro a Luis, y así al infinito, nadie te prestará jamás el libro si no hay un dueño primero."
  },
  {
    "id": 273,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Qué título recibe Dios en su condición de término último y definitivo de todo el anhelo del universo?",
    "opciones": [
      "El Opositor Infatigable del Orden Cósmico.",
      "El Fin Último de todas las cosas (Finis Ultimus).",
      "La Materia Prima Universal Indeterminada.",
      "El Accidente Pasajero Supremo."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Dios como fin último",
    "separata": "Separata 3 y 4",
    "explicacionDetallada": "Dios no es solo la Causa Primera eficiente que inició todo; es también el Fin Último de toda la creación: hacia su perfección y gloria apuntan todos los entes.",
    "explicacionAlternativa": "Dios es el Alfa (principio) de donde venimos y el Omega (meta final) hacia donde camina el corazón humano."
  },
  {
    "id": 274,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "Cuando una persona inteligente actúa libremente, ¿cuál es la marca distintiva de su acción?",
    "opciones": [
      "Lanzar una moneda al aire para que la casualidad ciega decida por ella.",
      "Hacer ruidos extraños cada vez que toma una decisión económica.",
      "Esperar que los astros del cielo le indiquen qué camino seguir en la vida.",
      "Obrar siempre deliberadamente movido por un propósito o fin consciente."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "La marca de la inteligencia",
    "separata": "Separata 3",
    "explicacionDetallada": "Actuar con propósito deliberado es precisamente la marca propia de la inteligencia. Un ser inteligente no se mueve a lo loco; elige medios adecuados para alcanzar un fin.",
    "explicacionAlternativa": "Si vas a la estación es porque quieres tomar el tren para viajar a un lugar: tienes un plan inteligente."
  },
  {
    "id": 275,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Por qué el principio de causalidad es el 'puente racional' hacia la existencia de Dios?",
    "opciones": [
      "Porque permite construir puentes de hormigón armado sobre los ríos caudalosos.",
      "Porque los sacerdotes bendicen los puentes antes de inaugurarlos en las fiestas patronales.",
      "Porque sin ese principio las iglesias no podrían pagar las facturas de la electricidad.",
      "Porque permite a la inteligencia ascender desde los efectos visibles hasta la Causa Primera Invisible."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "La causalidad como puente racional hacia Dios",
    "separata": "Separata 3 y 4",
    "explicacionDetallada": "Al constatar que el mundo sensible es un efecto contingente y en devenir, la causalidad nos obliga racionalmente a remontarnos a su Causa necesaria fontal (Dios).",
    "explicacionAlternativa": "Viendo las huellas grabadas en la arena de la playa, puedes deducir con certeza que una persona caminó por allí."
  },
  {
    "id": 276,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "En términos latinos, ¿cómo describe Santo Tomás la naturaleza fontal de Dios en el orden del ser?",
    "opciones": [
      "Materia informe inanimata.",
      "Ipsum Esse Subsistens (El Ser Mismo Subsistente).",
      "Causa deficiens contingens.",
      "Ens accidentale creatum."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Ipsum Esse Subsistens",
    "separata": "Separata 3",
    "explicacionDetallada": "Santo Tomás afirma que Dios es 'Ipsum Esse Subsistens', el mismo Ser subsistente por sí mismo, cuya esencia es su propio acto de ser sin mezcla de potencia pasiva.",
    "explicacionAlternativa": "Nosotros 'tenemos' ser de forma limitada; Dios 'ES' el Ser infinito por derecho propio."
  },
  {
    "id": 277,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Por qué un fin intermedio (como aprobar un examen) no puede ser el fin supremo definitivo del hombre?",
    "opciones": [
      "Porque los profesores de universidad no conceden diplomas definitivos a los estudiantes.",
      "Porque aprobar exámenes no quema calorías corporales suficientes en el cerebro.",
      "Porque una vez alcanzado, se convierte inmediatamente en medio para un fin ulterior.",
      "Porque las leyes educativas obligan a estudiar carreras diferentes cada cinco años."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Fines intermedios y fin último",
    "separata": "Separata 3",
    "explicacionDetallada": "Un fin intermedio no calma la sed absoluta de felicidad del hombre: apruebas para graduarte, te gradúas para trabajar, trabajas para vivir; solo Dios es el Fin Último que sacia plenamente.",
    "explicacionAlternativa": "Subir un escalón es bueno, pero solo sirve para impulsarte a seguir subiendo hasta la cima de la montaña."
  },
  {
    "id": 278,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "Si afirmáramos que el universo se produjo a sí mismo por casualidad sin causa inteligente, caeríamos en:",
    "opciones": [
      "Una verdad evidente que no necesita de ninguna demostración de laboratorio.",
      "Una ley matemática comprobada en las computadoras de la agencia espacial.",
      "Una postura altamente científica aplaudida por todos los filósofos clásicos.",
      "El absurdo ontológico de pretender que algo actúa y da el ser antes de existir."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Absurdo de la autocausación",
    "separata": "Separata 3",
    "explicacionDetallada": "Para que algo se causara a sí mismo tendría que existir antes de ser (para poder causar), lo cual es una contradicción lógica flagrante (ser y no-ser a la vez).",
    "explicacionAlternativa": "Nadie puede levantarse a sí mismo en el aire jalándose de los cordones de sus propios zapatos."
  },
  {
    "id": 279,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "¿Qué relación existe entre la teleología (estudio de los fines) y las leyes de la naturaleza?",
    "opciones": [
      "Las leyes físicas operan con constancia porque las naturalezas de las cosas están ordenadas a fines fijos.",
      "No existe ninguna relación; la naturaleza es un caos de átomos en guerra permanente.",
      "La teleología fue prohibida por los astrónomos para que no descubrieran nuevas lunas.",
      "Las leyes de la física cambian por puro capricho según las estaciones del año."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Teleología y leyes naturales",
    "separata": "Separata 3",
    "explicacionDetallada": "La regularidad de las leyes científicas (el agua siempre hierve a 100°C a presión normal, el ojo siempre busca ver) se funda en que cada naturaleza tiene una tendencia intrínseca hacia su propio fin.",
    "explicacionAlternativa": "La brújula siempre apunta al norte magnético porque su naturaleza magnética está orientada a ese fin."
  },
  {
    "id": 280,
    "examen": 14,
    "tituloExamen": "Examen 14: Causa Final y Principio de Causalidad",
    "pregunta": "La síntesis de las cuatro causas aristotélicas (material, formal, eficiente y final) demuestra que:",
    "opciones": [
      "Solo las causas eficientes de las máquinas modernas tienen importancia científica.",
      "Todo ente del mundo tiene una explicación inteligible y causal completa y armónica.",
      "La realidad es un juego poético inventado por los antiguos griegos para entretenerse.",
      "Las cosas existen sin ningún porqué y el ser humano está condenado a la desesperación."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Síntesis de las cuatro causas",
    "separata": "Separata 3",
    "explicacionDetallada": "Las cuatro causas responden a las preguntas radicales de la inteligencia: ¿de qué está hecho? (materia), ¿qué es? (forma), ¿quién lo hizo? (eficiente) y ¿para qué es? (final).",
    "explicacionAlternativa": "Son los cuatro puntos cardinales para comprender a fondo cualquier objeto del universo sin que se te escape nada."
  },
  {
    "id": 281,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Por qué las propiedades del ente como uno (unum), verdadero (verum) y bueno (bonum) se llaman 'trascendentales'?",
    "opciones": [
      "Porque desaparecen en cuanto un científico realiza un experimento de química.",
      "Porque fueron inventadas por filósofos alemanes que viajaban en globos aerostáticos.",
      "Porque pertenecen al ente en cuanto ente, acompañando al esse en toda la realidad.",
      "Porque solo se pueden estudiar en los conventos religiosos de clausura en España."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Descubrimiento metafísico de los trascendentales",
    "separata": "Separata 3",
    "explicacionDetallada": "Se llaman trascendentales porque pertenecen al ens en cuanto ens (sujeto del esse); no están limitadas a un género o categoría predicamental, sino que trascienden todas las divisiones.",
    "explicacionAlternativa": "No son etiquetas que solo le pones a los pájaros o a las piedras: cualquier cosa que existe es una, es inteligible (verdadera) y tiene perfección (buena)."
  },
  {
    "id": 282,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Cómo descubre la inteligencia humana los trascendentales en la vida cotidiana?",
    "opciones": [
      "Memorizando libros de leyes civiles aprobados por los parlamentos nacionales.",
      "Cerrando los ojos y repitiendo palabras mágicas en un idioma desconocido.",
      "Por mera experiencia al contemplar las cosas (res) y constatar que existen en la realidad.",
      "A través de cálculos astronómicos con computadoras de alta velocidad."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Descubrimiento metafísico de los trascendentales",
    "separata": "Separata 3",
    "explicacionDetallada": "Por experiencia inmediata: miramos las cosas (res), vemos que existen (entes), que son indivisas en sí (uno), cognoscibles a la mente (verdaderas) y amables a la voluntad (buenas).",
    "explicacionAlternativa": "Miras una manzana: ves que es una unidad sola, que tu mente la puede entender y que es apetitosa y buena para comer."
  },
  {
    "id": 283,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Cómo se define metafísicamente la 'unidad' (unum) del ente?",
    "opciones": [
      "La cantidad matemática número uno escrita en una pizarra de tiza.",
      "La negación de la división: toda realidad en cuanto conserva su ser, conserva su unidad.",
      "La pérdida de la forma sustancial en los cambios químicos de digestión.",
      "La obligación legal de todos los ciudadanos de votar por el mismo partido."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "La unidad del ente",
    "separata": "Separata 3",
    "explicacionDetallada": "El uno es el ente indiviso en sí mismo (ens indivisum in se) y dividido o separado de los demás. La conservación del ser exige fidelidad a la propia unidad ontológica.",
    "explicacionAlternativa": "Si cortas a un ser vivo por la mitad, no obtienes dos seres vivos: lo destruyes porque rompiste su unidad esencial."
  },
  {
    "id": 284,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Qué diferencia existe entre la 'unidad de simplicidad' y la 'unidad de composición'?",
    "opciones": [
      "La de composición solo existe en los poemas y la de simplicidad en las matemáticas.",
      "La de simplicidad cuesta menos dinero de fabricar y la de composición es más cara.",
      "No existe ninguna diferencia; ambas nociones fueron declaradas idénticas por Aristóteles.",
      "La de simplicidad es propia de Dios (sin partes); la de composición es propia de las criaturas (con partes)."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Unidad de simplicidad y unidad de composición",
    "separata": "Separata 3",
    "explicacionDetallada": "La máxima unidad es la de Dios, que carece absolutamente de partes (simplicidad pura). Las criaturas tienen partes (materia/forma, substancia/accidentes) integradas en unidad de composición.",
    "explicacionAlternativa": "Dios es diamante puro indivisible; una casa o un ser humano es un conjunto de piezas admirablemente integradas."
  },
  {
    "id": 285,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "[Grados de unidad en la composición citados en el texto] ¿Cuál de los siguientes entes posee un grado de unidad ontológica superior?",
    "opciones": [
      "Un montón de piedras apiladas por los albañiles en una esquina.",
      "Una nube de vapor de agua arrastrada por el viento en el cielo.",
      "Un animal vivo dotado de organismo, sentidos y movimiento autónomo.",
      "Una mesa de madera ensamblada con clavos y cola de carpintero."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Grados de unidad",
    "separata": "Separata 3",
    "explicacionDetallada": "El texto establece una escala: mesa < río < flor < animal < hombre. Mientras más elevado y perfecto es el ser, mayor y más íntima es la fuerza de su unidad sustancial.",
    "explicacionAlternativa": "Desarmar una mesa es fácil; destruir la vida unitaria de un perro requiere matar su principio vital indivisible."
  },
  {
    "id": 286,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Qué ocurre cuando una sociedad humana pierde su unidad moral y social?",
    "opciones": [
      "Las monedas de oro aumentan su valor adquisitivo en todos los bancos.",
      "Logra un progreso tecnológico insuperable y pacífico en todas las ciudades.",
      "Se transforma automáticamente en una comunidad de ángeles espirituales.",
      "Sufre un proceso destructivo de descomposición, división interna y tiranía."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "La unidad del ente y fidelidad al ser",
    "separata": "Separata 3",
    "explicacionDetallada": "La unidad requiere mayor fuerza de integración que el proceso opuesto hacia la desintegración; cuando se rompe la unidad en la verdad y el bien, sobreviene el caos y la ruina.",
    "explicacionAlternativa": "Una familia unida supera cualquier problema; una familia dividida por el odio se destruye a sí misma."
  },
  {
    "id": 287,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿En qué consiste la 'verdad' (verum) como propiedad trascendental del ente?",
    "opciones": [
      "En la intrínseca inteligibilidad de las cosas y la adecuación de la mente a la realidad.",
      "En una fórmula matemática secreta archivada en cajas de seguridad de los bancos.",
      "En decir cosas agradables a las demás personas para caerles bien en una fiesta.",
      "En una opinión periodística redactada según las encuestas de opinión pública."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "La verdad del ente",
    "separata": "Separata 3",
    "explicacionDetallada": "Veritas est adaequatio intellectus et rei: la verdad está en la mente cuando juzga conforme a la realidad; y el ente es verdadero ontológicamente en cuanto es inteligible.",
    "explicacionAlternativa": "Si dices 'afuera está lloviendo' y efectivamente caen gotas de agua, tu pensamiento es verdadero porque se ajusta a los hechos reales."
  },
  {
    "id": 288,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Por qué se afirma tajantemente que 'la realidad causa la verdad en la mente' y no al revés?",
    "opciones": [
      "Porque los ojos humanos tienen rayos láser que pintan las cosas al mirarlas.",
      "Porque el ser de las cosas es anterior y normativo frente al conocimiento humano.",
      "Porque los gobernantes civiles dictan qué cosas deben ser consideradas reales.",
      "Porque la mente humana es tan débil que jamás puede pensar nada que valga la pena."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "La verdad del ente: Realismo vs antropocentrismo",
    "separata": "Separata 3",
    "explicacionDetallada": "El realismo metafísico rechaza el antropocentrismo idealista: la realidad está ahí y mide a nuestra mente; la verdad se funda en el ente, no el ser de las cosas en ser pensadas.",
    "explicacionAlternativa": "La montaña existe con toda su roca y nieve mucho antes de que un alpinista suba y la conozca."
  },
  {
    "id": 289,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Qué error metafísico moderno comete el 'antropocentrismo' o subjetivismo gnoseológico?",
    "opciones": [
      "Enseñar a los niños a leer y escribir en escuelas públicas de las ciudades.",
      "Afirmar que los seres humanos deben cuidar los bosques y proteger la naturaleza.",
      "Reducir el ser de las cosas a su ser conocido por el hombre, endiosando la mente humana.",
      "Utilizar telescopios astronómicos para estudiar los anillos del planeta Saturno."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Crítica al antropocentrismo",
    "separata": "Separata 3",
    "explicacionDetallada": "El antropocentrismo reduce el ser al pensamiento (inmanencia): pretende que la realidad solo vale o existe en la medida en que el hombre la percibe o la manipula.",
    "explicacionAlternativa": "Creer arrogantemente que si tú cierras los ojos, el universo entero deja de existir."
  },
  {
    "id": 290,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Por qué un ente mientras más 'esse' (acto de ser) posee, mayor es su grado de verdad e inteligibilidad?",
    "opciones": [
      "Porque los libros de filosofía son más gordos cuando hablan de cosas complejas.",
      "Porque el acto de ser es la luz que ilumina y hace inteligible la realidad.",
      "Porque la materia física absorbe los rayos del sol y los convierte en palabras.",
      "Porque los entes grandes pagan más impuestos aduaneros al cruzar las fronteras."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "La verdad del ente y la luz del esse",
    "separata": "Separata 3",
    "explicacionDetallada": "Todo ente es cognoscible en la medida en que es en acto. La pura potencialidad es oscura; el acto de ser (esse) es luz inteligible. Dios, que es Puro Esse, es la Verdad Suprema.",
    "explicacionAlternativa": "Una habitación a oscuras no deja ver nada; mientras más lámparas potentes enciendas, más claro y visible se vuelve todo."
  },
  {
    "id": 291,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "[Pregunta Trampa] Si una persona miente deliberadamente, ¿por qué la mentira es calificada como intrínsecamente perversa?",
    "opciones": [
      "Porque las mentiras desgastan físicamente las cuerdas vocales de quien las pronuncia.",
      "Porque destruye la ordenación natural de la mente hacia la verdad, rompiendo la armonía del ser.",
      "Porque la policía municipal arresta a todas las personas que dicen mentiras en la calle.",
      "Porque los tratados de gramática prohíben redactar oraciones con palabras falsas."
    ],
    "correcta": 1,
    "dificultad": "Trampa",
    "seccion": "La mentira como perversión contra el ser",
    "separata": "Separata 3",
    "explicacionDetallada": "Dios es la Verdad y la mente humana está hecha para ajustarse a la realidad; la mentira tuerce deliberadamente esa función connatural, usando la palabra contra el ser mismo.",
    "explicacionAlternativa": "Es usar una brújula manipulada con un imán escondido para hacer que los navegantes se estrellen contra los arrecifes."
  },
  {
    "id": 292,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿En qué sentido se afirma que 'la mente divina es la causa, norma y medida de todas las cosas'?",
    "opciones": [
      "En que las cosas son creadas según las ideas divinas y reflejan la Sabiduría de Dios.",
      "En que las cosas materiales dejan de existir si Dios no piensa en ellas cada minuto.",
      "En que Dios obliga a los astrónomos a medir el espacio con reglas milimetradas.",
      "En que Dios lleva una libreta de apuntes en el cielo donde anota los nombres de los seres."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "La mente divina y la verdad",
    "separata": "Separata 3",
    "explicacionDetallada": "Las cosas son verdaderas en su fundamento porque corresponden a la idea creadora de la mente divina; y esas cosas son a su vez la causa y medida de la verdad en la mente humana.",
    "explicacionAlternativa": "El reloj es verdadero si coincide con el plano del relojero; y tu conocimiento del reloj es verdadero si coincide con cómo funciona el reloj real."
  },
  {
    "id": 293,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "Cuando una persona contempla un árbol y afirma falsamente 'eso es un tigre de Bengala', ¿dónde reside el error?",
    "opciones": [
      "En el juicio subjetivo de la mente del observador que no se ajustó a la realidad del árbol.",
      "En la luz del sol que cambió de color para engañar a la pupila del ojo humano.",
      "En el árbol real que se disfrazó engañosamente para asustar al caminante.",
      "En la tierra donde crecen las raíces que emite gases alucinógenos en el bosque."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "La verdad y el error",
    "separata": "Separata 3",
    "explicacionDetallada": "El error no está en las cosas mismas (el árbol es fiel a su propio ser); reside en el juicio apresurado o defectuoso del entendimiento que afirma lo que no es.",
    "explicacionAlternativa": "La pared blanca es inocente de que tú lleves puestos lentes oscuros y digas que la pared es negra."
  },
  {
    "id": 294,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Por qué Dios es llamado la Verdad Suprema y la plenitud de inteligibilidad?",
    "opciones": [
      "Porque los tribunales constitucionales declararon que la religión es obligatoria.",
      "Porque Dios es Puro Acto de Ser, plenamente conocido para Sí Mismo y Causa fontal de toda verdad.",
      "Porque Dios tiene un telescopio gigantesco para vigilar a los habitantes de los planetas.",
      "Porque Dios ha leído todas las enciclopedias y libros de historia de la tierra."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Dios como Verdad Suprema",
    "separata": "Separata 3",
    "explicacionDetallada": "En Dios no hay tiniebla ni sombra de potencia pasiva; es Acto Puro, luz infinita, perfectamente transparente a su propia Inteligencia Divina infinita.",
    "explicacionAlternativa": "Un sol resplandeciente sin ninguna mancha que todo lo ilumina con su propia claridad eterna."
  },
  {
    "id": 295,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Qué ocurre con la mente humana cuando se abre a la realidad exterior con humildad?",
    "opciones": [
      "Se abre indirectamente a Dios, reconociendo el orden y la verdad inscrita en las criaturas.",
      "Se debilita y pierde la capacidad de inventar historias poéticas entretenidas.",
      "Se llena de miedos supersticiosos y deja de estudiar ciencias experimentales.",
      "Queda paralizada sin poder formular ningún juicio de afirmación o negación."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Apertura de la mente a la realidad",
    "separata": "Separata 3",
    "explicacionDetallada": "Cuando la mente se abre a la realidad con docilidad, se abre a la huella de Dios en el mundo; en cambio, si se encierra soberbiamente en sí misma, Dios se vuelve ininteligible.",
    "explicacionAlternativa": "Abrir las ventanas del cuarto para que entre la luz del sol y el aire fresco del jardín exterior."
  },
  {
    "id": 296,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "El principio de que 'todo ente es uno' implica directamente que:",
    "opciones": [
      "Cada ser individual posee cohesión interna y no puede estar dividido sin destruirse.",
      "Todos los seres vivos deben fusionarse en una sola masa biológica gigante.",
      "Los seres humanos no pueden tener amigos ni vivir en familias numerosas.",
      "Las cosas materiales carecen de partes atómicas cuantificables en el espacio."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "La unidad del ente",
    "separata": "Separata 3",
    "explicacionDetallada": "Unidad significa indivisión interna: mientras una cosa conserva su ser, defiende su unidad; si se divide su substancia, el ente muere o deja de ser lo que era.",
    "explicacionAlternativa": "Un barco debe mantenerse íntegro y sellado; si se parte en dos mitades, se hunde en el mar."
  },
  {
    "id": 297,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Cuál es la causa de que la unidad de una familia o de la Iglesia sea de orden superior a la de un montón de piedras?",
    "opciones": [
      "Porque los montones de piedras no tienen permiso municipal para ocupar las calles.",
      "Porque las familias y la Iglesia firman estatutos notariales en los ministerios de justicia.",
      "Porque sus miembros están unidos por vínculos espirituales, de amor, verdad y fin común.",
      "Porque los seres humanos pesan más kilogramos en las balanzas que las piedras del camino."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Grados de unidad y comunidad",
    "separata": "Separata 3",
    "explicacionDetallada": "Un agregado de piedras es un mero contacto accidental físico; una sociedad humana o la Iglesia posee una unidad de orden moral y espiritual infinitamente más honda.",
    "explicacionAlternativa": "Un montón de canicas en una bolsa solo están juntas por el plástico; un equipo de fútbol está unido por un mismo corazón y meta."
  },
  {
    "id": 298,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "Etimológicamente, ¿de qué palabra latina proviene el término 'realidad' y qué significa?",
    "opciones": [
      "De 'rex', que alude a las órdenes emitidas por los reyes absolutistas antiguos.",
      "De 'ratio', que denota únicamente las operaciones de división matemática escolar.",
      "De 'religio', que describe el acto de atar cuerdas para no tropezar al caminar.",
      "De 'res', que designa la 'cosa' concreta que tiene existencia objetiva en el ser."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Descubrimiento metafísico de los trascendentales",
    "separata": "Separata 3",
    "explicacionDetallada": "Realidad proviene de 'res' (cosa): la res manifiesta al ente en su esencia positiva y real frente a las puras invenciones de la mente.",
    "explicacionAlternativa": "'Res' es la cosa concreta que puedes señalar en el mundo real, no un espejismo en tu mente."
  },
  {
    "id": 299,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "¿Por qué el no-ser carece totalmente de verdad ontológica?",
    "opciones": [
      "Porque la nada es demasiado pesada físicamente para caber en los pensamientos.",
      "Porque la policía persigue a los mentirosos que afirman que la nada existe.",
      "Porque al carecer de ser y de actualidad, no tiene inteligibilidad que ofrecer a la mente.",
      "Porque los filósofos antiguos firmaron un tratado que prohíbe hablar del no-ser."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "La verdad del ente y el no-ser",
    "separata": "Separata 3",
    "explicacionDetallada": "La verdad se funda en el ser en acto. La nada absoluta carece de toda actualidad y forma; por ende, no puede ser conocida en sí misma, sino solo como negación del ser.",
    "explicacionAlternativa": "No puedes sacar una foto de la oscuridad absoluta donde no hay nada: no hay luz ni objeto que reflejar."
  },
  {
    "id": 300,
    "examen": 15,
    "tituloExamen": "Examen 15: Propiedades Trascendentales I: Unidad (Unum) y Verdad (Verum)",
    "pregunta": "La síntesis de los dos primeros trascendentales (Unum y Verum) nos enseña que:",
    "opciones": [
      "El universo es una pesadilla caótica en la que nada puede ser conocido con seguridad.",
      "Solo los científicos con títulos académicos de prestigio tienen derecho a decir la verdad.",
      "Todo lo que existe es coherente consigo mismo en su unidad y abierto a ser comprendido por la razón.",
      "Las cosas materiales deben ser destruidas para que la inteligencia pueda pensar tranquila."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Síntesis de Unum y Verum",
    "separata": "Separata 3",
    "explicacionDetallada": "El ens es unum (tiene cohesión e integridad ontológica) y es verum (es luminoso e inteligible). La realidad no es un engaño ni un caos absurdo, sino una obra sabia y admirable.",
    "explicacionAlternativa": "El mundo está bien hecho: las cosas tienen solidez propia y nuestra inteligencia puede descubrirlas y maravillarse con su verdad."
  },
  {
    "id": 301,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿Cómo define Santo Tomás de Aquino la 'bondad' (bonum) siguiendo la tradición aristotélica?",
    "opciones": [
      "Bien es aquello que todas las cosas apetecen o desean en orden a su perfección.",
      "Una ley escrita en los reglamentos de convivencia de los edificios urbanos.",
      "Aquello que produce riquezas y beneficios monetarios inmediatos.",
      "Una emoción sentimental subjetiva que surge al contemplar una pintura bella."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "e. La bondad del ente",
    "separata": "Separata 3",
    "explicacionDetallada": "Bonum est quod omnia appetunt: bien es aquello que todas las cosas desean. Todo ente tiende naturalmente a la plenitud, realización y cumplimiento de su propio fin.",
    "explicacionAlternativa": "La planta busca la luz del sol y el agua porque esos bienes completan su vida y la hacen crecer sana."
  },
  {
    "id": 302,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿Cuál es la diferencia capital entre el 'bien' y el 'deseo' según la metafísica?",
    "opciones": [
      "El deseo solo existe en los animales carnívoros y el bien en los herbívoros.",
      "El deseo es una substancia material pesada y el bien es un gas invisible.",
      "No existe ninguna diferencia; son dos términos idénticos en el idioma griego.",
      "El bien no es el deseo mismo, sino el objeto real apetecible hacia el cual tiende el deseo."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "e. La bondad del ente",
    "separata": "Separata 3",
    "explicacionDetallada": "'Bien' no es lo mismo que 'deseo': es el objeto del deseo. Es el ente considerado en su plenitud, como finalizado, completado y cumplido.",
    "explicacionAlternativa": "Tener sed es el deseo; el vaso de agua fresca es el bien real objetivo que sacia tu sed."
  },
  {
    "id": 303,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "[Axioma metafísico célebre: 'Bonum est diffusivum sui'] ¿Qué expresa este principio respecto al bien?",
    "opciones": [
      "Que los hombres buenos deben abandonar las ciudades y vivir aislados en cuevas.",
      "Que el bien tiende por su propia naturaleza a comunicarse, difundirse y compartirse.",
      "Que el bien debe guardarse bajo siete llaves para que nadie lo gaste.",
      "Que las cosas buenas se deterioran con mayor rapidez que las cosas malas."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "e. La bondad del ente",
    "separata": "Separata 3",
    "explicacionDetallada": "El bien es autoexpansivo (bonum est diffusivum sui): la plenitud de ser no se encierra egoístamente, sino que tiende a desbordarse y comunicarse con generosidad, como en la creación divina.",
    "explicacionAlternativa": "Una vela encendida comparte su llama con otras velas sin perder un ápice de su propio fuego."
  },
  {
    "id": 304,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿Por qué solo Dios es bueno 'por esencia' mientras que las criaturas son buenas 'por participación'?",
    "opciones": [
      "Porque Dios es el Esse Mismo y la Plenitud Absoluta de toda perfección fontal.",
      "Porque a las criaturas se les prohíbe por ley cometer actos de generosidad.",
      "Porque los filósofos antiguos querían adular a Dios en sus escritos de poesía.",
      "Porque Dios tiene más dinero y palacios que todos los reyes de la historia."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "e. La bondad del ente",
    "separata": "Separata 3",
    "explicacionDetallada": "Dado que el esse es el fundamento de la bondad, solo Dios, que es el Puro Esse Subsistens, es la Bondad Misma fontal. En las criaturas la bondad es participada, multiplicada y limitada.",
    "explicacionAlternativa": "El sol es la fuente originaria del calor; una piedra calentada al mediodía solo participa prestadamente de ese calor."
  },
  {
    "id": 305,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿Por qué afirma Santo Tomás que 'el universo entero representa la bondad de Dios mejor que una única criatura'?",
    "opciones": [
      "Porque a Dios le gusta construir galaxias mecánicas para verlas girar en el vacío.",
      "Porque la bondad infinita y simple de Dios requiere multiplicarse en muchos seres diversos.",
      "Porque los planetas son más pesados que un cuerpo humano en las balanzas.",
      "Porque los animales salvajes son más pacíficos que los seres humanos en sociedad."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "e. La bondad del ente",
    "separata": "Separata 3",
    "explicacionDetallada": "Ninguna criatura finita por sí sola podría reflejar la inagotable riqueza de Dios; por eso creó una inmensa variedad armónica de entes para que en su conjunto canten la gloria divina.",
    "explicacionAlternativa": "Una sola flor no puede mostrar toda la belleza de la primavera: necesitas un jardín lleno de rosas, lirios, árboles y mariposas."
  },
  {
    "id": 306,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "En el orden moral y social, ¿qué es el 'bien común trascendente' del universo y del hombre?",
    "opciones": [
      "El banco central de reserva que emite billetes y monedas nacionales.",
      "Dios Mismo, como Fin Último absoluto y Bien Supremo de toda la creación.",
      "La constitución política aprobada por los parlamentos de las repúblicas.",
      "La red de carreteras y autopistas que une a las ciudades comerciales."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "f. El bien común: ley y justicia",
    "separata": "Separata 3",
    "explicacionDetallada": "El bien común trascendente es Dios: el Fin Supremo al que todo tiende y en quien reside la plenitud objetiva de cada persona humana.",
    "explicacionAlternativa": "Es la meta suprema: Dios como Padre y Hogar final de todas las almas."
  },
  {
    "id": 307,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿En qué consiste el 'bien común inmanente' de una sociedad humana?",
    "opciones": [
      "En una organización social justa y pacífica donde cada persona pueda alcanzar su fin último.",
      "En el reparto equitativo de televisores y teléfonos móviles a todas las familias.",
      "En la acumulación obligatoria de lingotes de oro en las bóvedas del estado.",
      "En la prohibición total de viajar al extranjero o de conversar con turistas."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "f. El bien común: ley y justicia",
    "separata": "Separata 3",
    "explicacionDetallada": "El bien común inmanente es el bien del orden social: condiciones de paz, justicia, libertad y derechos que facilitan a los ciudadanos el desarrollo virtuoso y el acceso a Dios.",
    "explicacionAlternativa": "Un barco bien equipado, con timón firme y tripulación respetuosa, que permite a todos los pasajeros llegar sanos y salvos a puerto."
  },
  {
    "id": 308,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿Por qué entre el verdadero bien individual y el auténtico bien común no existe conflicto real?",
    "opciones": [
      "Porque el verdadero bien de cada persona es alcanzar a Dios, que es a la vez el Bien de todos.",
      "Porque las leyes económicas del mercado libre resuelven automáticamente todos los problemas.",
      "Porque el estado tiene el derecho de fusilar a cualquiera que proteste por sus derechos.",
      "Porque los seres humanos carecen de personalidad propia y son piezas de una máquina."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "f. El bien común: ley y justicia",
    "separata": "Separata 3",
    "explicacionDetallada": "El conflicto solo estalla cuando el individuo se escoge egoístamente a sí mismo como su fin último, pisoteando a los demás; pero cuando ambos buscan el bien objetivo (Dios y la virtud), coinciden plenamente.",
    "explicacionAlternativa": "En un coro afinado, que tú cantes tu mejor nota en armonía no perjudica a los demás: enriquece la belleza de la canción entera."
  },
  {
    "id": 309,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿Cuál es la definición y propósito metafísico de la 'ley' en la vida social?",
    "opciones": [
      "Un conjunto de castigos corporales administrados arbitrariamente por los jueces.",
      "Una ordenación de la razón orientada al bien común, promulgada por quien cuida la comunidad.",
      "Un instrumento de dominación inventado por los ricos para oprimir a los pobres.",
      "Una costumbre popular que cambia de dirección cada vez que cambian las modas."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "f. El bien común: ley y justicia",
    "separata": "Separata 3",
    "explicacionDetallada": "La ley es la base del orden social; su propósito no es oprimir, sino dirigir y ordenar a los hombres hacia el bien común y la justicia, protegiéndolos de la tiranía del más fuerte.",
    "explicacionAlternativa": "Las reglas del semáforo: están puestas para que nadie se choque y todos puedan transitar seguros por la avenida."
  },
  {
    "id": 310,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿Qué ocurre inevitablemente en una sociedad cuando se destruye el imperio de la ley justa?",
    "opciones": [
      "Los ciudadanos dejan de enfermarse y la esperanza de vida sube a doscientos años.",
      "Se instaura de inmediato una era de paz angelical y felicidad perfecta.",
      "Los precios de los alimentos bajan a cero monedas en todos los supermercados.",
      "Prevalece la tiranía, la violencia de los poderosos, las discordias y la ley de la selva."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "f. El bien común: ley y justicia",
    "separata": "Separata 3",
    "explicacionDetallada": "Sin ley justa prevalece la tiranía del más despiadado o del poderoso sobre el indefenso. El sentido de la justicia fundamentado en Dios es indispensable para la paz civil.",
    "explicacionAlternativa": "Sin árbitro ni reglas en un partido de fútbol, el juego se convierte en una pelea a golpes."
  },
  {
    "id": 311,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿Cómo se define de forma clásica el concepto de 'justicia' en la ética metafísica?",
    "opciones": [
      "La venganza personal ejecutada con rencor contra quienes nos han ofendido.",
      "El perdón incondicional de los crímenes graves sin exigir ninguna reparación.",
      "La constante y perpetua voluntad de dar a cada uno lo suyo (su derecho propio).",
      "Cobrar impuestos elevados a las empresas privadas para mantener a los políticos."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "f. El bien común: ley y justicia",
    "separata": "Separata 3",
    "explicacionDetallada": "Justicia es el estado y virtud moral por el cual las cosas están en buen orden: todos los derechos y deberes recíprocos son reconocidos y facilitados de modo efectivo.",
    "explicacionAlternativa": "Dar a cada quien lo que le corresponde: pagar el sueldo justo al trabajador y entregar la mercancía al comprador."
  },
  {
    "id": 312,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "[Pregunta Trampa] ¿Puede haber una ley humana civil verdaderamente justa si niega o contradice la soberanía de Dios y la ley moral natural?",
    "opciones": [
      "No, una ley que contradice la ley natural no es verdadera ley, sino corrupción de la ley y tiranía.",
      "Sí, cualquier ley promulgada por mayoría de votos en un parlamento es justa por definición.",
      "Solo si es aprobada en países con altos índices de ingreso económico per cápita.",
      "Sí, porque los parlamentos tienen derecho a decidir qué seres humanos tienen derecho a vivir."
    ],
    "correcta": 0,
    "dificultad": "Trampa",
    "seccion": "f. El bien común: ley y soberanía de Dios",
    "separata": "Separata 3",
    "explicacionDetallada": "Santo Tomás afirma que una ley injusta contraria al orden divino natural no obliga en conciencia: no es ley legítima sino violencia institucionalizada (lex iniusta non est lex).",
    "explicacionAlternativa": "Si un gobierno votara una ley diciendo que está permitido matar a los recién nacidos, esa orden es una barbarie inmoral, no una ley digna."
  },
  {
    "id": 313,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿Por qué la bondad de un ente se funda en su propio 'esse' (acto de ser)?",
    "opciones": [
      "Porque el ser es la raíz de toda actualidad y perfección; algo es bueno en la medida en que es.",
      "Porque el esse es un premio otorgado por los sacerdotes a los feligreses cumplidores.",
      "Porque los objetos malos pesan el doble de toneladas que los objetos buenos.",
      "Porque las cosas que no existen son más fáciles de transportar en cajas de cartón."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "e. La bondad del ente",
    "separata": "Separata 3",
    "explicacionDetallada": "Ente y bien son convertibles ontológicamente (ens et bonum convertuntur): todo ente en cuanto es, es bueno; el mal no tiene ser sustancial positivo.",
    "explicacionAlternativa": "Existir y tener vida ya es un bien inmenso; la nada absoluta carece de toda bondad porque no es."
  },
  {
    "id": 314,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "[Ejemplo del texto] Cuando contemplamos los grados de bondad (bueno, mejor, óptimo), esto refleja:",
    "opciones": [
      "Los precios fijados por las compañías de seguros en el mercado inmobiliario.",
      "Las etapas de enfriamiento de la lava volcánica al caer al fondo del océano.",
      "Las calificaciones académicas que los profesores inventan al corregir exámenes.",
      "Los diversos grados de participación en la perfección del ser que tienen las criaturas."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "e. La bondad del ente",
    "separata": "Separata 3",
    "explicacionDetallada": "Hay grados de bondad exactamente como hay grados de ser, verdad y unidad; las criaturas participan de la perfección divina en diversos niveles de plenitud ontológica.",
    "explicacionAlternativa": "Un perro es más perfecto y pleno que una piedra; un ser humano con entendimiento libre es más perfecto que un perro."
  },
  {
    "id": 315,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿En qué consiste el 'bien de orden' del universo cósmico?",
    "opciones": [
      "En la armoniosa disposición por la cual todas las criaturas se orientan hacia Dios a través de sus operaciones.",
      "En el almacenamiento ordenado de libros en los estantes de las bibliotecas universitarias.",
      "En el calendario gregoriano de doce meses adoptado por la mayoría de países del mundo.",
      "En la prohibición a los cometas de cruzar cerca de la órbita de los planetas habitados."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "f. El bien común y orden universal",
    "separata": "Separata 3",
    "explicacionDetallada": "El universo no es una multitud caótica de seres desconectados: todas las partes cooperan mutuamente y apuntan hacia la manifestación de la gloria del Creador.",
    "explicacionAlternativa": "Como los instrumentos de una sinfonía monumental: cada nota tiene su lugar para que brille la belleza total de la obra."
  },
  {
    "id": 316,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "Cuando una persona elige el vicio y el egoísmo en lugar de la virtud, metafísicamente está:",
    "opciones": [
      "Demostrando que el principio de no-contradicción es una hipótesis falsa.",
      "Frustrando su propia naturaleza y desviándose del Fin Último que le brinda plenitud.",
      "Aumentando la cantidad de neuronas activas en los hemisferios de su cerebro.",
      "Alcanzando la máxima independencia heroica posible para un ser humano racional."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "f. El bien común y la moral",
    "separata": "Separata 3 y 4",
    "explicacionDetallada": "El pecado es un desvío y una frustración ontológica: la persona se daña a sí misma al elegir un bien aparente y mezquino en vez de su Bien Supremo connatural.",
    "explicacionAlternativa": "Es como ponerle arena al motor de tu propio auto creyendo que así correrá más rápido: te arruinas a ti mismo."
  },
  {
    "id": 317,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿Por qué se afirma que 'el amor social' se manifiesta de modo eminente en el sentido de la justicia?",
    "opciones": [
      "Porque la justicia garantiza con respeto efectivo que cada persona reciba lo que le es debido.",
      "Porque los abogados son los únicos ciudadanos que tienen capacidad de amar a la patria.",
      "Porque las sentencias judiciales son leídas en verso rimado en los palacios de justicia.",
      "Porque la justicia consiste en regalar abrazos sentimentales a quienes cometen robos."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "f. El bien común: ley y justicia",
    "separata": "Separata 3",
    "explicacionDetallada": "El verdadero amor al prójimo no es un sentimentalismo vacío: exige respetar escrupulosamente los derechos ajenos y promover las condiciones justas de vida común.",
    "explicacionAlternativa": "No puedes decir que amas a tu vecino si no le pagas lo que le debes o si destruyes su propiedad."
  },
  {
    "id": 318,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "¿Cuál es el fundamento metafísico último de los derechos humanos inalienables?",
    "opciones": [
      "La fuerza física de los sindicatos obreros durante las huelgas generales de las ciudades.",
      "La cantidad de dinero que una persona aporta al producto bruto interno de su nación.",
      "La dignidad de la persona humana como substancia racional creada por Dios para conocerlo y amarlo.",
      "La concesión benévola y temporal que otorgan los gobernantes de turno en sus decretos."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Fundamento de los derechos de la persona",
    "separata": "Separata 3 y 4",
    "explicacionDetallada": "Los derechos no los inventa el Estado; nacen de la naturaleza humana creada por Dios para un fin trascendente. Si Dios es borrado, los derechos quedan a merced de la tiranía del poderoso.",
    "explicacionAlternativa": "Tus derechos te pertenecen por ser hijo de Dios y persona humana, no porque un burócrata te haya regalado un permiso temporal."
  },
  {
    "id": 319,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "Cuando una persona renuncia a un interés egoísta individual por defender una causa noble y justa, manifiesta:",
    "opciones": [
      "La debilidad biológica propia de individuos que no saben competir en el mercado.",
      "Un trastorno psicológico de conducta que debe ser medicado en clínicas psiquiátricas.",
      "Una equivocación matemática en el cálculo de sus costos y beneficios materiales.",
      "La subordinación racional del bien privado mezquino al Bien Común superior y a la virtud."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "f. El bien común",
    "separata": "Separata 3",
    "explicacionDetallada": "La grandeza moral consiste en ordenar el bien individual al bien superior de la comunidad y de la justicia, acto que ennoblece al propio sujeto y lo santifica.",
    "explicacionAlternativa": "El bombero que entra en una casa en llamas para salvar a un niño: arriesga su comodidad por un bien inmensamente superior."
  },
  {
    "id": 320,
    "examen": 16,
    "tituloExamen": "Examen 16: Propiedades Trascendentales II: Bondad (Bonum) y Bien Común",
    "pregunta": "La síntesis de la doctrina metafísica de la Bondad y del Bien Común establece que:",
    "opciones": [
      "Todo ser tiende a su bien y el universo encuentra su coronación en Dios, Bien Supremo y común.",
      "La vida humana carece de metas nobles y el hombre debe vivir como una bestia salvaje.",
      "Los seres humanos deben renunciar a la religión para poder crear sociedades justas.",
      "Solo las máquinas automáticas pueden entender qué acciones son éticamente buenas."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Síntesis de Bonum y Bien Común",
    "separata": "Separata 3",
    "explicacionDetallada": "El bien es la plenitud del ser; Dios es la Fuente y Término de todo bien, y la sociedad humana alcanza su verdadera justicia cuando se edifica sobre esta verdad ontológica.",
    "explicacionAlternativa": "Estamos hechos para el Bien infinito: cuando buscamos la justicia y el amor, caminamos rumbo a nuestra verdadera casa."
  },
  {
    "id": 321,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Cómo define la metafísica clásica la naturaleza ontológica del 'mal' (malum)?",
    "opciones": [
      "Un gas venenoso que brota de los volcanes en erupción y contamina las ciudades.",
      "La ausencia o privación de un bien debido que debería estar presente en un sujeto (privatio boni).",
      "Una ilusión lingüística inventada por los jueces para asustar a los delincuentes.",
      "Una substancia oscura dotada de átomos negativos que combate contra Dios."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "g. El mal como ausencia de bien",
    "separata": "Separata 3",
    "explicacionDetallada": "El mal no es una substancia (no puede subsistir por sí mismo); es la privación o ausencia de un bien debido en una substancia que en sí misma es buena (privatio boni).",
    "explicacionAlternativa": "La oscuridad no es una cosa que compras en frascos: es simplemente la ausencia de luz en la habitación."
  },
  {
    "id": 322,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Por qué en términos gramaticales rigurosos el mal solo puede ser un adjetivo y nunca un nombre sustantivo?",
    "opciones": [
      "Porque los escritores antiguos no tenían suficientes letras en el alfabeto para escribirlo.",
      "Porque el mal carece de substancia propia independiente; solo existe como defecto en un bien existente.",
      "Porque las reglas de la Real Academia prohíben poner artículos a las palabras tristes.",
      "Porque solo Dios tiene derecho a usar nombres sustantivos en sus conversaciones celestes."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "g. El mal como ausencia de bien",
    "separata": "Separata 3",
    "explicacionDetallada": "El mal no existe 'en sí': siempre es 'una manzana podrida', 'un ojo ciego', 'un hombre injusto'. El sujeto que lo soporta es un ente bueno; el mal es un accidente defectuoso (adjetivo).",
    "explicacionAlternativa": "No existe el 'óxido' flotando solo en el espacio: solo existe hierro oxidado."
  },
  {
    "id": 323,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "[Axioma del texto contra el pesimismo] ¿Por qué se afirma que 'más vale ser con sufrimiento, que no ser en absoluto'?",
    "opciones": [
      "Porque las personas que sufren pagan menos impuestos a las oficinas del estado.",
      "Porque el sufrimiento aumenta la estatura corporal física de los seres humanos adultos.",
      "Porque el ser es una perfección ontológica positiva superior radicalmente a la nada absoluta.",
      "Porque los médicos recetan analgésicos químicos muy baratos en las farmacias públicas."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "g. El mal como ausencia de bien",
    "separata": "Separata 3",
    "explicacionDetallada": "El acto de ser es un bien fontal indestructible. Por muy dañado o doliente que esté un ente, el hecho de ser es infinitamente más noble y valioso que la aniquilación en el no-ser.",
    "explicacionAlternativa": "Aunque una casa tenga goteras y una ventana rota, sigue siendo una casa donde puedes cobijarte; derribarla hasta la nada no soluciona el problema."
  },
  {
    "id": 324,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Cuál es el único medio eficaz y metafísicamente recto para vencer al mal en el mundo?",
    "opciones": [
      "Combatir el mal con otro mal igual de destructivo para equilibrar las fuerzas.",
      "Firmar contratos comerciales de exportación de armas bélicas pesadas.",
      "Vencer el mal mediante el bien, reparando las cosas y haciéndolas mejores.",
      "Encerrarse en una habitación oscura y esperar que la nada lo devore todo."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "g. El mal como ausencia de bien",
    "separata": "Separata 3",
    "explicacionDetallada": "El texto recalca: si combatimos el mal con el mal, solo lo hacemos peor. El único medio real es el bien: sanar, perfeccionar y edificar positivamente la realidad.",
    "explicacionAlternativa": "No sacas la oscuridad de una habitación a palazos ni con gritos: la vences encendiendo una lámpara de luz."
  },
  {
    "id": 325,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Qué diferencia existe entre el 'mal físico' y el 'mal moral' según la separata?",
    "opciones": [
      "El mal físico lo cometen los adultos y el mal moral los niños pequeños en la escuela.",
      "El mal moral se cura con medicamentos de farmacia y el mal físico con oraciones secretas.",
      "El mal físico es la privación de un bien natural corpóreo; el mal moral es el pecado libremente consentido.",
      "No existe ninguna diferencia; ambos males son causados por bacterias microscópicas."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Mal físico y mal moral",
    "separata": "Separata 3",
    "explicacionDetallada": "El mal físico (enfermedad, ceguera, dolor) es relativo y puede redundar en bien espiritual. El mal real absoluto y sin paliativos es el mal moral (el pecado cometido con libertad culpable).",
    "explicacionAlternativa": "Tener gripe es un mal físico (te duele el cuerpo); mentir para destruir a un amigo es un mal moral (mancha tu alma y tu libertad)."
  },
  {
    "id": 326,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "[Ejemplo del texto: La ceguera física] ¿Por qué la ceguera física es calificada como un mal relativo?",
    "opciones": [
      "Porque aunque priva de un bien sensible, puede convertirse en ocasión de gran bien moral y virtud.",
      "Porque en los sueños todas las personas ciegas pueden ver perfectamente el mundo.",
      "Porque las gafas de aumento pueden curar instantáneamente la retina dañada.",
      "Porque los ciegos pueden escuchar música en la radio sin pagar licencia legal."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "Mal físico como mal relativo",
    "separata": "Separata 3",
    "explicacionDetallada": "Que alguien esté ciego es una privación física dolorosa, pero puede ser la ocasión para que esa persona desarrolle paciencia heroica, fe profunda y una gran estatura moral.",
    "explicacionAlternativa": "Una tormenta puede derribar un árbol viejo, pero esa madera sirvió para calentar el hogar de una familia pobre: de un mal físico surgió un bien."
  },
  {
    "id": 327,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Qué es propiamente el 'pecado' en la metafísica moral clásica?",
    "opciones": [
      "La violación libre y deliberada de la ley moral que desvía al hombre de su Fin Último.",
      "Una enfermedad bacteriana que se transmite a través del agua potable contaminada.",
      "Un error de cálculo al sumar los números de una cuenta bancaria compartida.",
      "Una falta de ortografía al escribir un correo electrónico de negocios."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "El mal moral y el pecado",
    "separata": "Separata 3",
    "explicacionDetallada": "El verdadero mal sin calificaciones es el mal moral: cuando el hombre, conociendo el bien, decide libremente transgredir la ley divina y torcer su camino lejos de Dios.",
    "explicacionAlternativa": "Tener el mapa correcto en la mano y decidir voluntariamente manejar hacia el barranco sabiendo el peligro."
  },
  {
    "id": 328,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Qué es la 'belleza' (pulchrum) como propiedad trascendental del ente?",
    "opciones": [
      "La cantidad de maquillaje cosmético que una persona utiliza antes de salir de paseo.",
      "El resplandor conjunto de la unidad, la verdad y la bondad que agrada a la inteligencia y a los sentidos.",
      "Una propiedad exclusiva de los cuadros al óleo pintados en el siglo dieciséis en Italia.",
      "Un invento comercial de las revistas de moda para vender prendas de ropa cara."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "h. La belleza del ente",
    "separata": "Separata 3",
    "explicacionDetallada": "Pulchrum est quod visum placet (la belleza es lo que al ser visto agrada). Nace del refulgir conjunto de la unidad, la verdad y la bondad en un ente real.",
    "explicacionAlternativa": "Cuando ves algo que es perfecto en su forma (unidad), armónico (verdad) y atrayente (bondad), tu corazón suspira y dice: '¡qué hermoso!'."
  },
  {
    "id": 329,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Cuáles son los dos sentidos superiores a través de los cuales el ser humano experimenta la belleza estética sensible?",
    "opciones": [
      "El gusto de la lengua y el olfato de la nariz.",
      "La temperatura de la piel y la presión de las plantas de los pies al caminar.",
      "El tacto de las palmas de las manos y el equilibrio del oído interno.",
      "La vista y el oído, por ser los sentidos más comprensivos y espiritualizados."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "h. La belleza del ente: sentidos superiores",
    "separata": "Separata 3",
    "explicacionDetallada": "La vista y el oído son los sentidos de mayor alcance cognoscitivo e inmaterialidad; a través de ellos captamos proporciones, colores y sinfonías que deleitan al entendimiento.",
    "explicacionAlternativa": "Disfrutas un hermoso atardecer con tus ojos y una tierna melodía con tus oídos: los sentidos que más se acercan al alma."
  },
  {
    "id": 330,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Por qué los animales irracionales carecen por completo de sentido estético de la belleza?",
    "opciones": [
      "Porque los animales prefieren escuchar música estridente de instrumentos de percusión.",
      "Porque los animales salvajes no tienen permiso para entrar a los museos de pintura.",
      "Porque los animales tienen los ojos cerrados durante todas las horas del día.",
      "Porque aunque perciben colores y sonidos con sus órganos, solo la inteligencia reconoce las cualidades del ser."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "h. La belleza del ente: inteligencia y belleza",
    "separata": "Separata 3",
    "explicacionDetallada": "La experiencia estética presupone captar el orden ontológico, la proporción y el fin; los animales solo buscan el estímulo biológico sensible (comida, peligro, reproducción), no la belleza en sí.",
    "explicacionAlternativa": "Un perro mira un cuadro de Da Vinci y solo ve un pedazo de tela inservible; no se sienta a admirar el arte porque no tiene mente racional."
  },
  {
    "id": 331,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Cuáles son las tres cualidades objetivas que el entendimiento descubre en las cosas verdaderamente bellas según Santo Tomás?",
    "opciones": [
      "Costo financiero, fama comercial del autor y fecha de publicación en los periódicos.",
      "Armonía (proporción), Plenitud (integridad o perfección), y Claridad (brillantez o esplendor inteligible).",
      "Peso, volumen acelerado y temperatura de ebullición del agua en la cocina.",
      "Color rojo intenso, bordes afilados de metal y sonido estridente de campana."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "h. Tres cualidades de la belleza",
    "separata": "Separata 3",
    "explicacionDetallada": "1) Armonía (consonantia / orden y proporción de las partes); 2) Plenitud (integritas / nada le falta de lo debido); 3) Esplendor (claritas / brillantez inteligible que deleita al entendimiento).",
    "explicacionAlternativa": "Un rostro bello: tiene rasgos proporcionados (armonía), no le falta ninguna parte (plenitud) y tiene una mirada viva y luminosa (esplendor)."
  },
  {
    "id": 332,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Qué ocurre cuando a un objeto le faltan partes debidas de su constitución esencial?",
    "opciones": [
      "El objeto se transforma en una obra de arte abstracto vendida en millones de dólares.",
      "El entendimiento percibe esa mutilación o defecto y califica al objeto como feo o defectuoso.",
      "Se vuelve más bello porque las personas sienten lástima estética por él.",
      "Las leyes de la física corrigen el defecto enviando fotones solares de reparación."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "h. Plenitud y fealdad",
    "separata": "Separata 3",
    "explicacionDetallada": "La falta de integridad (plenitud) produce fealdad: una estatua a la que le rompieron la nariz o una melodía a la que le faltan notas esenciales resulta disonante y fea.",
    "explicacionAlternativa": "Un reloj de oro al que le falta una manecilla: está incompleto y defectuoso."
  },
  {
    "id": 333,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Cómo se define la 'armonía' en la estética metafísica clásica?",
    "opciones": [
      "Un acorde de guitarra que se toca al final de las canciones románticas populares.",
      "La unidad en la diversidad: el recto orden y disposición de las partes en relación a un fin.",
      "La ausencia total de opiniones diferentes en las reuniones de los clubes de barrio.",
      "La mezcla aleatoria de todas las pinturas de una paleta hasta obtener color gris."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "h. Armonía",
    "separata": "Separata 3",
    "explicacionDetallada": "Armonía no es uniformidad aburrida; es la conjunción ordenada de elementos variados que convergen en una unidad deslumbrante y equilibrada.",
    "explicacionAlternativa": "Una ensalada de frutas: fresas, plátanos y uvas distintos combinados en un sabor exquisito y balanceado."
  },
  {
    "id": 334,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Por qué Dios posee las tres cualidades de la belleza en grado infinito y supremo?",
    "opciones": [
      "Porque los ángeles cantan himnos musicales con trompetas doradas sin equivocarse jamás.",
      "Porque Dios tiene la más alta armonía, la máxima plenitud de ser y el esplendor de pura inteligibilidad.",
      "Porque Dios viste mantos de seda bordados con hilos de plata y piedras preciosas.",
      "Porque las iglesias cristianas están decoradas con vitrales de colores brillantes."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "h. Dios como Belleza Suprema",
    "separata": "Separata 3",
    "explicacionDetallada": "En Dios hay suprema armonía (unidad con máxima diversidad de perfecciones), máxima plenitud (Puro Esse sin falta alguna) y máxima brillantez inteligible infinita.",
    "explicacionAlternativa": "Dios es el Océano de Belleza infinita de donde todas las flores, estrellas y rostros hermosos de la tierra son solo pequeñas gotas reflejadas."
  },
  {
    "id": 335,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "[Célebre frase de Santo Tomás de Aquino] ¿Qué significa la expresión 'Mi amor es mi ojo' (amor meus, oculus meus)?",
    "opciones": [
      "Que las personas enamoradas necesitan comprar lentes de contacto para no tropezar.",
      "Que no se puede estudiar filosofía sin antes haberse casado legalmente ante la sociedad.",
      "Que los ojos físicos humanos están fabricados con células de afecto biológico puro.",
      "Que la capacidad de penetrar y comprender la belleza suprema de Dios depende de la intensidad del amor."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "h. El amor como ojo del alma",
    "separata": "Separata 3",
    "explicacionDetallada": "La visión de la belleza divina trasciende la fría mirada intelectual: el amor limpia la mirada del alma y le permite intuir y deleitarse en la majestad de Dios.",
    "explicacionAlternativa": "Solo quien ama de verdad a una persona es capaz de ver la belleza profunda y oculta que los extraños no perciben."
  },
  {
    "id": 336,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "[Pregunta Trampa] Si lo falso y lo malo son contrarios a la verdad y al bien, ¿qué relación guardan con la belleza?",
    "opciones": [
      "Lo que es falso y malo es necesariamente feo en su raíz ontológica más profunda.",
      "Solo las novelas de terror tienen permiso de mezclar la mentira con la belleza.",
      "La belleza no tiene ninguna relación con la moral ni con la verdad de las cosas.",
      "Lo falso y lo malo pueden ser extremadamente bellos si tienen colores fluorescentes."
    ],
    "correcta": 0,
    "dificultad": "Trampa",
    "seccion": "h. Belleza, verdad y bondad",
    "separata": "Separata 3",
    "explicacionDetallada": "El texto enseña con claridad: como la belleza es el refulgir de la verdad y el bien en el ente, 'lo que es falso es necesariamente feo y malo' ontológicamente, aunque aparente oropel externo.",
    "explicacionAlternativa": "Una manzana de cera envenenada puede brillar por fuera, pero por dentro es una mentira mortífera y repugnante."
  },
  {
    "id": 337,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "Cuando un ser humano experimenta asombro ante una noche estrellada y siente paz en su espíritu, esa experiencia se llama:",
    "opciones": [
      "Una alucinación térmica que debe ser tratada en urgencias médicas.",
      "Experiencia estética de la belleza, donde los sentidos y la inteligencia se deleitan en el ser.",
      "Pérdida del sentido de orientación geográfica en el campo.",
      "Un ataque de pánico provocado por el frío del viento nocturno en las montañas."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "h. La experiencia estética",
    "separata": "Separata 3",
    "explicacionDetallada": "Es la contemplación estética: el hombre, a través de los ojos, percibe la armonía y grandeza del firmamento, elevando su mente al Autor Supremo de tanta hermosura.",
    "explicacionAlternativa": "Quedarse boquiabierto ante las estrellas contemplando la grandeza de la creación."
  },
  {
    "id": 338,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Por qué el mal moral destruye la armonía estética interior de la persona humana?",
    "opciones": [
      "Porque a los delincuentes les salen arrugas prematuras en la frente por las noches.",
      "Porque la policía publica sus fotografías en los periódicos de circulación nacional.",
      "Porque el remordimiento consume calorías físicas provocando deshidratación biológica.",
      "Porque introduce una división desgarradora entre lo que la razón sabe justo y lo que la voluntad tuerce."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "El pecado como fealdad moral",
    "separata": "Separata 3",
    "explicacionDetallada": "El pecado es fealdad interior: destruye la integridad del alma, quiebra la armonía entre razón y pasiones y sumerge al espíritu en la oscuridad culpable.",
    "explicacionAlternativa": "Un violín desafinado que chirría de dolor: la persona injusta pierde su paz y su música interior."
  },
  {
    "id": 339,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "¿Cómo se vincula la doctrina de los trascendentales con la vida espiritual y cristiana?",
    "opciones": [
      "Mostrando que buscar la Unidad, la Verdad, la Bondad y la Belleza es buscar el Rostro de Dios.",
      "Enseñando que la religión es solo para personas que no tienen trabajos comerciales en el mundo.",
      "Obligando a los cristianos a memorizar listas de palabras en latín sin entenderlas.",
      "Prohibiendo a las personas disfrutar de las flores, la música y las artes plásticas."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Síntesis de los trascendentales",
    "separata": "Separata 3",
    "explicacionDetallada": "Los trascendentales revelan que todo lo noble del mundo apunta a Dios. Amar la verdad, hacer el bien y contemplar la belleza es un camino de encuentro vivo con el Creador.",
    "explicacionAlternativa": "Cualquier destello de bondad o hermosura en la tierra es una carta de amor que Dios te envía para invitarte al Cielo."
  },
  {
    "id": 340,
    "examen": 17,
    "tituloExamen": "Examen 17: El Problema del Mal y la Belleza (Pulchrum)",
    "pregunta": "La gran síntesis de la Separata 3 sobre las causas y los trascendentales nos deja como lección principal que:",
    "opciones": [
      "Todo ente tiene causas que lo fundan y trascendentales que lo ennoblecen, reflejando a Dios Creador.",
      "El universo es una ilusión que carece de causas, de unidad y de orden inteligible.",
      "Las cosas materiales son malas por naturaleza y deben ser despreciadas por el sabio.",
      "Solo las ciencias de las matemáticas puras son capaces de consolar al corazón humano en la aflicción."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Síntesis general de la Separata 3",
    "separata": "Separata 3",
    "explicacionDetallada": "La causalidad explica la génesis del ente y los trascendentales muestran su riqueza ontológica inagotable: todo el ser proclama la sabiduría y el amor de Dios.",
    "explicacionAlternativa": "El mundo es una obra maestra: tiene firma de Autor (causas) y brilla con esplendor de diamante (trascendental)."
  },
  {
    "id": 341,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Por qué se afirma en el texto que la 'Teología Natural' es la cima y coronación de la metafísica?",
    "opciones": [
      "Porque fue el último libro impreso por las imprentas europeas en el siglo quince.",
      "Porque al estudiar el ente, la metafísica alcanza en último término a Dios, Causa Primera y Fin Último.",
      "Porque prohíbe el uso de la razón para que los estudiantes se queden solo con mitos antiguos.",
      "Porque los teólogos cobran sueldos más altos que los profesores de física en las academias."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "a. El hombre puede conocer a Dios",
    "separata": "Separata 4",
    "explicacionDetallada": "El auténtico objetivo y fin real que persigue la metafísica es, en último término, el conocimiento de Dios a la luz natural de la razón humana.",
    "explicacionAlternativa": "Subir la montaña de la filosofía tiene un solo mirador cumbre: descubrir al Creador del universo."
  },
  {
    "id": 342,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Cuál es la diferencia entre el 'uso espontáneo' (precientífico) y el 'uso científico' de la razón en el conocimiento de Dios?",
    "opciones": [
      "El científico es una creencia supersticiosa y el espontáneo es una fórmula matemática.",
      "El espontáneo lo usan los médicos y el uso científico lo usan exclusivamente los astronautas.",
      "El espontáneo solo conoce los hechos; el uso científico conoce el porqué reconociendo las causas.",
      "No existe ninguna diferencia; ambos modos de conocer fueron rechazados por el Concilio Vaticano."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "a. Conocimiento espontáneo vs científico",
    "separata": "Separata 4",
    "explicacionDetallada": "Por el conocimiento espontáneo de sentido común solo conocemos cosas; el uso científico o metafísico consiste en conocer las causas de las cosas y dar razón estricta de ellas.",
    "explicacionAlternativa": "El campesino mira la luna y sabe que Dios existe por intuición espontánea; el metafísico elabora la prueba causal rigurosa."
  },
  {
    "id": 343,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Cuáles son los dos órdenes o géneros de conocimiento que el hombre puede tener sobre Dios?",
    "opciones": [
      "El conocimiento político mediante elecciones y el conocimiento militar mediante desfiles.",
      "El conocimiento poético de las fábulas y el conocimiento bancario de las tasas de interés.",
      "El conocimiento 'natural' (a la luz de la razón) y el conocimiento 'sobrenatural' (fe y visión beatífica).",
      "El conocimiento gastronómico mediante sabores y el conocimiento acústico mediante canciones."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "a. Conocimiento natural y sobrenatural",
    "separata": "Separata 4",
    "explicacionDetallada": "Hay dos géneros radicalmente distintos: 1) Natural (lumen rationis); 2) Sobrenatural (lumen fidei en la tierra y lumen gloriae en el cielo).",
    "explicacionAlternativa": "Lo que puedes saber de Dios investigando con tu mente (natural), frente a lo que Dios te revela al oído (fe) o te deja ver cara a cara (cielo)."
  },
  {
    "id": 344,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Qué diferencia existe entre los dos grados del conocimiento sobrenatural (fe y visión beatífica)?",
    "opciones": [
      "La fe solo la tienen los reyes y la visión beatífica solo la alcanzan los animales salvajes.",
      "La visión beatífica se compra con donaciones y la fe se hereda por las leyes civiles.",
      "Una diferencia de género irreconciliable que impide que pertenezcan a la misma religión.",
      "Una mera diferencia de grado: la luz de la fe (lumen fidei) es una visión beatífica disminuida."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "a. Grados del conocimiento sobrenatural",
    "separata": "Separata 4",
    "explicacionDetallada": "Pertenecen al mismo género sobrenatural; la diferencia es solo de grado de claridad: en la tierra conocemos por fe en claroscuro; en el cielo vemos cara a cara en la visión beatífica (lumen gloriae).",
    "explicacionAlternativa": "La fe es como ver una hermosa foto en blanco y negro; la visión beatífica es tener a la persona en vivo a todo color frente a ti."
  },
  {
    "id": 345,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Cuál es el 'objeto formal' de la Teología Natural que la distingue de la Teología Sobrenatural?",
    "opciones": [
      "En la Natural es 'Dios en cuanto Ente y Causa Primera'; en la Sobrenatural es 'Dios en cuanto Dios Mismo' (sub ratione deitatis).",
      "En la Sobrenatural se usa la razón humana sola y en la Natural se prohíbe pensar ideas lógicas.",
      "En la Natural es la Biblia sagrada en pergaminos y en la Sobrenatural son las piedras del campo.",
      "Ambas tienen idéntico objeto formal sin que exista ninguna distinción de enfoque entre ellas."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "b. Teología natural, cima de la metafísica",
    "separata": "Separata 4",
    "explicacionDetallada": "Ambas coinciden en el objeto material (Dios); pero la teología natural estudia a Dios como Causa Primera del ente a la luz de la razón, mientras la sobrenatural lo estudia en su intimidad divina (Trinidad) por la fe.",
    "explicacionAlternativa": "Teología natural: deducir al Arquitecto viendo la catedral; Teología sobrenatural: sentarte a cenar con el Arquitecto porque Él te invitó a su casa."
  },
  {
    "id": 346,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Cuál es la 'luz' o instrumento bajo el cual opera la Teología Natural (lumen sub quo)?",
    "opciones": [
      "La luz de las velas de cera bendecidas en las procesiones de Semana Santa.",
      "El sentimiento místico pasivo provocado por la música suave en los monasterios.",
      "La luz ultravioleta emitida por las lámparas médicas de desinfección hospitalaria.",
      "La luz natural de la razón humana (lumen rationis) sin necesidad de fe revelada."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "b. Teología natural: lumen sub quo",
    "separata": "Separata 4",
    "explicacionDetallada": "La teología natural utiliza como luz exclusivamente la razón natural humana mediante el razonamiento filosófico fundado en la experiencia de las criaturas.",
    "explicacionAlternativa": "Es la inteligencia normal y corriente de cualquier ser humano pensando con rigor lógico."
  },
  {
    "id": 347,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Cuál es la meta y el propósito supremo para el cual han sido creados todos los seres humanos?",
    "opciones": [
      "Conocer y amar a Dios con toda su mente y con todo su corazón.",
      "Hacerse millonarios comprando acciones en la bolsa de valores comerciales.",
      "Aparecer en las portadas de las revistas de espectáculos y televisión pública.",
      "Conquistar territorios ajenos mediante campañas militares de infantería."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "a. El hombre puede conocer a Dios: meta del ser humano",
    "separata": "Separata 4",
    "explicacionDetallada": "La meta del ser humano es, precisamente, conocer y amar a Dios. Todos los demás fines temporales solo pueden tener razón de medios subordinados a esta meta suprema.",
    "explicacionAlternativa": "Fuiste diseñado para una felicidad infinita que solo se sacia cuando conoces y abrazas a Dios."
  },
  {
    "id": 348,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "[Juicio ético-metafísico del texto] ¿Por qué la mentalidad favorable a la contracepción es calificada como 'ceguera metafísica'?",
    "opciones": [
      "Porque no comprende que la vida humana es un don y que 'ser es infinitamente mejor que no ser'.",
      "Porque disminuye los ingresos fiscales recaudados por los ministerios de hacienda.",
      "Porque los médicos ginecólogos cobran honorarios muy costosos en las consultas privadas.",
      "Porque los anticonceptivos son fabricados con plásticos no reciclables en el mar."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "a. El don de la vida y el ser",
    "separata": "Separata 4",
    "explicacionDetallada": "Dios quiere que los hombres nazcan para que más seres puedan conocerlo, amarlo y participar de la bondad del ser. Bloquear la vida por egoísmo es preferir la nada frente a la bendición del ser.",
    "explicacionAlternativa": "Negar el don de la existencia es preferir la nada vacía antes que la maravilla de una nueva persona llamada al amor eterno."
  },
  {
    "id": 349,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Por qué se afirma que 'la filosofía no puede ignorar a Dios' y que toda postura filosófica depende de Él?",
    "opciones": [
      "Porque los departamentos de filosofía están obligados a pagar diezmos a las parroquias.",
      "Porque los filósofos ateos son expulsados automáticamente de las academias de Europa.",
      "Porque Dios escribe cartas personales a todos los decanos de las facultades de letras.",
      "Porque el conjunto de la realidad depende de Dios; la postura que un filósofo toma sobre Dios colorea todo su sistema."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "c. La filosofía no puede ignorar a Dios",
    "separata": "Separata 4",
    "explicacionDetallada": "Dime lo que este filósofo dice de Dios, y te diré el resto de su filosofía. La postura ante la Causa Primera define la antropología, la ética, el derecho y la visión de la vida.",
    "explicacionAlternativa": "Dios es el norte de la brújula: si cambias el norte, todo el mapa de tu vida y pensamiento se tuerce."
  },
  {
    "id": 350,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Qué demuestra el hecho universal de que todos los pueblos y naciones de la historia hayan tenido religión?",
    "opciones": [
      "Que los templos religiosos eran los únicos lugares donde se vendían alimentos frescos.",
      "Que existe un conocimiento natural y espontáneo de la existencia de Dios arraigado en la razón humana.",
      "Que los pueblos antiguos eran gobernados siempre por magos y hechiceros charlatanes.",
      "Que las personas le tienen miedo a los truenos y relámpagos de las tormentas de verano."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "d. La razón se orienta hacia Dios",
    "separata": "Separata 4",
    "explicacionDetallada": "No hay una sola nación que no haya intuido una divinidad superior ante la cual se es responsable. Es una certeza precientífica espontánea de la inteligencia natural.",
    "explicacionAlternativa": "Hasta la tribu más aislada de la selva mira el cielo y siente en su corazón que hay un Ser superior que creó la selva y la vida."
  },
  {
    "id": 351,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Es el conocimiento espontáneo de Dios un conocimiento puramente sensorial o instintivo como ver un árbol?",
    "opciones": [
      "Sí, exactamente igual a como los pájaros aprenden a volar por instinto ciego de nacimiento.",
      "Sí, Dios puede verse sentado sobre las nubes con un telescopio astronómico.",
      "No, porque las religiones solo nacieron cuando se inventó la televisión por cable.",
      "No, implica ya un proceso elemental de razonamiento de causa a efecto, pues a Dios no se le ve."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "d. La razón se orienta hacia Dios: proceso de razonamiento",
    "separata": "Separata 4",
    "explicacionDetallada": "No vemos a Dios con los ojos de la cara; por tanto, saber que existe exige un paso intelectivo elemental: ver el mundo como un efecto que reclama una Causa superior.",
    "explicacionAlternativa": "No ves el viento con los ojos, pero cuando ves las ramas meciéndose, sabes de inmediato con tu mente que el viento está soplando."
  },
  {
    "id": 352,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Qué hace la metafísica rigurosa con ese conocimiento espontáneo popular de Dios?",
    "opciones": [
      "Hacerlo explícito, riguroso, depurado y científico, mostrando el paso metódico del efecto a la causa.",
      "Reemplazar a Dios por un robot cibernético programado con algoritmos matemáticos.",
      "Encerrar a los teólogos en museos de arqueología antigua para que no hablen con nadie.",
      "Burlarse de la fe sencilla del pueblo y convencer a todos los campesinos de ser ateos."
    ],
    "correcta": 0,
    "dificultad": "Media",
    "seccion": "d. La filosofía y el conocimiento espontáneo",
    "separata": "Separata 4",
    "explicacionDetallada": "La filosofía toma esa intuición de sentido común y la eleva a rango de demostración científica cierta, explicando que el universo es un efecto contingente que postula a Dios.",
    "explicacionAlternativa": "Pule el diamante en bruto: la persona común intuye a Dios; el filósofo formula las pruebas y responde a las objeciones con claridad."
  },
  {
    "id": 353,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Por qué la razón humana no es el único factor implicado en el conocimiento que el hombre tiene de Dios?",
    "opciones": [
      "Porque las leyes de la termodinámica impiden que la mente piense en cosas espirituales.",
      "Porque los seres humanos necesitan tomar vitaminas cerebrales para recordar silogismos lógicos.",
      "Porque las iglesias solo abren sus puertas a las personas que tienen buena voz para cantar.",
      "Porque en este conocimiento intervienen decisivamente las disposiciones de la voluntad y las emociones morales."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "e. La razón no es el único factor en nuestro conocimiento de Dios",
    "separata": "Separata 4",
    "explicacionDetallada": "El conocimiento de Dios compromete la vida moral y la sumisión del ego ante una Autoridad Suprema. Una voluntad soberbia puede presionar a la razón para buscar objeciones y negar la verdad.",
    "explicacionAlternativa": "No es solo un problema de cabeza (intelecto), sino sobre todo del corazón (voluntad): si no quieres que haya Dios para pecar a gusto, inventarás excusas para dudar."
  },
  {
    "id": 354,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿En qué consiste una demostración 'a posteriori' de la existencia de Dios?",
    "opciones": [
      "En una prueba que parte de una idea abstracta pura inventada en la fantasía sin tocar el mundo.",
      "En una demostración que asciende desde los hechos reales de la experiencia (efectos) hacia su Causa Primera.",
      "En una encuesta estadística de opinión realizada por correo postal después de las elecciones.",
      "En una profecía astrológica que predice sucesos futuros basándose en las estrellas del cielo."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "e. Demostración a posteriori",
    "separata": "Separata 4",
    "explicacionDetallada": "A posteriori significa 'a partir de lo que está después' (los efectos sensibles contingentes); mediante el principio de causalidad se concluye con certeza la Causa ontológicamente previa.",
    "explicacionAlternativa": "Ves el humo saliendo por la ventana (efecto posterior) y deduces sin equivocarte que adentro hay fuego encendido (causa)."
  },
  {
    "id": 355,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Cuál es la diferencia capital entre el 'agnosticismo' y el 'ateísmo' según el texto?",
    "opciones": [
      "El agnóstico cree en diez dioses y el ateo solo cree en los dioses de la mitología nórdica.",
      "No existe ninguna diferencia; ambos son nombres idénticos usados por los tribunales griegos.",
      "El ateísmo niega que Dios exista; el agnosticismo niega que Dios pueda ser conocido por la razón si existiera.",
      "El ateo vive en el campo y el agnóstico habita en las grandes capitales europeas."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "f. El agnosticismo no es razonable",
    "separata": "Separata 4",
    "explicacionDetallada": "El ateísmo niega la existencia de Dios; el agnosticismo suspende el juicio diciendo que la mente no puede saber si existe o no, disfrazándose de supuesta humildad intelectual.",
    "explicacionAlternativa": "El ateo dice: 'Dios no existe'; el agnóstico dice: 'No se puede saber ni probar si existe o no, así que me lavo las manos'."
  },
  {
    "id": 356,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Por qué el agnosticismo es calificado de 'soberbia disfrazada de humildad intelectual'?",
    "opciones": [
      "Porque los tratados de medicina demostraron que los escépticos tienen problemas de visión ocular.",
      "Porque los agnósticos cobran honorarios muy caros por dar clases de gramática latina.",
      "Porque la verdadera humildad consiste en someterse a la evidencia de la verdad objetiva, no en el escepticismo.",
      "Porque los agnósticos se visten con trajes de gala lujosos en las ceremonias académicas."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "f. El agnosticismo no es razonable",
    "separata": "Separata 4",
    "explicacionDetallada": "La verdadera humildad intelectual acepta dócilmente la verdad evidente que la realidad impone. Negarse a aceptar pruebas racionales escudándose en la duda metódica eterna es soberbia del ego.",
    "explicacionAlternativa": "No es humilde decir 'nadie puede saber la verdad'; humilde es abrir los ojos, ver la luz del sol y reconocer: 'la luz está brillando'."
  },
  {
    "id": 357,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "[Dogma Católico del Concilio Vaticano I, 1869] ¿Qué verdad de fe definió solemnemente este concilio sobre la razón humana?",
    "opciones": [
      "Que la ciencia experimental moderna es una herejía diabólica que debe ser erradicada del mundo.",
      "Que Dios puede ser conocido con certeza por la luz natural de la razón a partir de las criaturas creadas.",
      "Que los seres humanos solo pueden salvarse si aprueban un examen oral de filosofía griega.",
      "Que la razón humana fue destruida por el pecado original y solo cabe creer por fe ciega."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "f. Concilio Vaticano I y dogma de la razón",
    "separata": "Separata 4",
    "explicacionDetallada": "Es dogma de fe católica (Concilio Vaticano I, 1869, citando Sabiduría 13 y Romanos 1): la razón natural humana, por sus solas fuerzas y partiendo de las cosas creadas, puede conocer con certeza la existencia de Dios.",
    "explicacionAlternativa": "La Iglesia católica defiende la inteligencia del hombre: Dios nos dio una mente capaz de descubrir su huella en el mundo sin necesidad de milagros extraordinarios."
  },
  {
    "id": 358,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Por qué es importante para un creyente cristiano maduro estudiar las pruebas racionales de Dios si ya tiene la fe?",
    "opciones": [
      "Para poder burlarse de sus amigos que no asisten a misa los fines de semana.",
      "Para no tener que volver a rezar ni a recibir los sacramentos de la Iglesia nunca más.",
      "Para obtener descuentos económicos en el pago de las matrículas universitarias privadas.",
      "Para fortalecer su fe confirmándola como razonable y poder dar testimonio fundado ante los demás."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "g. Importancia de la demostración racional para el cristiano",
    "separata": "Separata 4",
    "explicacionDetallada": "Le muestra que su fe es plenamente razonable (obsequium rationabile), purifica su creencia de infantilismos y le capacita para dialogar y responder a las objeciones del mundo con serenidad y rigor.",
    "explicacionAlternativa": "Para que tu fe no sea una emoción frágil de niño, sino un árbol robusto con raíces intelectuales profundas capaz de resistir tormentas."
  },
  {
    "id": 359,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Cuál es la diferencia entre decir que 'Dios es incomprensible' y decir que 'Dios es incognoscible'?",
    "opciones": [
      "Incomprensible significa que Dios no existe e incognoscible significa que Dios es un robot cuántico.",
      "Ambas palabras significan exactamente que los seres humanos jamás podrán saber nada sobre Dios.",
      "Incognoscible lo usan los poetas e incomprensible lo usan exclusivamente los contadores públicos.",
      "Es incomprensible porque la mente finita no lo abarca exhaustivamente; pero es cognoscible porque tiene infinita luz."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "h. Límites del conocimiento humano de Dios",
    "separata": "Separata 4",
    "explicacionDetallada": "Dios no es incognoscible: es cognoscible por ser Plenitud de Inteligibilidad. Pero es incomprensible para la mente humana finita, porque una jarra pequeña no puede contener todo el agua del océano.",
    "explicacionAlternativa": "Puedes beber agua del mar y saciarte (conocerlo de verdad), pero no puedes tragarte el mar entero en un solo trago (comprenderlo totalmente)."
  },
  {
    "id": 360,
    "examen": 18,
    "tituloExamen": "Examen 18: Teología Natural: Conocimiento Natural y Sobrenatural de Dios",
    "pregunta": "¿Cuáles son las dos vías mediante las cuales la razón humana puede afirmar perfecciones de Dios a partir de las criaturas?",
    "opciones": [
      "Atribuyéndole las propiedades físicas de los metales pesados y calculando su peso en toneladas.",
      "Repitiendo poesías griegas antiguas con los ojos vendados durante la noche oscura.",
      "Esperando que caiga un rayo del cielo y anotando la fecha exacta en un calendario de papel.",
      "Conociéndolo como Causa y atribuyéndole en grado infinito sus perfecciones tras purificarlas de imperfección material."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "h. Modo de conocer las perfecciones de Dios",
    "separata": "Separata 4",
    "explicacionDetallada": "Vía de causalidad y eminencia: atribuimos a Dios la bondad, justicia, sabiduría y belleza en grado eminente purificándolas de límites materiales (excluyendo el tamaño físico, peso, cambio o imperfección).",
    "explicacionAlternativa": "Ves la bondad de una madre y dices: 'Dios es la ternura y bondad infinita, pero sin los cansancios ni límites del cuerpo humano'."
  },
  {
    "id": 361,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Cuáles son los dos tipos fundamentales de ateísmo analizados en la separata?",
    "opciones": [
      "El ateísmo práctico (vivir como si Dios no existiera) y el ateísmo teórico o doctrinal (afirmar que Dios no existe).",
      "El ateísmo espacial de los cosmonautas y el ateísmo submarino de los buzos militares.",
      "El ateísmo de los días festivos y el ateísmo de los días laborales de la semana.",
      "El ateísmo matemático de las fracciones y el ateísmo gramatical de las conjunciones."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "i. El problema del ateísmo: tipos de ateísmo",
    "separata": "Separata 4",
    "explicacionDetallada": "1) Ateísmo práctico: ignorar a Dios en la conducta diaria, viviendo como si no existiera (incluso yendo a iglesias); 2) Ateísmo teórico: elaborar argumentos doctrinales explícitos para negar la existencia divina.",
    "explicacionAlternativa": "El ateo teórico dice en discursos: 'Dios no existe'; el ateo práctico dice que cree, pero en su vida diaria vive como si Dios jamás lo viera ni importara."
  },
  {
    "id": 362,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Por qué se afirma en el texto que 'hay que querer ser ateo para serlo'?",
    "opciones": [
      "Porque los ateos necesitan tener títulos universitarios de postgrado en biología marina.",
      "Porque como es imposible probar que Dios no existe, la postura atea brota de una decisión de la voluntad moral.",
      "Porque la ley civil exige una declaración jurada ante notario público para declararse ateo.",
      "Porque para ser ateo se exige pagar una membresía mensual en clubes políticos cerrados."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "i. El problema del ateísmo: raíz voluntaria",
    "separata": "Separata 4",
    "explicacionDetallada": "Ningún argumento puede concluir con certeza que Dios no existe. Por tanto, el ateísmo no es una conclusión racional inevitable, sino una postura existencial querida: 'yo no quiero que Dios exista para no tener que cambiar de vida'.",
    "explicacionAlternativa": "Es un deseo del corazón antes que una verdad de la mente: la persona prefiere que no haya Juez para no tener que rendir cuentas de sus faltas."
  },
  {
    "id": 363,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Cuál es la raíz filosófica común de las modernas filosofías ateas (como el marxismo, el existencialismo ateo o el positivismo)?",
    "opciones": [
      "El estudio experimental de las estrellas con telescopios espaciales gigantes.",
      "La traducción de la Biblia al idioma alemán realizada por los monjes en Sajonia.",
      "El hilemorfismo de Aristóteles y la Summa Theologiae de Santo Tomás.",
      "El principio filosófico de inmanencia derivado del racionalismo cartesiano."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "j. El principio de inmanencia",
    "separata": "Separata 4",
    "explicacionDetallada": "La raíz de todas las filosofías ateas modernas es el principio de inmanencia, que arranca de René Descartes al subordinar el ser al pensamiento de la conciencia humana.",
    "explicacionAlternativa": "Encerrar la filosofía dentro del cráneo humano: creer que la realidad no es lo que está afuera, sino solo lo que mi cabeza piensa o inventa."
  },
  {
    "id": 364,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "Etimológica y filosóficamente, ¿qué significa el término 'inmanencia'?",
    "opciones": [
      "Construir monumentos de piedra en honor a los emperadores de la antigüedad.",
      "'Permanencia en': la filosofía comienza dentro de la conciencia humana y allí permanece sin salir a lo real.",
      "Viajar a países extranjeros para aprender nuevos idiomas y costumbres.",
      "Comer alimentos saludables para aumentar la esperanza de vida biológica."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "j. El principio de inmanencia: significado",
    "separata": "Separata 4",
    "explicacionDetallada": "Inmanencia significa 'permanencia en' (in-manere). La filosofía cartesiana e idealista sitúa el punto de partida dentro de las propias ideas subjetivas, cortando el puente con el ser objetivo.",
    "explicacionAlternativa": "Quedarse encerrado dentro de una habitación mirando fotos en una pantalla en vez de abrir la puerta y caminar por el bosque real."
  },
  {
    "id": 365,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Qué afirmaba René Descartes que invirtió la relación clásica entre pensamiento y realidad?",
    "opciones": [
      "Que la metafísica griega clásica era la única ciencia verdadera y perfecta del cosmos.",
      "Que los seres humanos no tienen cuerpo físico y están hechos de aire caliente.",
      "Que la realidad objetiva mide y guía a la inteligencia humana con docilidad.",
      "Que el pensamiento humano es previo al ser: las cosas son en la medida en que están en la conciencia."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "j. Descartes y el pensamiento previo al ser",
    "separata": "Separata 4",
    "explicacionDetallada": "A partir de Descartes, el cogito (pensamiento) es la primera realidad indubitable; el mundo exterior y el ser quedan subordinados a la conciencia, sentando las bases del antropocentrismo ateo.",
    "explicacionAlternativa": "En vez de decir 'la manzana está ahí, por eso la veo', dijo: 'yo pienso la manzana, luego la manzana es'."
  },
  {
    "id": 366,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Cómo promovieron el ateísmo pensadores como Karl Marx, Ludwig Feuerbach o Friedrich Nietzsche?",
    "opciones": [
      "Enseñando a los niños a rezar el rosario en las escuelas públicas alemanas.",
      "En nombre de un supuesto 'humanismo', pretendiendo desplazar a Dios para que el hombre fuera creador y señor.",
      "Construyendo monasterios de monjes contemplativos en los valles de Suiza.",
      "Demostrando que el catecismo cristiano tenía que ser leído en idioma griego clásico."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "j. El falso humanismo ateo",
    "separata": "Separata 4",
    "explicacionDetallada": "Proclamaron que 'el hombre es el dios del hombre' (homo homini deus); pensaban engañosamente que para exaltar la libertad del hombre era indispensable matar y desplazar a Dios de la historia.",
    "explicacionAlternativa": "Dijeron: 'Para que el hijo crezca y sea dueño de la casa, tiene que asesinar al padre': una terrible tragedia moral."
  },
  {
    "id": 367,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Qué ocurrió realmente en el siglo XX cuando las ideologías ateas intentaron construir un mundo sin Dios?",
    "opciones": [
      "Todas las enfermedades del cuerpo desaparecieron de los hospitales públicos del planeta.",
      "El ser humano fue exaltado a un estado angelical de armonía, riqueza y felicidad sin fin.",
      "La vida humana fue devaluada como nunca antes, cayendo en masacres bélicas, campos de exterminio y clínicas de aborto.",
      "Los seres humanos lograron vivir trescientos años gracias a las leyes económicas estatales."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "j. Frutos del ateísmo en el siglo XX",
    "separata": "Separata 4",
    "explicacionDetallada": "La historia demostró que un humanismo cerrado a Dios se convierte en antihumanismo deshumanizador: el hombre fue reducido a engranaje económico, esclavo del Estado o víctima del más fuerte.",
    "explicacionAlternativa": "Prometieron un paraíso sin Dios y crearon el infierno de los campos de concentración y las masacres en masa."
  },
  {
    "id": 368,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Por qué cuando el ser humano es separado de Dios queda indefenso y a merced de la 'ley de la selva'?",
    "opciones": [
      "Porque los animales salvajes de los bosques aprenden a cazar con herramientas de hierro.",
      "Porque los tratados internacionales de comercio prohíben la venta de cereales en invierno.",
      "Porque al no haber un Creador Trascendente, no hay nadie superior a quien apelar frente al poder del tirano.",
      "Porque las iglesias cristianas eran los únicos edificios que tenían muros de piedra gruesa."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "j. Indefensión del hombre sin Dios",
    "separata": "Separata 4",
    "explicacionDetallada": "Si no hay Dios que funde derechos absolutos, el único derecho que queda es el de la fuerza bruta y el de la conveniencia política del régimen gobernante: la supervivencia del más despiadado.",
    "explicacionAlternativa": "Si borras al Padre común, los hermanos fuertes devoran y esclavizan a los hermanos débiles sin que nadie los defienda."
  },
  {
    "id": 369,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "[Consejo pastoral citado en la separata] Frente a dudas de fe o tentaciones de agnosticismo, ¿qué solía aconsejar San Josemaría Escrivá?",
    "opciones": [
      "Viajar a una playa solitaria y quemar todos los libros de catecismo en una hoguera.",
      "Hacer una buena confesión sacramental para limpiar la voluntad y rezar con humildad y confianza.",
      "Exigir a los científicos del laboratorio una demostración matemática con computadoras.",
      "Leer tratados de dialéctica marxista para convencerse de la lucha de clases."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "f. Remedio moral al agnosticismo",
    "separata": "Separata 4",
    "explicacionDetallada": "Dado que las dificultades frente a Dios son más morales y del corazón que puramente intelectuales, aconsejaba acudir a la confesión para sanar el alma y orar con humildad de criatura.",
    "explicacionAlternativa": "Limpiar el espejo del alma con el perdón de Dios para que la luz de la verdad vuelva a reflejarse con claridad."
  },
  {
    "id": 370,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "[Pregunta Trampa] ¿Es el ateísmo una posición intelectualmente neutral y desinteresada guiada solo por la ciencia?",
    "opciones": [
      "Solo en los laboratorios de física nuclear donde se miden partículas subatómicas.",
      "Sí, todos los científicos ateos son perfectamente imparciales y no tienen pasiones humanas.",
      "Sí, porque negar a Dios es una operación matemática automática semejante a la división decimal.",
      "No, es una postura existencial cargada de consecuencias morales donde la voluntad juega un papel decisivo."
    ],
    "correcta": 3,
    "dificultad": "Trampa",
    "seccion": "i. El problema del ateísmo",
    "separata": "Separata 4",
    "explicacionDetallada": "La negación de Dios no es un cálculo frío: afecta cómo vives, qué haces con tu sexualidad, tu dinero, tu orgullo y tu destino. Hay siempre una poderosa implicación moral y volitiva.",
    "explicacionAlternativa": "Nadie niega a Dios por aburrimiento matemático: lo niegan porque aceptar que existe les exigiría cambiar de vida."
  },
  {
    "id": 371,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Qué famosa expresión latina sintetiza la pretensión idolátrica de las ideologías ateas modernas?",
    "opciones": [
      "'Homo homini deus' (el hombre es dios para el hombre).",
      "'In vino veritas'.",
      "'Carpe diem quam minimum credula postero'.",
      "'Alea iacta est'."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "j. Homo homini deus",
    "separata": "Separata 4",
    "explicacionDetallada": "La pretensión antropocéntrica atea resume su quimera en 'homo homini deus': desplazar a Dios para que la humanidad o el líder totalitario ocupe el trono del Creador.",
    "explicacionAlternativa": "Creerse los dueños del universo y adorar a la criatura en lugar de adorar al Señor de la vida."
  },
  {
    "id": 372,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "Cuando una persona afirma 'yo creo en la ciencia, por tanto no creo en Dios', ¿qué falacia está cometiendo?",
    "opciones": [
      "Un razonamiento conforme a las cinco vías de demostración formuladas por Santo Tomás.",
      "Confundir el objeto material y empírico de las ciencias físicas con el objeto formal metafísico del ser.",
      "Una prueba matemática incontestable que demuestra que el universo no tiene causas.",
      "Un principio jurídico respaldado por los códigos constitucionales de los países libres."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "f. Ciencia experimental vs Dios Causa Primera",
    "separata": "Separata 4",
    "explicacionDetallada": "La ciencia experimental estudia los mecanismos físicos y materiales de cómo funcionan las cosas; no tiene herramientas ni competencia para negar o afirmar la Causa Primera del ser.",
    "explicacionAlternativa": "Decir que no crees en el autor del libro porque con el microscopio solo encuentras celulosa y tinta en el papel."
  },
  {
    "id": 373,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Por qué el agnosticismo no puede ser una postura definitiva razonable para la existencia humana?",
    "opciones": [
      "Porque el cerebro humano colapsa si no repite oraciones vocales tres veces al día.",
      "Porque las bibliotecas públicas cobran multas a los lectores que suspenden el juicio.",
      "Porque la vida práctica exige tomar decisiones morales ineludibles orientadas hacia un fin último.",
      "Porque los agnósticos tienen prohibido comprar automóviles o viajar en ferrocarril."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "f. Insostenibilidad existencial del agnosticismo",
    "separata": "Separata 4",
    "explicacionDetallada": "No se puede suspender el juicio en la vida real: o vives como si Dios existiera buscando el bien y la ley moral, o vives de espaldas a Él como un ateo práctico. En la acción no hay neutralidad.",
    "explicacionAlternativa": "En un barco que navega a toda velocidad no puedes decir 'suspendo el juicio sobre si hay puerto o no': tienes que dirigir el timón hacia algún lugar."
  },
  {
    "id": 374,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Qué ocurre con el sentido de la vida cuando el ser humano niega la existencia de Dios?",
    "opciones": [
      "Descubre que el universo fue construido para que el hombre juegue videojuegos eternos.",
      "Las relaciones familiares se vuelven automáticamente pacíficas y libres de discordias.",
      "El hombre pierde su rumbo y su meta trascendente, sintiéndose extraviado en un absurdo cósmico.",
      "Los seres humanos aprenden a volar por el cielo sin necesidad de aviones de pasajeros."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "j. Pérdida del sentido sin Dios",
    "separata": "Separata 4",
    "explicacionDetallada": "El texto lo subraya: sin Dios, el hombre no sabe a dónde ir, carece de meta ontológica y se pierde en la angustia existencial de la nada.",
    "explicacionAlternativa": "Un viajero arrojado de noche en medio del desierto sin mapa, sin brújula y sin estrellas que lo guíen."
  },
  {
    "id": 375,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "En la historia de la filosofía, ¿qué filósofo existencialista ateo afirmó que 'el hombre es una pasión inútil' al negar a Dios?",
    "opciones": [
      "Santo Tomás de Aquino.",
      "Aristóteles de Estagira.",
      "San Agustín de Hipona.",
      "Jean-Paul Sartre."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "j. Existencialismo ateo",
    "separata": "Separata 4",
    "explicacionDetallada": "Sartre, exponente del existencialismo ateo radical derivado de la inmanencia, tuvo que admitir que si no hay Dios que dé esencia y propósito al hombre, la vida es absurdo y pasión inútil.",
    "explicacionAlternativa": "La consecuencia lógica del ateísmo radical: si vienes de la nada y vas a la nada, tu vida carece de sentido real."
  },
  {
    "id": 376,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Por qué un ateo práctico puede ser paradójicamente un asiduo concurrente a los templos religiosos?",
    "opciones": [
      "Porque le gusta coleccionar estampitas religiosas impresas en papeles antiguos.",
      "Porque cumple ritos externos por costumbre o conveniencia social, pero vive de espaldas a la voluntad de Dios.",
      "Porque busca protegerse de la lluvia y del frío durante los meses de invierno.",
      "Porque los sacerdotes le pagan un salario para que se siente en las primeras bancas."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "i. Ateísmo práctico en los templos",
    "separata": "Separata 4",
    "explicacionDetallada": "El ateísmo práctico consiste en ignorar a Dios en la toma de decisiones morales y en la vida real. Una persona puede ir a misa por tradición familiar, pero actuar en sus negocios como si Dios no existiera.",
    "explicacionAlternativa": "Decir de dientes para afuera que eres hincha de un club, pero en la cancha jugar y meter goles para el equipo rival."
  },
  {
    "id": 377,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Cómo responde la metafísica al argumento ateo del sufrimiento y del mal en el mundo?",
    "opciones": [
      "Aconsejando a todos los seres humanos que se tapen los ojos para no ver hospitales.",
      "Mostrando que Dios permite el mal físico y respeta la libertad creada para sacar bienes más altos y sublimes.",
      "Afirmando que Dios es débil y no puede hacer nada frente a los desastres de la naturaleza.",
      "Negando que las personas sientan dolor y diciendo que las enfermedades son una broma."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "El problema del mal y el ateísmo",
    "separata": "Separata 3 y 4",
    "explicacionDetallada": "Dios no creó el mal; creó seres libres capaces de amar o pecar. Además, en su providencia infinita, permite los males temporales para purificar las almas y engendrar bienes eternos superiores.",
    "explicacionAlternativa": "El cirujano hace una incisión dolorosa en el cuerpo del paciente con un cuchillo filoso, no por crueldad, sino para extirpar el tumor y salvarle la vida."
  },
  {
    "id": 378,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "Cuando una cultura elimina a Dios de la vida pública y de la moral social, ¿qué valor pasa a ocupar el trono supremo?",
    "opciones": [
      "La caridad fraterna desinteresada y el amor heroico a los enemigos.",
      "El cumplimiento estricto de los diez mandamientos de la ley mosaica.",
      "El poder político autoritario, el interés económico utilitarista o el placer sensorial efímero.",
      "La oración mística silenciosa y la contemplación de las verdades del cosmos."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "j. Consecuencias del ateísmo social",
    "separata": "Separata 4",
    "explicacionDetallada": "Cuando el hombre destrona al Dios verdadero, no se queda sin dioses: se fabrica ídolos falsos (el dinero, la ideología, el poder, el placer) que terminan esclavizándolo brutalmente.",
    "explicacionAlternativa": "Si botas al Rey justo, los bandidos del pueblo se reparten la corona y saquean las casas."
  },
  {
    "id": 379,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "¿Por qué la pretensión de Feuerbach y Marx de 'desplazar a Dios para liberar al hombre' fue un cruel engaño?",
    "opciones": [
      "Porque las campanas de las iglesias sonaban tan fuerte que impedían escuchar los discursos.",
      "Porque los tratados de economía política de Marx estaban escritos con faltas de ortografía.",
      "Porque los campesinos rusos preferían cultivar trigo antes que leer manifiestos políticos.",
      "Porque el hombre solo alcanza su verdadera grandeza, libertad y dignidad cuando está unido a su Creador."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "j. El ateísmo como cruel engaño",
    "separata": "Separata 4",
    "explicacionDetallada": "Separar a la criatura de su Creador es como desenchufar una lámpara eléctrica prometiéndole que así será libre de la pared: la lámpara no es más libre, simplemente se apaga y queda a oscuras.",
    "explicacionAlternativa": "Arrancar un pez del agua diciéndole 'ahora eres libre del río': el pez se asfixia y muere."
  },
  {
    "id": 380,
    "examen": 19,
    "tituloExamen": "Examen 19: Ateísmo, Agnosticismo y Principio de Inmanencia",
    "pregunta": "La síntesis metafísica sobre el ateísmo nos enseña que este fenómeno es fundamentalmente:",
    "opciones": [
      "Una moda juvenil inocente que desaparece al cumplir los veinticinco años de edad.",
      "Un problema científico de laboratorio resuelto mediante la física atómica cuántica.",
      "Una tragedia moral y metafísica, donde la soberbia del hombre rechaza la verdad que lo trasciende.",
      "Una ley obligatoria aprobada por las universidades para otorgar títulos profesionales."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Síntesis sobre el ateísmo",
    "separata": "Separata 4",
    "explicacionDetallada": "El ateísmo es un drama del corazón y de la metafísica: el hombre rechaza a su Padre y Fundamento del ser, precipitando a la sociedad en el vacío del poder despiadado y la desolación.",
    "explicacionAlternativa": "Es la herida más honda de nuestro tiempo: la creatura que cierra los ojos al Amor fontal que le da el aliento de vida."
  },
  {
    "id": 381,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿Es la proposición 'Dios existe' evidente por sí misma para nosotros (per se nota quoad nos)?",
    "opciones": [
      "Sí, es tan evidente que nadie en el mundo ha podido jamás dudar de ella ni ser ateo.",
      "No es evidente para nosotros porque no vemos la esencia divina directamente; necesita ser demostrada a posteriori.",
      "Solo es evidente para los reyes y mandatarios políticos que tienen coronas de oro.",
      "Es una hipótesis matemática que solo puede comprobarse resolviendo ecuaciones diferenciales."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Capítulo 22: a. Elucidación de los términos",
    "separata": "Separata 4",
    "explicacionDetallada": "Si fuera evidente para nosotros (como que el todo es mayor que la parte), no habría ateos. Es una proposición verdadera en sí misma, pero para nosotros requiere demostración racional a posteriori.",
    "explicacionAlternativa": "Que Dios existe es real y verdadero, pero como no lo vemos con los ojos de la cara, necesitamos recorrer el camino de las pruebas para llegar a Él."
  },
  {
    "id": 382,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿Qué requisitos exige la metafísica clásica para que una proposición sea 'evidente' para el hombre?",
    "opciones": [
      "Que sea transmitida por los canales de televisión pública en horario estelar.",
      "Que ningún ciudadano en el mundo vote en contra durante un plebiscito electoral.",
      "Que tanto el concepto del sujeto como el del predicado sean inmediatamente conocidos a nuestro entendimiento.",
      "Que esté redactada en versos rimados con tinta dorada sobre pergamino animal."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Capítulo 22: a. Elucidación de los términos",
    "separata": "Separata 4",
    "explicacionDetallada": "Para que sea evidente a nosotros, el significado del sujeto y del predicado debe ser captado de modo inmediato y evidente. Como no conocemos de modo directo la esencia de Dios, no es evidente 'quoad nos'.",
    "explicacionAlternativa": "Decir 'el triángulo tiene tres lados' es evidente porque apenas entiendes qué es triángulo, sabes que tiene tres lados."
  },
  {
    "id": 383,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿Por qué Santo Tomás de Aquino rechazó las pruebas que parten puramente de una 'idea' (como el argumento ontológico de San Anselmo)?",
    "opciones": [
      "Porque San Anselmo pertenecía a una orden religiosa rival en Inglaterra.",
      "Porque los papas de Roma habían prohibido escribir libros de teología sin permiso militar.",
      "Porque las ideas mentales pesan demasiado en los libros de texto de la universidad.",
      "Porque no se puede dar el salto ilegítimo desde el orden del pensamiento mental al orden del ser real exterior."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Capítulo 22: a. Crítica al ontologismo",
    "separata": "Separata 4",
    "explicacionDetallada": "Santo Tomás sostiene el realismo: una idea en la mente solo demuestra una idea en la mente. Para probar una realidad existente, la demostración debe ser a posteriori, partiendo de hechos reales de la experiencia.",
    "explicacionAlternativa": "Pensar en una isla llena de montañas de oro no hace que la isla exista en el océano: debes encontrarla en la realidad."
  },
  {
    "id": 384,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿Cuántas vías de demostración a posteriori seleccionó Santo Tomás en su célebre Summa Theologiae?",
    "opciones": [
      "Doce vías correspondientes a los doce apóstoles del evangelio.",
      "Cien vías basadas en los tratados de geometría de Euclides.",
      "Una sola vía puramente sentimental basada en las lágrimas de los devotos.",
      "Cinco vías concluyentes, fundamentadas en su síntesis de acto y potencia y participación."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Capítulo 22: a. Las cinco vías",
    "separata": "Separata 4",
    "explicacionDetallada": "Santo Tomás seleccionó y profundizó cinco vías a posteriori: 1) Movimiento; 2) Causa eficiente; 3) Contingencia; 4) Grados de perfección; 5) Orden o finalidad del universo.",
    "explicacionAlternativa": "Cinco caminos sólidos y luminosos que parten del mundo sensible y terminan inevitablemente a los pies de Dios."
  },
  {
    "id": 385,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿Cuál es el punto de partida innegable de la 'Primera Vía' tomista?",
    "opciones": [
      "Una revelación mística que cayó del cielo en forma de relámpago de fuego.",
      "La idea mental abstracta de un ser perfectísimo imaginado en sueños.",
      "El hecho sensible e innegable de la experiencia: las cosas se mueven y cambian en el mundo.",
      "El texto de una ley promulgada por los emperadores del imperio romano."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Capítulo 22: b. La primera vía: el movimiento",
    "separata": "Separata 4",
    "explicacionDetallada": "Nadie puede dudar acerca del hecho sensible del movimiento o cambio en las cosas que vemos. La primera vía arranca de este dato empírico universal y evidente.",
    "explicacionAlternativa": "Miras a tu alrededor y todo cambia: el agua corre, los niños crecen, las hojas caen, los autos avanzan: el cambio es un hecho real."
  },
  {
    "id": 386,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "En la Primera Vía, ¿a qué principio metafísico se llega a partir de la definición de movimiento?",
    "opciones": [
      "A que el movimiento es una ilusión óptica causada por el parpadeo de los ojos humanos.",
      "A que las cosas materiales deben ser destruidas para que el universo alcance la paz.",
      "A que la materia física es un dios inmortal que se mueve por sus propias fuerzas.",
      "A que 'todo lo que se mueve es movido por otro', porque nada puede pasar de la potencia al acto por sí mismo."
    ],
    "correcta": 3,
    "dificultad": "Media",
    "seccion": "Capítulo 22: b. La primera vía: el movimiento",
    "separata": "Separata 4",
    "explicacionDetallada": "Moverse es pasar de la potencia al acto; pero algo solo puede ser actualizado por algo que ya esté en acto. Por tanto, nada puede estar en potencia y en acto bajo el mismo aspecto; es forzoso que sea movido por otro.",
    "explicacionAlternativa": "La leña fría no puede encenderse sola a sí misma: necesita una llama encendida que le prenda fuego."
  },
  {
    "id": 387,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿Por qué en la cadena de motores subordinados no se puede proceder al infinito en el instante presente?",
    "opciones": [
      "Porque los científicos se cansarían de escribir números en las pizarras de la universidad.",
      "Porque si no hubiera un Primer Motor en acto, no habría motores intermedios ni movimiento alguno en la realidad.",
      "Porque la Iglesia católica prohibió los números infinitos en las escuelas medievales.",
      "Porque el espacio del universo está lleno de planetas que bloquean la luz estelar."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Capítulo 22: b. Imposibilidad de regresión al infinito",
    "separata": "Separata 4",
    "explicacionDetallada": "En los motores subordinados esenciales (el pincel movido por la mano, la mano movida por el brazo), si quitas el primer motor (la voluntad), los motores instrumentales no se mueven. La regresión al infinito no explica nada.",
    "explicacionAlternativa": "Si tienes una cadena con mil eslabones colgados, la cadena entera se cae al suelo si no hay un clavo firme en el techo que sostenga el primer eslabón."
  },
  {
    "id": 388,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿A qué término o conclusión definitiva conduce necesariamente la Primera Vía?",
    "opciones": [
      "A que las plantas y los animales son los creadores del sol y de la luna.",
      "A la necesidad de un Primer Motor Inmóvil, que no es movido por nada y que es Acto Puro: a quien todos llaman Dios.",
      "A que los seres humanos deben inventar un lenguaje nuevo para hablar de física.",
      "A una máquina espacial de energía nuclear infinita suspendida en el vacío."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Capítulo 22: b. Conclusión de la primera vía",
    "separata": "Separata 4",
    "explicacionDetallada": "Es necesario llegar a un Primer Motor que no sea movido por nadie (Primer Motor Inmóvil, Puro Acto sin potencia pasiva): y este Ser fontal es Dios.",
    "explicacionAlternativa": "La Fuente originaria de toda la energía y movimiento del cosmos, que mueve a todo sin ser empujado por nadie."
  },
  {
    "id": 389,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "[Síntesis de las 4 separatas] ¿Qué relación íntima une al 'Ente' (Sep. 1), la 'Substancia' (Sep. 2), las 'Causas' (Sep. 3) y 'Dios' (Sep. 4)?",
    "opciones": [
      "Son palabras inventadas en un concurso de literatura griega para ganar premios de poesía.",
      "El ente es el objeto de la metafísica, fundado en la substancia, estructurado por causas y originado en Dios (Ipsum Esse).",
      "Son cuatro métodos de cultivo agrícola empleados en los campos de trigo de Europa.",
      "Son categorías que se contradicen mutuamente demostrando que la filosofía es un error."
    ],
    "correcta": 1,
    "dificultad": "Media",
    "seccion": "Gran síntesis metafísica de la Unidad 2",
    "separata": "Todas las Separatas",
    "explicacionDetallada": "La Unidad 2 traza un itinerario coherente: parte de la noción común de ente (Sep. 1), profundiza en su estructura de substancia y principios (Sep. 2), desvela sus causas y trascendentales (Sep. 3) y culmina en la Causa Primera: Dios (Sep. 4).",
    "explicacionAlternativa": "Es la escalera completa de la verdad: desde las cosas que tocas en la mesa hasta llegar a Dios que sostiene todo el edificio del cosmos."
  },
  {
    "id": 390,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "[Pregunta Trampa] Si decimos que Dios es 'inmóvil', ¿significa que Dios está paralizado, muerto o inactivo?",
    "opciones": [
      "Sí, Dios es semejante a una roca pesada que no puede levantarse del suelo.",
      "No, inmóvil significa libre de la imperfección del cambio o potencia pasiva: es Plenitud y Máxima Actividad en Acto Puro.",
      "Sí, porque los teólogos medievales afirmaban que a Dios no le gusta el deporte físico.",
      "Solo si es analizado por los astrónomos que estudian los planetas congelados del sistema."
    ],
    "correcta": 1,
    "dificultad": "Trampa",
    "seccion": "Capítulo 22: Inmovilidad de Dios como Acto Puro",
    "separata": "Separata 4",
    "explicacionDetallada": "Cambiar es pasar de la potencia al acto (imperfección). Dios es Inmóvil no por defecto o quietud inerte, sino por exceso de perfección: posee ya toda la actualidad infinita sin carecer de nada.",
    "explicacionAlternativa": "Un trompo girando a una velocidad infinita se ve perfectamente quieto y sereno porque no le falta nada de movimiento ni tiembla."
  },
  {
    "id": 391,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿Qué demuestra la distinción metafísica entre 'causa per se' y 'causa per accidens' en una serie temporal?",
    "opciones": [
      "Que la filosofía clásica solo puede enseñarse a personas de avanzada edad.",
      "Que los accidentes de tránsito ocurren siempre por culpa de los neumáticos viejos.",
      "Que en una serie per accidens (el padre engendra al hijo) puede haber sucesión temporal, pero en una serie per se se exige un Primer Fundamento actual.",
      "Que un hijo puede engendrar a su padre antes de que su abuelo haya nacido."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Series de causas y fundamentación",
    "separata": "Separata 4",
    "explicacionDetallada": "Un padre engendra a su hijo aunque su propio abuelo ya haya muerto (per accidens); pero el sostén ontológico del ser en este instante (per se) requiere la presencia actual de la Causa Primera sosteniendo todo en el ser.",
    "explicacionAlternativa": "La vela que sostiene la llama necesita al oxígeno en este preciso segundo: si quitas el oxígeno ahora mismo, la llama se extingue al instante."
  },
  {
    "id": 392,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "Cuando una persona afirma 'Dios es el Esse Subsistens', ¿qué está afirmando sobre la diferencia entre Dios y las criaturas?",
    "opciones": [
      "Que Dios es un ser humano gigante que vive en una mansión de oro sobre la luna.",
      "Que las criaturas 'tienen' ser recibido de modo participado y limitado, mientras Dios 'ES' el Ser por su propia Esencia pura.",
      "Que Dios está compuesto de materia prima muy brillante y de formas geométricas perfectas.",
      "Que no existe ninguna diferencia ontológica entre el creador y los insectos del campo."
    ],
    "correcta": 1,
    "dificultad": "Fácil",
    "seccion": "Ipsum Esse Subsistens vs Ente participado",
    "separata": "Todas las Separatas",
    "explicacionDetallada": "Es el corazón de la metafísica tomista: las criaturas son compuestas de esencia y esse recibido (participación); solo Dios es su propio Acto de Ser subsistente sin limitación alguna.",
    "explicacionAlternativa": "Una esponja tiene agua mientras esté sumergida; Dios es la Fuente infinita de donde brota toda el agua del universo."
  },
  {
    "id": 393,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿Por qué el conocimiento de Dios alcanzado por la sola razón natural no es suficiente para la salvación plena del hombre?",
    "opciones": [
      "Porque los filósofos nunca tuvieron tiempo de bautizar a sus estudiantes en los ríos.",
      "Porque la razón humana siempre es condenada por los tribunales de la fe religiosa.",
      "Porque Dios nos ha llamado a un fin sobrenatural (la vida divina trinitaria) que excede las fuerzas naturales y exige la gracia y la fe.",
      "Porque las leyes de la física prohíben que las personas racionales vayan al cielo."
    ],
    "correcta": 2,
    "dificultad": "Media",
    "seccion": "Límites de la razón y necesidad de la revelación",
    "separata": "Separata 4",
    "explicacionDetallada": "La razón natural nos lleva hasta las puertas de Dios como Creador y Causa; pero conocer su vida íntima trinitaria, la redención en Cristo y gozar de la visión beatífica es un don sobrenatural gratuito de la fe y la gracia.",
    "explicacionAlternativa": "Saber que una persona famosa existe es una cosa; que esa persona te invite a su casa, te adopte como hijo y te siente a su mesa es un regalo de amor que sobrepasa cualquier investigación."
  },
  {
    "id": 394,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿Qué papel cumple la teología natural como 'trampolín' hacia la revelación divina?",
    "opciones": [
      "Permite a los fieles saltar sobre colchonetas elásticas en los patios de las parroquias.",
      "Obliga a los gobiernos civiles a redactar constituciones en lengua latina antigua.",
      "Prepara la inteligencia demostrando que Dios existe y es sabio y veraz, haciendo creíble la Revelación.",
      "Destruye los dogmas de fe para sustituirlos por fórmulas matemáticas de laboratorio."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "b. Teología natural como trampolín",
    "separata": "Separata 4",
    "explicacionDetallada": "Es el preámbulo de la fe (praeambula fidei): demuestra que es razonable creer, pues la razón establece con certeza que hay un Dios creador que puede revelarse a los hombres.",
    "explicacionAlternativa": "Los cimientos sólidos sobre los que se levanta la hermosa catedral de la fe cristiana."
  },
  {
    "id": 395,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "[Pregunta Trampa] Si la Primera Vía parte del movimiento sensible, ¿podría un cambio de opinión o de afecto en el alma humana servir también como punto de partida?",
    "opciones": [
      "No, porque las operaciones de la mente son ilusiones sin ninguna existencia objetiva.",
      "No, porque el alma humana no tiene nada que ver con la filosofía de Aristóteles.",
      "Sí, cualquier paso real de la potencia al acto (incluso espiritual) manifiesta el principio de causalidad.",
      "Solo si la persona humana se pesa en una balanza antes y después de cambiar de opinión."
    ],
    "correcta": 2,
    "dificultad": "Trampa",
    "seccion": "Universalidad del principio del movimiento",
    "separata": "Separata 1, 2 y 4",
    "explicacionDetallada": "El movimiento en sentido amplio es todo paso de la potencia al acto (incluso el paso de la ignorancia a la ciencia o del deseo a la volición). Toda mutación en una criatura exige actualizarse por otro.",
    "explicacionAlternativa": "Cuando aprendes un nuevo conocimiento, tu mente cambió y se enriqueció: ese cambio también reclama una causa que te enseñó."
  },
  {
    "id": 396,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿Cuál es la respuesta de la metafísica al relativismo contemporáneo que afirma 'cada uno tiene su propia verdad'?",
    "opciones": [
      "Que el principio supremo de no-contradicción y la realidad objetiva del ser fundan una verdad común y universal.",
      "Que todos los libros de filosofía deben ser quemados para que nadie discuta nunca más.",
      "Que los gobiernos deberían multar a los ciudadanos que no piensen igual que el presidente.",
      "Que las matemáticas son la única materia escolar que tiene derecho a existir en el mundo."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Síntesis de la Verdad y No-Contradicción",
    "separata": "Separata 2 y 3",
    "explicacionDetallada": "La verdad no es un invento subjetivo ni una moda: es la adecuación de la mente al ser real. El principio de no-contradicción demuestra que dos afirmaciones contradictorias no pueden ser verdaderas a la vez.",
    "explicacionAlternativa": "La gravedad no depende de tu opinión: si te tiras de un balcón, caes al suelo creas o no en la física. La realidad manda sobre las opiniones."
  },
  {
    "id": 397,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "¿Por qué el conocimiento metafísico del ente y de Dios transforma la actitud del hombre ante la vida cotidiana?",
    "opciones": [
      "Porque le permite ganar todas las partidas de juegos de mesa contra sus amigos y familiares.",
      "Porque le exime de cumplir las leyes civiles y de pagar los impuestos comerciales en su ciudad.",
      "Porque le enseña a reparar automóviles y aparatos electrodomésticos sin pagar a un técnico.",
      "Porque le da paz, serenidad, sentido último de existencia, fundamento para la moral y esperanza eterna."
    ],
    "correcta": 3,
    "dificultad": "Fácil",
    "seccion": "Conclusión existencial y moral de la Unidad 2",
    "separata": "Todas las Separatas",
    "explicacionDetallada": "La metafísica no es un pasatiempo abstracto estéril: descubre el significado profundo del universo, fundamenta la dignidad de la persona y conecta al ser humano con su Creador.",
    "explicacionAlternativa": "Pasa de vivir como un ciego que camina a tientas a vivir como un hijo que conoce su casa, sabe de dónde viene y camina feliz hacia su meta."
  },
  {
    "id": 398,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "Cuando contemplamos el orden admirable del cosmos y la estructura de las cosas, la conclusión más razonable de la inteligencia es:",
    "opciones": [
      "Que existe una Sabiduría Creadora infinita, Dios, Causa Primera, Creador y Fin de todas las cosas.",
      "Que todo surgió de una explosión ciega y caótica que se ordenó sola por pura magia.",
      "Que los seres humanos somos los únicos seres con existencia real en todo el espacio exterior.",
      "Que la realidad es un programa de computadora programado por civilizaciones extraterrestres."
    ],
    "correcta": 0,
    "dificultad": "Fácil",
    "seccion": "Conclusión de las vías y el cosmos",
    "separata": "Separata 3 y 4",
    "explicacionDetallada": "El orden del universo (cosmos) proclama a voces una Inteligencia Suprema Ordenadora. La razón humana, fiel a su naturaleza, se inclina y rinde adoración a su Creador.",
    "explicacionAlternativa": "Si ves un libro bellamente escrito con poesía sublime, sabes que hay un poeta genial detrás, no un mono aporreando teclas por casualidad."
  },
  {
    "id": 399,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "[Regla de oro para el examen de Filosofía] Si una pregunta te pide identificar la diferencia entre substancia y accidente, la clave central es:",
    "opciones": [
      "La substancia es un cuerpo líquido y los accidentes son gases inflamables de alta temperatura.",
      "La substancia no existe y los accidentes son inventos de los científicos modernos de laboratorio.",
      "La substancia tiene ser en sí y por sí (subsiste); el accidente tiene ser en otro (en la substancia).",
      "La substancia cambia todos los días y los accidentes permanecen congelados por siglos."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Regla mnemotécnica para el examen",
    "separata": "Separata 1 y 2",
    "explicacionDetallada": "Es la distinción metafísica por excelencia: la substancia es ens in se (ser en sí, substrato permanente); los accidentes son entia in alio (ser en otro, determinaciones secundarias).",
    "explicacionAlternativa": "Substancia = 'en sí' (el sujeto); Accidente = 'en otro' (las cualidades adheridas)."
  },
  {
    "id": 400,
    "examen": 20,
    "tituloExamen": "Examen 20: Demostración de Dios, Primera Vía y Gran Simulacro Integral",
    "pregunta": "[Regla de oro para el examen de Filosofía] Si una pregunta te pide identificar por qué el principio de no-contradicción no se puede demostrar, la clave es:",
    "opciones": [
      "Porque los filósofos nunca tuvieron tiempo de redactar la demostración en una enciclopedia.",
      "Porque fue declarado secreto militar por los generales del ejército ateniense en la antigüedad.",
      "Porque es el primer principio evidente y fundamento de toda prueba: cualquier intento de demostración ya lo presupone.",
      "Porque las leyes penales de los países prohíben someter a prueba las leyes de la lógica."
    ],
    "correcta": 2,
    "dificultad": "Fácil",
    "seccion": "Regla mnemotécnica para el examen",
    "separata": "Separata 2",
    "explicacionDetallada": "No hay nada más claro ni previo a él. Toda demostración científica o filosófica ya tiene que asumir como base que ser no es no-ser al mismo tiempo. Es la primera certeza de la inteligencia.",
    "explicacionAlternativa": "Es la base del suelo: puedes construir un rascacielos sobre el suelo, pero no puedes poner un suelo debajo del mismo suelo."
  }
];

if (typeof window !== 'undefined') {
  window.EXAMENES_INFO = EXAMENES_INFO;
  window.BANCO_PREGUNTAS = BANCO_PREGUNTAS;
}
if (typeof globalThis !== 'undefined') {
  globalThis.EXAMENES_INFO = EXAMENES_INFO;
  globalThis.BANCO_PREGUNTAS = BANCO_PREGUNTAS;
}
