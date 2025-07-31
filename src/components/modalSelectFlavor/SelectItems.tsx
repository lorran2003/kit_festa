import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import type { DataItemType } from "../../const/datas";

export type ItemSelecionadoType = { sabor: string; quantidade: number }

type SelectedItemsProsp = {
    nameItem: string
    max: number;
    mixName: string;
    itemList: DataItemType[];
    selectedItems: ItemSelecionadoType[];
    setSelectedItems: (items: ItemSelecionadoType[]) => void;
}


export function SelectItems({ itemList, max, mixName, selectedItems, setSelectedItems, nameItem }: SelectedItemsProsp) {

    const upperCaseMixName = mixName.charAt(0).toUpperCase() + mixName.slice(1);

    const isMixSelected = selectedItems.find((item) => item.sabor === upperCaseMixName);

    const amountSalgado = selectedItems.reduce((prev, cur) => prev + cur.quantidade, 0);

    const isMixConflict = (option: string): boolean => {

        const isOptionMisto = option === upperCaseMixName;

        if ((isMixSelected && !isOptionMisto) || (!isMixSelected && isOptionMisto && amountSalgado > 0)) {
            return true;
        }

        return false;
    }

    const isAddDisabled = (item: string) => {
        const verify = (isMixConflict(item) || amountSalgado >= max || isMixSelected && item === isMixSelected.sabor) || false;
        return verify;
    }

    const isRemoveDisabled = (item: string) => {
        const verify = isMixConflict(item) || !selectedItems.some((salg) => salg.sabor === item);
        return verify;
    }

    const removeItem = (name: string) => {

        const exists = selectedItems.find(item => item.sabor === name);

        if (!exists) return;

        setSelectedItems(
            exists.quantidade <= 1 ? selectedItems.filter((item) => item.sabor !== exists.sabor) :
                selectedItems.map((item) => item.sabor === name ? { ...item, quantidade: item.quantidade - 1 } : item)
        )

    }

    const addItem = (name: string) => {

        if (isAddDisabled(name)) return;

        const updated = selectedItems.map(item =>
            item.sabor === name
                ? { ...item, quantidade: item.quantidade + 1 }
                : item
        );

        const exists = selectedItems.some(item => item.sabor === name);

        setSelectedItems(exists ? updated : [...selectedItems, { sabor: name, quantidade: 1 }]);
    }

    const getQuantity = (name: string) => selectedItems.find(salg => salg.sabor === name)?.quantidade ?? 0;


    return (
        <div className="flex flex-col items-center justify-center gap-3 w-full lg:pl-4 lg:justify-start lg:gap-4 relative after:static after:w-full after:h-0.5 after:bg-gray-400 after:rounded-full">

            <div className="sticky top-0 flex flex-col items-center justify-center gap-2 w-full bg-zinc-50 z-50 p-1">
                
                <h1 className="text-start w-full font-semibold text-gray-800 italic text-lg">{nameItem}</h1>
                
                <p className="text-start w-full font-semibold text-gray-800" >{`Escolha ate ${max} opções ou ${upperCaseMixName}!`}</p>
                {
                    isMixSelected ?
                        <span className="text-gray-500 font-semibold text-start w-full">
                            Você escolheu: {isMixSelected.sabor}
                        </span> :
                        <span className="text-gray-500 font-semibold text-start w-full">
                            Você escolheu: {amountSalgado} de {max}
                        </span>
                }
            </div>

            {
                itemList.map((item) => {

                    const isAddBtnDisabled = isAddDisabled(item.name);
                    const isRemoveBtnDisabled = isRemoveDisabled(item.name);

                    return (
                        <div key={item.name} className="grid grid-cols-3 gap-2 w-full justify-center items-center p-1.5 bg-gray-50 rounded shadow">

                            <p className="text-lg font-semibold text-gray-800">{item.name}</p>

                            <img src={item.image} alt={`salgadinho ${item.name}`} className="w-20 h-20 object-cover rounded-full" />

                            <div className="flex items-center justify-center gap-1">

                                <button
                                    type="button"
                                    aria-label={`Adicionar ${item.name}`}
                                    className={`bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1 px-2 rounded shadow transition ${isRemoveBtnDisabled ? 'opacity-20' : ''}`}
                                    disabled={isRemoveBtnDisabled}
                                    onClick={() => removeItem(item.name)}>

                                    <FontAwesomeIcon icon={faMinus} color="white" />

                                </button>

                                <span>{getQuantity(item.name)}</span>

                                <button
                                    type="button"
                                    aria-label={`Adicionar ${item.name}`}
                                    className={`bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1 px-2 rounded shadow transition ${isAddBtnDisabled ? 'opacity-20' : ''}`}
                                    disabled={isAddBtnDisabled}
                                    onClick={() => addItem(item.name)}>

                                    <FontAwesomeIcon icon={faPlus} color="white" />
                                </button>

                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
