"use client"

import cancun from "@/public/images/cancun.webp";
import cancun2 from "@/public/images/cancun2.jpeg";
import address from "@/public/icons/location brown.svg";
import cep from "@/public/icons/cep.svg";
import copy from "@/public/icons/copy.svg";
import info from "@/public/icons/info.svg";
import close from "@/public/icons/close.svg";
import closebrown from "@/public/icons/closebrown.svg";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";

const Localizacao = () => {

    const [hasCopiedCEP, setCopyCEP] = useState(false)
    const [CurrentImageInFullscreen, setImageFullscreen] = useState<StaticImageData | null>(null);

    return(
        <div className="relative flex h-[calc(100vh_-_4rem)] sm:h-[calc(100vh_-_5rem)]">
            <div className="relative w-full mx-2 sm:w-2/3 min-h-[60%] max-h-[80%] sm:h-[70%] lg:h-[75%] xl:h-[90%] sm:mx-auto mb-auto mt-10 sm:my-auto flex flex-col items-center bg-[#ffffff] rounded-2xl shadow-2xl py-4 pt-10 gap-y-5 justify-between overflow-y-auto" style={{animation: "pulseIn 0.5s ease-in-out"}}>
                <h1 className="text-4xl lg:text-4xl text-[#754927] font-brittany font-medium mb-5">Localização</h1>

                <div className="w-full flex flex-col gap-y-5">
                    <div className="w-full flex flex-row items-center gap-4 px-2 md:px-5 lg:px-10">
                            <Image src={address} alt="Endereço: " className="h-5 sm:h-9 lg:h-12 w-fit"/>
                            <div className="relative [flex-basis:100%]">
                                <div className="text-sm sm:text-md lg:text-lg text-[#1d1d1d] border-2 border-[#754927] bg-white rounded-lg p-2 sm:p-5 font-mono cursor-text">R. Luís Gama, 55 - Itaguá, Ubatuba.</div>
                                <span className="absolute top-0 -translate-y-1/2 left-3 text-sm sm:text-lg text-[#754927] bg-background px-2 font-mono">endereço</span>
                            </div>
                    </div>
                    <div className="relative w-full flex flex-row items-center gap-4 px-2 md:px-5 lg:px-10">
                            <Image src={cep} alt="CEP: " className="h-5 sm:h-9 lg:h-12 w-fit"/>
                            <div className="relative [flex-basis:100%]">
                                <div className="text-sm sm:text-md lg:text-lg text-[#1d1d1d] border-2 border-[#754927] bg-white rounded-lg p-2 sm:p-5 font-mono cursor-text">11688-640</div>
                                <span className="absolute top-0 -translate-y-1/2 left-3 text-sm sm:text-lg text-[#754927] bg-background px-2 font-mono">CEP</span>
                                <Image src={copy} alt="Copy to clipboard" className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 h-1/3 sm:h-1/2 w-fit transition-opacity opacity-75 hover:opacity-100 cursor-pointer active:scale-95" onClick={() => {if(!(hasCopiedCEP)) {setCopyCEP(true); navigator.clipboard.writeText("11688-640"); setTimeout(() => setCopyCEP(false), 3000)}}}/>
                            </div>
                    </div>
                    <div className="flex flex-row items-center gap-x-2 mr-auto ml-5 md:ml-28 opacity-75 transition-opacity hover:opacity-100 cursor-pointer">
                        <Image src={info} alt="Informativo" className="h-[16px] sm:h-[32px] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-md lg:text-xl">A 200m da orla da praia!</p>
                    </div>
                </div>
                
                
                
                <div className="w-full px-5 pb-3 sm:pb-0 h-[6rem] xl:h-[50%] flex-grow">
                    <div className="flex flex-row w-full h-full gap-x-5 items-end overflow-auto rounded-lg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.0005660504438!2d-45.06692762227843!3d-23.45321647128109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd53972b1ffdbd%3A0xdfd61d14e98d837d!2sA3%20-%20Cancun%20Beach%20Residence!5e0!3m2!1spt-BR!2sbr!4v1737734513549!5m2!1spt-BR!2sbr" loading="lazy"
                        className="w-1/2 h-full rounded-lg flex-grow-[1]"></iframe>
                        <Image src={cancun} alt="Condomínio Cancun" className="h-full w-fit rounded-lg transition-all hover:brightness-50 cursor-pointer" onClick={() => setImageFullscreen(cancun)}/>
                        <Image src={cancun2} alt="Fachada condomínio Cancun" className="h-full w-fit rounded-lg transition-all hover:brightness-50 cursor-pointer" onClick={() => setImageFullscreen(cancun2)}/>
                    </div>
                </div>

            <button className="absolute top-5 right-5 w-fit h-fit" onClick={() => redirect("/guia")}>
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
      onClick={(e) => e.stopPropagation()} // Prevent click propagation
    >
      <Image 
        src={CurrentImageInFullscreen} 
        alt="Imagem em tela cheia da faixada" 
        className="h-[80vh] w-auto" // Fixed height, auto width for aspect ratio
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
        </div>
    )
}

export default Localizacao;