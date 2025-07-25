import { useEffect, useState } from "react";

export type orderToCart = {
  nome: string;
  pessoas: string;
  salgados: number;
  docinhos: number;
  torta: {
    tamanho: number;
    sabor: string;
    image: string
  };
  preco: string;
}

export function useCart() {
  const [items, setItems] = useState<orderToCart[]>(() => {
    const storedItems = localStorage.getItem("pedidoKitFesta");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("pedidoKitFesta", JSON.stringify(items));
  }, [items]);

  function addItem(newItem: orderToCart) {
    setItems([...items, newItem]);
  }

  function removerItem(index: number) {
    const filterItems = items.filter((_, i) => i !== index);
    setItems(filterItems);
  }

  return {
    items,
    addItem,
    removerItem
  }
}
