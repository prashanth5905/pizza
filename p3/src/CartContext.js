import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: 1,
    }));
  };

  const increaseQty = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] + 1,
    }));
  };

  const decreaseQty = (itemId) => {
    setCart((prevCart) => {
      if (prevCart[itemId] === 1) {
        const { [itemId]: _, ...rest } = prevCart;
        return rest;
      }
      return {
        ...prevCart,
        [itemId]: prevCart[itemId] - 1,
      };
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
