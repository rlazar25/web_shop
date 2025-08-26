import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favoriteProducts: [],
        favoriteCount: 0
    },
    reducers: {
        addToFavoriteAction: (state, action) => {
            console.log(action.payload);
        }
    }
})

export const {addToFavoriteAction} = favoriteSlice.actions;
export default favoriteSlice.reducer