import { createContext } from "react";
import type { kitsType } from "./CardapioKitsFesta";

type ControlMessageContextType = {
  notificationMessage: boolean;
  setNotificationMessage: (value: boolean) => void;
  modalCart: boolean;
  setModalCart: (value: boolean) => void;
  addItem: (newItem: kitsType) => void;
  removerItem: (index: number) => void;
  order: kitsType[];
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
