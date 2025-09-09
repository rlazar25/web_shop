import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    productsLoad: false,
    loadMore: 20,
  },
  reducers: {
    saveAllProductsAction: (state, action) => {
      state.allProducts = action.payload;
      state.productsLoad = true;
    },
    loadMoreAction: (state, action) => {
      state.loadMore += 20;
      console.log(state.loadMore);
      
    },
  },
});

export const { saveAllProductsAction, loadMoreAction } = productsSlice.actions;
export default productsSlice.reducer;
