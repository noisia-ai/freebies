type ViralMode = "narrative" | "data";

const annotations: Record<ViralMode, string> = {
  narrative:
    "La crisis no fue “la gente hablando de Cheaf”. Fue Cheaf convertida en símbolo de otra conversación.",
  data:
    "El meme combina 79K de reach inicial, 380+ replicaciones y un peak viral de casi tres semanas."
};

const cardsByMode: Record<
  ViralMode,
  Array<{ label: string; title: string; body: string; metric?: string }>
> = {
  narrative: [
    {
      label: "1",
      title: "Queja original",
      body: "Un tweet mezcla Cheaf con una sensación más amplia: el consumo moderno promete progreso, pero entrega menos."
    },
    {
      label: "2",
      title: "Meme derivado",
      body: "La frase “Apple en cada esquina” convierte a Cheaf en shorthand de frustración, aunque la mayoría no haya probado la app."
    },
    {
      label: "3",
      title: "Símbolo cultural",
      body: "Cheaf deja de ser el tema. Se vuelve ejemplo de “innovación que se siente como escasez maquillada”."
    }
  ],
  data: [
    {
      label: "1",
      title: "Origen",
      body: "@reydegonnet instala el frame inicial desde X.",
      metric: "~79K reach"
    },
    {
      label: "2",
      title: "Replicación",
      body: "El patrón “Apple Store → comida por vencer” domina el pico de febrero.",
      metric: "380+ menciones"
    },
    {
      label: "3",
      title: "Duración",
      body: "El peak se sostiene lo suficiente para fijar una lectura negativa fuera del producto.",
      metric: "~3 semanas"
    }
  ]
};

const renderFlow = (mode: ViralMode) => `
  <div class="viral-flow">
    ${cardsByMode[mode]
      .map(
        (card, index) => `
          <article class="viral-step">
            <span class="viral-step__label">${card.label}</span>
            <h3>${card.title}</h3>
            <p>${card.body}</p>
            ${card.metric ? `<strong>${card.metric}</strong>` : ""}
          </article>
          ${index < cardsByMode[mode].length - 1 ? '<span class="viral-flow__connector" aria-hidden="true"></span>' : ""}
        `
      )
      .join("")}
  </div>
`;

export const initViralTimeline = () => {
  const root = document.querySelector<HTMLElement>("#viralDiagram");
  const toggle = document.querySelector<HTMLElement>("[data-viral-toggle]");
  const annotation = document.querySelector<HTMLElement>("[data-viral-annotation]");
  if (!root || !toggle || !annotation) return;

  const render = (mode: ViralMode) => {
    root.innerHTML = renderFlow(mode);
    annotation.textContent = annotations[mode];
    toggle.querySelectorAll<HTMLButtonElement>(".toggle-button").forEach((button) => {
      const active = button.dataset.mode === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
  };

  toggle.addEventListener("click", (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-mode]");
    if (!button) return;
    render((button.dataset.mode ?? "narrative") as ViralMode);
  });

  render("narrative");
};
