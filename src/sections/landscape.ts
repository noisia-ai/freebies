import { sectionMarkers } from "../copy";

const views = [
  ["ALL", "All LATAM"],
  ["AR", "Argentina"],
  ["CL", "Chile"],
  ["MX", "México"],
  ["CO", "Colombia"]
];

export const renderLandscape = () => `
  <section class="section" id="landscape" data-reveal>
    <div class="section__inner section__inner--wide">
      <span class="section__marker">${sectionMarkers[1]}</span>
      <h2>el paisaje en 30 segundos</h2>
      <p class="section__lead">
        La conversación no se comporta como la de una app de impacto social. Se comporta como una categoría útil atrapada en una narrativa incómoda.
      </p>
      <div class="toggle-group" role="tablist" aria-label="Vista por mercado" data-landscape-toggle>
        ${views
          .map(
            ([value, label], index) => `
              <button class="toggle-button${index === 0 ? " is-active" : ""}" type="button" role="tab" aria-selected="${index === 0}" data-view="${value}">
                ${label}
              </button>
            `
          )
          .join("")}
      </div>
      <div class="landscape-grid market-grid" data-landscape-grid aria-live="polite"></div>
      <p class="bridge">Febrero no es momentum. Es una crisis viral. Esto es lo que pasó — y lo que revela.</p>
    </div>
  </section>
`;

