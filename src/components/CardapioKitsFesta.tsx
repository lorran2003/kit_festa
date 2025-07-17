import { useContext } from "react";
import { ControlMessageContext } from "./CreateContext";

export interface kitsType {
  nome: string;
  pessoas: string;
  salgados: number;
  docinhos: number;
  torta: string;
  preco: string;
  destaque: string;
}

type CardapioKitsFestaProps = {
  addItem: (item: kitsType) => void
}

export function CardapioKitsFesta({ addItem }: CardapioKitsFestaProps) {

  const { setNotificationMessage } = useContext(ControlMessageContext);

  const addOrder = (kits: kitsType) => {
    addItem(kits);
    setNotificationMessage(true);
  }

  const kits: kitsType[] = [
    {
      nome: "Kit Pequeno",
      pessoas: "10 a 15 pessoas",
      salgados: 120,
      docinhos: 45,
      torta: "Torta 20cm",
      preco: "R$ 170,00",
      destaque: "Mais pedido!",
    },
    {
      nome: "Kit Médio",
      pessoas: "20 a 25 pessoas",
      salgados: 200,
      docinhos: 75,
      torta: "Torta 25cm",
      preco: "R$ 240,00",
      destaque: "Equilíbrio perfeito",
    },
    {
      nome: "Kit Grande",
      pessoas: "30 a 35 pessoas",
      salgados: 280,
      docinhos: 105,
      torta: "Torta 30cm",
      preco: "R$ 320,00",
      destaque: "Para grandes festas",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-10 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
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
                <li>🍰 {kit.torta}</li>
              </ul>
              <div className="text-center mt-4 flex flex-col gap-2">
                <span className="text-lg font-bold text-pink-600">{kit.preco}</span>
                <button
                  onClick={() => addOrder(kit)}
                  className="mt-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded shadow transition"
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
