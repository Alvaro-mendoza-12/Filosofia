// Mnemotecnias y Trucos de Examen - Unidad 2 Filosofia
const MNEMOTECNIAS_DATA = {
  "acronimos": [
    {
      "id": "meff",
      "titulo": "M-E-F-F: Las 4 Causas de Aristóteles",
      "letras": [
        {
          "letra": "M",
          "concepto": "Material",
          "detalle": "¿De qué está hecho? (Sustrato potencial: madera, bronce, mármol)."
        },
        {
          "letra": "E",
          "concepto": "Eficiente",
          "detalle": "¿Quién o qué lo produjo? (El agente que pasa la potencia al acto: el carpintero, el escultor)."
        },
        {
          "letra": "F",
          "concepto": "Formal",
          "detalle": "¿Qué es en esencia? (La idea o estructura que determina la materia: forma de mesa, de estatua)."
        },
        {
          "letra": "F",
          "concepto": "Final",
          "detalle": "¿Para qué sirve? (El propósito u objetivo: cenar, adornar, salvar vidas). ¡Es la causa de las causas!"
        }
      ],
      "regla_oro": "La causa FINAL es la causa de las causas (causa causarum), porque mueve al agente eficiente a actuar e imprimir la forma en la materia.",
      "ejemplo_cotidiano": "En una taza de café: M = cerámica, E = el alfarero, F = forma de taza hueca con asa, F = contener líquidos calientes para beber."
    },
    {
      "id": "uvbp",
      "titulo": "U-V-B-P: Las 4 Propiedades Trascendentales del Ente",
      "letras": [
        {
          "letra": "U",
          "concepto": "Unum (Uno)",
          "detalle": "Indiviso en sí mismo y dividido de todo lo demás. Todo ente, por ser ente, tiene unidad intrínseca."
        },
        {
          "letra": "V",
          "concepto": "Verum (Verdadero)",
          "detalle": "Conforme con la inteligencia. Todo ente es inteligible, tiene verdad ontológica cognoscible."
        },
        {
          "letra": "B",
          "concepto": "Bonum (Bueno)",
          "detalle": "Apetecible para la voluntad. Todo ente, en cuanto es y está en acto, es perfectivo y deseable."
        },
        {
          "letra": "P",
          "concepto": "Pulchrum (Bello)",
          "detalle": "Síntesis de verdad y bondad: 'Id quod visum placet' (lo que al ser contemplado agrada). Integridad, proporción y claridad."
        }
      ],
      "regla_oro": "Los trascendentales se identifican realmente con el ente y solo añaden una relación de razón. 'Ens et unum/verum/bonum convertuntur' (se convierten recíprocamente).",
      "ejemplo_cotidiano": "Una manzana sana: es UNA sola manzana indivisa, es VERDADERA (puedes conocer su estructura), es BUENA (nutre el cuerpo) y es BELLA (agradable a los sentidos y la mente)."
    },
    {
      "id": "ni-te-rs",
      "titulo": "N-I-TE-RS: Los 5 Primeros Principios del Ser",
      "letras": [
        {
          "letra": "N",
          "concepto": "No Contradicción",
          "detalle": "El más fundamental de todos: 'Es imposible que una misma cosa sea y no sea al mismo tiempo y bajo el mismo aspecto'."
        },
        {
          "letra": "I",
          "concepto": "Identidad",
          "detalle": "Todo ente es idéntico a sí mismo: 'El ser es el ser; lo que es, es' (A = A)."
        },
        {
          "letra": "TE",
          "concepto": "Tercero Excluido",
          "detalle": "Entre el ser y el no ser no cabe un término medio: o una cosa es o no es."
        },
        {
          "letra": "R",
          "concepto": "Razón Suficiente",
          "detalle": "Todo ente tiene razón de ser, ya sea en sí mismo (Dios) o en otro (seres creados). Nada existe sin justificación ontológica."
        },
        {
          "letra": "S/C",
          "concepto": "Substancia / Causalidad",
          "detalle": "Todo lo contingente o mudable exige una causa eficiente en acto previa. Nada pasa de la potencia al acto por sí mismo."
        }
      ],
      "regla_oro": "No se pueden demostrar formalmente con un silogismo deductivo porque son el punto de partida de toda demostración. Negarlos implica usarlos (autocontradicción).",
      "ejemplo_cotidiano": "Si alguien te dice 'este coche es 100% rojo y al mismo tiempo 100% azul bajo la misma luz', viola el principio de No Contradicción inmediatamente."
    },
    {
      "id": "vias-tomas",
      "titulo": "M-E-C-G-F: Las 5 Vías Tomistas para Demostrar a Dios",
      "letras": [
        {
          "letra": "M",
          "concepto": "1ª Vía: Movimiento (Cambio)",
          "detalle": "Punto de partida: las cosas cambian de potencia a acto. Conclusión: Primer Motor Inmóvil (Dios)."
        },
        {
          "letra": "E",
          "concepto": "2ª Vía: Causa Eficiente",
          "detalle": "Punto de partida: subordinación de causas eficientes. Conclusión: Primera Causa Incausada."
        },
        {
          "letra": "C",
          "concepto": "3ª Vía: Contingencia (Posibilidad)",
          "detalle": "Punto de partida: seres que pueden ser y no ser (mueren/se destruyen). Conclusión: Ser Absolutamente Necesario."
        },
        {
          "letra": "G",
          "concepto": "4ª Vía: Grados de Perfección",
          "detalle": "Punto de partida: hay cosas más o menos buenas, verdaderas o nobles. Conclusión: Ser Máximo y Causa de toda perfección."
        },
        {
          "letra": "F",
          "concepto": "5ª Vía: Finalidad (Gobierno del Mundo)",
          "detalle": "Punto de partida: seres irracionales obran ordenadamente hacia un fin. Conclusión: Inteligencia Suprema Ordenadora."
        }
      ],
      "regla_oro": "Todas las vías son demostraciones 'a posteriori' (parten de los efectos sensibles en el mundo) y aplican la imposibilidad del regreso al infinito en causas esencialmente subordinadas.",
      "ejemplo_cotidiano": "Una hilera de fichas de dominó cayendo (movimiento): por muy larga que sea, si no hay una primera mano exterior que empuje, ninguna ficha cae jamás."
    }
  ],
  "palacio_memoria": [
    {
      "sala": "Sala 1: El Templo del Ente (Separata 1)",
      "icono": "🏛️",
      "descripcion": "El portal de entrada a la Metafísica como ciencia del ente en cuanto ente.",
      "hitos": [
        {
          "objeto": "La Balanza de Parménides y Heráclito",
          "significado": "Parménides decía 'solo hay ser inmóvil'; Heráclito decía 'todo fluye, no hay ser'. Aristóteles los reconcilia con Potencia y Acto."
        },
        {
          "objeto": "El Escudo del 'Ens' y 'Esse'",
          "significado": "El 'Ente' tiene dos caras: 'Id quod est' (lo que es, la esencia) y el 'Esse' (el acto de existir, el fuego ontológico)."
        },
        {
          "objeto": "El Prisma de la Analogía",
          "significado": "El ser no es unívoco (como perro para mil perros) ni equívoco (como gato animal vs gato mecánico), sino ANÁLOGO (se predica con significados en parte iguales y en parte diversos según la proporción)."
        }
      ]
    },
    {
      "sala": "Sala 2: El Laboratorio de la Estructura (Separata 2)",
      "icono": "🔬",
      "descripcion": "Donde se analizan las piezas constitutivas de los entes materiales y espirituales.",
      "hitos": [
        {
          "objeto": "La Roca y su Pintura (Substancia y Accidente)",
          "significado": "La roca es la substancia (existe en sí misma). La pintura roja es el accidente (solo existe adherida a la roca)."
        },
        {
          "objeto": "La Arcilla Amorfa y el Molde (Materia Prima y Forma)",
          "significado": "La materia prima es pura potencia indeterminada. La forma substancial entra y hace que sea ladrillo y no vasija."
        },
        {
          "objeto": "El Reloj de la Generación y Corrupción",
          "significado": "El cambio accidental cambia el color o tamaño del ente (sigue siendo el mismo). El cambio substancial destruye una substancia y engendra otra nueva (un leño se quema y pasa a ceniza y gas)."
        }
      ]
    },
    {
      "sala": "Sala 3: La Cámara de los Espejos Radiantes (Separata 3)",
      "icono": "✨",
      "descripcion": "Las cuatro causas y los trascendentales que bañan toda la realidad.",
      "hitos": [
        {
          "objeto": "El Árbol de las Cuatro Ramas Causales",
          "significado": "Causas intrínsecas (Materia y Forma dentro del ente) y Causas extrínsecas (Agente Eficiente y Fin hacia el que tiende)."
        },
        {
          "objeto": "El Espejo de los Trascendentales (Uno, Verdadero, Bueno, Bello)",
          "significado": "Cualquier ente que se refleje muestra que es uno, es inteligible a la mente, es apetecible por ser bueno y resplandece en belleza."
        },
        {
          "objeto": "La Balanza de la Causalidad Ejemplar",
          "significado": "La causa ejemplar es la idea o modelo en la mente del artífice antes de plasmar la forma en la materia (subespecie de causa formal extrínseca)."
        }
      ]
    },
    {
      "sala": "Sala 4: La Cumbre del Ipsum Esse (Separata 4)",
      "icono": "🏔️",
      "descripcion": "La demostración de la existencia de Dios y la crítica a los errores modernos.",
      "hitos": [
        {
          "objeto": "El Muro Roto del Inmanentismo Kantiano",
          "significado": "Kant encerró la mente en el fenómeno negando el acceso al noúmeno (la cosa en sí). El realismo metafísico rompe el muro: el entendimiento capta el ser real."
        },
        {
          "objeto": "El Tren Infinito sin Locomotora",
          "significado": "Un número infinito de vagones jamás se moverá si no hay una locomotora con fuerza propia. Así, las causas eficientes subordinadas exigen una Primera Causa Incausada."
        },
        {
          "objeto": "La Corona del 'Ipsum Esse Subsistens'",
          "significado": "En las criaturas hay distinción real entre esencia y existencia (reciben el ser). En Dios, Su misma Esencia ES el Existir (Dios es el Ser Subsistente por Sí Mismo)."
        }
      ]
    }
  ],
  "trampas_examen": [
    {
      "numero": 1,
      "trampa": "¿Es el Ser un 'género supremo' como pensaba Porfirio o Hegel?",
      "error_comun": "Marcar que el Ser es el género más amplio que incluye a todas las especies.",
      "verdad_ontologica": "¡FALSO! El ser NO es un género. Un género se divide por diferencias específicas que están FUERA de él (ej: el género 'animal' se divide por 'racional', y la racionalidad no está en la definición de animal genérico). Pero fuera del ser no hay nada más que el no-ser. Por ende, el ser se predica de forma ANÁLOGA, no genérica.",
      "palabra_clave": "Analogía ≠ Género"
    },
    {
      "numero": 2,
      "trampa": "Confundir 'Materia Prima' con los átomos, moléculas o partículas físicas.",
      "error_comun": "Creer que la materia prima aristotélica es la masa física, protones o materia detectable con microscopios.",
      "verdad_ontologica": "La materia detectable en el laboratorio ya tiene FORMA SUBSTANCIAL (es materia segunda). La 'Materia Prima' es un principio puramente metafísico: potencia pura sin forma alguna, incapaz de existir por sí sola en la realidad.",
      "palabra_clave": "Materia Prima = Potencia pura (no física)"
    },
    {
      "numero": 3,
      "trampa": "El Primer Motor Inmóvil: ¿Significa que Dios fue el primer empujón en el tiempo (hace millones de años)?",
      "error_comun": "Pensar en una prioridad cronológica o temporal (Dios empujó el Big Bang y se fue).",
      "verdad_ontologica": "La prioridad de Dios es ONTOLÓGICA y ACTUAL, no temporal. Incluso si el universo fuera eterno (como creía Aristóteles), necesitaría en este preciso instante a un Primer Motor que mantenga en acto el paso continuo de potencia a acto.",
      "palabra_clave": "Prioridad Ontológica y Actual ≠ Cronológica"
    },
    {
      "numero": 4,
      "trampa": "¿El mal es un ente con substancia propia (como decía el maniqueísmo)?",
      "error_comun": "Pensar que el mal es un ser o sustancia opuesta al bien.",
      "verdad_ontologica": "El mal ontológicamente NO es un ente; es una PRIVACIÓN (privatio boni), la carencia de un bien debido que debería estar presente en un sujeto (ej: la ceguera no es una cosa física, es la falta de visión en un ojo).",
      "palabra_clave": "Mal = Privatio Boni (no es substancia)"
    },
    {
      "numero": 5,
      "trampa": "¿Cuál es la causa superior o 'causa de las causas'?",
      "error_comun": "Responder que la Causa Eficiente porque es la que hace la fuerza física.",
      "verdad_ontologica": "La causa superior es la CAUSA FINAL ('causa causarum'). La causa eficiente jamás actuaría si no estuviera atraída o dirigida por un fin u objetivo determinado.",
      "palabra_clave": "Causa Final = Causa Causarum"
    },
    {
      "numero": 6,
      "trampa": "Agnosticismo vs Ateísmo: ¿Son la misma postura?",
      "error_comun": "Tratarlos como sinónimos de increencia.",
      "verdad_ontologica": "El Ateísmo afirma positivamente 'Dios no existe' (juicio ontológico categórico). El Agnosticismo declara 'La mente humana no puede conocer si Dios existe o no' (juicio gnoseológico de limitación racional o inmanencia kantiana).",
      "palabra_clave": "Ateísmo = Niega ser / Agnosticismo = Niega poder conocer"
    },
    {
      "numero": 7,
      "trampa": "Diferencia entre Cambio Accidental y Cambio Substancial.",
      "error_comun": "Creer que la muerte de un ser vivo o la combustión de papel es un cambio accidental.",
      "verdad_ontologica": "Cambio accidental: la substancia permanece y solo varían sus accidentes (Sócrates sentado pasa a estar de pie; una manzana verde se vuelve roja). Cambio substancial: desaparece la substancia anterior y surge otra nueva (Sócrates muere y se convierte en cadáver; el papel arde y pasa a ser ceniza).",
      "palabra_clave": "Accidental = permanece sujeto / Substancial = cambia sujeto"
    },
    {
      "numero": 8,
      "trampa": "¿La demostración de la existencia de Dios de Santo Tomás es 'a priori' o 'a posteriori'?",
      "error_comun": "Confundirla con el argumento ontológico de San Anselmo o Descartes.",
      "verdad_ontologica": "Las 5 Vías son estrictamente 'A POSTERIORI': parten de la experiencia sensible inmediata de los efectos en el mundo sensible (movimiento, orden, contingencia) y se remontan a la Causa Primera que los sostiene.",
      "palabra_clave": "5 Vías = A Posteriori (Efectos -> Causa)"
    },
    {
      "numero": 9,
      "trampa": "¿Qué significa que Dios es 'Ipsum Esse Subsistens'?",
      "error_comun": "Creer que Dios 'tiene' un ser o que Dios es un ser dentro de una lista de seres.",
      "verdad_ontologica": "Las criaturas 'tienen' ser (habent esse) por participación: su esencia es receptora del ser. Dios no tiene ser: Dios ES el Ser mismo subsistente por sí mismo, donde Esencia y Existencia son perfectamente idénticas.",
      "palabra_clave": "Criaturas: Tienen ser / Dios: ES el Ser"
    },
    {
      "numero": 10,
      "trampa": "¿Por qué no se puede regresar al infinito en la serie de causas?",
      "error_comun": "Decir que no se puede regresar al infinito en ninguna serie de cosas.",
      "verdad_ontologica": "Se puede concebir infinito accidental (un padre engendra a un hijo y ese a otro hacia el pasado). Lo que es IMPOSIBLE es el infinito en causas ESENCIALMENTE subordinadas en el presente (el brazo mueve el palo y el palo mueve la piedra; si quitas la mano, el palo no mueve nada).",
      "palabra_clave": "Imposible en Causas Esenciales (simultáneas)"
    }
  ]
};

if (typeof window !== 'undefined') window.MNEMOTECNIAS_DATA = MNEMOTECNIAS_DATA;
if (typeof globalThis !== 'undefined') globalThis.MNEMOTECNIAS_DATA = MNEMOTECNIAS_DATA;
