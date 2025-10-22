import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    totalPrice: 0,
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
          ...action.payload,
          quantity: 1,
          productPriceTotal: action.payload.price,
        });
        state.totalPrice += action.payload.price;
      } else {
        copyCart[findIndex].quantity++;
        state.totalPrice += action.payload.price;
      }

      localStorage.setItem("cart", JSON.stringify(copyCart));
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
      state.totalPrice -=
        action.payload.productPriceTotal * action.payload.quantity;

      localStorage.setItem("cart", JSON.stringify(copyCart));
      state.cartProducts = copyCart;
    },
    decreaseQuantityAction: (state, action) => {
      let copyCart = [...state.cartProducts];
      let findIndex = null;

      copyCart.find((product, index) => {
        if (product.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });
      // decrease quantity and price
      if (copyCart[findIndex].quantity > 1) {
        copyCart[findIndex].quantity--;
        state.totalPrice -= action.payload.price;
      }
    },
    increaseQuantityAction: (state, action) => {
      let copyCart = [...state.cartProducts];
      let findIndex = null;

      copyCart.find((product, index) => {
        if (product.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });
      // increase quantity and price
      if (copyCart[findIndex].quantity < copyCart[findIndex].stock) {
        copyCart[findIndex].quantity++;
        state.totalPrice += action.payload.price;
      }
    },
    clearCartAction: (state) => {
      state.cartProducts = [];
      state.totalPrice = 0;
      localStorage.removeItem("cart");
    },
    restoreCartAction: (state, action) => {
      state.cartProducts = action.payload;
      state.totalPrice = action.payload.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);
    },
  },
});

export const {
  addToCartAction,
  removeProductAction,
  decreaseQuantityAction,
  increaseQuantityAction,
  clearCartAction,
  restoreCartAction,
} = cartSlice.actions;
export default cartSlice.reducer;
