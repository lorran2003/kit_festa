import { createContext } from "react";
import type { OrderToCartType } from "../hooks/useCart";
import type { UUIDTypes } from "uuid";

type ControlMessageContextType = {
  notificationMessage: boolean;
  setNotificationMessage: (value: boolean) => void;
  modalCart: boolean;
  setModalCart: (value: boolean) => void;
  addItem: (newItem: OrderToCartType) => void;
  removerItem: (id: UUIDTypes) => void;
  order: OrderToCartType[];
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
