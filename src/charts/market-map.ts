import { focusMarkets } from "../data";
import { tableFromRows } from "../utils/accessibility";
import { number, ratio, reachLabel } from "../utils/format";

type MarketMode = "ratio" | "volume" | "reach" | "momentum";

const annotations: Record<MarketMode, string> = {
  ratio: "Chile es la urgencia. 19× negativos por cada positivo.",
  volume: "Argentina es el epicentro. El mayor volumen regional nace mezclado con crisis.",
  reach: "México compensa sentiment negativo con earned media premium.",
  momentum: "Colombia tiene una ventana: todavía puede moldear su narrativa antes de que el meme cruce."
};

const reachScore: Record<string, number> = {
  high: 78,
  high_via_earned_media: 100,
  medium: 48,
  low: 18,
  reactive: 35
};

const momentumScore: Record<string, number> = {
  declining_from_peak: 30,
  declining: 24,
  stable: 62,
  growing: 88,
  reactive: 40
};

const mapPaths = [
  {
    key: "AR",
    focus: true,
    d: "M214.8 322.6L221.1 318.5L226.3 321.9L232.9 319.8L235.3 323.4L238.9 327.5L245.5 331.3L251.9 335.4L251.1 340.7L250 344.6L251.4 347.2L257.9 348.1L262.2 345.4L264.6 339.8L266.1 337.5L268 340.9L267.4 346.4L264.7 348.2L262.6 350.3L260.3 352.9L256 358.9L251.7 367.9L250.6 379L249.4 385.8L254.4 392.8L253.3 405.4L236.4 411.8L235 413.8L234.1 417L234.3 421.6L224.5 421.8L224.6 429.9L228.7 429.8L223.6 432.5L222.3 438.8L222.3 442L221.9 442.9L221.2 445.2L215.7 446.7L215.5 455.3L218.6 460.9L217.7 463.7L212.7 469.5L209.3 472.5L207.8 475.2L206.5 481.6L195.5 482.7L192.9 476.3L191.5 468L194.4 459.6L197 454.5L197.1 448.1L198 443.8L196.7 438.7L196.8 435.6L196.7 428.6L196.6 419.8L196.9 415.5L200.4 409.4L198.9 400.8L200.9 397L201.4 391.3L204.3 382.8L203.1 376.2L201.4 370.4L204.1 364.1L204.5 357.3L207.3 349.3L210 340.7L209.8 332.6L214.8 322.6Z"
  },
  {
    key: "CL",
    focus: true,
    d: "M205.7 293.2L209.2 307.3L210.7 331.2L209.3 346.6L203.8 358L201.4 370.1L204.5 380.8L202.2 394.9L199.2 401.7L197.5 415.4L196.3 425.4L196 436.5L197.8 443.8L196.2 451.6L194.6 463.6L191.1 476.4L209.8 485.8L200.4 488.7L195.5 491.4L198.9 488.4L194.1 490.9L192.7 490.4L195.5 487.5L192 487.9L190.7 488.9L191.2 486.9L189.3 486.3L192.2 485.2L192.1 486.4L191.6 481.1L191.7 482.7L190.1 483.9L189.4 481.8L187.5 478.2L188.8 475.8L187.6 474.8L187.1 474.1L186.7 471.7L188 469.1L186.1 467.7L188.3 464L187 462.5L189.5 462L187.7 460.7L187.4 459.7L187.7 457.2L184.7 455L181.6 455.7L184.6 451.4L187.7 450.3L188.5 454L189.8 449.3L191 445L191.2 440.1L192.6 434.2L193.4 428.8L192.3 425.9L188.2 423.9L190.3 416.3L189.3 402.5L192.7 395.7L197 381.3L197.5 370.7L198.4 358.8L200.1 349.1L201.2 340.2L201.7 329.8L202.6 321.2L203 311L202.4 299.1L205.7 293.2Z"
  },
  {
    key: "MX",
    focus: true,
    d: "M96.4 52.9L95.5 78.4L99.2 86.8L104.4 93.2L112.1 94.7L116.6 93.7L119.4 93.8L122.8 83.6L133.1 77.2L135.4 77.2L134.8 86.6L134.8 88.2L133.1 95.7L131.8 93L126.2 97.9L122.2 105.3L119.7 107.6L109.3 107.9L106.2 106.1L103.4 107.9L92.6 106.9L85.6 103.3L72.1 95.5L65.1 88.7L64.4 80.1L59 66.7L54.5 60.8L52.9 58.3L50.5 55.7L49.2 54.9L48.5 51.8L46.2 48.1L43.2 42.7L40.1 40.1L36.2 33.6L32.8 23.5L26.3 20.2L27.2 28.9L29.3 32.4L31.9 36.7L34.3 39.4L36.5 44.8L38.4 48.5L40.3 52.5L41.7 56.2L43 59.3L44.3 62.4L46.5 64.4L45.3 69.4L38.2 59.9L37.2 58.2L34.8 50.6L31.7 48.4L26 43.2L29.6 43.3L29.1 42L29.2 38.5L22.8 30.8L19.3 21.6L26.7 16.1L51.7 23.2L54.5 20.8L62.7 24.3L66.6 30.4L73 35.6L77.2 31.6L82.3 35.4L85.6 42.1L87.5 47.1L92.8 52.5L96.4 52.9Z"
  },
  {
    key: "CO",
    focus: true,
    d: "M168.8 188.5L169.8 186.6L169.8 183.1L171.8 182.4L172.9 181.4L173.3 180.5L173.8 179.1L174.7 177.4L174.9 176.7L175.4 175.7L174.8 174.6L174.7 174.5L174.7 171.6L174.5 166.6L174.8 165.2L174.5 161.1L173.6 158.5L173 154L174.7 150.7L176.1 150.8L176.6 151.9L176.9 149.9L179 146.3L180.9 144.4L181.8 140L181.8 138.7L182.7 137.2L184.1 135.6L185.5 136.7L186.8 135.8L187.5 133.8L193.5 131.4L196.3 128.9L196.8 127.9L197 127.5L197.6 131.3L192.3 138.4L191.9 145.4L194.1 150L194.2 155.5L197.5 157.5L201 157.2L207.2 162.2L212.7 161.6L212.6 166.5L212.2 171.1L213.1 175.7L213.2 181.1L214.9 184.5L215.1 187L210.7 186.6L204.8 190.4L207 192.6L203.5 193.2L205.4 200.9L204.7 213.4L200.8 217.3L202.4 210.2L199.6 208.8L196.8 208.4L192.9 209.6L191.3 207.5L189.9 204.5L188 202.4L186.3 199.5L183.8 197.2L179.5 194.5L176.3 194.8L171.8 191.4L168.8 188.5Z"
  },
  { key: "BRA", focus: false, d: "M252.7 363.3L268 343L254.7 319.3L249.4 289.5L225.5 264.1L212.3 255.4L189.2 234L205.2 200.4L225.7 188.2L242.6 171.3L253.3 186.4L274.8 176.3L275.6 202.6L285.1 206.9L293.1 200.6L297.1 202L300.9 204.4L303.9 209.6L307.6 210.3L324.9 214.1L342.5 241L328.1 266.8L326.2 286.3L309.8 323.3L297.6 329L288.2 341.2L277.1 370.5L274 372.3L252.7 363.3Z" },
  { key: "PER", focus: false, d: "M205.7 293.2L197.8 292L187.2 284.3L180.3 277.4L179 272.9L174.8 260L171.4 252.2L169.9 247.1L165.3 235.7L158.9 221.2L163.4 217.7L166.2 222.2L170.4 216.8L182.5 201.6L183.1 196.6L187.6 202L190.8 206.1L194.7 209.7L201.1 209.8L202.9 218.3L199.7 220.6L194.5 222.8L190.8 232.8L190.5 243.5L198.3 251.6L201.2 257.3L207.3 272.1L206.2 283.7L205.7 293.2Z" },
  { key: "BOL", focus: false, d: "M205.7 293.2L208.2 286.5L206.2 278.3L207.5 271.9L205.5 257.1L211 256L215.1 253.3L220.4 250.3L222.2 252L222.2 257.2L222.9 261.1L224.8 263.7L227.6 265.7L231.2 266.7L233.7 269L237.9 271L241.4 274.4L249.5 286.6L251.5 293.3L251 304.4L245 303.1L232.8 319.3L226.1 322.9L221.5 318.6L215.7 320.9L209.9 312.2L208.9 305.6L207.3 297.4L205.7 293.2Z" },
  { key: "PAR", focus: false, d: "M232.8 319.3L236.4 305L250.5 308L251.2 310.9L251.8 312.5L251.4 317.5L252.5 318.6L254.6 319.3L256.5 319.5L260 320.3L260.9 326.3L265.9 329.3L264.5 337L264.4 341.3L262.5 345.2L260 348.1L256.3 348.3L251.5 347.3L249.1 346L250.4 343.7L250.8 340.9L252.5 338L250 334.6L245.7 331.4L240.8 328.5L238.1 326.2L235.3 323.4L234.2 320.9L232.8 319.3Z" },
  { key: "URU", focus: false, d: "M252.7 363.3L254.1 363.9L256 363.1L257.4 364.6L259.1 367L259.8 368L261.5 368L263 369.4L265.1 371.5L267.1 373L268.4 375.4L270.1 377.9L269.1 382.7L267.9 385.9L266 387.9L265.8 388.2L262.9 389.4L259.6 388.8L257.7 389.3L255.5 388L253.4 386.8L251.4 386.2L249.5 382.2L250.5 379.5L250.5 376.4L250.5 372.5L251.4 369.4L251.9 366.6L252.7 363.3Z" },
  { key: "ECU", focus: false, d: "M168.8 188.5L172.5 191.8L176.3 194.8L179 194.1L182.1 196.6L182.2 198.4L183 201.6L178.7 209.2L171.3 215.8L170.1 218.3L168.5 223.3L166.2 222.5L163.3 220.2L162.7 218.5L163.2 216.2L163.7 214.7L165.2 210.2L164.8 207.8L164.4 210.2L163.2 211L160.5 209L161 205.9L161 201.7L163 200L163.8 196.2L163.8 192.8L165.6 191.5L168.3 189.8L168.8 188.5Z" },
  { key: "VEN", focus: false, d: "M243.2 149.1L241.8 156.8L238.1 162.9L233.2 173.9L225.2 174.8L225.3 188.5L216.1 189.7L212.2 180.9L212.4 168.8L209.8 162.2L198.3 157.6L194.3 150.9L192.2 139L196.8 135.5L196.2 144.5L199.5 141.9L203.1 133.1L202.9 131.8L209.5 134.2L219 138.2L225.8 139.5L227.2 137.5L235.8 137.2L232.4 139L232.3 141L236 142.4L239.5 143.8L236.7 148.8L243.2 149.1Z" },
  { key: "PAN", focus: false, d: "M154 143.5L155.6 145.6L157.2 146.9L159.9 147.7L164.7 144.6L166.3 143.4L169.3 144.3L172.8 146.4L174.1 149.5L173 154.3L171.2 154.3L171.2 150.7L173 151.5L171.2 149.8L170.7 150L169.1 147.8L167.8 146.2L165.9 147.3L164.7 149.3L164.2 155.2L160.6 156.3L159.9 153.3L159.3 153.8L157.8 152.8L156.8 151.3L155.5 150.3L152.8 152.1L152.6 146.3L154 143.5Z" },
  { key: "COS", focus: false, d: "M149.6 136L150 137.2L153.6 143.2L152.9 143.7L153.4 147.2L152.2 150.5L151.8 149.4L151.4 148.8L150.6 148.7L150.7 149.9L149.9 147.8L149.9 146.9L147.7 144.2L145.8 143.3L145 141.3L144 140.2L143.7 140.9L144.8 142.4L143.3 142.4L141.4 140.7L141.2 138.3L141.8 137.6L141 136.4L141.6 136L141.9 134.5L146.7 135.9L147.8 136.8L149.6 136.2L149.6 136Z" },
  { key: "NIC", focus: false, d: "M141.7 135.2L138.2 130.9L135.6 127L133.8 124.9L135.3 124.7L137.6 123.1L137.9 120.3L140.4 118.9L141.7 119.2L143.1 117.6L144.3 115.7L145.8 115.3L147.7 115.1L148.8 114.7L150.1 113.9L151.2 113.5L151.1 114.5L151.1 114.9L150.2 121.9L149.8 127L150 126.2L149.7 128.5L149.5 129.4L149.1 130.9L149.3 132.7L149.3 136.9L147.5 136.6L145.9 135.4L141.7 135.2Z" },
  { key: "HON", focus: false, d: "M127.2 116.7L128 113.8L132.9 108.9L135.2 108.8L140.4 107.9L145.7 109.1L149.3 111.3L148 110.8L148.7 111.8L149.1 111.9L150 112.2L149.9 111.8L150.9 113.4L149.5 114.4L147.9 114.8L146.3 115.5L144.3 115.8L142.8 118.1L141.5 120L138.8 120.4L137.7 123L135.4 124.5L135 122.5L133.9 122.4L133.4 119.7L131.6 119.4L130.6 119.2L128.7 117.7L127.2 116.7Z" },
  { key: "ELS", focus: false, d: "M124.3 120.5L125 118.9L125.6 118.6L126.4 117.4L126.3 116.8L127 116.6L128 117L128.5 117.2L128.9 118L129.6 118.6L130.1 119L130.6 119.3L131.1 119.7L131.5 119.5L131.6 119.1L132.7 119.6L133.2 119.5L133.6 120.4L133.6 121.7L133.1 122.5L132.9 123.7L131.2 123.4L131 123.6L130.8 123.3L129.7 123.1L130.3 123.3L128.4 122.5L125.3 121.4L124.3 120.5Z" },
  { key: "GUA", focus: false, d: "M127.2 116.7L126.4 116.8L126.5 117.6L125.6 118.9L124.2 120L118.5 118.7L116 114.5L116 111.7L120.7 107.6L122.9 107.3L123 106.5L123.1 106.1L123 105.7L122.3 105.3L122.1 104.7L120.8 103.1L120.3 102.5L119.6 101.4L122.8 97.9L127.7 108.6L129.7 109L130.3 109.2L130.4 108.6L131.7 109.5L129.6 111.8L127.7 114.3L127.9 115.9L127.2 116.7Z" },
  { key: "BEL", focus: false, d: "M127.9 105.8L128.6 97L129.2 97.3L129.8 96.1L130.2 95.3L130.8 94.3L131.4 94.3L131.1 95.2L132 94.9L132.1 95.1L131.9 97.1L131.7 99.5L131.4 101.2L131.7 102.3L131.5 103.3L131.4 103.6L131.2 104.8L131 104.9L131.1 105.1L130.8 105.8L130.5 106.4L130.3 106.6L130 106.5L129.6 107.2L129.2 107.7L128.5 108.5L127.8 106.9L127.9 105.8Z" }
];

