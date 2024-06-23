"use client";
import { FavItem } from "@/components/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("favoriteItems");
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
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<FavItem>) => {
      state.items.push(action.payload);
      localStorage.setItem("favoriteItems", JSON.stringify(state.items));
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item: { id: number; }) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
        localStorage.setItem("favoriteItems", JSON.stringify(state.items));
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
