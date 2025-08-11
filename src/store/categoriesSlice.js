import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "category",
    initialState: {
        allCategories: [],
        categoryToggle: false,
        categoryLoad: false
    },
    reducers: {
        saveAllCategoriesAction: (state, action) => {
            state.allCategories = action.payload
            state.categoryLoad = true
        },
        toggleCategoryAction: (state) => {
            state.categoryToggle = !state.categoryToggle
        }
     }
})

export const {saveAllCategoriesAction, toggleCategoryAction} = categoriesSlice.actions;
export default categoriesSlice.reducer;