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
        copyCart.push({
          ...action.payload, quantity: 1, productPriceTotal: action.payload.price,
        });
        state.cartCounter++;
      } else {
        copyCart[findIndex].quantity++;
      }

      state.cartProducts = copyCart;
    },

    removeProductAction: (state, action) => {
      let copyCart = [...state.cartProducts];
      let findIndex = null;

      // checking product by id
      copyCart.find((product, index) => {
        if (product.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

    // product remove and decrease cartCounter
      copyCart.splice(findIndex, 1);
      state.cartCounter--;

      state.cartProducts = copyCart;
    },
  },
});

export const { addToCartAction, removeProductAction } = cartSlice.actions;
export default cartSlice.reducer;