const labelPositions: Record<string, { x: number; y: number }> = {
  MX: { x: 82, y: 72 },
  CO: { x: 190, y: 180 },
  CL: { x: 178, y: 374 },
  AR: { x: 225, y: 386 }
};

const colorFor = (mode: MarketMode, code: string, value: number) => {
  if (mode === "ratio") {
    if (value >= 15) return "#ee0b00";
    if (value >= 8) return "#f06961";
    if (value >= 4) return "#e7a5a0";
    return "#80d8bf";
  }

  if (mode === "momentum") {
    if (code === "CO") return "#008f66";
    if (value > 55) return "#80d8bf";
    if (value > 35) return "#dadada";
    return "#ee0b00";
  }

  if (mode === "reach" && code === "MX") return "#00b9b9";

  const opacity = Math.max(0.22, Math.min(1, value / 260));
  return `rgba(0, 138, 138, ${opacity.toFixed(2)})`;
};

const valueFor = (mode: MarketMode, market: (typeof focusMarkets)[number]) => {
  if (mode === "ratio") return market.neg_pos_ratio;
  if (mode === "volume") return market.mentions_total;
  if (mode === "reach") return reachScore[market.reach_level] ?? 30;
  return momentumScore[market.trend] ?? 40;
};

const displayFor = (mode: MarketMode, market: (typeof focusMarkets)[number]) => {
  if (mode === "ratio") return ratio(market.neg_pos_ratio);
  if (mode === "volume") return number(market.mentions_total);
  if (mode === "reach") return reachLabel(market.reach_level);
  if (market.trend === "growing") return "↗ entrada";
  if (market.trend === "stable") return "→ estable";
  return "↘ crisis";
};

