import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    allCategories: [],
    categoryToggle: false,
    categoryLoad: false,
    currentCategory: "",
  },
  reducers: {
    saveAllCategoriesAction: (state, action) => {
      state.allCategories = action.payload;
      state.categoryLoad = true;
    },
    toggleCategoryAction: (state) => {
      state.categoryToggle = !state.categoryToggle;
    },
    currentCategoryAction: (state, action) => {
        state.currentCategory = action.payload
    },
  },
});

export const {
  saveAllCategoriesAction,
  toggleCategoryAction,
  currentCategoryAction,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
