import { useContext, useState } from "react";
import { ControlMessageContext } from "../CreateContext";
import brigadeiro from "../../assets/image/brigadeiro.png";
import boloFesta from "../../assets/image/boloFesta.png";
import maracuja from "../../assets/image/maracuja.png";
import type { kitsType } from "../CardapioKitsFesta";
import type { orderToCart } from "../../hooks/useCart";
import { SelectPie } from "./SelectPie";
import { SelectSalgadinho } from "./SelectSalgadinho";

export type PieType = {
  image: string;
  name: string;
  description: string;
}

export default function ModalOptions({ order }: { order: kitsType }) {

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

  const [selectedPie, setSelectedPie] = useState<PieType>(pie[0]);

  const { notificationMessage, setNotificationMessage, setModalCart, addItem } = useContext(ControlMessageContext);

  const openCart = () => {

    const newOrder: orderToCart = {
      docinhos: order.docinhos,
      nome: order.nome,
      pessoas: order.pessoas,
      preco: order.preco,
      salgados: order.salgados,
      torta: {
        tamanho: order.tamanhoTorta,
        sabor: selectedPie.name,
        image: selectedPie.image
      }
    };

    setNotificationMessage(false);
    setModalCart(true);
    addItem(newOrder);
  }

  return (
    <div className={`fixed bg-zinc-900/5 backdrop-blur-sm top-0 left-0 w-full h-full flex items-center justify-center z-50 transition-all duration-300 ${notificationMessage ? 'opacity-100 z-50 pointer-events-auto' : ' opacity-0 -z-50 pointer-events-none'} `}>

      <div className="bg-gray-50 p-3 rounded-lg shadow-lg flex flex-col items-center gap-4 w-11/12 h-11/12 overflow-auto">

        <div className="relative w-full pb-7">
          <button
            type="button"
            aria-label="Fechar alerta"
            onClick={() => setNotificationMessage(false)}
            className="absolute right-0 top-0 bg-red-500 hover:bg-red-500 text-zinc-50 font-semibold py-1 px-3 rounded shadow transition"
          >
            Fechar
          </button>
        </div>

        <h2 className="text-2xl font-bold text-pink-600">
          Monte o seu pedido!🤩
        </h2>

        <div className="lg:grid lg:grid-cols-2">
          <SelectPie selectedPie={selectedPie} pie={pie} setSelectedPie={setSelectedPie} />

          <SelectSalgadinho />
        </div>

        <div className="grid grid-cols-2 gap-2 w-full bg-zinc-50">

          <button
            type="button"
            aria-label="Fechar alerta"
            onClick={() => setNotificationMessage(false)}
            className="bg-gray-50 hover:bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded shadow transition"
          >
            Voltar
          </button>

          <button
            type="button"
            aria-label="Fechar alerta"
            onClick={() => openCart()}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded shadow transition"
          >
            Confirmar
          </button>
        </div>

      </div>
    </div>
  )
}
