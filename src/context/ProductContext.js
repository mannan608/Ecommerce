import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const fetchProducts = async () => {
    // const res = await fetch(`https://fakestoreapi.com/products`);
    const res = await fetch(`https://api.pujakaitem.com/api/products`);
    const data = await res.json();
    setItems(data);
    //   console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ items }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
