import wtt from "../assets/whatsapp.svg";

export function Footer() {
    return (
        <footer className="text-center mt-16 animate-fade-in-up">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Não encontrou o que procura?
                </h3>
                <p className="text-gray-600 mb-6">
                    Entre em contato conosco para criar um kit personalizado especialmente para você!
                </p>
                <a
                    href="https://wa.me/5521981315814"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                     <img src={wtt} alt="whatsapp" className="w-7 h-7" />
                    Falar com a Felicita
                </a>
            </div>
        </footer>
    )
}
