import { sectionMarkers, strategicBets } from "../copy";

export const renderStrategicBets = () => `
  <section class="section" id="strategic-bets" data-reveal>
    <div class="section__inner">
      <span class="section__marker">${sectionMarkers[6]}</span>
      <h2>tres apuestas estratégicas</h2>
      <p class="section__lead">
        No son “recomendaciones de comunicación”. Son cambios de framing, arquetipo y mercado prioritario.
      </p>

      <div class="bet-grid">
        ${strategicBets
          .map(
            (bet) => `
              <article class="bet-card">
                <span class="section__marker">${bet.eyebrow}</span>
                <h3>${bet.title}</h3>
                <p>${bet.body}</p>
                <p class="bet-card__proof">${bet.proof}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