const widthFor = (mode: MarketMode, market: (typeof focusMarkets)[number]) => {
  const value = valueFor(mode, market);
  const max = Math.max(...focusMarkets.map((item) => valueFor(mode, item)));
  return Math.max(10, (value / max) * 100);
};

const renderSvg = (mode: MarketMode) => {
  const fill = Object.fromEntries(
    focusMarkets.map((market) => [
      market.code,
      colorFor(mode, market.code, valueFor(mode, market))
    ])
  );

  return `
    <svg class="latam-map" viewBox="0 0 360 520" role="presentation" aria-hidden="true" focusable="false">
      <g>
        ${mapPaths
          .filter((path) => !path.focus)
          .map((path) => `<path d="${path.d}" class="country country-context" />`)
          .join("")}
      </g>
      <g>
        ${mapPaths
          .filter((path) => path.focus)
          .map(
            (path) =>
              `<path d="${path.d}" fill="${fill[path.key]}" class="country country-focus" />`
          )
          .join("")}
      </g>
      <g>
        ${Object.entries(labelPositions)
          .map(([key, pos]) => `<text x="${pos.x}" y="${pos.y}">${key}</text>`)
          .join("")}
      </g>
    </svg>
  `;
};

const renderRows = (mode: MarketMode) => `
  <div class="map-side">
    ${focusMarkets
      .map(
        (market) => `
          <div class="map-metric-row">
            <strong>${market.flag} ${market.code}</strong>
            <span class="metric-track"><span class="metric-fill" style="width:${widthFor(mode, market)}%; background:${colorFor(mode, market.code, valueFor(mode, market))}"></span></span>
            <span>${displayFor(mode, market)}</span>
          </div>
        `
      )
      .join("")}
  </div>
`;

