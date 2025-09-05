import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteProducts: [],
    favoriteCounter: 0,
  },
  reducers: {
    addToFavoriteAction: (state, action) => {
      let copyFavorite = [...state.favoriteProducts];
      let findIndex = null;

      copyFavorite.find((product, index) => {
        if (product.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      if (findIndex === null) {
        console.log(action.payload);
        copyFavorite.push({...action.payload})
        state.favoriteCounter++;        
        state.isFavorite = !state.isFavorite
    } else{
        copyFavorite.splice(findIndex, 1)
        state.favoriteCounter--;
      }

      state.favoriteProducts = copyFavorite
    },
  },
});

export const { addToFavoriteAction } = favoriteSlice.actions;
export default favoriteSlice.reducer;
