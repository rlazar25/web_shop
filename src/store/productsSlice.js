import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    productsLoad: false,
    loadMore: 20,
    searchProducts: '',
  },
  reducers: {
    saveAllProductsAction: (state, action) => {
      state.allProducts = action.payload;
      state.productsLoad = true;
    },
    loadMoreAction: (state) => {
      state.loadMore += 20;
    },
    handleSearchAction: (state, action) =>{
      state.searchProducts = action.payload
    }
  },
});

export const { saveAllProductsAction, loadMoreAction, handleSearchAction } = productsSlice.actions;
export default productsSlice.reducer;
