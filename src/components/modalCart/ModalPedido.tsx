import { faCartShopping, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ControlComponentsContext } from "../CreateContext";
import type { OrderToCartType } from "../../hooks/useCart";
import { ExtraPie } from "./ExtraPie";
import { ListOrder } from "./ListOrder";
import { submitMessageWhatsApp } from "../../func/wtt";
import { CardExtraPie } from "./CardExtraPie";


export function ModalPedido() {

  const { modalCart, setModalCart, order, removeItem, extraPie, removeExtraPie, setModalExtraPie } = useContext(ControlComponentsContext);

  const submitWpp = () => {
    setModalCart(false);
    submitMessageWhatsApp(order);
  }

  const totalPrice = () => {

    const convertNumber = order.map((item: OrderToCartType) => Number(item.preco.replace(',', '.')));

    return convertNumber.reduce((prev: number, cur: number) => prev + cur, 0).toFixed(2);

  }

  return (
    <>
      <button
        className="fixed top-20 sm:top-5 right-6 p-3 rounded-full bg-pink-500 shadow-lg hover:bg-pink-600 transition-colors  duration-300 cursor-pointer z-30 flex justify-center items-center gap-1"
        type="button"
        aria-label='Visualizar carrinho'
        onClick={() => setModalCart(!modalCart)}
      >

        <FontAwesomeIcon icon={faCartShopping} color='white' size='xl' />

        <span className="text-zinc-50 text-xl">{order.length}</span>

      </button>

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-40 flex justify-end transition-all duration-500 ${modalCart ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`h-full w-full max-w-md bg-white p-6 rounded-l-lg shadow-lg transform transition-transform duration-500 overflow-auto ${modalCart ? 'translate-x-0' : 'translate-x-full'}`}
        >

          <div className="relative w-full">
            <button
              type="button"
              aria-label="Fechar modal"
              onClick={() => setModalCart(false)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 px-2.5 py-1 rounded shadow transition"
            >
              <FontAwesomeIcon icon={faX} color='white' size="lg" />

            </button>
          </div>

          <h2 className="text-xl font-bold my-4 italic">Seu pedido 🥳 !!!</h2>
          {
            order.length > 0 && (
              <span>Valor total: R$ {totalPrice()}</span>
            )
          }
          {
            order.length > 0 ? (
              <div className="text-gray-700">
                <p>Items no carrinho:</p>
                <div className="list-disc pr-5">
                  <ListOrder order={order} removeItem={removeItem} />
                </div>
              </div>
            ) : (
              <p className="text-gray-700">Seu carrinho está vazio! 🫣</p>
            )
          }

          {extraPie.length > 0 && (<CardExtraPie items={extraPie} removeItem={removeExtraPie} />)}

          <ExtraPie openModal={setModalExtraPie} />

          <div className="grid grid-cols-2 justify-center items-center gap-2">

            <button type="button"
              typeof="button"
              aria-label="Voltar ao cardápio"
              className="mt-4 bg-gray-50 hover:bg-gray-200 text-zinc-900 font-semibold py-2 px-4 rounded shadow transition w-full"
              onClick={() => setModalCart(false)}
            >
              Voltar

            </button>

            <button type="button"
              typeof="button"
              aria-label="Finalizar pedido"
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded shadow transition w-full"
              onClick={() => submitWpp()}
            >
              Finalizar Pedido

            </button>
          </div>
        </div >
      </div >
    </>
  )
}
