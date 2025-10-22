import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteProducts: [],
    favoriteCounter: 0,
  },
  reducers: {
    handleFavoriteAction: (state, action) => {
      let copyFavorite = [...state.favoriteProducts];
      let findIndex = null;

      copyFavorite.find((product, index) => {
        if (product.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      if (findIndex === null) {
        copyFavorite.push({ ...action.payload });
        state.favoriteCounter++;
        state.isFavorite = !state.isFavorite;
      } else {
        copyFavorite.splice(findIndex, 1);
        state.favoriteCounter--;
      }

      state.favoriteProducts = copyFavorite;
      localStorage.setItem("favoriteItems", JSON.stringify(copyFavorite));
    },
    restoreFavoriteAction: (state, action) => {
      state.favoriteProducts = action.payload ? action.payload : [];
      state.favoriteCounter = state.favoriteProducts.length;
    },
    clearFavoriteProductsAction: (state) => {
      state.favoriteProducts = []
      state.favoriteCounter = 0
    },
  },
});

export const { handleFavoriteAction, restoreFavoriteAction, clearFavoriteProductsAction } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
