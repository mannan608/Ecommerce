import React, { createContext, useContext } from "react";
import { ProductContext } from "./ProductContext";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const { products } = ProductContext();
  return (
    <FilterContext.Provider value={{ filterItems }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
