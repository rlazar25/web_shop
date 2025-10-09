import { configureStore } from "@reduxjs/toolkit";
// slices
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice"
import userSlice from "./userSlice"
import singleProductSlice from "./singleProductSlice"

const store = configureStore({
    reducer:{
        categoriesStore: categoriesSlice,
        productsStore: productsSlice,
        cartStore: cartSlice,
        favoriteStore: favoriteSlice,
        userStore: userSlice,
        singleProductStore: singleProductSlice
    }
})

export default store