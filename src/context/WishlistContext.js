import React, { createContext, useState } from "react";
const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddToWishlist = (item, id) => {
    const newItem = { ...item, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    setCart([...cart, cartItem]);
  };
  // remove form cart
  const RemoveItem = (id) => {
    const newItem = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newItem);
  };

  return (
    <WishlistContext.Provider value={{ cart, AddToWishlist, RemoveItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, WishlistContext };
