// reducers.js
import { createReducer } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity,booked,auth } from '../state/actions';

const initialState = {
  cart:{
    cartItems: [],
  }, 
  booked:{
    bookedItems:[]
  }, 
  auth:{
    allow:false
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
    })    
    .addCase(booked, (state) => {
      state.booked.bookedItems.push(...state.cart.cartItems);
      state.cart.cartItems = [];
    })
    .addCase(auth, (state,action) => {
      state.auth.allow=action.payload;
      
    });

});

export default cartReducer;
