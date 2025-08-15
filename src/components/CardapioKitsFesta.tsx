import { useContext, useState } from "react";
import { ControlComponentsContext } from "./CreateContext";
import { ModalOptions } from "./modalOptionsFlavor/ModalOptions";
import { kits, type KitsType } from "../const/datas";

export function CardapioKitsFesta() {

  const [order, setOrder] = useState<KitsType>({
    id: "",
    nome: "",
    pessoas: "",
    salgados: 0,
    docinhos: 0,
    tamanhoTorta: 0,
    preco: "",
    destaque: "",
    favorite: false
  });

  const handleAddItem = (kit: KitsType) => {
    setOrder(kit);
    setModalSelectOptions(true);
  };

  const { setModalSelectOptions } = useContext(ControlComponentsContext);

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full opacity-10 -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full opacity-10 translate-x-40 translate-y-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-medium mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
            Kits Personalizados
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Cardápio de Kits de Festa
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Escolha o kit ideal para sua comemoração. Cada kit é preparado com muito carinho,
            ingredientes frescos e sabores que fazem a diferença em momentos especiais.
          </p>
        </div>

        {/* Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {kits.map((kit) => (
            <div
              key={kit.id.toString()}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-pink-100 overflow-hidden animate-fade-in-up`}
            >
              {kit.favorite && (
                <div className="absolute top-0 left-0 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-r-full text-sm font-bold shadow-lg animate-pulse">
                    ⭐ Mais Pedido
                  </div>
                </div>
              )}
              {/* Highlight Badge */}
              <div className="absolute right-1 top-2 z-10">
                <div className={`px-3 py-1 rounded-full text-sm font-bold text-white shadow-lg ${kit.destaque.includes('economico')
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}>
                  {kit.destaque}
                </div>
              </div>

              <div className="p-8">
                {/* Kit Name */}
                <h2 className="font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  {kit.nome}
                </h2>

                {/* People Count */}
                <p className="text-lg text-gray-600 mb-6 flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  Para: <strong className="text-pink-600 ml-1">{kit.pessoas}</strong>
                </p>

                {/* Kit Contents */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-3 bg-pink-50 rounded-xl">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🥟</span>
                      <span className="font-medium text-gray-700">Salgadinhos</span>
                    </div>
                    <span className="font-bold text-pink-600">{kit.salgados} un</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🍬</span>
                      <span className="font-medium text-gray-700">Docinhos</span>
                    </div>
                    <span className="font-bold text-purple-600">{kit.docinhos} un</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🍰</span>
                      <span className="font-medium text-gray-700">Torta</span>
                    </div>
                    <span className="font-bold text-yellow-600">{kit.tamanhoTorta}cm</span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    R$ {kit.preco}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Preço único</p>
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  aria-label={`Adicionar ${kit.nome} ao carrinho`}
                  onClick={() => handleAddItem(kit)}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group-hover:animate-pulse-glow"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🎉</span>
                    Montar Pedido
                    <span className="ml-2">→</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>       
      </div>

      <ModalOptions order={order} />
    </section>
  );
}