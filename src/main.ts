import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/charts.css";

import { initInfluencerMatrix } from "./charts/influencer-matrix";
import { initLandscapeDashboard } from "./charts/landscape-dashboard";
import { initMarketMap } from "./charts/market-map";
import { initPerceptionGapChart } from "./charts/perception-gap-chart";
import { initViralTimeline } from "./charts/viral-timeline";
import { renderClosing } from "./sections/closing";
import { renderHero } from "./sections/hero";
import { renderInfluencerParadox } from "./sections/influencer-paradox";
import { renderLandscape } from "./sections/landscape";
import { renderMarkets } from "./sections/markets";
import { renderPerceptionGap } from "./sections/perception-gap";
import { renderStrategicBets } from "./sections/strategic-bets";
import { renderViralCrisis } from "./sections/viral-crisis";
import { initSiteNav, renderSiteFooter, renderSiteNav } from "./site-chrome";
import { countUp, revealOnScroll } from "./utils/intersection";

const app = document.querySelector<HTMLElement>("#app");

if (!app) {
  throw new Error("Missing #app root");
}

app.innerHTML = `
  ${renderSiteNav()}
  <main class="page-shell" id="main-content">
    ${renderHero()}
    ${renderLandscape()}
    ${renderPerceptionGap()}
    ${renderViralCrisis()}
    ${renderMarkets()}
    ${renderInfluencerParadox()}
    ${renderStrategicBets()}
    ${renderClosing()}
  </main>
  ${renderSiteFooter()}
`;

initSiteNav();
initLandscapeDashboard();
initPerceptionGapChart();
initViralTimeline();
initMarketMap();
initInfluencerMatrix();
revealOnScroll();

const ratioNode = document.querySelector<HTMLElement>("[data-countup]");
if (ratioNode) {
  countUp(ratioNode, Number(ratioNode.dataset.countup ?? 2.8));
}
