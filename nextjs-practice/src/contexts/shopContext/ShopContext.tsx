import React, { createContext, useState } from "react";

interface ShopContextType {
  totalProducts: number;
  showingProducts: number;
  setShowingProducts: React.Dispatch<React.SetStateAction<number>>;
  setTotalProducts: React.Dispatch<React.SetStateAction<number>>;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopProviderProps {
  children: React.ReactNode;
}

export const ShopProvider = ({ children }: ShopProviderProps) => {
  const [showingProducts, setShowingProducts] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  return (
    <ShopContext.Provider
      value={{
        totalProducts,
        showingProducts,
        setShowingProducts,
        setTotalProducts,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
