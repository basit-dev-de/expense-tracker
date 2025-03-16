
// Mock data for the dashboard

export const mockStockData = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 173.57, change: 1.45, changePercent: 0.84, volume: '45.2M', marketCap: '2.74T' },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 338.11, change: 2.73, changePercent: 0.81, volume: '22.1M', marketCap: '2.51T' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 138.45, change: -0.56, changePercent: -0.40, volume: '16.8M', marketCap: '1.74T' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 132.86, change: 1.28, changePercent: 0.97, volume: '30.5M', marketCap: '1.37T' },
  { symbol: 'META', name: 'Meta Platforms Inc.', price: 327.82, change: 4.25, changePercent: 1.31, volume: '14.2M', marketCap: '839.7B' },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 227.22, change: -5.43, changePercent: -2.33, volume: '98.7M', marketCap: '721.4B' },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 431.84, change: 15.23, changePercent: 3.66, volume: '42.3M', marketCap: '1.06T' },
  { symbol: 'BRK.A', name: 'Berkshire Hathaway', price: 543298, change: 4521, changePercent: 0.84, volume: '300', marketCap: '789.5B' },
];

export const mockForexData = [
  { pair: 'EUR/USD', rate: 1.0923, change: 0.0008, changePercent: 0.07 },
  { pair: 'USD/JPY', rate: 151.43, change: -0.2200, changePercent: -0.15 },
  { pair: 'GBP/USD', rate: 1.2639, change: 0.0028, changePercent: 0.22 },
  { pair: 'USD/CAD', rate: 1.3712, change: 0.0009, changePercent: 0.07 },
  { pair: 'USD/CHF', rate: 0.8949, change: -0.0023, changePercent: -0.26 },
  { pair: 'AUD/USD', rate: 0.6573, change: 0.0014, changePercent: 0.21 },
  { pair: 'NZD/USD', rate: 0.6102, change: 0.0011, changePercent: 0.18 },
  { pair: 'USD/CNY', rate: 7.1823, change: -0.0018, changePercent: -0.03 },
];

export const mockCryptoData = [
  { symbol: 'BTC', name: 'Bitcoin', price: 43251.12, change: 1246.32, changePercent: 2.97, volume: '28.5B', marketCap: '847.2B' },
  { symbol: 'ETH', name: 'Ethereum', price: 2298.45, change: 54.62, changePercent: 2.43, volume: '12.7B', marketCap: '276.3B' },
  { symbol: 'BNB', name: 'Binance Coin', price: 312.84, change: 4.21, changePercent: 1.36, volume: '942.5M', marketCap: '48.1B' },
  { symbol: 'SOL', name: 'Solana', price: 147.36, change: 8.45, changePercent: 6.08, volume: '3.2B', marketCap: '64.2B' },
  { symbol: 'XRP', name: 'Ripple', price: 0.6214, change: 0.0183, changePercent: 3.03, volume: '2.1B', marketCap: '33.7B' },
  { symbol: 'ADA', name: 'Cardano', price: 0.3842, change: 0.0092, changePercent: 2.45, volume: '378.4M', marketCap: '13.6B' },
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.0823, change: 0.0026, changePercent: 3.26, volume: '748.2M', marketCap: '11.7B' },
  { symbol: 'DOT', name: 'Polkadot', price: 6.47, change: 0.21, changePercent: 3.36, volume: '281.3M', marketCap: '8.3B' },
];

export const mockCommoditiesData = [
  { symbol: 'GC', name: 'Gold', price: 2032.40, change: 12.60, changePercent: 0.62, volume: '187.2K' },
  { symbol: 'SI', name: 'Silver', price: 23.86, change: 0.41, changePercent: 1.75, volume: '62.4K' },
  { symbol: 'CL', name: 'Crude Oil', price: 73.89, change: -1.24, changePercent: -1.65, volume: '432.7K' },
  { symbol: 'NG', name: 'Natural Gas', price: 2.378, change: 0.031, changePercent: 1.32, volume: '112.9K' },
  { symbol: 'HG', name: 'Copper', price: 3.89, change: 0.04, changePercent: 1.04, volume: '57.3K' },
  { symbol: 'PL', name: 'Platinum', price: 938.20, change: 5.70, changePercent: 0.61, volume: '14.8K' },
  { symbol: 'PA', name: 'Palladium', price: 967.50, change: -12.30, changePercent: -1.26, volume: '5.9K' },
  { symbol: 'ZC', name: 'Corn', price: 451.25, change: 3.25, changePercent: 0.73, volume: '188.7K' },
];

export const mockNewsData = [
  {
    id: 1,
    title: 'Federal Reserve Keeps Interest Rates Unchanged, Signals Potential Cuts',
    source: 'Financial Times',
    timestamp: '2 hours ago',
    snippet: 'The Federal Reserve maintained its benchmark interest rate at the current level but hinted at possible cuts later this year as inflation continues to cool.'
  },
  {
    id: 2,
    title: 'Tech Stocks Rally on Strong Earnings Reports from Industry Giants',
    source: 'Wall Street Journal',
    timestamp: '4 hours ago',
    snippet: 'Major technology companies posted better-than-expected quarterly results, driving a broad rally in tech stocks and pushing major indices to new highs.'
  },
  {
    id: 3,
    title: 'Oil Prices Fall on Growing Supply Concerns',
    source: 'Reuters',
    timestamp: '6 hours ago',
    snippet: 'Crude oil prices dropped more than 2% following reports of increased production from major oil-producing nations, raising concerns about oversupply.'
  },
  {
    id: 4,
    title: 'Bitcoin Surges Past $45,000 as Institutional Adoption Grows',
    source: 'Bloomberg',
    timestamp: '8 hours ago',
    snippet: 'The world\'s largest cryptocurrency broke through the $45,000 barrier, fueled by news of increased investment from major financial institutions.'
  },
  {
    id: 5,
    title: 'European Markets Close Higher on Positive Economic Data',
    source: 'CNBC',
    timestamp: '10 hours ago',
    snippet: 'European stock indices ended the trading day higher after new data showed stronger-than-expected economic growth across the eurozone.'
  },
];

export const chartData = [
  { date: '2023-01', value: 1000 },
  { date: '2023-02', value: 1200 },
  { date: '2023-03', value: 900 },
  { date: '2023-04', value: 1500 },
  { date: '2023-05', value: 1700 },
  { date: '2023-06', value: 1400 },
  { date: '2023-07', value: 1800 },
  { date: '2023-08', value: 2000 },
  { date: '2023-09', value: 2200 },
  { date: '2023-10', value: 2100 },
  { date: '2023-11', value: 2400 },
  { date: '2023-12', value: 2700 },
];

export const indexData = {
  'S&P 500': { value: 4673.89, change: 32.41, changePercent: 0.7 },
  'Dow Jones': { value: 38239.98, change: 145.67, changePercent: 0.38 },
  'Nasdaq': { value: 16429.84, change: 184.09, changePercent: 1.13 },
  'Russell 2000': { value: 1985.80, change: -8.31, changePercent: -0.42 },
};
