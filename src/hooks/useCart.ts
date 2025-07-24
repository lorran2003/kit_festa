import { useEffect, useState } from "react";
import type { kitsType } from "../components/CardapioKitsFesta";


export function useCart() {
  const [items, setItems] = useState<kitsType[]>(() => {
    const storedItems = localStorage.getItem("pedidoKitFesta");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("pedidoKitFesta", JSON.stringify(items));
  }, [items]);

  function addItem(newItem: kitsType) {
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
