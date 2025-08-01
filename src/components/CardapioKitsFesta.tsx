import { useContext, useState } from "react";
import { ControlComponentsContext } from "./CreateContext";
import { ModalOptions } from "./modalOptionsFlavor/ModalOptions";
import { kits, type kitsType } from "../const/datas";

export function CardapioKitsFesta() {

  const [order, setOrder] = useState<kitsType>({
    nome: "",
    pessoas: "",
    salgados: 0,
    docinhos: 0,
    tamanhoTorta: 0,
    preco: "",
    destaque: ""
  });

  const handleAddItem = (kit: kitsType) => {
    setModalSelectOptions(true);
    setOrder(kit);
  };

  const { setModalSelectOptions } = useContext(ControlComponentsContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-10 px-4 relative">
      <div className="max-w-5xl mx-auto text-center mb-10 z-40">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-2">Cardápio de Kits de Festa</h1>
        <p className="text-gray-600 text-lg">Escolha o kit ideal para sua comemoração. Tudo feito com muito carinho e sabor!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {kits.map((kit) => (
          <div key={kit.nome} className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-pink-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-pink-700">{kit.nome}</h2>
                <div className={`text-lg text-zinc-50 shadow bg-green-500 rounded p-1 ${kit.destaque === "Mais pedido!" ? "animate-bounce" : ""}`}>{kit.destaque}</div>
              </div>
              <p className="text-sm text-gray-600 mb-3">Ideal para <strong>{kit.pessoas}</strong></p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>🥟 {kit.salgados} salgadinhos (16g)</li>
                <li>🍬 {kit.docinhos} docinhos</li>
                <li>🍰 Torta de {kit.tamanhoTorta}cm</li>
              </ul>
              <div className="text-center mt-4 flex flex-col gap-2">
                <span className="text-lg font-bold text-pink-600">R$ {kit.preco}</span>
                <button
                  type="button"
                  aria-label={`Adicionar ${kit.nome} ao carrinho`}
                  onClick={() => handleAddItem(kit)}
                  className="mt-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded shadow transition"
                >
                  Montar pedido
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModalOptions order={order} />
    </div >
  );
}
