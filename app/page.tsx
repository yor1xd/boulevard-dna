"use client";

import Image from "next/image";
import pic1 from "../public/images/1.jpeg";
import pic2 from "../public/images/2.jpeg";
import pic3 from "../public/images/3.jpeg";
import pic4 from "../public/images/4.jpeg";
import pic5 from "../public/images/5.jpeg";
import pic6 from "../public/images/6.jpeg";
import pic7 from "../public/images/7.jpeg";
import pic8 from "../public/images/8.jpeg";

import { useEffect, useRef, useState } from "react";
import Guia from "./guia/page";
import useMeasure from "react-use-measure";

// Duplicated array for seamless scrolling
const picArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic1, pic2, pic3, pic4];

export default function Home() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [ref, bounds] = useMeasure();

    // Animation states for the welcome title
    const [isInfoOnScreen, setIsInfoOnScreen] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isActive, setIsActive] = useState(true);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    }

    useEffect(() => {
            const scrollCarousel = () => {
            const carousel = carouselRef.current;
            if (!carousel) return;

            let scrollPosition = 0;
            const scrollWidth = carousel.scrollWidth * ((picArray.length - 4)/picArray.length); // Proportional to the ratio between the actually used images and the total images in array. For 8 images with 4 repetitions, the proportion is 8/12, or 2/3. For 4 images with 4 repetitions, is 4/8, or 1/2.

            const animate = () => {
                scrollPosition += (bounds.width > 600) ? 0.5 : 0.25; // Scroll speed
                if (scrollPosition >= scrollWidth + 10) {
                scrollPosition = 0; // Reset scroll position seamlessly
                }
                carousel.style.transform = `translateX(-${scrollPosition}px)`;
                requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
            };

            scrollCarousel();
    }, [bounds.width]);

    useEffect(() => {

        window.addEventListener("scroll", handleScroll, {passive: true});

        if(scrollPosition >= 200){
            setIsInfoOnScreen(true)
        } else {
            setIsInfoOnScreen(false)
        }

        return() => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [scrollPosition]);

    useEffect(() => {
        
        const interval = setInterval(() => {
            setIsActive(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (picArray.length - 4)); //All the actually used images.
                setIsActive(true);
            }, 2000);
        }, 4000);

        return() => clearInterval(interval);

    }, [currentImageIndex])

    return (
        <div ref={ref} className="flex flex-col sm:min-h-[150vh] h-full pt-5 sm:pt-12 overflow-hidden">

            {(bounds.width < 0 && bounds.width != 0) && <div className="carousel w-[calc(100%_-_1em)] mx-auto">
                <Image src={picArray[currentImageIndex]} alt="Image 1" className={`${isActive ? "active" : ""} w-full rounded-2xl transition-opacity duration-[2s] ease-in-out`} 
                style={{
                    WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 50%)",
                    animation: "fadeIn 1s ease-out"
                }}/>

            </div>}



            {(bounds.width >= 0) && //IMAGE CAROUSEL
            <div
                className="flex h-[60vh] w-auto sm:w-4/5 sm:h-[50vh] mx-auto overflow-hidden sm:pl-12"
                style={{ whiteSpace: "nowrap" }}>

                <div className="relative w-full h-full">
                    <div ref={carouselRef} className="flex transition-none gap-x-[20px]">
                    {picArray.map((img, i) => (
                        <Image
                        key={i}
                        src={img}
                        alt={`Image ${i + 1}`}
                        priority
                        className="rounded-3xl opacity-0 h-[60vh] object-cover sm:w-[400px] sm:h-[50vh]"
                        style={{
                            animation: `fadeIn 1s ease-out`,
                            animationDelay: `${i * 0.25}s`,
                            animationFillMode: "forwards",
                            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 50%)"
                        }}
                        />
                    ))}
            
                    </div>
                <div className="absolute w-2 lg:w-10 h-full left-0 sm:-left-12 top-0 bg-gradient-to-r from-[--background]" />
                <div className="absolute w-2 lg:w-10 h-full right-0 top-0 bg-gradient-to-l from-[--background]" />

                </div>
                
            </div>
            //END IMAGE CAROUSEL
            }



        <div className="relative flex flex-col h-[calc(40vh_-_8rem)] sm:h-[calc(50vh_-_8rem)] justify-evenly">
             
            <h1 className="font-brittany text-6xl text-center w-full lg:text-7xl xl:text-9xl xl:mb-10 text-[#754927] animate-fromaboveop select-none opacity-0" style={{animationDelay: "0.5s", animationFillMode: "forwards"}}>
            Bem-vindos!
            </h1>
            
            
            <h2 className="text-xl line-clamp-2 w-full text-center px-5 my-0 md:mt-0 lg:text-3xl text-[#754927] animate-fromabelowop opacity-0" style={{animationDelay: "1s", animationFillMode: "forwards"}}>
            Esperamos que se sintam em casa e aproveitem ao máximo a estadia.
            </h2>
            
            
            <p className="absolute sm:relative text-xl text-[#754927] animate-fromabelowop w-full text-center opacity-0 invisible sm:visible" style={{animationDelay: "1.5s", animationFillMode: "forwards"}}>
            {(bounds.width < 600) ? "Clique no ícone do menu no canto superior direito para acessar o menu." : "Arraste para baixo para acessar o menu."}
            </p>
            
        </div>

        {isInfoOnScreen && <Guia/>}
        </div>
    );
}
