import { useContext, useState } from "react";
import { ControlMessageContext } from "../CreateContext";
import brigadeiro from "../../assets/image/brigadeiro.png";
import boloFesta from "../../assets/image/boloFesta.png";
import maracuja from "../../assets/image/maracuja.png";
import type { kitsType } from "../CardapioKitsFesta";
import type { orderToCart } from "../../hooks/useCart";
import { SelectPie } from "./SelectPie";
import { SelectItems, type DataItemType, type ItemSelecionadoType } from "./SelectItems";
import { v4 as uuidv4 } from "uuid";
import bolinhaQueijo from "../../assets/image/bolinhaQueijo.png";
import coxinha from "../../assets/image/coxinha.png";
import kibe from "../../assets/image/kibe.png";
import salsicha from "../../assets/image/salsicha.jpg";
import calabresa from "../../assets/image/calabresa.jpg";
import misto from "../../assets/image/misto.jpg";
import beijinho from "../../assets/image/beijinho.jpg";
import brigadeiroDocinho from "../../assets/image/brigadeiroDocinho.png";
import cajuzinho from "../../assets/image/cajuzinho.jpg";
import mistoDocinho from "../../assets/image/mistoDocinho.jpg";
import { notify } from "../../func/notify";
export type PieType = {
  image: string;
  name: string;
  description: string;
}

export function ModalOptions({ order }: { order: kitsType }) {

  const pie: PieType[] = [
    {
      image: brigadeiro,
      name: "Brigadeiro",
      description: "Bolo de chocolate recheado com brigadeiro, coberto com chocolate cremoso e finalizado com granulado."
    },
    {
      image: boloFesta,
      name: "Bolo festa",
      description: "Bolo de baunilha recheado com doce de leite e ameixa, coberto com chantilly, coco ralado e um toque de doce de leite."
    },
    {
      image: maracuja,
      name: "Maracujá c/chantilly",
      description: "Bolo de baunilha recheado e coberto com creme de maracujá e chantilly."
    }
  ]

  const salgados: DataItemType[] = [
    {
      name: "Misto",
      image: misto
    },
    {
      name: "Bolinha de Queijo",
      image: bolinhaQueijo
    },
    {
      name: "Kibe",
      image: kibe
    },
    {
      name: "Calabresa",
      image: calabresa
    },
    {
      name: "Coxinha de Frango",
      image: coxinha
    },
    {
      name: "Enroladinho de Salsicha",
      image: salsicha
    }
  ];

  const docinhos: DataItemType[] = [
    {
      name: "Misto",
      image: mistoDocinho
    },
    {
      name: "Beijinho",
      image: beijinho
    },
    {
      name: "Brigadeiro",
      image: brigadeiroDocinho
    },
    {
      name: "Cajuzinho",
      image: cajuzinho
    }
  ]

  const [selectedPie, setSelectedPie] = useState<PieType>(pie[0]);

  const [salgado, setSalgado] = useState<ItemSelecionadoType[]>([]);

  console.log(salgado)

  const [docinho, setDocinho] = useState<ItemSelecionadoType[]>([]);

  const { notificationMessage, setNotificationMessage, setModalCart, addItem } = useContext(ControlMessageContext);

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

      const newOrder: orderToCart = {
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
      success("Item adicionado ao carrinho😍");

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
            className="absolute right-0 top-0 bg-red-500 hover:bg-red-500 text-zinc-50 font-semibold py-1 px-3 rounded shadow transition sm:py-2 sm:px-4"
          >
            Fechar
          </button>
        </div>

        <div className="flex flex-col items-center lg:justify-center gap-4 h-full w-full p-3 mt-2">

          <h2 className="text-2xl font-bold text-pink-600">
            Monte o seu pedido!🤩
          </h2>

          <div className="lg:grid lg:grid-cols-2 w-full">
            <SelectPie selectedPie={selectedPie} pie={pie} setSelectedPie={setSelectedPie} />

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
