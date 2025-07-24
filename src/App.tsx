import { useState } from 'react';
import { CardapioKitsFesta } from './components/CardapioKitsFesta'
import { ModalPedido } from './components/ModalPedido';
import { ControlMessageContext } from './components/CreateContext';
import { useCart } from './hooks/useCart';


export default function App() {
  const [notificationMessage, setNotificationMessage] = useState<boolean>(false);
  const [modalCart, setModalCart] = useState<boolean>(false);
  const { addItem, removerItem, items } = useCart();
  return (
    <ControlMessageContext value={
      {
        notificationMessage, setNotificationMessage, modalCart, setModalCart, addItem, removerItem, order: items
      }
    }>
      <ModalPedido />
      <CardapioKitsFesta />
    </ControlMessageContext>
  )
}

