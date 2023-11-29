import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // total qty
  const [itemAmount, setItemAmount] = useState(0);
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // total amount
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (cart) {
      const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0);
      setTotal(total);
    }
  }, [cart]);

  // add to cart item
  const AddToCart = (item, id) => {
    const newItem = { ...item, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  // remove form cart
  const RemoveItem = (id) => {
    const newItem = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newItem);
  };

  // Incress and Decress
  const IncressBtn = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    AddToCart(cartItem, id);
  };
  const DecressBtn = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCartItem = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCartItem);
    }
    if (cartItem.amount < 2) {
      RemoveItem(id);
    }
  };
  //   let CartItemInfo;
  //   CartItemInfo={
  // id:id + Color,
  // name:product.name,
  // Color,
  // qty,
  // image:product.image[0].url,
  // price:product.price,
  // max:product.stock
  //   }

  // const AddToCart=(id, Color, qty, product){

  // }

  return (
    <CartContext.Provider
      value={{
        cart,
        AddToCart,
        RemoveItem,
        IncressBtn,
        DecressBtn,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
