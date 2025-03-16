
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mockStockData, mockForexData, mockCryptoData, mockCommoditiesData, mockNewsData } from '@/data/mockData';

// Note: In a real application, you would connect to actual APIs
// This is using mock data for demonstration purposes

export const marketApi = createApi({
  reducerPath: 'marketApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getStocks: builder.query({
      queryFn: () => {
        return { data: mockStockData };
      },
    }),
    getForex: builder.query({
      queryFn: () => {
        return { data: mockForexData };
      },
    }),
    getCrypto: builder.query({
      queryFn: () => {
        return { data: mockCryptoData };
      },
    }),
    getCommodities: builder.query({
      queryFn: () => {
        return { data: mockCommoditiesData };
      },
    }),
    getNews: builder.query({
      queryFn: () => {
        return { data: mockNewsData };
      },
    }),
  }),
});

export const {
  useGetStocksQuery,
  useGetForexQuery,
  useGetCryptoQuery,
  useGetCommoditiesQuery,
  useGetNewsQuery,
} = marketApi;
