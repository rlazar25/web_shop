import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice"

const store = configureStore({
    reducer:{
        categoriesStore: categoriesSlice
    }
})

export default store