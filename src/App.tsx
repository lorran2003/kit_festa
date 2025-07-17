import { useState } from 'react';
import { CardapioKitsFesta } from './components/CardapioKitsFesta'
import { ModalPedido } from './components/ModalPedido';
import { ControlMessageContext } from './components/CreateContext';
import AlertMessage from './components/AlertMessage';
import { useCart } from './hooks/useCart';


export default function App() {
  const [notificationMessage, setNotificationMessage] = useState<boolean>(false);
  const [modalCart, setModalCart] = useState<boolean>(false);
  const { addItem, removerItem, items } = useCart();
  return (
    <ControlMessageContext value={{ notificationMessage, setNotificationMessage, modalCart, setModalCart }}>
      <ModalPedido items={items} removerItem={removerItem} />
      <CardapioKitsFesta addItem={addItem} />
      <AlertMessage openModal={setModalCart} />
    </ControlMessageContext>
  )
}

