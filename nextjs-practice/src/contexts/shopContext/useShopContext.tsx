"use client";

import { useContext } from "react";
import { ShopContext } from "./ShopContext";

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
};
