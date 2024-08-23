import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cartSlice'
import productReducer from "./productSlice";
import authReducer from './authSlice'
const store = configureStore({
    reducer:{
        cart: CartReducer,
        product:productReducer,
        auth: authReducer
    }
})
export default store;