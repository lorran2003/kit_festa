import { useKeenSlider } from 'keen-slider/react';
import slide1 from '../assets/image/carousel/1.png';
import slide2 from '../assets/image/carousel/2.png';
import slide3 from '../assets/image/carousel/3.png';


const images = [slide1, slide2, slide3];

export function Carousel() {


    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            slides: {
                perView: window.innerWidth <= 1024 ? 1 : 2,
                spacing: 10,
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
                    }, 2000)
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

    return (
        <>
            <div ref={sliderRef} className="keen-slider bg-pink-50">
                {images.map((img, index) => (
                    <div key={index} className="keen-slider__slide">
                        <img src={img} alt={`Slide ${index + 1}`} className="w-auto h-auto rounded-lg shadow-lg" />
                    </div>
                ))}
            </div>
        </>
    )
}
