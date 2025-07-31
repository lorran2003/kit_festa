import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ExtraPieType } from "../../hooks/useCart";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import type { UUIDTypes } from "uuid";

type CardsExtraPieProps = {
    items: ExtraPieType[];
    removeItem: (value: UUIDTypes) => void;
}

export function CardExtraPie({ items, removeItem }: CardsExtraPieProps) {
    return (
        <section>
            <h1>Tortas extras:🍰</h1>
            {
                items.map((item: ExtraPieType) => (
                    <div key={item.id.toString()}
                        className="flex flex-col gap-2 justify-start items-start py-2
                before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-pink-300 before:rounded-full
                ">
                        <h2 className="text-lg italic">🍰{item.dataPies.name}</h2>

                        <div className="flex flex-wrap gap-2 items-center justify-center text-gray-600 italic font-semibold ">
                            
                            <img src={item.dataPies.image} alt={item.dataPies.name} width={85} height={85} className="w-20 h-20 rounded-full" />
                            
                            <table className="border-separate border-spacing-x-5 border-spacing-y-0 text-start text-lg">
                                <thead>
                                    <tr>
                                        <th>
                                            Tamanho
                                        </th>
                                        <th>
                                            Valor
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            {item.valores.tamanho}cm
                                        </td>
                                        <td>
                                            R$ {item.valores.preco}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <button
                            type="button"
                            aria-label="Remover item do carrinho"
                            className="roudned-sm w-full bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded shadow transition"
                            onClick={() => removeItem(item.id)}
                        >
                            <FontAwesomeIcon icon={faTrash} color='white' size="lg" />
                        </button>
                    </div>
                ))
            }
        </section>
    )
}
