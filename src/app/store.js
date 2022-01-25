import {configureStore} from '@reduxjs/toolkit';
// use in src/index.js

// connecting api to store
// inside reducer add [cryptoApi.reduerPath]: cryptoApi.reducer,
// redux will handle everything else, just have to specify that for
// every single reducer thats created
// have all the variables like reducerPath and reducer
// application should be connected now. have to see which data to get first
// then fetch from appropriate endpoint fromt he api
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
// first paramter is reducer equal to an empty object
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
})