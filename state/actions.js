// action.js
import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('ADD_TO_CART');
export const removeFromCart = createAction('REMOVE_FROM_CART');
export const emptyCart = createAction('EMPTY_CART');
export const booked = createAction('BOOKED');
export const incrementQuantity = createAction('INCREMENT_QUANTITY');
export const decrementQuantity = createAction('DECREMENT_QUANTITY');
export const auth = createAction('AUTH');