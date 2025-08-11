import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    productsLoad: false,
  },
  reducers: {
    saveAllProductsAction: (state, action) => {
        state.allProducts = action.payload;
        state.productsLoad = true
    },
  },
});

export const { saveAllProductsAction } = productsSlice.actions;
export default productsSlice.reducer;
