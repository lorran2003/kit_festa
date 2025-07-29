import { useEffect, useState } from 'react';
import { CardapioKitsFesta } from './components/CardapioKitsFesta'
import { ModalPedido } from './components/ModalPedido';
import { ControlMessageContext } from './components/CreateContext';
import { useCart } from './hooks/useCart';
import { Bounce, ToastContainer } from 'react-toastify';


export default function App() {
  const [notificationMessage, setNotificationMessage] = useState<boolean>(false);
  const [modalCart, setModalCart] = useState<boolean>(false);
  const { addItem, removerItem, items } = useCart();

  const isModalOrNotificationOpen = notificationMessage || modalCart;

  useEffect(() => {
    if (isModalOrNotificationOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isModalOrNotificationOpen]);

  return (
    <ControlMessageContext value={
      {
        notificationMessage, setNotificationMessage, modalCart, setModalCart, addItem, removerItem, order: items
      }
    }>
      <ModalPedido />
      <CardapioKitsFesta />
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        limit={1}
      />
    </ControlMessageContext>
  )
}

