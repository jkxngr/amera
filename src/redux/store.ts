"use client"
import { configureStore } from "@reduxjs/toolkit";
import cart from "@/redux/reducers/cartReducer";
import favorites from "@/redux/reducers/favorites";
export const store = configureStore({
  reducer: {
    cart,
    favorites,
  },
});
