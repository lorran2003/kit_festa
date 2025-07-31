import { notify } from "../func/notify";
import { pies, type DataPieType } from "../const/datas";
import { v4 as uuidv4 } from "uuid";
import type { ExtraPieType } from "../hooks/useCart";
import { ControlComponentsContext } from "./CreateContext";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type PieUseStateType = {
    pie: DataPieType,
    valores: {
        tamanho: number,
        preco: number
    }
}

export function ModalExtraPie() {

    const { addExtraPie, modalExtraPie, setModalExtraPie } = useContext(ControlComponentsContext);

    const [selectedPie, setSelectedPie] = useState<PieUseStateType>({ pie: pies.dataPies[0], valores: pies.valores[0] });

    const { error, success } = notify();

    const closeModal = () => {
        console.log('executado')
        setModalExtraPie(false);
        setSelectedPie({ pie: pies.dataPies[0], valores: pies.valores[0] });
    }

    const submitExtraPie = () => {

        if (selectedPie.pie.name === "" || selectedPie.pie.name === " ") return error("Ops... Esta faltando o sabor torta😱");
        if (!pies.valores.some((item) => item.tamanho === selectedPie.valores.tamanho)) return error("Ops... Esta faltando o tamanho da torta😱");

        try {
            const newPie: ExtraPieType = {
                id: uuidv4(),
                dataPies: selectedPie.pie,
                valores: selectedPie.valores
            }

            addExtraPie(newPie);
            setModalExtraPie(false);
            setSelectedPie({ pie: pies.dataPies[0], valores: pies.valores[0] });
            success("Torta adicionada com sucesso!🤤");

        } catch (error) {
            console.log("Erro ao adicionar torta", error);
        }

    }

    return (
        <div className={`fixed inset-0 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 m-auto ${modalExtraPie ? 'opacity-100 z-50 pointer-events-auto' : ' opacity-0 -z-50 pointer-events-none'}`}>

            <div className="bg-gray-50 rounded-lg shadow-lg flex flex-col justify-start items-center gap-4 w-11/12 lg:w-1/2 h-auto p-2 overflow-auto">

                <div className="relative w-full">
                    <button
                        type="button"
                        aria-label="Fechar modal"
                        onClick={() => closeModal()}
                        className="absolute size-9 lg:size-11 right-0 top-0 bg-red-500 hover:bg-red-600 text-zinc-50 font-semibold rounded shadow transition cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-lg" />
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center lg:justify-start gap-4">

                    <img src={selectedPie.pie.image} alt={selectedPie.pie.name} width={360} height={210} className="transform-view transform-3d duration-100 object-cover" />

                    <h2 className="text-2xl text-gray-500 font-semibold text-start w-full italic">Valor R${selectedPie.valores.preco}</h2>

                    <div className="grid grid-cols-3 gap-1">
                        {
                            pies.dataPies.map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    aria-label={`Torta ${item.name}`}
                                    onClick={() => setSelectedPie({ pie: item, valores: selectedPie.valores })}
                                    className={`font-semibold px-1 sm:py-2 sm:text-lg rounded ${selectedPie.pie.name === item.name ? 'bg-pink-500 text-white' : 'bg-zinc-50 text-gray-800 shadow'} transition-colors duration-300 m-1`}
                                >
                                    {item.name}
                                </button>
                            ))
                        }
                    </div>

                    <p className="text-zinc-800 text-lg text-justify lg:text-center lg:text-2xl p-1.5 rounded font-sans w-full">{selectedPie.pie.description}</p>

                    <div className="grid grid-cols-3 items-center gap-1">
                        {
                            pies.valores.map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    aria-label={`Torta de ${item}cm`}
                                    onClick={() => setSelectedPie({ pie: selectedPie.pie, valores: item })}
                                    className={`font-semibold p-2 text-lg rounded ${selectedPie.valores.tamanho === item.tamanho ? 'bg-pink-500 text-white' : 'bg-zinc-50 text-gray-800 shadow'} transition-colors duration-300 m-1`}
                                >
                                    {item.tamanho}cm
                                </button>
                            ))
                        }
                    </div>

                    <div className="grid grid-cols-2 justify-start items-center gap-2 w-full bg-zinc-50 pb-3">

                        <button
                            type="button"
                            aria-label="Fechar alerta"
                            onClick={() => closeModal()}
                            className="bg-gray-50 hover:bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded shadow transition"
                        >
                            Voltar
                        </button>

                        <button
                            type="button"
                            aria-label="Fechar alerta"
                            onClick={() => submitExtraPie()}
                            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded shadow transition"
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
