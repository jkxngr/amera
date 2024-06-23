"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import React from "react";

export const NextAuthStore: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
