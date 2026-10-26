// Minijuego de Emparejar Conceptos - Unidad 2 Filosofia
const EMPAREJAR_DATA = {
  "niveles": [
    {
      "id": "nivel1",
      "nombre": "Nivel 1: Conceptos Metafísicos vs Significado en Cristiano",
      "descripcion": "Relaciona el término técnico filosófico con su explicación llana y directa.",
      "parejas": [
        {
          "id": "p1",
          "concepto": "Ente (Ens)",
          "definicion": "Cualquier cosa real que existe; 'lo que es'."
        },
        {
          "id": "p2",
          "concepto": "Esse (Acto de Ser)",
          "definicion": "La fuerza viva y radical que hace que algo exista en vez de ser nada."
        },
        {
          "id": "p3",
          "concepto": "Substancia",
          "definicion": "Lo que existe en sí mismo como sujeto base (ej: un perro, un árbol)."
        },
        {
          "id": "p4",
          "concepto": "Accidente",
          "definicion": "Cualidad o rasgo que solo existe pegado a una substancia (ej: el color, peso)."
        },
        {
          "id": "p5",
          "concepto": "Potencia",
          "definicion": "La capacidad real de cambiar o llegar a ser algo nuevo."
        },
        {
          "id": "p6",
          "concepto": "Acto",
          "definicion": "La perfección o estado que una cosa ya ha alcanzado en la realidad."
        }
      ]
    },
    {
      "id": "nivel2",
      "nombre": "Nivel 2: Las 4 Causas vs Ejemplos de la Vida Real",
      "descripcion": "Asocia cada tipo de causa con su manifestación en la construcción de una Casa.",
      "parejas": [
        {
          "id": "p7",
          "concepto": "Causa Material",
          "definicion": "Los ladrillos, cemento, varillas de acero y arena."
        },
        {
          "id": "p8",
          "concepto": "Causa Formal",
          "definicion": "El plano arquitectónico y distribución de muros que la define como vivienda."
        },
        {
          "id": "p9",
          "concepto": "Causa Eficiente",
          "definicion": "Los albañiles, ingenieros y maquinaria que levantan la edificación."
        },
        {
          "id": "p10",
          "concepto": "Causa Final",
          "definicion": "Brindar cobijo, seguridad y habitabilidad a una familia humana."
        },
        {
          "id": "p11",
          "concepto": "Causa Ejemplar",
          "definicion": "La idea y modelo mental preconcebido en la mente del arquitecto diseñador."
        },
        {
          "id": "p12",
          "concepto": "Causa Instrumental",
          "definicion": "La mezcladora de concreto, la pala y la plomada empleadas por el obrero."
        }
      ]
    },
    {
      "id": "nivel3",
      "nombre": "Nivel 3: Primeros Principios vs Fórmulas y Enunciados",
      "descripcion": "Empareja el principio metafísico con su enunciado lógico y ontológico exacto.",
      "parejas": [
        {
          "id": "p13",
          "concepto": "Principio de No Contradicción",
          "definicion": "Imposible que algo sea y no sea al mismo tiempo bajo el mismo aspecto."
        },
        {
          "id": "p14",
          "concepto": "Principio de Identidad",
          "definicion": "Todo ente es idéntico a sí mismo (A = A; el ser es el ser)."
        },
        {
          "id": "p15",
          "concepto": "Principio del Tercero Excluido",
          "definicion": "Entre ser y no ser no cabe un término intermedio ontológico."
        },
        {
          "id": "p16",
          "concepto": "Principio de Razón Suficiente",
          "definicion": "Todo lo que existe tiene una razón que justifica su existencia y modo de ser."
        },
        {
          "id": "p17",
          "concepto": "Principio de Causalidad",
          "definicion": "Todo lo contingente o mudable exige una causa eficiente previa en acto."
        },
        {
          "id": "p18",
          "concepto": "Principio de Finalidad",
          "definicion": "Todo agente o substancia que obra, obra indefectiblemente por un fin."
        }
      ]
    },
    {
      "id": "nivel4",
      "nombre": "Nivel 4: Las 5 Vías de Santo Tomás vs Su Clave Demostrativa",
      "descripcion": "Empareja cada vía tomista con su punto de partida y Nombre Divino deducido.",
      "parejas": [
        {
          "id": "p19",
          "concepto": "1ª Vía: Por el Movimiento",
          "definicion": "Del cambio observable en el cosmos al Primer Motor Inmóvil."
        },
        {
          "id": "p20",
          "concepto": "2ª Vía: Por la Causa Eficiente",
          "definicion": "De la cadena de causación en el mundo a la Causa Primera Incausada."
        },
        {
          "id": "p21",
          "concepto": "3ª Vía: Por la Contingencia",
          "definicion": "De los seres mortales/posibles al Ser Absolutamente Necesario por Sí Mismo."
        },
        {
          "id": "p22",
          "concepto": "4ª Vía: Por Grados de Perfección",
          "definicion": "De lo más y menos verdadero y noble al Ser Máximo Causa de Perfecciones."
        },
        {
          "id": "p23",
          "concepto": "5ª Vía: Por la Finalidad",
          "definicion": "Del orden y armonía de seres ciegos a la Suprema Inteligencia Ordenadora."
        },
        {
          "id": "p24",
          "concepto": "Definición Suprema de Dios",
          "definicion": "Ipsum Esse Subsistens (El Ser mismo subsistente por esencia propia)."
        }
      ]
    },
    {
      "id": "nivel5",
      "nombre": "Nivel 5: Doctrinas Filosóficas vs Postura Central",
      "descripcion": "Empareja cada corriente de pensamiento con su tesis respecto al ser y a Dios.",
      "parejas": [
        {
          "id": "p25",
          "concepto": "Realismo Metafísico (Tomista)",
          "definicion": "La inteligencia humana puede conocer la realidad en sí misma y remontarse a Dios."
        },
        {
          "id": "p26",
          "concepto": "Inmanentismo (Kant)",
          "definicion": "La mente solo conoce fenómenos subjetivos construidos, no las cosas en sí (noúmeno)."
        },
        {
          "id": "p27",
          "concepto": "Ateísmo Teórico",
          "definicion": "Afirma taxativamente la no existencia de Dios pretendiendo basarse en la ciencia."
        },
        {
          "id": "p28",
          "concepto": "Agnosticismo",
          "definicion": "Sostiene que la razón es incapaz de saber si Dios existe o no, suspendiendo el juicio."
        },
        {
          "id": "p29",
          "concepto": "Panteísmo",
          "definicion": "Identifica a Dios con la naturaleza material, disolviendo Su trascendencia."
        },
        {
          "id": "p30",
          "concepto": "Deísmo Iluminista",
          "definicion": "Acepta un creador lejano que abandonó el universo a sus propias leyes ciegas."
        }
      ]
    }
  ]
};
