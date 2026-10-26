// GLOSARIO INTERACTIVO Y DESMITIFICADOR DE TÉRMINOS CONFUSOS
// Cada término incluye definición técnica, explicación "en cristiano", ejemplo cotidiano y consejo para el examen.

const GLOSARIO_TERMINOS = [
  {
    "termino": "Ente (Ens)",
    "etimologia": "Del latín 'ens', participio de 'esse' (ser).",
    "categoria": "Metafísica Fundamental",
    "separata": "Separata 1",
    "definicionTecnica": "Aquello que posee el acto de ser (habens esse). Es la noción primordial y más universal que capta la inteligencia humana; se compone de sujeto/esencia y acto de ser.",
    "enCristiano": "¿Qué significa? Es cualquier cosa real que existe. Un árbol, un vaso de agua, una persona, Dios: todo lo que 'es algo' es un ente.",
    "ejemploCotidiano": "Un perro es un ente; tú eres un ente; la pantalla que estás leyendo es un ente. Lo único que NO es un ente es la nada absoluta.",
    "consejoExamen": "No confundas 'ente' con 'ser'. Ente es la cosa que tiene ser (el corredor); 'ser' (esse) es el acto que la hace existir (el correr)."
  },
  {
    "termino": "Ser (Esse)",
    "etimologia": "Del verbo latino 'esse' (ser / existir).",
    "categoria": "Metafísica Fundamental",
    "separata": "Separata 1",
    "definicionTecnica": "El acto fontal por el cual las cosas son (actus essendi). Es el acto de todos los actos y la perfección de todas las perfecciones; no es una cosa estática, sino la actualidad misma de lo real.",
    "enCristiano": "¿Qué significa? Es el motor o la energía viva que hace que una cosa esté en el mundo real y no sea una simple idea o una nada.",
    "ejemploCotidiano": "Un auto hermosísimo pero apagado en un museo frente al mismo auto encendido a toda velocidad por la carretera: el esse es el motor encendido de la realidad.",
    "consejoExamen": "Santo Tomás llama al esse 'perfección de todas las perfecciones'. Sin esse, ninguna cualidad o belleza puede existir."
  },
  {
    "termino": "Esencia (Essentia)",
    "etimologia": "Del latín 'essentia', derivado de 'esse'.",
    "categoria": "Metafísica Fundamental",
    "separata": "Separata 1 y 2",
    "definicionTecnica": "Aquello que una cosa es (quiditas); el modo o manera particular de ser que delimita y contrae al acto de ser en un sujeto finito.",
    "enCristiano": "¿Qué significa? Es el 'diseño' o la 'receta' que dice qué clase de cosa eres. Lo que hace que un gato sea gato y no un caballo.",
    "ejemploCotidiano": "El molde de hornear galletas: el molde determina si la galleta saldrá con forma de estrella o de círculo. El molde es la esencia.",
    "consejoExamen": "La esencia se relaciona con el esse como la potencia se relaciona con el acto. La esencia es el recipiente que limita al ser."
  },
  {
    "termino": "Existencia (Existentia)",
    "etimologia": "Del latín 'ex-sistere' (estar alzado fuera de las causas o de la nada).",
    "categoria": "Metafísica Fundamental",
    "separata": "Separata 1",
    "definicionTecnica": "El hecho de ser (factum). Es el resultado objetivo de poseer el principio fontal del esse en la realidad concreta.",
    "enCristiano": "¿Qué significa? Es el hecho de que algo ya está ahí parado en el mundo real, habiendo dejado de ser una mera posibilidad imaginada.",
    "ejemploCotidiano": "El plano de una casa guardado en un cajón es una posibilidad; la casa construida con ladrillos donde vives hoy tiene existencia real.",
    "consejoExamen": "El esse es el principio activo fontal; la existencia es el hecho resultante de poseer ese principio."
  },
  {
    "termino": "Substancia (Substantia)",
    "etimologia": "Del latín 'sub-stare' (estar debajo, sostener).",
    "categoria": "Estructura del Ente",
    "separata": "Separata 1 y 2",
    "definicionTecnica": "Aquello a lo que le compete existir por sí mismo y en sí mismo (ens per se), y servir de sujeto permanente y substrato a los accidentes.",
    "enCristiano": "¿Qué significa? Es el protagonista que existe por cuenta propia. No necesita estar pegado a otro ser para no caer en la nada.",
    "ejemploCotidiano": "Un caballo de carne y hueso es una substancia; su color marrón o su velocidad no pueden caminar solos sin el caballo.",
    "consejoExamen": "Cuidado con la trampa moderna: la substancia NO es algo material que se pueda ver con los ojos o pesar en balanzas; es una realidad inteligible captada por la inteligencia."
  },
  {
    "termino": "Accidente (Accidens)",
    "etimologia": "Del latín 'accidere' (sobrevenir, acontecer).",
    "categoria": "Estructura del Ente",
    "separata": "Separata 1 y 2",
    "definicionTecnica": "Modo secundario del ente al que le compete ser en otro (in alio esse), inherente en una substancia que le sirve de soporte ontológico.",
    "enCristiano": "¿Qué significa? Son los adornos, cualidades o estados que acompañan a una substancia. Cosas que pueden cambiar sin destruir al sujeto.",
    "ejemploCotidiano": "Estar bronceado, medir 1.75 m, estar sentado o ser hermano de alguien: son accidentes que están en ti.",
    "consejoExamen": "Son nueve categorías: cantidad, cualidad, relación, acción, pasión, lugar, tiempo, posición y hábito. Se les llama 'entes del ente'."
  },
  {
    "termino": "Potencia (Potentia)",
    "etimologia": "Del latín 'posse' (poder, capacidad).",
    "categoria": "Dinamismo del Ente",
    "separata": "Separata 1",
    "definicionTecnica": "Capacidad real arraigada en el ser de llegar a ser algo que todavía no es en el presente; principio pasivo o receptivo de cambio.",
    "enCristiano": "¿Qué significa? Es lo que puedes llegar a ser en el futuro según tu naturaleza, aunque ahora mismo no lo seas todavía.",
    "ejemploCotidiano": "Un estudiante de primer ciclo tiene la potencia real de ser un profesional graduado; una piedra jamás tendrá esa potencia.",
    "consejoExamen": "La potencia NO es una nada o ilusión: es una capacidad real objetiva. Pero nada pasa de la potencia al acto si no es movido por algo en acto."
  },
  {
    "termino": "Acto (Actus)",
    "etimologia": "Del latín 'agere' / 'actum' (hecho, realizado).",
    "categoria": "Dinamismo del Ente",
    "separata": "Separata 1",
    "definicionTecnica": "La perfección presente, realidad acabada y determinación actual de un ente; lo que ya es aquí y ahora frente a lo que solo puede ser.",
    "enCristiano": "¿Qué significa? Lo que ya eres en la realidad, lo que está completo y funcionando en este preciso instante.",
    "ejemploCotidiano": "El árbol gigante lleno de frutos es el acto; la semilla que estaba enterrada bajo tierra era la potencia.",
    "consejoExamen": "El acto es ontológicamente anterior y superior a la potencia: la perfección reside en el acto."
  },
  {
    "termino": "Movimiento (Motus)",
    "etimologia": "Del latín 'movere' (mover).",
    "categoria": "Dinamismo del Ente",
    "separata": "Separata 1 y 4",
    "definicionTecnica": "Definición aristotélica: 'El acto de un ser en potencia en la medida en que sigue estando en potencia'. Es un acto imperfecto.",
    "enCristiano": "¿Qué significa? Es el proceso de cambio en marcha. Mientras estás cambiando, ya no estás quieto pero todavía no has terminado de llegar.",
    "ejemploCotidiano": "El agua fría que se está calentando en la tetera: ya no está helada (acto parcial), pero aún no hierve (sigue en potencia de hervir).",
    "consejoExamen": "En los exámenes suelen preguntar por qué es 'acto imperfecto': porque si fuera potencia pura no se movería, y si fuera acto perfecto ya habría terminado el movimiento."
  },
  {
    "termino": "Ser Intencional (Esse Intentionale)",
    "etimologia": "Del latín 'intendere' (apuntar a, dirigirse a).",
    "categoria": "Gnoseología y Metafísica",
    "separata": "Separata 1",
    "definicionTecnica": "El modo inmaterial y representativo por el cual la forma de una cosa existe dentro de la mente o sentidos del sujeto cognoscente.",
    "enCristiano": "¿Qué significa? Es cómo vive la idea o imagen de una cosa en tu cabeza sin ocupar espacio físico ni aplastarte el cerebro.",
    "ejemploCotidiano": "Puedes pensar en un elefante africano de cinco toneladas: la imagen del elefante está en tu mente con 'ser intencional' sin que tu cabeza pese cinco toneladas.",
    "consejoExamen": "Conocer es adquirir formas de modo inmaterial. A diferencia de la materia que pierde su forma al recibir otra, la mente se enriquece con formas ajenas conservando la suya."
  },
  {
    "termino": "Naturaleza (Natura)",
    "etimologia": "Del latín 'nasci' (nacer, brotar).",
    "categoria": "Estructura del Ente",
    "separata": "Separata 1",
    "definicionTecnica": "La misma esencia de una cosa, pero considerada precisamente como principio interno y fuente fontal de sus operaciones y acciones propias.",
    "enCristiano": "¿Qué significa? Es tu esencia vista como el motor de cómo te comportas y actúas en el mundo.",
    "ejemploCotidiano": "Es de la naturaleza de los pájaros volar y cantar; es propio de la naturaleza humana pensar, dialogar y vivir en sociedad.",
    "consejoExamen": "Regla de oro: 'Esencia' responde a ¿qué es la cosa?; 'Naturaleza' responde a ¿cómo opera y hacia dónde tiende esa cosa?"
  },
  {
    "termino": "Forma Substancial",
    "etimologia": "Del latín 'forma' (configuración, molde determinante).",
    "categoria": "Hilemorfismo",
    "separata": "Separata 2",
    "definicionTecnica": "El principio constitutivo intrínseco y determinante que hace que una substancia sea lo que es; es única e indivisible en cada ente singular.",
    "enCristiano": "¿Qué significa? Es el alma o principio organizador supremo que hace que seas un ser humano y no un montón de carne y huesos sueltos.",
    "ejemploCotidiano": "En el hombre, el alma racional espiritual es su forma substancial: asume y gobierna las funciones biológicas y le permite pensar y amar.",
    "consejoExamen": "En cada substancia hay UNA SOLA forma substancial que asume las perfecciones inferiores (hace al hombre ser substancia, viviente, animal y racional)."
  },
  {
    "termino": "Materia Prima",
    "etimologia": "Del latín 'materia prima' (materia primordial).",
    "categoria": "Hilemorfismo",
    "separata": "Separata 2 y 3",
    "definicionTecnica": "Principio ontológico de pura potencialidad pasiva e indeterminación que subyace a todos los cambios sustanciales de los cuerpos; no puede existir sin forma.",
    "enCristiano": "¿Qué significa? Es la capacidad radical de los cuerpos físicos de cambiar de substancia. Es como el barro más básico del universo, que no puede existir sin figura alguna.",
    "ejemploCotidiano": "Cuando comes una manzana y tu cuerpo la asimila, la manzana deja de ser manzana y se convierte en tejido humano: la materia prima es lo que sirvió de puente entre ambas formas.",
    "consejoExamen": "La materia prima NO es masa atómica ni energía medible en laboratorio: es un principio puramente potencial."
  },
  {
    "termino": "Hilemorfismo",
    "etimologia": "Del griego 'hyle' (materia) y 'morphe' (forma).",
    "categoria": "Hilemorfismo",
    "separata": "Separata 2",
    "definicionTecnica": "Doctrina aristotélico-tomista que sostiene que todos los cuerpos del mundo físico están compuestos intrínsecamente de dos principios: materia (potencia) y forma (acto).",
    "enCristiano": "¿Qué significa? Que cualquier objeto material tiene de qué está hecho (materia) y qué figura u orden tiene (forma).",
    "ejemploCotidiano": "Una estatua de bronce: el metal es la materia y la figura tallada de Julio César es la forma. No puedes tener estatua sin metal ni estatua sin figura.",
    "consejoExamen": "La materia es principio de indeterminación y multiplicación cuantitativa; la forma es principio de determinación e inteligibilidad."
  },
  {
    "termino": "Persona",
    "etimologia": "Del latín 'persona' (máscara de actor, resonar).",
    "categoria": "Antropología Metafísica",
    "separata": "Separata 2",
    "definicionTecnica": "Definición clásica de Boecio: 'Substancia individual de naturaleza racional'. Ser que subsiste por sí mismo dotado de inteligencia y voluntad libre.",
    "enCristiano": "¿Qué significa? Eres tú: un ser único e irrepetible, con valor sagrado, dueño de tus decisiones y con capacidad de amar.",
    "ejemploCotidiano": "Un perro es un individuo biológico, pero no es persona; tú eres persona porque tienes alma espiritual y dignidad trascendente.",
    "consejoExamen": "La noción de persona es clave en teología trinitaria y cristológica (en Cristo hay una sola Persona Divina con dos naturalezas: divina y humana)."
  },
  {
    "termino": "Principio de No-Contradicción",
    "etimologia": "Del latín 'principium' (origen) y 'contra-dicere' (decir en contra).",
    "categoria": "Primeros Principios",
    "separata": "Separata 2",
    "definicionTecnica": "'Es imposible que una cosa sea y no sea al mismo tiempo, en el mismo sujeto y bajo el mismo aspecto'. Es el principio supremo de la metafísica y del pensamiento.",
    "enCristiano": "¿Qué significa? Que una cosa no puede ser y no ser a la vez. No puedes estar completamente vivo y completamente muerto al mismo segundo.",
    "ejemploCotidiano": "No puedes decir que sacaste un 20 y un 05 en el mismo examen, en la misma hoja y en la misma calificación. Una de las dos es mentira.",
    "consejoExamen": "No se puede demostrar mediante silogismos previos porque él es el fundamento de toda prueba. Se defiende mostrando el absurdo de negarlo (reducción al absurdo)."
  },
  {
    "termino": "Principio de Identidad",
    "etimologia": "Del latín 'idem' (lo mismo).",
    "categoria": "Primeros Principios",
    "separata": "Separata 2",
    "definicionTecnica": "'A es necesariamente A'; 'El ser es y el no-ser no es'. Afirma la necesidad ontológica de que el ente sea fiel a su esencia y no su opuesto.",
    "enCristiano": "¿Qué significa? Que las cosas son lo que son. La realidad tiene solidez y no se evapora en su contrario por capricho.",
    "ejemploCotidiano": "Un perro es un perro; la justicia es justicia. No es una tontería obvia: es la garantía de que el mundo tiene verdades estables.",
    "consejoExamen": "No es una 'tautología inútil': añade al sujeto la necesidad metafísica intrínseca de su determinación esencial."
  },
  {
    "termino": "Principio del Tercero Excluido",
    "etimologia": "Del latín 'tertium non datur' (no se da un tercero).",
    "categoria": "Primeros Principios",
    "separata": "Separata 2",
    "definicionTecnica": "'Cualquier cosa o es o no es; no cabe término medio entre dos proposiciones contradictorias'.",
    "enCristiano": "¿Qué significa? Entre existir y no existir no hay un punto intermedio fantasma.",
    "ejemploCotidiano": "Un interruptor de corriente eléctrica: o la luz está encendida o no lo está; no hay un tercer estado cósmico intermedio.",
    "consejoExamen": "Añade a la no-contradicción la certeza de que no hay una tercera opción alternativa entre ser y no-ser."
  },
  {
    "termino": "Principio de Razón Suficiente",
    "etimologia": "Formulado por Leibniz y la tradición escolástica.",
    "categoria": "Primeros Principios",
    "separata": "Separata 2",
    "definicionTecnica": "'Todo ente tiene una razón suficiente de su existencia y de su ser'. Nada existe ni cambia sin un fundamento ontológico proporcionado.",
    "enCristiano": "¿Qué significa? Que nada ocurre porque sí de la nada mágica. Si algo existe o se mueve, hay una razón real de fondo que lo explica.",
    "ejemploCotidiano": "Si entras a tu habitación y ves un ramo de rosas sobre tu cama, sabes que alguien las compró y las puso ahí: no brotaron por casualidad del aire.",
    "consejoExamen": "Es la base para demostrar a Dios: como las criaturas no tienen en sí mismas la razón de su propio ser (son contingentes), necesitan a Dios como Razón Suficiente."
  },
  {
    "termino": "Causa Material",
    "etimologia": "Del latín 'causa' y 'materia'.",
    "categoria": "Teoría de las Causas",
    "separata": "Separata 3",
    "definicionTecnica": "Principio intrínseco pasivo a partir del cual algo se hace o llega a ser (id ex quo fit aliquid).",
    "enCristiano": "¿Qué significa? Responde a la pregunta: ¿De qué material está hecho?",
    "ejemploCotidiano": "En una mesa de roble, la madera es la causa material; en un suéter tejido, la lana es la causa material.",
    "consejoExamen": "En los sacramentos, el hombre o el agua física son la causa material receptiva de la gracia sobrenatural."
  },
  {
    "termino": "Causa Formal",
    "etimologia": "Del latín 'causa' y 'forma'.",
    "categoria": "Teoría de las Causas",
    "separata": "Separata 3",
    "definicionTecnica": "Principio intrínseco determinante que hace que la materia sea lo que es (id per quod aliquid est id quod est).",
    "enCristiano": "¿Qué significa? Responde a la pregunta: ¿Qué es esto? Es la configuración o acto que le da estructura.",
    "ejemploCotidiano": "El diseño tallado de la mesa que hace que sea mesa y no una escalera; en el ser humano, el alma racional.",
    "consejoExamen": "En la santificación del hombre, la gracia divina es la causa formal que hace santa al alma."
  },
  {
    "termino": "Causa Ejemplar",
    "etimologia": "Del latín 'exemplar' (modelo, muestra).",
    "categoria": "Teoría de las Causas",
    "separata": "Separata 3",
    "definicionTecnica": "La forma extrínseca al efecto concebida previamente en la mente del fabricante o creador según la cual se produce la obra.",
    "enCristiano": "¿Qué significa? Es el plano, el diseño o la idea mental previa según la cual el autor construye la cosa.",
    "ejemploCotidiano": "El plano en la mente del arquitecto antes de construir el edificio; las Ideas divinas en la mente de Dios al crear el mundo.",
    "consejoExamen": "No confundir forma intrínseca (la forma ya metida dentro de la materia) con causa ejemplar (el modelo previo en la mente del artífice)."
  },
  {
    "termino": "Causa Eficiente",
    "etimologia": "Del latín 'efficere' (producir, realizar).",
    "categoria": "Teoría de las Causas",
    "separata": "Separata 3",
    "definicionTecnica": "El principio activo que por su acción pone en marcha el cambio y produce un efecto real en el ser (id a quo fit aliquid).",
    "enCristiano": "¿Qué significa? Responde a la pregunta: ¿Quién lo hizo? Es el agente que realiza el trabajo.",
    "ejemploCotidiano": "El carpintero que serrucha y clava los maderos para armar la mesa; el pintor que aplica el óleo sobre el lienzo.",
    "consejoExamen": "Dios es Causa Primera creadora (da el esse total ex nihilo); las criaturas son causas segundas reales (transforman lo preexistente, producen el devenir)."
  },
  {
    "termino": "Causa Final",
    "etimologia": "Del latín 'finis' (meta, término).",
    "categoria": "Teoría de las Causas",
    "separata": "Separata 3",
    "definicionTecnica": "Aquello en vista de lo cual algo se hace (id cuius gratia aliquid fit). Es la 'Causa de las causas' porque motiva a la causa eficiente a actuar.",
    "enCristiano": "¿Qué significa? Responde a la pregunta: ¿Para qué se hizo? Es el propósito, la meta o el objetivo.",
    "ejemploCotidiano": "La meta de que los comensales se sienten a almorzar cómodamente es la causa final por la que el carpintero fabricó la mesa.",
    "consejoExamen": "Regla clásica: 'Primera en la intención, última en la ejecución'. Primero quieres el diploma de médico; al final de 7 años lo recibes en mano."
  },
  {
    "termino": "Causa Instrumental",
    "etimologia": "Del latín 'instrumentum' (herramienta).",
    "categoria": "Teoría de las Causas",
    "separata": "Separata 3",
    "definicionTecnica": "Causa que actúa no por la sola virtud de su propia forma, sino en cuanto es movida transitoriamente por un agente principal.",
    "enCristiano": "¿Qué significa? Es la herramienta o intermediario que usas para lograr una meta superior a la herramienta misma.",
    "ejemploCotidiano": "El pincel en manos de Da Vinci pintando la Mona Lisa: el pincel solo tiene pelos y madera, pero en la mano del genio produce una obra inmortal.",
    "consejoExamen": "Hay instrumentos unidos (la propia mano, la Humanidad de Cristo) e instrumentos separados (la pluma, los sacramentos). El instrumento tiene acción propia y acción instrumental."
  },
  {
    "termino": "Trascendentales (Transcendentalia)",
    "etimologia": "Del latín 'transcendere' (traspasar, cruzar límites).",
    "categoria": "Propiedades Trascendentales",
    "separata": "Separata 3",
    "definicionTecnica": "Propiedades que pertenecen al ente en cuanto ente; traspasan todas las categorías particulares y se identifican realmente con el esse.",
    "enCristiano": "¿Qué significa? Son los cuatro rostros luminosos que tiene cualquier cosa real por el simple hecho de existir: Unidad, Verdad, Bondad y Belleza.",
    "ejemploCotidiano": "Acrónimo mnemotécnico UVBP: Unum (Uno), Verum (Verdadero), Bonum (Bueno), Pulchrum (Bello).",
    "consejoExamen": "No son categorías de las 10 aristotélicas; trascienden las categorías porque convienen tanto a la substancia como a los accidentes."
  },
  {
    "termino": "Unidad (Unum)",
    "etimologia": "Del latín 'unus' (uno, indiviso).",
    "categoria": "Propiedades Trascendentales",
    "separata": "Separata 3",
    "definicionTecnica": "El ente en cuanto indiviso en sí mismo y dividido o separado de todo lo demás (ens indivisum in se et divisum ab omni alio).",
    "enCristiano": "¿Qué significa? Que para seguir existiendo, una cosa debe mantenerse entera; si se parte o fragmenta en pedazos, se destruye.",
    "ejemploCotidiano": "Un ser humano es un individuo uno: si le partes la cabeza del cuerpo, no obtienes dos hombres, sino un cadáver destruido.",
    "consejoExamen": "Hay unidad de simplicidad (Dios, sin partes) y unidad de composición (las criaturas, con partes integradas en grados: mesa < flor < animal < hombre)."
  },
  {
    "termino": "Verdad Ontológica (Verum)",
    "etimologia": "Del latín 'verus' (verdadero, auténtico).",
    "categoria": "Propiedades Trascendentales",
    "separata": "Separata 3",
    "definicionTecnica": "El ente en cuanto inteligible y cognoscible, abierto a la adecuación con la inteligencia (adaequatio rei et intellectus).",
    "enCristiano": "¿Qué significa? Que las cosas reales son comprensibles, tienen sentido y luz interior; no son engaños o ilusiones vacías.",
    "ejemploCotidiano": "El sol alumbra el paisaje; el acto de ser alumbra la mente para que podamos comprender cómo son las cosas.",
    "consejoExamen": "La realidad causa la verdad en la mente humana (realismo), no la mente humana causa el ser en las cosas (antropocentrismo idealista)."
  },
  {
    "termino": "Bondad (Bonum)",
    "etimologia": "Del latín 'bonus' (bueno, perfecto).",
    "categoria": "Propiedades Trascendentales",
    "separata": "Separata 3",
    "definicionTecnica": "El ente en cuanto apetecible y perfeccionador, objeto de la tendencia de la voluntad (bonum est quod omnia appetunt).",
    "enCristiano": "¿Qué significa? Que existir es bueno y que todo ser busca completarse y alcanzar su plenitud connatural.",
    "ejemploCotidiano": "El alimento fresco que busca el animal hambriento: ese alimento es un bien objetivo que completa su vida.",
    "consejoExamen": "'Bonum est diffusivum sui': el bien tiende por naturaleza a comunicarse y compartirse con generosidad, como Dios al crear el universo."
  },
  {
    "termino": "Belleza (Pulchrum)",
    "etimologia": "Del latín 'pulcher' (hermoso, radiante).",
    "categoria": "Propiedades Trascendentales",
    "separata": "Separata 3",
    "definicionTecnica": "El resplandor conjunto de la unidad, verdad y bondad que al ser contemplado agrada y deleita al entendimiento y a los sentidos (id quod visum placet).",
    "enCristiano": "¿Qué significa? Es cuando algo está tan bien hecho, ordenado y armónico que al mirarlo o escucharlo te llena el corazón de gozo.",
    "ejemploCotidiano": "Una sinfonía de Beethoven o la puesta de sol sobre las olas del mar: arte y naturaleza que elevan el alma.",
    "consejoExamen": "Pregunta fija de examen: las 3 cualidades objetivas de la belleza según Santo Tomás: 1) Armonía (proporción); 2) Plenitud (integridad); 3) Esplendor (claridad inteligible)."
  },
  {
    "termino": "El Mal (Privatio Boni)",
    "etimologia": "Del latín 'malum' (mal, defecto).",
    "categoria": "Trascendentales y Ética",
    "separata": "Separata 3",
    "definicionTecnica": "La ausencia o privación de un bien debido en un sujeto que por naturaleza debería poseerlo; carece de substancia positiva propia.",
    "enCristiano": "¿Qué significa? El mal no es un monstruo que existe solo: es un hueco, un defecto o una rotura en algo que debería ser bueno.",
    "ejemploCotidiano": "La ceguera no es un órgano negro en la cara: es simplemente la falta de visión en un ojo que debería ver.",
    "consejoExamen": "El mal físico (enfermedad, dolor) es relativo; el verdadero mal absoluto es el mal moral (el pecado cometido con libertad culpable)."
  },
  {
    "termino": "Ipsum Esse Subsistens",
    "etimologia": "Expresión latina tomista: 'El Mismo Ser Subsistente'.",
    "categoria": "Teología Natural",
    "separata": "Separata 3 y 4",
    "definicionTecnica": "Definición metafísica suprema de Dios: Ser cuya misma esencia es existir. No tiene el ser participado o limitado por un recipiente, sino que ES la Plenitud del Ser.",
    "enCristiano": "¿Qué significa? Nosotros recibimos el ser prestado; Dios es la Fuente infinita eterna que ES la existencia misma sin principio ni fin.",
    "ejemploCotidiano": "La diferencia entre un foco que recibe electricidad por un cable y la central eléctrica infinita que genera toda la corriente.",
    "consejoExamen": "En las criaturas, essentia y esse son realmente distintos; en Dios, essentia y esse son absolutamente idénticos."
  },
  {
    "termino": "Agnosticismo",
    "etimologia": "Del griego 'a' (sin) y 'gnosis' (conocimiento).",
    "categoria": "Teología Natural",
    "separata": "Separata 4",
    "definicionTecnica": "Postura que suspende el juicio sobre la existencia de Dios, sosteniendo que la razón humana es incapaz de saber si Dios existe o no.",
    "enCristiano": "¿Qué significa? La persona que dice: 'Nadie puede saber si hay Dios o no, así que me lavo las manos y no me comprometo'.",
    "ejemploCotidiano": "El estudiante que no estudia para el examen y dice: 'No se puede saber si el profesor vendrá hoy o no'.",
    "consejoExamen": "El Concilio Vaticano I definió como dogma que Dios puede ser conocido con certeza por la luz natural de la razón a partir de las criaturas creadas."
  },
  {
    "termino": "Ateísmo Práctico vs Teórico",
    "etimologia": "Del griego 'a' (sin) y 'theos' (Dios).",
    "categoria": "Teología Natural",
    "separata": "Separata 4",
    "definicionTecnica": "Práctico: vivir en los hechos cotidianos como si Dios no existiera (incluso yendo a ceremonias religiosas). Teórico: defender activamente la doctrina de que Dios no existe.",
    "enCristiano": "¿Qué significa? El ateo teórico da discursos diciendo que Dios no existe; el ateo práctico dice que cree, pero en su vida hace lo que le da la gana sin importar Dios.",
    "ejemploCotidiano": "Decir que amas la comida sana pero alimentarte todos los días de comida chatarra: eres un saludable 'teórico' pero un destructor 'práctico'.",
    "consejoExamen": "El texto subraya que el ateísmo tiene raíz más moral que intelectual: la voluntad interviene para negar a Dios y evitar la exigencia moral."
  },
  {
    "termino": "Principio de Inmanencia",
    "etimologia": "Del latín 'in-manere' (permanecer dentro).",
    "categoria": "Crítica Filosófica Moderna",
    "separata": "Separata 4",
    "definicionTecnica": "Principio moderno derivado de Descartes que sitúa al pensamiento humano como primera realidad previa al ser, encerrando la filosofía en la conciencia subjetiva.",
    "enCristiano": "¿Qué significa? Creer que el mundo solo existe o vale en la medida en que yo lo pienso o lo siento dentro de mi cabeza.",
    "ejemploCotidiano": "Encerrarte en tu cuarto con videojuegos creyendo que la comida del refrigerador aparece por arte de magia en la pantalla.",
    "consejoExamen": "Es la raíz de todas las filosofías ateas modernas (marxismo, existencialismo ateo, positivismo): sustituye a Dios por el hombre ('homo homini deus')."
  },
  {
    "termino": "Demostración A Posteriori",
    "etimologia": "Del latín 'a posteriori' (desde lo posterior / desde los efectos).",
    "categoria": "Teología Natural",
    "separata": "Separata 4",
    "definicionTecnica": "Demostración que asciende desde los hechos reales y sensibles de la experiencia (efectos) hacia su Causa Primera que los hace posibles.",
    "enCristiano": "¿Qué significa? Ver las huellas en la nieve para saber que alguien caminó por allí; ver el mundo para descubrir al Creador.",
    "ejemploCotidiano": "Ves humo saliendo de una chimenea: sin ver el fuego con tus ojos, sabes con certeza matemática que adentro hay fuego prendido.",
    "consejoExamen": "Las cinco vías de Santo Tomás son todas demostraciones a posteriori. Rechaza las pruebas a priori (ontologismo) que van de una simple idea a la realidad."
  },
  {
    "termino": "Primer Motor Inmóvil",
    "etimologia": "Concepto central de Aristóteles y de la Primera Vía tomista.",
    "categoria": "Teología Natural",
    "separata": "Separata 4",
    "definicionTecnica": "La Causa Primera que mueve a todas las cosas sin ser movida por nada; es Acto Puro, libre de cualquier potencia pasiva de cambio, a quien llamamos Dios.",
    "enCristiano": "¿Qué significa? El Motor Supremo del universo que pone a andar a toda la creación sin que nadie lo empuje a Él.",
    "ejemploCotidiano": "La locomotora central que jala a todos los vagones del tren pero no necesita otro tren delante que la empuje.",
    "consejoExamen": "'Inmóvil' NO significa muerto o paralizado: significa libre de imperfección de cambio, pues posee la plenitud de la vida infinita en Acto Puro."
  }
];

if (typeof window !== 'undefined') window.GLOSARIO_TERMINOS = GLOSARIO_TERMINOS;
if (typeof globalThis !== 'undefined') globalThis.GLOSARIO_TERMINOS = GLOSARIO_TERMINOS;
