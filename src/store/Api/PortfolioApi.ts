import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1",
  }),
  tagTypes: ["Portfolio"],
  endpoints: (builder) => ({
    getSinglePortfolio: builder.query({
      query: (id: string) => ({
        url: `/portfolio/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSinglePortfolioQuery } = portfolioApi;
