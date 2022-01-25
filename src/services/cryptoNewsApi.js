import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// have to get new headers for the 2nd api
// from rapidapi
const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_CRYPTO_NEWS_API_KEY,
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// creating a specific api
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCatagory, count }) =>
        createRequest(
          `/news/search?q=${newsCatagory}&safeSearch=Off&textForamt=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
