import { useContext } from "react";
import { ControlComponentsContext } from "./CreateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export function ButtonCart() {
    const { modalCart, setModalCart, order, extraPie } = useContext(ControlComponentsContext);

    const totalItems = order.length + extraPie.length;
    return (
        <button
            className="fixed top-20 right-4 sm:top-14 sm:right-8 p-4.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer z-40 flex justify-center items-center gap-2 group animate-bounce-in"
            type="button"
            aria-label='Visualizar carrinho'
            onClick={() => setModalCart(!modalCart)}
        >
            <FontAwesomeIcon icon={faCartShopping} color='white' size='xl' className="group-hover:scale-110 transition-transform duration-300" />

            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                    {totalItems}
                </span>
            )}
        </button>
    )
}
