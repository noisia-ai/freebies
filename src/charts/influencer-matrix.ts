import { tableFromRows } from "../utils/accessibility";

type InfluenceMode = "reach" | "mentions" | "sentiment" | "conversion";

const annotations: Record<InfluenceMode, string> = {
  reach: "Las columnas más visibles no son necesariamente las que convierten.",
  mentions: "Authorities y creators dominan volumen; peers aparecen dispersas y submedidas.",
  sentiment: "Peers concentran la señal positiva más útil: prueba social concreta.",
  conversion: "El arquetipo que más convierte es el que menos atención estratégica recibe."
};

const metrics: Record<
  InfluenceMode,
  Array<{ key: string; label: string; value: number; display: string }>
> = {
  reach: [
    { key: "authorities", label: "Authorities", value: 100, display: "2.5M+" },
    { key: "creators", label: "Creators", value: 32, display: "~500K" },
    { key: "peers", label: "Peers", value: 12, display: "<200K" }
  ],
  mentions: [
    { key: "authorities", label: "Authorities", value: 100, display: "307" },
    { key: "creators", label: "Creators", value: 57, display: "~175" },
    { key: "peers", label: "Peers", value: 39, display: "~120" }
  ],
  sentiment: [
    { key: "authorities", label: "Authorities", value: 50, display: "mixto" },
    { key: "creators", label: "Creators", value: 58, display: "superficial" },
    { key: "peers", label: "Peers", value: 88, display: "alta afinidad" }
  ],
  conversion: [
    { key: "authorities", label: "Authorities", value: 20, display: "baja" },
    { key: "creators", label: "Creators", value: 38, display: "media-baja" },
    { key: "peers", label: "Peers", value: 92, display: "alta" }
  ]
};

const insights: Record<
  InfluenceMode,
  { kicker: string; title: string; body: string }
> = {
  reach: {
    kicker: "lectura",
    title: "Visibilidad no es adopción.",
    body:
      "Authorities ganan alcance, pero no resuelven la barrera psicológica que aparece antes de probar Cheaf."
  },
  mentions: {
    kicker: "lectura",
    title: "El volumen visible está arriba del funnel.",
    body:
      "Medios y creators empujan conversación. La prueba de uso real aparece más dispersa y por eso queda submedida."
  },
  sentiment: {
    kicker: "lectura",
    title: "Peers cargan la señal emocional útil.",
    body:
      "Cuando una usuaria muestra compra real, cambia la pregunta de '¿está mala?' a '¿qué puedo rescatar yo?'."
  },
  conversion: {
    kicker: "lectura",
    title: "El arquetipo pequeño tiene el mayor poder.",
    body:
      "La oportunidad no es más códigos; es sistematizar micro-prueba social después de la compra."
  }
};

const renderMatrix = (mode: InfluenceMode) => `
  <div class="influence-matrix" data-mode="${mode}">
    <div class="matrix-bars">
      ${metrics[mode]
        .map(
          (row) => `
            <div class="matrix-row${row.value >= 88 ? " is-leader" : ""}" data-archetype="${row.key}">
              <span class="matrix-row__label">${row.label}</span>
              <span class="matrix-track" aria-hidden="true"><span class="matrix-fill" style="width:${row.value}%"></span></span>
              <span class="matrix-row__value">${row.display}</span>
            </div>
          `
        )
        .join("")}
    </div>
    <aside class="matrix-insight">
      <span>${insights[mode].kicker}</span>
      <strong>${insights[mode].title}</strong>
      <p>${insights[mode].body}</p>
    </aside>
  </div>
`;

const tableFor = () =>
  tableFromRows("Matriz de influencia", ["Arquetipo", "Reach", "Menciones", "Conversión"], [
    ["Authorities", "2.5M+", 307, "baja"],
    ["Creators", "~500K", "~175", "media-baja"],
    ["Peers", "<200K", "~120", "alta"]
  ]);

export const initInfluencerMatrix = () => {
  const root = document.querySelector<HTMLElement>("#influenceMatrix");
  const toggle = document.querySelector<HTMLElement>("[data-influence-toggle]");
  const annotation = document.querySelector<HTMLElement>("[data-influence-annotation]");
  const table = document.querySelector<HTMLElement>("[data-influence-table]");
  if (!root || !toggle || !annotation || !table) return;

  const render = (mode: InfluenceMode) => {
    root.innerHTML = renderMatrix(mode);
    annotation.textContent = annotations[mode];
    table.innerHTML = tableFor();

    toggle.querySelectorAll<HTMLButtonElement>(".toggle-button").forEach((button) => {
      const active = button.dataset.mode === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
  };

  toggle.addEventListener("click", (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-mode]");
    if (!button) return;
    render((button.dataset.mode ?? "reach") as InfluenceMode);
  });

  render("reach");
};
