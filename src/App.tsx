import { useEffect, useMemo, useState, Suspense, lazy } from 'react';
import { ControlComponentsContext } from './components/CreateContext';
import { useCart } from './hooks/useCart';
import { Bounce, ToastContainer } from 'react-toastify';
import { Theme } from "@radix-ui/themes";
import { Header } from './components/Header';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ButtonCart } from './components/ButtonCart';
import { Footer } from './components/Footer';

// Lazy load components for better performance
const Carousel = lazy(() => import('./components/Carousel').then(module => ({ default: module.Carousel })));
const CardapioKitsFesta = lazy(() => import('./components/CardapioKitsFesta').then(module => ({ default: module.CardapioKitsFesta })));
const ModalPedido = lazy(() => import('./components/modalCart/ModalPedido').then(module => ({ default: module.ModalPedido })));
const ModalExtraPie = lazy(() => import('./components/ModalExtraPie').then(module => ({ default: module.ModalExtraPie })));

export default function App() {
  const [modalSelectOptions, setModalSelectOptions] = useState<boolean>(false);
  const [modalCart, setModalCart] = useState<boolean>(false);
  const [modalExtraPie, setModalExtraPie] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { addItem, removeItem, items, addExtraPie, extraPie, removeExtraPie, removeAllItemToCart } = useCart();
  const isModalOrNotificationOpen = modalSelectOptions || modalCart || modalExtraPie;

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    modalCart,
    setModalCart,
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

  if (isLoading) {
    return (
      <Theme>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/src/assets/image/logo_festa.jpg"
                alt="Felicita Festas Rio"
                className="w-24 h-24 rounded-full mx-auto shadow-lg"
              />
            </div>
            <LoadingSpinner size="lg" text="Carregando..." />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mt-4">
              Felicita Festas Rio
            </h1>
          </div>
        </div>
      </Theme>
    );
  }

  return (
    <Theme>
      <ControlComponentsContext value={contextValue}>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
          <Header />
          <main>
            <ButtonCart />

            <Suspense fallback={null}>
              <Carousel />
            </Suspense>

            <Suspense fallback={
              <div className="flex items-center justify-center py-20">
                <LoadingSpinner size="lg" text="Carregando cardápio..." />
              </div>
            }>
              <CardapioKitsFesta />
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <ModalPedido />
          </Suspense>

          <Suspense fallback={null}>
            <ModalExtraPie />
          </Suspense>

          <Footer />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
          limit={3}
          toastClassName="rounded-xl shadow-lg"
        />
      </ControlComponentsContext>
    </Theme>
  )
}