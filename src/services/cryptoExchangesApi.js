import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createRef } from "react";


const baseUrl = "https://api.coingecko.com/api/v3";

const createRequest = (url) => ({ url});
export const cryptoExchangesApi = createApi({
  reducerPath: "cryptoExchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;
