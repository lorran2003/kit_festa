import type { PieType } from "./ModalOptions";

type SelectPieProps = {
    selectedPie: PieType;
    setSelectedPie: (item: PieType) => void;
    pie: PieType[];
}

export function SelectPie({ selectedPie, pie, setSelectedPie }: SelectPieProps) {
    return (
        <div className="after:static after:w-full after:h-0.5 after:bg-gray-400 after:rounded-full lg:after:h-full lg:after:w-0.5 lg:flex lg:justify-between">

            <div className="flex flex-col items-center justify-center lg:justify-start gap-4">

                <img src={selectedPie.image} alt={selectedPie.name} width={360} height={210} className="transform-view transform-3d duration-100 object-cover" />

                <div className="grid grid-cols-3 gap-1">
                    {
                        pie.map((item, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-label={`Torta ${item.name}`}
                                onClick={() => setSelectedPie(item)}
                                className={`font-semibold px-1 sm:py-2 sm:text-lg rounded ${selectedPie.name === item.name ? 'bg-pink-500 text-white' : 'bg-zinc-50 text-gray-800 shadow'} transition-colors duration-300 m-1`}
                            >
                                {item.name}
                            </button>
                        ))
                    }
                </div>

                <p className="text-zinc-800 text-lg text-justify lg:text-center lg:text-2xl p-1.5 rounded font-sans w-full">{selectedPie.description}</p>
            </div>
        </div>
    )
}
