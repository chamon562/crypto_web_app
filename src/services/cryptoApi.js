// services folder is redux's new way of fetching data
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// before set cryptoApi need to a store for redux application
// a store is one central state of truth, meaning entire app state
//  and create a store, make new folder in src called app

// setting headers from rapidapi
const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_CRYPTO_API,
};
// base url to get coins
const baseUrl = "https://coinranking1.p.rapidapi.com/coins"

// utility function
// createRequest accepts a url passed in the parameter and simply returns an object the url and headers equal to cryptoApiHeaders
const createRequest = (url) =>({url, headers: cryptoApiHeaders})

// cryptoApi equals createApi that is coming from redux
// and then pass some options, inside the createApi object.
// First is reducerPath, saying what is this reducer for? Provide
// name, and in this case its 'cryptoApi',
// Next provide baseQuery is equal to fetchBaseQuery which is a function that accepts
// an object and inside pass baseUrl,
// final and important is endpoints and equal to an arrow function where 
// pass in builder as a paramter and the function instantly returns an object
// then inside the object, specify the names of the object, for example 
// can name anything so will call getCryptos and that will be equal to builder.query({})
// pass an object as options again and inside query: another function thats going to point 
// to that specific request. So lets say want to get info for exchanges it would be '/exchanges'
// but keep in mind that if we want to make this request we also need to pass the headers.
// so can create a simple utility function called createRequest that will add the url and the header
// to the call. now in query instead of calling '/exchanges' can call createRequest('/exchanges') and
// pass in the url which in this case is /exchanges.
// change end point to '/coins' need info on coins.
// now have cryptoApi that is being used in store
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        // getCryptos query, and can export
        getCryptos: builder.query({
            query: ()=> createRequest('/coins')
        })
    })
})
// exporting
// redux toolkit creates a hook, that can be called instantly
// to get all data from query, they also give loading state and finalizing state
// and much more while making an api call.
// GetCryptos has to be the same as the query getCryptos above and  use has to be infront
// ending with Query
export const {useGetCryptosQuery} = cryptoApi;
