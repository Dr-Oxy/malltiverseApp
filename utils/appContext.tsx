import React, { useState, createContext, ReactNode } from 'react';

import { PropsWithChildren, AppContextType, Item } from './@types/context';

const emptyItem: Item = {
  id: 1,
  name: '',
  current_price: '',
  unit: '',
  photos: '',
  description: '',
  qty: 0,
  available_quantity: 0,
};

// Provide a default value for the context
const defaultContextValue: AppContextType = {
  cart: [],
  setCart: () => {},
  onAdd: () => {},
  onRemove: () => {},
  onDelete: () => {},
  selected: emptyItem,
  setSelected: () => {},
};

// export const AppContext = createContext<AppContextType>(defaultContextValue);
export const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Item[]>([
    {
      id: 1,
      name: 'Hello Kitty',
      current_price: '3000',
      unit: 'USF',
      photos:
        'https://api.timbu.cloud/images/girlies/product_pink_princess_a27c74_1.jpg',
      description: '',
      qty: 1,
      available_quantity: 0,
    },
    {
      id: 4,
      name: 'Ladies Leather Chic Bag',
      current_price: '3000',
      unit: 'USF',
      photos:
        'https://api.timbu.cloud/images/girlies/product_terrain_boots_d4f648_1.jpg',
      description: '',
      qty: 1,
      available_quantity: 0,
    },
    {
      id: 2,
      name: 'Brown Crop Top SweatShirt',
      current_price: '3000',
      unit: 'USF',
      photos:
        'https://api.timbu.cloud/images/girlies/product_print_crop_top_8edb3b_1.jpg',
      description: '',
      qty: 1,
      available_quantity: 0,
    },
    {
      id: 3,
      name: 'Itel Bluetooth Earphones',
      current_price: '3000',
      unit: 'USF',
      photos:
        'https://api.timbu.cloud/images/girlies/product_two_piece_41ec35_1.jpg',
      description: '',
      qty: 1,
      available_quantity: 0,
    },
    {
      id: 9,
      name: 'Brown Crop Top SweatShirt',
      current_price: '3000',
      unit: 'USF',
      photos:
        'https://api.timbu.cloud/images/girlies/product_print_crop_top_8edb3b_1.jpg',
      description: '',
      qty: 1,
      available_quantity: 0,
    },
  ]);
  const [selected, setSelected] = useState<any>();

  // add to cart
  const onAdd = (product: Item) => {
    //checks if the product already exist in the cart
    const itemExist = cart.find((x) => x.id === product.id);

    //If product exists in cart
    if (itemExist) {
      setCart(
        cart.map((x) =>
          x.id === product.id
            ? { ...itemExist, qty: itemExist.qty + product.qty }
            : x,
        ),
      );
    } else {
      //if product doesn't exist in cart, add to cart
      setCart([...cart, { ...product }]);
    }
  };

  // delete cart item
  const onRemove = (product: Item) => {
    const itemExist = cart.find((x) => x.id === product.id);

    if (itemExist && itemExist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else if (itemExist) {
      setCart(
        cart.map((x) =>
          x.id === product.id
            ? { ...itemExist, qty: (itemExist.qty || 0) - 1 }
            : x,
        ),
      );
    }
  };

  const onDelete = (product: Item) => {
    const itemExist = cart.find((x) => x.id === product.id);

    if (itemExist) {
      setCart(cart.filter((x) => x.id !== product.id));
    }
  };

  const value = {
    cart,
    setCart,
    onAdd,
    onRemove,
    onDelete,
    selected,
    setSelected,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
