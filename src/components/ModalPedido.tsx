import { faCartShopping, faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ControlMessageContext } from "./CreateContext";
import type { kitsType } from "./CardapioKitsFesta";

export function ModalPedido() {

  const { modalCart, setModalCart, order, removerItem } = useContext(ControlMessageContext);

  return (
    <>
      <button
        className="fixed top-20 sm:top-5 right-6 p-3 rounded-full bg-pink-500 shadow-lg hover:bg-pink-600 transition-colors  duration-300 cursor-pointer z-50 flex justify-center items-center gap-1"
        type="button"
        aria-label='Visualizar carrinho'
        onClick={() => setModalCart(!modalCart)}
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)' }}
      >

        <FontAwesomeIcon icon={faCartShopping} color='white' size='xl' />

        <span className="text-zinc-50 text-xl">{order.length}</span>

      </button>


      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-40 flex justify-end transition-all duration-500 ${modalCart ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{ transitionProperty: 'background, transform' }}
      >
        <div
          className={`h-full w-full max-w-md bg-white p-6 rounded-l-lg shadow-lg transform transition-transform duration-500 ${modalCart ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button
            onClick={() => setModalCart(false)}
            className="bg-red-500 px-2 py-1 rounded-full shadow transition"
          >
            <FontAwesomeIcon icon={faX} color='white' size="lg" />

          </button>

          <h2 className="text-xl font-bold my-4 italic">Seu pedido 🥳 !!!</h2>
          {
            order.length > 0 ? (
              <div className="text-gray-700">
                <p>Items no carrinho:</p>
                <ul className="list-disc pr-5">
                  {order.map((item: kitsType, index: number) => (
                    <li key={index} className="grid grid-cols-3 justify-start items-center py-2">
                      <p className="text-lg italic">{item.nome}</p>
                      <p className="text-lg italic">{item.preco}</p>
                      <button
                        type="button"
                        aria-label="Remover item do carrinho"
                        className="roudned-sm bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded shadow transition"
                        onClick={() => removerItem(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} color='white' size="lg" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-700">Seu carrinho está vazio! 🫣</p>
            )
          }
          <p className="text-gray-700">Entraremos em contato pelo WhatsApp para confirmar os detalhes.</p>
        </div >
      </div >
    </>
  )
}
