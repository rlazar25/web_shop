import { configureStore } from "@reduxjs/toolkit";
// slices
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice"
import userSlice from "./userSlice"

const store = configureStore({
    reducer:{
        categoriesStore: categoriesSlice,
        productsStore: productsSlice,
        cartStore: cartSlice,
        favoriteStore: favoriteSlice,
        userStore: userSlice
    }
})

export default store