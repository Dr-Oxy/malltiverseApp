import { ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

export type AppContextType = {
  cart: Item[];
  setCart: (cart: Item[]) => void;
  onAdd: (product: Item, quanity: number) => void;
  handleUpdate: ({ product: Item, action: string }) => void;
  onDelete: (product: Item) => void;
  selected: Item;
  setSelected: any;
  deliveryFee: number;
};

export interface Item {
  id: number;
  name: string;
  current_price: any;
  unit: string;
  photos: any;
  description: '';
  qty: number;
  available_quantity: number;
  categories: any;
}

export interface PropsWithChildren {
  children: ReactNode;
}

export type NavigationProps = {
  [key: string]: any;
};

export interface CartedProps {
  product: Item;
  action: 'increase' | 'decrease';
}
