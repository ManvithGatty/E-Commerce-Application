import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

// Cart Slice creation for Store
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Functionality to add items to the cart
    addToCart(state, action) {
      const item = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    // Functionality to remove items to the cart
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // Functionality to increase or decrease items for the cart
    incrementQuantity(state, action) {
      const item = state.cartItems.find(
        (product) => product.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const item = state.cartItems.find(
        (product) => product.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
