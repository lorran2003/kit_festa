import { useContext, useState } from "react";
import { ControlComponentsContext } from "../CreateContext";
import type { OrderToCartType } from "../../hooks/useCart";
import { SelectPie } from "./SelectPie";
import { SelectItems, type ItemSelecionadoType} from "./SelectItems";
import { v4 as uuidv4 } from "uuid";
import { notify } from "../../func/notify";
import { docinhos, pies, salgados, type DataPieType, type kitsType } from "../../const/datas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function ModalOptions({ order }: { order: kitsType }) {

  const [selectedPie, setSelectedPie] = useState<DataPieType>(pies.dataPies[0]);

  const [salgado, setSalgado] = useState<ItemSelecionadoType[]>([]);

  const [docinho, setDocinho] = useState<ItemSelecionadoType[]>([]);

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
      console.log("erro ao adicionar item ao carrinho", error);
    }
  }

  return (
    <div className={`fixed bg-zinc-900/5 backdrop-blur-sm top-0 left-0 w-full h-full flex items-center justify-center z-50 transition-all duration-300 ${notificationMessage ? 'opacity-100 z-50 pointer-events-auto' : ' opacity-0 -z-50 pointer-events-none'} `}>

      <div className="bg-gray-50 rounded-lg shadow-lg flex flex-col justify-start items-center gap-4 w-11/12 h-11/12 overflow-auto">

        <div className="relative w-full">
          <button
            type="button"
            aria-label="Fechar alerta"
            onClick={() => {
              setNotificationMessage(false)
              setDocinho([]);
              setSalgado([]);
            }}
            className="absolute right-2 top-2 bg-red-500 hover:bg-red-600 text-zinc-50 font-semibold py-1 px-3 rounded shadow transition sm:py-2 sm:px-4 z-50"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="flex flex-col items-center lg:justify-center gap-4 h-full w-full p-3 mt-2">

          <h2 className="text-2xl font-bold text-pink-600">
            Monte o seu pedido!🤩
          </h2>

          <h3 className="text-xl italic text-gray-500">
            {order.nome} : {order.pessoas}
          </h3>

          <div className="lg:grid lg:grid-cols-2 w-full">
            <SelectPie selectedPie={selectedPie} pie={pies.dataPies} setSelectedPie={setSelectedPie} />

            <div className="flex flex-col gap-4 lg:max-h-[28rem] lg:overflow-auto lg:w-full">

              <SelectItems nameItem="Salgadinhos🥟" itemList={salgados} selectedItems={salgado} setSelectedItems={setSalgado} max={3} mixName="misto" />

              <SelectItems nameItem="Docinhos🍬" itemList={docinhos} selectedItems={docinho} setSelectedItems={setDocinho} max={3} mixName="misto" />
            </div>
          </div>

          <div className="grid grid-cols-2 justify-start items-start gap-2 w-full bg-zinc-50 pb-3">

            <button
              type="button"
              aria-label="Fechar alerta"
              onClick={() => {
                setNotificationMessage(false)
                setDocinho([]);
                setSalgado([]);
              }}
              className="bg-gray-50 hover:bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded shadow transition"
            >
              Voltar
            </button>

            <button
              type="button"
              aria-label="Fechar alerta"
              onClick={() => submitCart()}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded shadow transition"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
