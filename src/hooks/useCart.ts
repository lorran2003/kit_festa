import { useEffect, useState } from "react";
import type { UUIDTypes } from "uuid";
import type { DataPie, ValuesPies } from "../const/datas";

export type OrderToCartType = {
  id: UUIDTypes;
  nome: string;
  pessoas: string;
  salgados: { sabor: string, quantidade: number }[];
  docinhos: { sabor: string, quantidade: number }[];
  torta: {
    tamanho: number;
    sabor: string;
    image: string
  };
  preco: string;
}

export type ExtraPieType = {
  id: UUIDTypes;
  dataPies: DataPie;
  valores: ValuesPies;
};

export function useCart() {

  const [items, setItems] = useState<OrderToCartType[]>(() => {
    const storedItems = sessionStorage.getItem("pedidoKitFesta");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [extraPie, setExtraPie] = useState<ExtraPieType[]>(() => {
    const storedItems = sessionStorage.getItem("extraPie");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("pedidoKitFesta", JSON.stringify(items));
    sessionStorage.setItem("extraPie", JSON.stringify(extraPie));
  }, [items, extraPie]);

  function addItem(newItem: OrderToCartType) {
    setItems([...items, newItem]);
  }

  function addExtraPie(newItem: ExtraPieType) {
    setExtraPie([...extraPie, newItem]);
  }

  function removeItem(idItem: UUIDTypes) {
    setItems(items.filter((item) => item.id !== idItem));
  }

  function removeExtraPie(idItem: UUIDTypes) {
    setExtraPie(extraPie.filter((item) => item.id !== idItem));
  }

  function removeAllItemToCart() {
    setItems([]);
    setExtraPie([]);
  }

  return {
    items,
    addItem,
    removeItem,
    extraPie,
    addExtraPie,
    removeExtraPie,
    removeAllItemToCart
  }
}
