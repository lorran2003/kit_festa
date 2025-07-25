import { createContext } from "react";
import type { orderToCart } from "../hooks/useCart";

type ControlMessageContextType = {
  notificationMessage: boolean;
  setNotificationMessage: (value: boolean) => void;
  modalCart: boolean;
  setModalCart: (value: boolean) => void;
  addItem: (newItem: orderToCart) => void;
  removerItem: (index: number) => void;
  order: orderToCart[];
}

export const ControlMessageContext = createContext<ControlMessageContextType>(
  {
    notificationMessage: false,
    setNotificationMessage: () => { },
    modalCart: false,
    setModalCart: () => { },
    addItem: () => { },
    removerItem: () => { },
    order: [],
  }
);
