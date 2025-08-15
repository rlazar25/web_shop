import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    cartCounter: 0,
    cartLoader: false,
  },
  reducers: {
    addToCartAction: (state, action) => {
      let copyCart = [...state.cartProducts];
      let findIndex = null;

      // check if the product already exists in the cart and get its index
      copyCart.find((product, index) => {
        if (product.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      // if product doesn't exist, add it. Otherwise increase its count
      if (findIndex === null) {
        copyCart.push({...action.payload, count: 1, productPriceTotal: action.payload.price,
        });
        state.cartCounter++;
      } else {
        copyCart[findIndex].count++;
      }

      state.cartProducts = copyCart;
    },
  },
});

export const { addToCartAction } = cartSlice.actions;
export default cartSlice.reducer;
