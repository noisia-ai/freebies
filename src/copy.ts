import { data } from "./data";

export const CTA_URL =
  "mailto:brandhon@noisia.ai?subject=Cheaf%20Perception%20Gap";

export const sectionMarkers = [
  "01 · The One Finding",
  "02 · The Landscape",
  "03 · The Perception Gap",
  "04 · The Viral Crisis",
  "05 · Market-by-Market",
  "06 · The Influencer Paradox",
  "07 · Three Strategic Bets",
  "08 · Lo que no te mostramos"
];

export const perceptionQuotes = {
  haters: [
    {
      quote:
        "Usan cupones para tener descuento en comprar comida en mal estado. Un apple en cada esquina.",
      source: "@ivandvin · X"
    },
    {
      quote:
        "Iba a haber un apple store en cada esquina. Ahora conformate con comer restos podridos.",
      source: "Usuario X"
    },
    {
      quote: "Venden comida que esta por vencer.",
      source: "Usuario X · SV"
    },
    {
      quote:
        "Te venden comida que igual van a tirar a un 70% ingresando un CUPÓN.",
      source: "@reydegonnet · X"
    }
  ],
  defenders: [
    {
      quote:
        "Hasta ahora todo lo que compré en Cheaf, súper fresco y abundante. En general se vence al otro día o dentro de tres. O sea, previenen tener que tirarla cuando ya ven que no se va a vender. Pero no te dan sobras ni comida en mal estado.",
      source: "Usuario X · respuesta directa al meme"
    },
    {
      quote:
        "Rescaté todo esto por menos de $20.000 gracias a cheaf.chile. Productos de supermercado a precios mucho más bajos, evitando que se desperdicien alimentos y así, cuidando el planeta.",
      source: "Usuaria Instagram · CL"
    },
    {
      quote:
        "Encontré cheaf.mexico, una app donde puedes comprar esa comida antes de que termine en la basura. 100% recomendada.",
      source: "Usuaria Instagram · MX"
    },
    {
      quote:
        "Pasta fresca rescatada con cheaf.chile para evitar desperdicios de comida y de paso ahorrar.",
      source: "Usuaria Instagram · CL"
    }
  ]
};

export const viralOriginQuote =
  "Los celulares vienen sin cargadores ni auriculares, las cajas de los juegos vienen vacías y con códigos para una tienda online que puede desaparecer. Te venden comida que igual van a tirar a un 70% ingresando un CUPÓN. Cada vez hay más avances pero seguimos retrocediendo.";

export const viralTimeline = [
  {
    label: "Origen",
    text: "Tweet de @reydegonnet. Compara a Cheaf con la decadencia del consumo moderno.",
    metric: "~79K reach inicial"
  },
  {
    label: "Propagación",
    text: "380+ replicaciones del patrón “Apple Store → comida por vencer”.",
    metric: "perfil masculino dominante"
  },
  {
    label: "Consolidación",
    text: "El meme se despega de Cheaf y se vuelve metáfora del cinismo consumidor latinoamericano.",
    metric: "~3 semanas de peak"
  }
];

export const influencerBlocks = [
  {
    key: "authorities",
    title: "Authorities",
    subtitle: "prensa especializada",
    data: "307 menciones · 27% del volumen",
    examples: "@telediariomty · @MilenioMty · Re-Evolución México",
    role: "Legitimación, no conversión.",
    verdict: "Excelente para construir credibilidad. No mueve descargas de app."
  },
  {
    key: "creators",
    title: "Aspirationals / Creators",
    subtitle: "creators con códigos",
    data: "Denisse González · Ahorrá con Anabella · 25+ códigos",
    examples: "DENUU20 · AHORRO20 · SdmhwgcNTS",
    role: "Awareness masivo con costo en credibilidad.",
    verdict: "Los códigos dominan volumen, pero no mueven sentiment."
  },
  {
    key: "peers",
    title: "Peers orgánicas",
    subtitle: "usuarias reales",
    data: "cheaf.chile · cheaf.mexico · cheaf.argentina",
    examples: "Hauls, reels y compras reales después de usar la app",
    role: "Conversión silenciosa. Alta afinidad. Bajo reach individual.",
    verdict: "El arquetipo más útil es el menos explotado."
  }
];

export const strategicBets = [
  {
    eyebrow: "Apuesta 1",
    title:
      "De “rescate de comida próxima a vencer” → “comida fresca al final del ciclo de góndola”",
    body:
      "El problema no es convencer al escéptico de que la comida no está mala. El problema es que la palabra “rescate” activa la sospecha. Hablar de “ciclo de góndola”, “última hornada” o “compra al final del día” reubica a Cheaf fuera del territorio emocional de la comida podrida y la acerca a uno más neutro: eficiencia temporal.",
    proof:
      "381 menciones asocian Cheaf con “vencimiento” en contextos negativos. 164 con “tirar”. Esos dos términos son la batalla semántica principal."
  },
  {
    eyebrow: "Apuesta 2",
    title:
      "Migrar de códigos masivos → 20 micro-advocates verificados con contenido después de la compra",
    body:
      "Los códigos genéricos generan volumen, pero degradan credibilidad. Una red curada de micro-influencers que muestre resultado de compra, no promoción pre-compra, construye prueba social auténtica. El contenido objetivo es el haul post-rescate, no el “usa mi código”.",
    proof:
      "El quote más positivo del dataset — “Rescaté todo esto por menos de $20.000” — es de una usuaria chilena anónima sin código. La autenticidad convierte. El código promocional la neutraliza."
  },
  {
    eyebrow: "Apuesta 3",
    title:
      "No replicar el playbook mexicano en Chile. Construir uno específicamente chileno.",
    body:
      "Chile tiene un ratio 19:1 negativo, el peor de la región. Pero no es un problema de ejecución. Es un problema de contexto cultural: en una economía con encarecimiento de canasta básica, la narrativa de rescate ambiental se siente desconectada de la urgencia local. El mismo producto debe leerse como ahorro digno en Chile, no como sostenibilidad.",
    proof:
      "77 menciones negativas vs 4 positivas en Chile. El vocabulario asociado incluye “canasta básica”, “colaciones escolares” y “mil pesos”: lenguaje de escasez, no de consumo consciente."
  }
];

export const toplineMeta = `${data.meta.window_days} días · 12 fuentes · ${data.meta.total_signals.toLocaleString(
  "es-MX"
)} señales · AR · CL · MX · CO`;

