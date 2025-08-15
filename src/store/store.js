import { configureStore } from "@reduxjs/toolkit";
// slices
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./CartSlice"

const store = configureStore({
    reducer:{
        categoriesStore: categoriesSlice,
        productsStore: productsSlice,
        cartStore: cartSlice,
    }
})

export default store