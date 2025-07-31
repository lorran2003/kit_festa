export function ExtraPie({ openModal }: { openModal: (open: boolean) => void }) {

    return (
        <div>
            <div className="flex justify-start items-center gap-0.5">
                <h2 className="text-lg text-pink-600">Gostaria de uma torta extra?</h2>
                <span className="animate-bounce text-xl">🍰</span>
            </div>

            <button
                type="button"
                aria-label="Adicionar torta extra"
                className=" text-pink-700 font-semibold py-2 px-4 rounded"
                onClick={() => openModal(true)}
            >
                <span className="italic after:w-full after:h-1 after:bg-pink-700 underline">
                    Clique aqui! 🤤
                </span>
            </button>
        </div>
    )
}
