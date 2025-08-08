import { notify } from "../func/notify";
import { optionsPies, type DataPie, type ValuesPies } from "../const/datas";
import { v4 as uuidv4, type UUIDTypes } from "uuid";
import type { ExtraPieType } from "../hooks/useCart";
import { ControlComponentsContext } from "./CreateContext";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type PieUseStateType = {
    pie: DataPie,
    valores: ValuesPies,
}

type ConstPiesType = {
    id: UUIDTypes;
    pies: DataPie[];
    valores: ValuesPies[];
}

export function ModalExtraPie() {

    const { addExtraPie, modalExtraPie, setModalExtraPie } = useContext(ControlComponentsContext);

    const pieCandy: ConstPiesType = optionsPies.candy;

    const pieNormal: ConstPiesType = optionsPies.normal;

    const [optionPie, setOptionPie] = useState<ConstPiesType>(pieNormal);

    const [selectedPie, setSelectedPie] = useState<PieUseStateType>({ pie: optionPie.pies[0], valores: optionPie.valores[0] });

    const { error, success } = notify();

    const closeModal = () => {
        setModalExtraPie(false);
        setSelectedPie({ pie: optionPie.pies[0], valores: optionPie.valores[0] });
    }

    const submitExtraPie = () => {

        if (selectedPie.pie.name === "" || selectedPie.pie.name === " ") return error("Ops... Esta faltando o sabor torta😱");
        if (!optionPie.valores.some((item) => item.tamanho === selectedPie.valores.tamanho)) return error("Ops... Esta faltando o tamanho da torta😱");

        try {
            const newPie: ExtraPieType = {
                id: uuidv4(),
                dataPies: selectedPie.pie,
                valores: selectedPie.valores
            }

            addExtraPie(newPie);
            setModalExtraPie(false);
            setSelectedPie({ pie: optionPie.pies[0], valores: optionPie.valores[0] });
            success("Torta adicionada com sucesso!🤤");

        } catch (error) {
            console.error("Erro ao adicionar torta", error);
        }

    }

    return (
        <div className={`fixed inset-0 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 m-auto ${modalExtraPie ? 'opacity-100 z-50 pointer-events-auto' : ' opacity-0 -z-50 pointer-events-none'}`}>

            <div className="bg-gray-50 rounded-lg shadow-lg flex flex-col justify-start items-center gap-4 w-11/12 max-h-11/12 p-2 overflow-auto">

                <div className="relative w-full">
                    <button
                        type="button"
                        aria-label="Fechar modal"
                        onClick={() => closeModal()}
                        className="absolute size-9 lg:size-11 right-0 top-0 bg-red-500 hover:bg-red-600 text-zinc-50 font-semibold rounded shadow transition cursor-pointer z-50"
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-lg" />
                    </button>
                </div>

                <div className="flex items-center justify-start gap-1 w-full">
                    <h1>Opções de torta:</h1>
                    <button
                        type="button"
                        aria-label="Opcão candy"
                        onClick={() => {
                            setSelectedPie({ pie: pieCandy.pies[0], valores: pieCandy.valores[0] });
                            setOptionPie(pieCandy);
                        }}
                        className={`font-semibold px-1 py-2 sm:text-lg rounded ${optionPie.id === pieCandy.id ? 'bg-pink-500 text-white' : 'bg-zinc-50 text-gray-800 shadow'} transition-colors duration-300 m-1`}
                    >
                        Candy
                    </button>

                    <button
                        type="button"
                        aria-label="Opcão tradicionais"
                        onClick={() => {
                            setSelectedPie({ pie: pieNormal.pies[0], valores: pieNormal.valores[0] });
                            setOptionPie(pieNormal);
                    }}
                        className={`font-semibold px-1 py-2 sm:text-lg rounded ${optionPie.id === pieNormal.id ? 'bg-pink-500 text-white' : 'bg-zinc-50 text-gray-800 shadow'} transition-colors duration-300 m-1`}
                    >
                        Tradicionais
                    </button>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-4">

                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-2xl text-gray-500 font-semibold text-start w-full italic">Valor R${selectedPie.valores.preco.toFixed(2)}</h2>
                        <img src={selectedPie.pie.image} alt={selectedPie.pie.name} width={360} height={210} className="transform-view transform-3d duration-100 object-cover" />
                    </div>

                    <div className="flex flex-col gap-4">

                        <div className="grid grid-cols-3 gap-1">
                            {
                                optionPie.pies.map((item) => (
                                    <button
                                        key={item.name}
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

                        <p className="text-zinc-800 text-lg text-justify lg:text-2xl p-1.5 rounded font-sans w-full">{selectedPie.pie.description}</p>

                        <div className="grid grid-cols-3 items-center gap-1">
                            {
                                optionPie.valores.map((item, index) => (
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
                    </div>
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
    )
}
