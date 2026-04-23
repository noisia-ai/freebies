import rawData from "../data.json";

export type MarketCode = "ALL" | "AR" | "CL" | "MX" | "CO" | "US";

export type Sentiment = {
  positive: number;
  neutral: number;
  negative: number;
};

export type Market = {
  code: Exclude<MarketCode, "ALL">;
  flag: string;
  name: string;
  mentions_total: number;
  pct_of_total: number;
  sentiment: Sentiment;
  neg_pos_ratio: number;
  sentiment_pcts: Sentiment;
  reach_level: string;
  trend: string;
  diagnosis: string;
  recommendation: string;
  key_context: string[];
  is_critical_alert?: boolean;
};

export const data = rawData;
export const markets = rawData.markets as Market[];
export const focusMarkets = markets.filter((market) =>
  ["AR", "CL", "MX", "CO"].includes(market.code)
);

export const getMarket = (code: MarketCode) => {
  if (code === "ALL") return null;
  return markets.find((market) => market.code === code) ?? null;
};

