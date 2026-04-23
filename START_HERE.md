# START HERE — Cheaf Perception Gap Freebie

Este paquete contiene todo el contexto, data, estructura y specs necesarios para construir el freebie de Noisia para Cheaf (outreach a Kim Durand vía LinkedIn).

El análisis de la data cruda (Sprinklr) ya fue hecho. **No hay que re-analizar** — los insights, métricas y quotes curados están destilados en estos archivos.

---

## Orden de lectura al abrir Claude Code

1. **`00_PROJECT_BRIEF.md`** — Qué estamos construyendo y por qué
2. **`01_NOISIA_CONTEXT.md`** — Cómo debe pensar y sonar el freebie (voz de marca, metodologías aplicadas)
3. **`02_DATA_INSIGHTS.md`** — Todos los hallazgos con números específicos
4. **`03_CONTENT_STRUCTURE.md`** — Las 8 secciones con copy y guías visuales
5. **`04_QUOTES_LIBRARY.md`** — Voces reales curadas por categoría
6. **`05_CHART_SPECIFICATIONS.md`** — Specs de cada visualización, incluyendo toggles
7. **`data.json`** — Data normalizada lista para consumo directo del código

Además: **tu `Design.md` existente** es el source of truth para tokens, tipografía, paleta y componentes. Estos archivos describen contenido y comportamiento, no diseño visual final.

---

## Prompt inicial sugerido para Claude Code

Pegar esto como primer mensaje al abrir el proyecto:

> Estoy construyendo un freebie de Social Intelligence para outreach en LinkedIn.
> Target: Kim Durand, CEO de Cheaf (food waste rescue LATAM). Formato: single-page web mobile-first, para leer en ~5 min en el celular.
>
> Antes de escribir código, lee en este orden:
> 1. START_HERE.md
> 2. 00_PROJECT_BRIEF.md
> 3. 01_NOISIA_CONTEXT.md
> 4. 02_DATA_INSIGHTS.md
> 5. 03_CONTENT_STRUCTURE.md
> 6. 04_QUOTES_LIBRARY.md
> 7. 05_CHART_SPECIFICATIONS.md
> 8. Design.md (mi sistema de diseño)
>
> Luego cárgame el árbol de proyecto propuesto (estructura de archivos) y propón el stack. No escribas código todavía — primero alineamos arquitectura.

---

## Stack recomendado (no vinculante)

Dado que el entregable final va embebido en **Webflow** vía HTML embeds, el camino natural es:

- **HTML/CSS/JS vanilla** con una sola librería de charts ligera (Chart.js o ApexCharts)
- **Un solo archivo HTML** auto-contenido para facilitar el embed en Webflow
- Alternativa: build con **Vite + vanilla TS** y generar un bundle final inline-able

Evitar: React/Vue (overkill para un single-page read-only), librerías pesadas de charts (D3 a menos que necesites interacciones custom), frameworks CSS (Tailwind está bien si tu Design.md ya lo usa).

---

## Criterio de éxito

El freebie está bien ejecutado si:

1. **Kim lo puede leer completo en el metro** (≤ 7 min scroll, mobile-first)
2. **Demuestra capacidades sin explicarlas** — los frameworks de Noisia aparecen en acción, no descritos
3. **Tiene ≥1 insight que Cheaf no conocía** (el market-by-market con ratio 19:1 de Chile es el candidato obvio)
4. **Los toggles en charts revelan ángulos genuinamente distintos**, no el mismo dato maquillado
5. **Cierra con 3 apuestas estratégicas concretas**, no recomendaciones genéricas
6. **No contiene ni una frase que parezca marketing agency boilerplate**

---

## Relación personal con el target

Kim Durand es **amigo del que envía (Brandhon)**. Esto permite:

- Tono más directo, menos "dear valued prospect"
- Firma personal: *"— Brandhon / Noisia"* al final, no solo logo corporativo
- Un cierre que puede ser humano: *"Kim, si esto te sirve aunque sea en parte, me doy por pagado."*

No abusar. El documento debe seguir siendo profesional y vendedor. La cercanía se siente en 2-3 frases, no en el tono general.
