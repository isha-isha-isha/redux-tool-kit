import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Slices/produceSlice'
import cartReducer from './Slices/mycart'
import logger from "./middleware/logger";

export const store=configureStore({
    reducer:{
        products:productReducer,
        cartItem:cartReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
