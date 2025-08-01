import { createContext } from "react";
import type { ExtraPieType, OrderToCartType } from "../hooks/useCart";
import type { UUIDTypes } from "uuid";

type ControlMessageContextType = {
  modalSelectOptions: boolean;
  setModalSelectOptions: (value: boolean) => void;
  modalCart: boolean;
  setModalCart: (value: boolean) => void;
  modalExtraPie: boolean;
  setModalExtraPie: (value: boolean) => void;
  order: OrderToCartType[];
  addItem: (newItem: OrderToCartType) => void;
  removeItem: (id: UUIDTypes) => void;
  extraPie: ExtraPieType[];
  addExtraPie: (newItem: ExtraPieType) => void;
  removeExtraPie: (id: UUIDTypes) => void;
  removeAllItemToCart: () => void;
}

export const ControlComponentsContext = createContext<ControlMessageContextType>(
  {
    modalSelectOptions: false,
    setModalSelectOptions: () => { },
    modalCart: false,
    setModalCart: () => { },
    addItem: () => { },
    removeItem: () => { },
    order: [],
    extraPie: [],
    addExtraPie: () => { },
    removeExtraPie: () => { },
    modalExtraPie: false,
    setModalExtraPie: () => { },
    removeAllItemToCart: () => { }
  }
);
