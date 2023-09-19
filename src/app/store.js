import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api/apiSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefoultMiddleware => 
        getDefoultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

setupListeners(store.dispatch)