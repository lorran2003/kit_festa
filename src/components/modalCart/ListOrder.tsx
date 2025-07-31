import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
            <div key={item.id.toString()} className="flex flex-col gap-2 justify-start items-start py-2
                     before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-pink-300 before:rounded-full
                    ">

                <p className="text-lg italic">{item.nome}:</p>

                <ul className="text-sm text-gray-700 space-y-1">
                    <li className="font-semibold text-lg">🥟Salgadinhos (16g):</li>
                    {
                        item.salgados.map((salgado, index: number) => (
                            <li key={index} className="italic text-gray-600 flex justify-start items-center gap-2 text-lg before:h-2 before:w-2 before:bg-pink-600 before:rounded-full before:static">{salgado.sabor.toLowerCase()}</li>
                        ))
                    }
                </ul>

                <ul className="text-sm text-gray-700 space-y-1">
                    <li className="font-semibold text-lg">🍬Docinhos:</li>
                    {
                        item.docinhos.map((docinho, index: number) => (
                            <li key={index} className="italic text-gray-600 flex justify-start items-center gap-2 text-lg before:h-2 before:w-2 before:bg-pink-600 before:rounded-full before:static">{docinho.sabor.toLowerCase()}</li>
                        ))
                    }
                </ul>

                <ul className="text-sm text-gray-700 space-y-1">
                    <li className="font-semibold text-lg italic">🍰 Torta: {item.torta.sabor}</li>
                    <li className="text-lg italic text-zinc-600">📏 Torta de {item.torta.tamanho}cm</li>
                </ul>

                <p className="text-lg italic">R$ {item.preco}</p>

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
    )
}

