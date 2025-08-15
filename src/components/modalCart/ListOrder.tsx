import { faTrash, faUsers, faCake, faUtensils, faCandyCane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { UUIDTypes } from "uuid";
import type { OrderToCartType } from "../../hooks/useCart";

type ListOrderProps = {
    order: OrderToCartType[];
    removeItem: (id: UUIDTypes) => void;
}

export function ListOrder({ order, removeItem }: ListOrderProps) {
    return (
        order.map((item: OrderToCartType) => (
            <div 
                key={item.id.toString()} 
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-in-up"
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
                            <FontAwesomeIcon icon={faCake} color='white' size='lg' />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">{item.nome}</h3>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                                <FontAwesomeIcon icon={faUsers} size='sm' />
                                {item.pessoas}
                            </p>
                        </div>
                    </div>
                    
                    <button
                        type="button"
                        aria-label="Remover item do carrinho"
                        className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition-all duration-300 hover:scale-110 group-hover:bg-red-200"
                        onClick={() => removeItem(item.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} size='sm' />
                    </button>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    {/* Salgadinhos */}
                    <div className="bg-pink-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <FontAwesomeIcon icon={faUtensils} className="text-pink-600" />
                            <h4 className="font-semibold text-gray-800">Salgadinhos (16g)</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {item.salgados.map((salgado, index: number) => (
                                <span 
                                    key={index} 
                                    className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
                                >
                                    {salgado.sabor.toLowerCase()}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Docinhos */}
                    <div className="bg-purple-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <FontAwesomeIcon icon={faCandyCane} className="text-purple-600" />
                            <h4 className="font-semibold text-gray-800">Docinhos</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {item.docinhos.map((docinho, index: number) => (
                                <span 
                                    key={index} 
                                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                                >
                                    {docinho.sabor.toLowerCase()}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Torta */}
                    <div className="bg-yellow-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">🍰</span>
                            <h4 className="font-semibold text-gray-800">Torta</h4>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700 font-medium">{item.torta.sabor}</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold">
                                {item.torta.tamanho}cm
                            </span>
                        </div>
                    </div>
                </div>

                {/* Price */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-gray-700">Valor do Kit:</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            R$ {item.preco}
                        </span>
                    </div>
                </div>
            </div>
        ))
    )
}