import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bolinhaQueijo from "../../assets/image/bolinhaQueijo.png";
import coxinha from "../../assets/image/coxinha.png";
import kibe from "../../assets/image/kibe.png";
import salsicha from "../../assets/image/salsicha.jpg";
import calabresa from "../../assets/image/calabresa.jpg";
import misto from "../../assets/image/misto.jpg";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type salgadinhoType = {
    name: string;
    image: string;
}

export function SelectSalgadinho() {

    const salgadinho: salgadinhoType[] = [
        {
            name: "Misto",
            image: misto
        },
        {
            name: "Bolinha de Queijo",
            image: bolinhaQueijo
        },
        {
            name: "Kibe",
            image: kibe
        },
        {
            name: "Calabresa",
            image: calabresa
        },
        {
            name: "Coxinha de Frango",
            image: coxinha
        },
        {
            name: "Enroladinho de Salsicha",
            image: salsicha
        }
    ];

    const [selectedSalgadinho, setSelectedSalgadinho] = useState<string[]>([]);


    const verifyDisableBtn = (option: string): boolean => {
        const isMistoSelected = selectedSalgadinho.includes(salgadinho[0].name);
        const isOptionMisto = option === salgadinho[0].name;

        if ((isMistoSelected && !isOptionMisto) || (!isMistoSelected && isOptionMisto && selectedSalgadinho.length > 0)) {
            return true;
        }

        return false;
    }

    const isAddDisabled = (item: string) => {
        return (
            verifyDisableBtn(item) ||
            selectedSalgadinho.length >= 3 ||
            selectedSalgadinho.includes(salgadinho[0].name) && item === salgadinho[0].name
        );
    }

    const isRemoveDisabled = (item: string) => {
        return (
            verifyDisableBtn(item) ||
            !selectedSalgadinho.includes(item)
        );
    }

    const filterSalgadinho = (name: string) => {

        const search: number = selectedSalgadinho.indexOf(name);

        if (search < 0) return;

        const newList = selectedSalgadinho.filter((_, index) => index !== search);

        setSelectedSalgadinho(newList);
    }

    return (
        <div className="flex flex-col items-center justify-center gap-2 w-full lg:pl-4 lg:max-h-[28rem] lg:overflow-auto lg:justify-start lg:gap-4 lg:w-full">
            
            <div className="sticky top-0 flex flex-col items-center justify-center gap-2 w-full bg-zinc-50 z-50 p-1">
                <p className="text-start w-full font-semibold text-gray-800" >Escolha ate 3 opções ou misto! 🥟</p>
                {
                    selectedSalgadinho[0] !== salgadinho[0].name ?
                        <span className="text-gray-500 font-semibold text-start w-full">
                            Você escolheu: {selectedSalgadinho.length} de 3
                        </span> :
                        <span className="text-gray-500 font-semibold text-start w-full">
                            Você escolheu: {selectedSalgadinho[0]}
                        </span>
                }
            </div>

            {
                salgadinho.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 w-full justify-center items-center p-1.5 bg-gray-50 rounded shadow">

                        <p className="text-lg font-semibold text-gray-800">{item.name}</p>

                        <img src={item.image} alt={`salgadinho ${item.name}`} className="w-20 h-20 object-cover rounded-full" />

                        <div className="flex items-center justify-center gap-1">

                            <button
                                type="button"
                                aria-label={`Adicionar ${item.name}`}
                                className={`bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1 px-2 rounded shadow transition ${isRemoveDisabled(item.name) ? 'opacity-20' : ''}`}
                                disabled={isRemoveDisabled(item.name)}
                                onClick={() => filterSalgadinho(item.name)}>

                                <FontAwesomeIcon icon={faMinus} color="white" />

                            </button>

                            <span>{selectedSalgadinho.filter((salg) => salg === item.name).length}</span>

                            <button
                                type="button"
                                aria-label={`Adicionar ${item.name}`}
                                className={`bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1 px-2 rounded shadow transition ${isAddDisabled(item.name) ? 'opacity-20' : ''}`}
                                disabled={isAddDisabled(item.name)}
                                onClick={() => {
                                    if (isAddDisabled(item.name)) return;
                                    setSelectedSalgadinho([...selectedSalgadinho, item.name]);
                                }}>

                                <FontAwesomeIcon icon={faPlus} color="white" />
                            </button>

                        </div>
                    </div>
                ))
            }
        </div >
    )
}
