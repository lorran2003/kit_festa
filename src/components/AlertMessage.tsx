import { useContext, useState } from "react";
import { ControlMessageContext } from "./CreateContext";
import brigadeiro from "../assets/image/brigadeiro.png";
import boloFesta from "../assets/image/boloFesta.png";
import maracuja from "../assets/image/maracuja.png";
import type { kitsType } from "./CardapioKitsFesta";
import type { orderToCart } from "../hooks/useCart";

type PieType = {
  image: string;
  name: string;
  description: string;
}

export default function AlertMessage({ order }: { order: kitsType }) {

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

  const [selectPie, setSelectPie] = useState<PieType>(pie[0]);

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
        sabor: selectPie.name,
        image: selectPie.image
      }
    };

    setNotificationMessage(false);
    setModalCart(true);
    addItem(newOrder);
  }

  return (
    <div className={`fixed bg-zinc-900/5 backdrop-blur-sm top-0 left-0 w-full h-full flex items-center justify-center z-50 transition-all duration-300 ${notificationMessage ? 'opacity-100 z-50 pointer-events-auto' : ' opacity-0 -z-50 pointer-events-none'} `}>

      <div className="relative bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center gap-4 w-11/12 lg:w-2/5">

        <button
          type="button"
          aria-label="Fechar alerta"
          onClick={() => setNotificationMessage(false)}
          className="absolute right-2 top-2 bg-red-500 hover:bg-red-500 text-zinc-50 font-semibold py-2 px-4 rounded shadow transition"
        >
          Fechar
        </button>

        <h2 className="text-2xl font-bold text-pink-600">
          Escolha a sua torta!🍰
        </h2>

        <div className="flex flex-col items-center justify-center gap-4">

          <img src={selectPie.image} alt={selectPie.name} className="transform-view duration-100" />

          <div className="grid grid-cols-3 gap-1">
            {
              pie.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Torta ${item.name}`}
                  onClick={() => setSelectPie(item)}
                  className={`font-semibold px-1 sm:py-2 sm:text-lg rounded ${selectPie.name === item.name ? 'bg-pink-500 text-white' : 'bg-zinc-50 text-gray-800 shadow'} transition-colors duration-300 m-1`}
                >
                  {item.name}
                </button>
              ))
            }
          </div>

          <p className="text-zinc-800 text-lg text-justify p-1.5 roudend font-sans">{selectPie.description}</p>

        </div>

        <div className="flex gap-2">

          <button
            type="button"
            aria-label="Fechar alerta"
            onClick={() => setNotificationMessage(false)}
            className="bg-gray-50 hover:bg-gray-200 text-zinc-900 font-semibold py-2 px-4 rounded shadow transition"
          >
            Voltar
          </button>

          <button
            type="button"
            aria-label="Fechar alerta"
            onClick={() => openCart()}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded shadow transition"
          >
            Confirmar
          </button>
        </div>

      </div>
    </div>
  )
}
