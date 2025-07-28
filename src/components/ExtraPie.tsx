export function ExtraPie() {
    return (
        <div>
            <h2 className="text-lg text-pink-600">Gostaria de uma torta extra? 🍰</h2>
            <button
                type="button"
                aria-label="Adicionar torta extra"
                className=" text-pink-600 font-semibold py-2 px-4 rounded"
                onClick={() => alert("Torta extra adicionada!")}
            >
                <span className="italic after:w-full after:h-1 after:bg-pink-700">
                    Clique aqui! 🤤
                </span>
            </button>
        </div>
    )
}
