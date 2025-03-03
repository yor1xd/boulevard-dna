"use client"

import aquario from "@/public/images/aquario.jpg";
import aquario1 from "@/public/images/aquario1.jpg";
import aquario2 from "@/public/images/aquario2.jpg";
import aquario3 from "@/public/images/aquario3.jpg";
import aquario4 from "@/public/images/aquario4.jpg";

import close from "@/public/icons/close.svg";
import closebrown from "@/public/icons/closebrown.svg";

import left from "@/public/icons/left.svg";
import right from "@/public/icons/right.svg";

import checkin from "@/public/icons/check.svg";
import checkout from "@/public/icons/checkout.svg";

import address from "@/public/icons/location brown.svg";
import distance from "@/public/icons/distance.svg";
import car from "@/public/icons/garage.svg";
import telephone from "@/public/icons/telephone.svg";
import website from "@/public/icons/url.svg";

import Image, { StaticImageData } from "next/image";
import { useState, useRef } from "react";
import { redirect } from "next/navigation";

const Localizacao = () => {
    const [CurrentImageInFullscreen, setImageFullscreen] = useState<StaticImageData | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollLeft -= 200;
    };

    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollLeft += 200;
    };

    return(
        <div className="relative flex flex-col min-h-[calc(100vh_-_4rem)] sm:min-h-[calc(100vh_-_5rem)]">
            <div className="relative w-[95%] mx-2 sm:w-2/3 h-auto sm:mx-auto mb-auto mt-10 sm:my-auto flex flex-col items-center bg-[#ffffff] rounded-2xl shadow-2xl py-4 pt-10 gap-y-5 justify-between" style={{animation: "pulseIn 0.5s ease-in-out"}}>
                <h1 className="text-4xl lg:text-5xl text-[#754927] font-brittany font-medium mb-10">Aquário de Ubatuba</h1>

                <div className="flex flex-row
                                w-full h-[10%]">

                        <div className="flex flex-row items-center justify-center gap-x-2
                                        w-1/2 h-full">

                            <Image src={checkin} alt="Check-In" className="h-6 sm:h-12 w-fit"/>
                            <p className="text-[#754927] text-sm sm:text-md md:text-xl before:content-['Abre:_']">10:00h</p>

                        </div>

                        <div className="flex flex-row items-center justify-center gap-x-2 
                                        w-1/2 h-full">

                            <Image src={checkout} alt="Check-Out" className="h-6 sm:h-12 w-fit"/>
                            <p className="text-[#754927] text-sm sm:text-md md:text-xl before:content-['Fecha:_']">22:00h</p>
                        </div>
                </div>

                <div className="relative 
                                    flex flex-col flex-grow justify-evenly
                                    w-[95%] max-h-[20rem]
                                    p-2 sm:p-5 rounded-2xl border-2 border-[#754927]">

                            <p className="absolute left-5 top-0
                                          px-2
                                          -translate-y-1/2
                                          bg-white text-[#754927]">Informações Gerais</p>

                            <div className="flex flex-col gap-y-2 w-full h-full overflow-auto">
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={address} alt="Endereço" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">Rua Guarani, 859.</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={distance} alt="Distância" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">Distância de 1km do apartamento.</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={car} alt="Tempo a Pé" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">À 3 minutos de carro.</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={telephone} alt="Telefone" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">Telefone: (12) 3834-1382</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={website} alt="Website" className="h-2/3 w-fit"/>
                                        <a href="https://www.aquariodeubatuba.com.br/" className="underline text-blue-700" target="__top">
                                            <p className="text-md sm:text-xl md:text-2xl">https://www.aquariodeubatuba.com.br/</p>
                                        </a>
                                
                                </div>
                            </div>

                    </div>
                
                <div className="w-full px-5 pb-3 sm:pb-0 h-[10rem] xl:h-[20rem] relative">
                    <button onClick={scrollLeft} className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg">
                        <Image src={left} alt="Scroll left" className="h-[32px] w-fit"/>
                    </button>
                    <div 
                        ref={scrollRef} 
                        className="flex flex-row w-full h-full gap-x-5 items-end overflow-x-auto whitespace-nowrap rounded-lg scroll-smooth"
                        onWheel={(e) => { scrollRef.current!.scrollLeft += e.deltaY * 2; }}
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7320.771846896225!2d-45.0682331!3d-23.446539899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd53d33ce078a5%3A0x4b934b47abd7b74a!2sAqu%C3%A1rio%20de%20Ubatuba!5e0!3m2!1spt-BR!2sbr!4v1738422753119!5m2!1spt-BR!2sbr" loading="lazy" className="h-full w-auto rounded-lg"></iframe>
                        <Image src={aquario} alt="aquario do Itaguá" className="h-full w-auto rounded-lg transition-all hover:brightness-50 cursor-pointer" onClick={() => setImageFullscreen(aquario)}/>
                        <Image src={aquario1} alt="aquario do Itaguá 1" className="h-full w-auto rounded-lg transition-all hover:brightness-50 cursor-pointer" onClick={() => setImageFullscreen(aquario1)}/>
                        <Image src={aquario2} alt="aquario do Itaguá 2" className="h-full w-auto rounded-lg transition-all hover:brightness-50 cursor-pointer" onClick={() => setImageFullscreen(aquario2)}/>
                        <Image src={aquario3} alt="aquario do Itaguá 3" className="h-full w-auto rounded-lg transition-all hover:brightness-50 cursor-pointer" onClick={() => setImageFullscreen(aquario3)}/>
                        <Image src={aquario4} alt="aquario do Itaguá 4" className="h-full w-auto rounded-lg transition-all hover:brightness-50 cursor-pointer" onClick={() => setImageFullscreen(aquario4)}/>
                    </div>
                    <button onClick={scrollRight} className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg">
                        <Image src={right} alt="Scroll right" className="h-[32px] w-fit"/>
                    </button>
                </div>

                <button className="absolute top-5 right-5 w-fit h-fit" onClick={() => redirect("/guia/passeios/")}>
                    <Image src={closebrown} alt="Voltar" className="h-[1.5rem] sm:h-[2.5rem] w-fit"/>
                </button>
            </div>

            {CurrentImageInFullscreen && 
                <div 
                    className="flex w-screen h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.75)] z-10" 
                    onClick={() => setImageFullscreen(null)}
                >
                    <div 
                        className="flex items-center justify-center w-full h-full overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image 
                            src={CurrentImageInFullscreen} 
                            alt="Imagem em tela cheia da faixada" 
                            className="w-[80vw] h-auto" 
                        />
                    </div>
                    <Image 
                        src={close} 
                        alt="Fechar" 
                        className="absolute top-10 right-10 h-16 w-fit cursor-pointer" 
                        onClick={() => setImageFullscreen(null)}
                    />
                </div>
            }

            <div className="w-full h-20 sm:h-8"/>
            
        </div>
    )
}

export default Localizacao;