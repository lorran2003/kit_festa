import { useEffect, useState } from "react";
import type { UUIDTypes } from "uuid";

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

export function useCart() {
  const [items, setItems] = useState<OrderToCartType[]>(() => {
    const storedItems = localStorage.getItem("pedidoKitFesta");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("pedidoKitFesta", JSON.stringify(items));
  }, [items]);

  function addItem(newItem: OrderToCartType) {
    setItems([...items, newItem]);
  }

  function removerItem(idItem: UUIDTypes) {
    const filterItems = items.filter((item) => item.id !== idItem);
    setItems(filterItems);
  }

  return {
    items,
    addItem,
    removerItem
  }
}
