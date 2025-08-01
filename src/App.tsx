import { useEffect, useMemo, useState } from 'react';
import { CardapioKitsFesta } from './components/CardapioKitsFesta'
import { ModalPedido } from './components/modalCart/ModalPedido';
import { ControlComponentsContext } from './components/CreateContext';
import { useCart } from './hooks/useCart';
import { Bounce, ToastContainer } from 'react-toastify';
import { ModalExtraPie } from './components/ModalExtraPie';
import { Theme } from "@radix-ui/themes";

export default function App() {
  const [modalSelectOptions, setModalSelectOptions] = useState<boolean>(false);
  const [modalCart, setModalCart] = useState<boolean>(false);
  const [modalExtraPie, setModalExtraPie] = useState<boolean>(false);
  const { addItem, removeItem, items, addExtraPie, extraPie, removeExtraPie, removeAllItemToCart } = useCart();
  const isModalOrNotificationOpen = modalSelectOptions || modalCart || modalExtraPie;

  useEffect(() => {
    if (isModalOrNotificationOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isModalOrNotificationOpen]);

  const contextValue = useMemo(() => ({
    modalSelectOptions,
    setModalSelectOptions,
    modalCart,
    setModalCart,
    addItem,
    removeItem,
    order: items,
    addExtraPie,
    extraPie,
    removeExtraPie,
    modalExtraPie,
    setModalExtraPie,
    removeAllItemToCart
  }), [
    modalSelectOptions,
    setModalSelectOptions,
    modalCart, setModalCart,
    addItem,
    removeItem,
    items,
    addExtraPie,
    extraPie,
    removeExtraPie,
    modalExtraPie,
    setModalExtraPie,
    removeAllItemToCart
  ]);


  return (
    <Theme>
      <ControlComponentsContext value={contextValue}>
        <ModalPedido />
        <ModalExtraPie />
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
      </ControlComponentsContext >
    </Theme>
  )
}

