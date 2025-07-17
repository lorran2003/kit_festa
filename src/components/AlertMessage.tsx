import { useContext } from "react";
import { ControlMessageContext } from "./CreateContext";

export default function AlertMessage({ openModal }: { openModal: (value: boolean) => void }) {

  const { notificationMessage ,setNotificationMessage } = useContext(ControlMessageContext);

  const openCart = () => {
    setNotificationMessage(false);
    openModal(true);
  }

  return (
    <div className={`fixed bg-zinc-900/5 backdrop-blur-sm top-0 left-0 w-full h-full flex items-center justify-center z-50 transition-all duration-300 ${ notificationMessage ? 'opacity-100 z-50 pointer-events-auto' : ' opacity-0 -z-50 pointer-events-none'} `}>

      <div className="bg-zinc-50 p-6 rounded-lg shadow-lg flex flex-col items-center gap-4 w-11/12 sm:w-auto">

        <h2 className="text-2xl font-bold text-pink-600 italic">
          Seu pedido foi adicionado ao carrinho !!! 🥳
        </h2>

        <div className="flex gap-2">

          <button
            type="button"
            aria-label="Fechar alerta"
            onClick={() => setNotificationMessage(false)}
            className="bg-pink-500 text-white px-4 py-2 rounded shadow"
          >
            Continuar comprando
          </button>

          <button
            type="button"
            aria-label="Fechar alerta"
            onClick={() => openCart()}
            className="bg-pink-500 text-white px-4 py-2 rounded shadow"
          >
            Abrir carrinho
          </button>
        </div>
      </div>
    </div>
  )
}
