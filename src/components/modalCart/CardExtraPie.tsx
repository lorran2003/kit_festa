import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ExtraPieType } from "../../hooks/useCart";
import { faCake, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { UUIDTypes } from "uuid";

type CardsExtraPieProps = {
    items: ExtraPieType[];
    removeItem: (value: UUIDTypes) => void;
}


export function CardExtraPie({ items, removeItem }: CardsExtraPieProps) {
    return (
        <section>
            {
                items.map((item: ExtraPieType) => (

                    <div
                        key={item.id.toString()}
                        className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-in-up"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
                                    <FontAwesomeIcon icon={faCake} color='white' size='lg' />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Sabor:</h3>
                                    <span className="text-sm text-gray-600 flex items-center gap-1">
                                        {item.dataPies.name}
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                aria-label="Remover item do carrinho"
                                className="py-2 px-3 bg-red-100 hover:bg-red-200 text-red-600 rounded-2xl transition-all duration-300 hover:scale-110 group-hover:bg-red-200"
                                onClick={() => removeItem(item.id)}
                            >
                                <FontAwesomeIcon icon={faTrash} size='sm' />
                            </button>
                        </div>

                        <div className="flex flex-col gap-3">

                            <div className="bg-[#eee] rounded-xl p-4">
                                <img src={item.dataPies.image} alt={`torta de ${item.dataPies.name}`} />
                            </div>

                            <div className="px-3 py-1 bg-purple-50 shadow rounded-full text-lg font-medium flex gap-2 w-fit">
                                <span className="text-purple-700">
                                    Valor:
                                </span>
                                <span className="font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                    R$ {item.valores.preco}
                                </span>
                            </div>

                            <div className="px-3 py-1 bg-purple-50 shadow rounded-full text-lg font-medium flex gap-2 w-fit">
                                <span className="text-purple-700">
                                    Tamanho:
                                </span>
                                <span className="font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                    {item.valores.tamanho}cm
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section >
    )
}
