const viralAnnotation =
  "La crisis no fue “la gente hablando de Cheaf”. Fue Cheaf convertida en símbolo de otra conversación.";

const cards = [
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
    body: "Cheaf deja de ser el tema. Se vuelve ejemplo de una promesa que se siente como escasez maquillada."
  }
];

const renderFlow = () => `
  <div class="viral-flow">
    ${cards
      .map(
        (card, index) => `
          <article class="viral-step">
            <span class="viral-step__label">${card.label}</span>
            <h3>${card.title}</h3>
            <p>${card.body}</p>
          </article>
          ${index < cards.length - 1 ? '<span class="viral-flow__connector" aria-hidden="true"></span>' : ""}
        `
      )
      .join("")}
  </div>
`;

export const initViralTimeline = () => {
  const root = document.querySelector<HTMLElement>("#viralDiagram");
  const annotationNode = document.querySelector<HTMLElement>("[data-viral-annotation]");
  if (!root || !annotationNode) return;

  root.innerHTML = renderFlow();
  annotationNode.textContent = viralAnnotation;
};
