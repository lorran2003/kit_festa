import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import slide1 from '../assets/image/carousel/1.png';
import slide2 from '../assets/image/carousel/2.png';
import slide3 from '../assets/image/carousel/3.png';

const images = [slide1, slide2, slide3];

export function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            loop: true,
            slides: {
                perView: window.innerWidth <= 768 ? 1 : 2,
                spacing: 16,
            },
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true);
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 4000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    const goToSlide = (index: number) => {
        instanceRef.current?.moveToIdx(index);
    };

    return (
        <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Nossos Momentos Especiais
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Cada festa é única e especial. Veja alguns dos nossos trabalhos mais queridos!
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div ref={sliderRef} className="keen-slider">
                        {images.map((img, index) => (
                            <div key={index} className="keen-slider__slide">
                                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                                    <img 
                                        src={img} 
                                        alt={`Slide ${index + 1} - Felicita Festas Rio`} 
                                        className="w-full h-64 md:h-11/12 lg:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-xl font-bold">Festa Especial #{index + 1}</h3>
                                        <p className="text-sm">Momentos inesquecíveis</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {loaded && instanceRef.current && (
                        <>
                            <button
                                onClick={() => instanceRef.current?.prev()}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-10"
                                aria-label="Slide anterior"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => instanceRef.current?.next()}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-10"
                                aria-label="Próximo slide"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Dots Indicator */}
                    {loaded && instanceRef.current && (
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: images.length }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        currentSlide === idx 
                                            ? 'bg-pink-600 scale-125' 
                                            : 'bg-pink-300 hover:bg-pink-400'
                                    }`}
                                    aria-label={`Ir para slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-pink-200 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-200 rounded-full opacity-20 translate-x-12 translate-y-12"></div>
            </div>
        </section>
    )
}