const tableFor = (mode: MarketMode) =>
  tableFromRows(
    "Comparativo por mercado",
    ["Mercado", "Ratio", "Volumen", "Reach", "Momentum"],
    focusMarkets.map((market) => [
      market.name,
      ratio(market.neg_pos_ratio),
      market.mentions_total,
      reachLabel(market.reach_level),
      displayFor("momentum", market)
    ])
  );

export const initMarketMap = () => {
  const root = document.querySelector<HTMLElement>("#marketMap");
  const toggle = document.querySelector<HTMLElement>("[data-market-toggle]");
  const annotation = document.querySelector<HTMLElement>("[data-market-annotation]");
  const table = document.querySelector<HTMLElement>("[data-market-table]");
  if (!root || !toggle || !annotation || !table) return;

  const render = (mode: MarketMode) => {
    root.innerHTML = `
      <div class="latam-map-wrap">
        ${renderSvg(mode)}
        ${renderRows(mode)}
      </div>
    `;
    annotation.textContent = annotations[mode];
    table.innerHTML = tableFor(mode);

    toggle.querySelectorAll<HTMLButtonElement>(".toggle-button").forEach((button) => {
      const active = button.dataset.mode === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
  };

  toggle.addEventListener("click", (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-mode]");
    if (!button) return;
    render((button.dataset.mode ?? "ratio") as MarketMode);
  });

  render("ratio");
};
