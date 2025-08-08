import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import logo from '../assets/image/logo_festa.jpg';

export function Header() {
    return (
        <header className="flex items-center justify-start p-4 bg-pink-50 gap-4">

            <img src={logo} alt="logo marca" className='h-20 w-20 rounded-full shadow' />

            <a href="https://www.instagram.com/felicitafestasrio?utm_source=ig_web_button_share_sheet&igsh=dm5mYW4ydXpodzE4" target='_blank' rel="noopener noreferrer"
            className='flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:bg-zinc-50 p-0.5 rounded hover:shadow'>
                <span>
                    <img src={instagram} alt="Instagram" className="h-8 w-8" />
                </span>
                <span>
                    <span>Instagram</span>
                </span>
            </a>

            <a href="https://wa.me/5521981315814" target='_blank' rel="noopener noreferrer" className='flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:bg-zinc-50 rounded hover:shadow p-0.5'>
                <span>
                    <img src={whatsapp} alt="whatsapp" className="h-8 w-8"/>
                </span>
                <span>
                    <span>Whatsapp</span>
                </span>
            </a>
        </header>
    )
}
