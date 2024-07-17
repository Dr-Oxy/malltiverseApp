import React, { useState, createContext } from 'react';

import {
  PropsWithChildren,
  AppContextType,
  Item,
  CartedProps,
} from './@types/context';

const emptyItem: Item = {
  id: 1,
  name: '',
  current_price: '',
  unit: '',
  photos: '',
  description: '',
  qty: 0,
  available_quantity: 0,
  categories: [],
};

// Provide a default value for the context
const defaultContextValue: AppContextType = {
  cart: [],
  setCart: () => {},
  onAdd: () => {},
  onDelete: () => {},
  handleUpdate: () => {},
  selected: emptyItem,
  setSelected: () => {},
  deliveryFee: 0,
};

// export const AppContext = createContext<AppContextType>(defaultContextValue);
export const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Item[]>([]);
  const [selected, setSelected] = useState<any>();
  const deliveryFee = 15;

  //1. Add to cart
  const onAdd = (product: Item, quantity: number) => {
    setCart((prevCart) => {
      const existingCartItem = prevCart.find((item) => item.id === product.id);
      if (existingCartItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item,
        );
      } else {
        return [...prevCart, { ...product, qty: quantity }];
      }
    });
  };

  // 2. Delete  cart
  const onDelete = (product: Item) => {
    const itemExist = cart.find((x) => x.id === product.id);

    if (itemExist) {
      setCart(cart.filter((x) => x.id !== product.id));
    }
  };

  //3. update cart: increase or decrease cart quantity
  const handleUpdate = ({ product, action }: CartedProps) => {
    const itemExist = cart.find((x) => x.id === product.id);

    if (!itemExist) return;

    const newQuantity =
      action === 'increase'
        ? (itemExist.qty || 0) + 1
        : Math.max((itemExist.qty || 0) - 1, 0);

    if (newQuantity === 0) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) => (x.id === product.id ? { ...x, qty: newQuantity } : x)),
      );
    }
  };

  const value = {
    cart,
    setCart,
    onAdd,
    handleUpdate,
    onDelete,
    selected,
    setSelected,
    deliveryFee,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
