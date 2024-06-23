"use client"
import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartItems");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const initialState = {
  items: loadState(),
  totalItemsCount: 0,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item: { id: number; }) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item: { id: number; }) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item: { id: number; }) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
   
  },
});

export default cartReducer.reducer;
export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartReducer.actions;
