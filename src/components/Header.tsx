import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import logo from '../assets/image/logo_festa.jpg';

export function Header() {
    return (
        <header className="sticky z-30 top-0 bg-transparent backdrop-blur-md border-b border-pink-100 shadow-sm w-full h-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4">
                        <div className="relative group">
                            <img
                                src={logo}
                                alt="Felicita Festas Rio - Logo"
                                className="h-16 w-16 rounded-full shadow-lg ring-4 ring-pink-200 group-hover:ring-pink-500 transition-all duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                Felicita Festas Rio
                            </h1>
                            <p className="text-sm text-gray-600 font-medium">Celebrando momentos especiais</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-3">
                        {linksContact.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target='_blank'
                                rel="noopener noreferrer"
                                className={`group flex items-center sm:space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-medium transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg`}
                                aria-label={`Siga-nos no ${item.name}`}
                            >
                                <img src={item.icon} alt={item.name} className="w-6 h-6 sm:h-5 sm:w-5" />
                                <span className="hidden sm:inline">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}


const linksContact = [
    {
        name: 'WhatsApp',
        icon: whatsapp,
        href: 'https://wa.me/5521981315814',
        color: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
    },
    {
        name: 'Instagram',
        icon: instagram,
        href: 'https://www.instagram.com/felicitafestasrio?utm_source=ig_web_button_share_sheet&igsh=dm5mYW4ydXpodzE4',
        color: "from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-600"
    },
]