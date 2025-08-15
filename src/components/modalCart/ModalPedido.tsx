import { faCartShopping, faX, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { ControlComponentsContext } from "../CreateContext";
import type { OrderToCartType } from "../../hooks/useCart";
import { ExtraPie } from "./ExtraPie";
import { ListOrder } from "./ListOrder";
import { CardExtraPie } from "./CardExtraPie";
import { DialogUser } from "./DialogUser";

export function ModalPedido() {

  const { modalCart, setModalCart, order, removeItem, extraPie, removeExtraPie, setModalExtraPie } = useContext(ControlComponentsContext);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const totalPrice = () => {
    const convertNumber = order.map((item: OrderToCartType) => Number(item.preco.replace(',', '.')));
    const totalPriceExtraPie = extraPie.length > 0 ?
      extraPie.map(item => item.valores.preco)
        .reduce((prev: number, cur: number) => prev + cur, 0)
      : 0;
    const totalPriceView = (convertNumber.reduce((prev: number, cur: number) => prev + cur, 0) + totalPriceExtraPie);
    return totalPriceView;
  };

  const disableBtnSubmit = () => {
    if (order.length <= 0 && extraPie.length <= 0) return true;
    return false;
  }

  return (
    <>
      {/* Modal Overlay */}
      < div
        className={`fixed top-0 right-0 h-full w-full z-50 flex justify-end transition-all duration-500 ${modalCart ? 'pointer-events-auto' : 'pointer-events-none'}`
        }
      >
        {/* Backdrop */}
        < div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${modalCart ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setModalCart(false)}
        />

        {/* Modal Content */}
        <div
          className={`h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-500 overflow-hidden ${modalCart ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 relative">
            <button
              type="button"
              aria-label="Fechar modal"
              onClick={() => setModalCart(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faX} color='white' size="lg" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/20 rounded-full">
                <FontAwesomeIcon icon={faCartShopping} color='white' size='xl' />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Seu Pedido</h2>
                <p className="text-pink-100">Revise e finalize sua compra</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-6">
            {/* Total Price */}
            {totalPrice() > 0 && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-700">Total do Pedido:</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    R$ {totalPrice().toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            {/* Empty State */}
            {order.length <= 0 && extraPie.length <= 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Carrinho Vazio</h3>
                <p className="text-gray-500 mb-6">Adicione alguns itens deliciosos ao seu pedido!</p>
                <button
                  onClick={() => setModalCart(false)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Ver Cardápio
                </button>
              </div>
            )}

            {/* Order Items */}
            {order.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  Kits de Festa ({order.length})
                </h3>
                <div className="space-y-3">
                  <ListOrder order={order} removeItem={removeItem} />
                </div>
              </div>
            )}

            {/* Extra Pies */}
            {extraPie.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Tortas Extras ({extraPie.length})
                </h3>
                <CardExtraPie items={extraPie} removeItem={removeExtraPie} />
              </div>
            )}

            {/* Add Extra Pie Button */}
            <ExtraPie openModal={setModalExtraPie} />
          </div>

          {/* Footer Actions */}
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                aria-label="Voltar ao cardápio"
                className="px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setModalCart(false)}
              >
                Voltar
              </button>

              <button
                type="button"
                aria-label="Finalizar pedido"
                className={`px-4 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${disableBtnSubmit()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg'
                  }`}
                disabled={disableBtnSubmit()}
                onClick={() => setOpenModal(true)}
              >
                <span className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Finalizar
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <DialogUser extraPie={extraPie} openModal={openModal} setOpenModal={setOpenModal} order={order} />
    </>
  )
}