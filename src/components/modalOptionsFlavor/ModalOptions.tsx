import { useContext, useEffect, useState } from "react";
import { ControlComponentsContext } from "../CreateContext";
import type { OrderToCartType } from "../../hooks/useCart";
import { SelectPie } from "./SelectPie";
import { SelectItems, type ItemSelecionadoType } from "./SelectItems";
import { v4 as uuidv4 } from "uuid";
import { notify } from "../../func/notify";
import { docinhos, kits, salgados, type KitsType, optionsPies, type DataPie } from "../../const/datas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCake, faUtensils, faCheck } from "@fortawesome/free-solid-svg-icons";

export function ModalOptions({ order }: { order: KitsType }) {

  const checkOrderOptionPie = () => order.id === kits[0].id ? optionsPies.candy.pies : optionsPies.normal.pies;

  const [selectedPie, setSelectedPie] = useState<DataPie>(checkOrderOptionPie()[0]);
  const [salgado, setSalgado] = useState<ItemSelecionadoType[]>([]);
  const [docinho, setDocinho] = useState<ItemSelecionadoType[]>([]);

  useEffect(() => {
    const newPie = order.id === kits[0].id ? optionsPies.candy.pies[0] : optionsPies.normal.pies[0];
    setSelectedPie(newPie);
  }, [order]);

  const { modalSelectOptions: notificationMessage, setModalSelectOptions: setNotificationMessage, setModalCart, addItem } = useContext(ControlComponentsContext);

  const { success, error } = notify();

  const submitCart = () => {
    const verifyDatas = {
      salg: salgado.map(item => item.sabor),
      doc: docinho.map(item => item.sabor),
      pie: selectedPie.name
    }

    if (verifyDatas.pie === "" || verifyDatas.pie === " ") return error("Ops... Esta faltando a torta😱");
    if (verifyDatas.salg.some((item) => item === "" || item === " ") || verifyDatas.salg.length <= 0) return error("Ops... Esta faltando o salgadinho😱");
    if (verifyDatas.doc.some((item) => item === "" || item === " ") || verifyDatas.doc.length <= 0) return error("Ops... Esta faltando o docinho😱");

    try {
      const newOrder: OrderToCartType = {
        id: uuidv4(),
        salgados: salgado,
        docinhos: docinho,
        torta: {
          tamanho: order.tamanhoTorta,
          sabor: selectedPie.name,
          image: selectedPie.image
        },
        nome: order.nome,
        pessoas: order.pessoas,
        preco: order.preco
      };

      addItem(newOrder);
      setNotificationMessage(false);
      setModalCart(true);
      setDocinho([]);
      setSalgado([]);
      success("Pedido adicionado ao carrinho😍");

    } catch (error) {
      console.error("erro ao adicionar item ao carrinho", error);
    }
  }

  const handleClose = () => {
    setNotificationMessage(false);
    setDocinho([]);
    setSalgado([]);
  };

  return (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 ${notificationMessage ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-11/12 h-11/12 animate-bounce-in  overflow-y-auto lg:overflow-hidden">
        
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 relative">
          <button
            type="button"
            aria-label="Fechar modal"
            onClick={handleClose}
            className="absolute top-0 right-0 bg-white/20 hover:bg-white/30 p-2 rounded-l-md transition-all duration-300 hover:scale-110"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Monte o seu pedido!</h2>
            <p className="text-pink-100 text-lg">
              {order.nome} • {order.pessoas}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-2 h-screen">
          <div className="grid lg:grid-cols-2 gap-8">

            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-semibold mb-4">
                  <FontAwesomeIcon icon={faCake} />
                  Escolha sua Torta
                </div>
              </div>

              <SelectPie
                selectedPie={selectedPie}
                pie={checkOrderOptionPie()}
                setSelectedPie={setSelectedPie}
              />
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold mb-4">
                  <FontAwesomeIcon icon={faUtensils} />
                  Personalize seu Kit
                </div>
              </div>

              <div className="space-y-6 lg:overflow-y-auto lg:h-screen">
                <SelectItems
                  nameItem="Salgadinhos 🥟"
                  itemList={salgados}
                  selectedItems={salgado}
                  setSelectedItems={setSalgado}
                  max={3}
                  mixName="misto"
                />

                <SelectItems
                  nameItem="Docinhos 🍬"
                  itemList={docinhos}
                  selectedItems={docinho}
                  setSelectedItems={setDocinho}
                  max={3}
                  mixName="misto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 p-6 bg-gray-50">
          <div className="flex gap-4">
            <button
              type="button"
              aria-label="Cancelar pedido"
              onClick={handleClose}
              className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Cancelar
            </button>

            <button
              type="button"
              aria-label="Confirmar pedido"
              onClick={submitCart}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Confirmar 
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}