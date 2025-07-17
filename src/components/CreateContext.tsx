import { createContext } from "react";

type ControlMessageContextType = {
  notificationMessage: boolean;
  setNotificationMessage: (value: boolean) => void;
  modalCart: boolean;
  setModalCart: (value: boolean) => void;
}

export const ControlMessageContext = createContext<ControlMessageContextType>(
  {
    notificationMessage: false,
    setNotificationMessage: () => { },
    modalCart: false,
    setModalCart: () => { }
  }
);
