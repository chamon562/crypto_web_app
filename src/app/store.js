import {configureStore} from '@reduxjs/toolkit';
// use in src/index.js

// connecting api to store
// inside reducer add [cryptoApi.reduerPath]: cryptoApi.reducer,
// redux will handle everything else, just have to specify that for
// every single reducer thats created
import { cryptoApi } from '../services/cryptoApi';

// first paramter is reducer equal to an empty object
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
})