// reducers.js
import { createReducer } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from '../state/actions';

const initialState = {
  cart:{
    cartItems: [],
  }
};

const cartReducer = createReducer(initialState, builder => {
  builder
    .addCase(addToCart, (state, action) => {
      state.cart.cartItems.push({ ...action.payload, quantity: 1 });
    })
    .addCase(removeFromCart, (state, action) => {
      state.cart.cartItems = state.cart.cartItems.filter(item => item.id !== action.payload);
    })
    .addCase(incrementQuantity, (state, action) => {
      const item = state.cart.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    })
    .addCase(decrementQuantity, (state, action) => {
      const item = state.cart.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity = Math.max(0, item.quantity - 1);
      }
      state.cart.cartItems = state.cart.cartItems.filter(item => item.quantity > 0);
    });
});

export default cartReducer;
