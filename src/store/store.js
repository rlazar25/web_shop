import { configureStore } from "@reduxjs/toolkit";
// slices
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
    reducer:{
        categoriesStore: categoriesSlice,
        productsStore: productsSlice
    }
})

export default store