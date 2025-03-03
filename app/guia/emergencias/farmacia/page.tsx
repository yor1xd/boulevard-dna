"use client"

import Image from "next/image"

import pill from "@/public/icons/capsule.svg";
import checkin from "@/public/icons/check.svg";
import checkout from "@/public/icons/checkout.svg";
import address from "@/public/icons/location brown.svg";
import distance from "@/public/icons/distance.svg";
import car from "@/public/icons/garage.svg";
import telephone from "@/public/icons/telephone.svg";
import delivery from "@/public/icons/delivery brown.svg";
import map from "@/public/icons/map.svg";
import close from "@/public/icons/closebrown.svg";

import { redirect } from "next/navigation";

const Farmacia = () => {

    return(
        <div className="relative flex
                        h-[calc(100vh_-_4rem)] 
                        sm:h-[calc(100vh_-_5rem)]">
        
            <div className="relative
                            flex flex-col items-center justify-start gap-y-5
                            w-full h-4/5 mx-2 my-auto
                            md:w-4/5 md:mx-auto
                            lg:w-2/3 lg:mx-auto
                            xl:w-1/3 xl:mx-auto
                            p-5 bg-[#ffffff] shadow-xl rounded-2xl" 
                style={{ animation: "pulseIn 0.5s ease-in-out" }}>

                    <div className="flex flex-col items-center justify-evenly
                                    w-[5rem] sm:w-1/6 h-fit aspect-square
                                    rounded-2xl border-2 border-[#754927]">
                                
                            <Image src={pill} alt="Farmácia" className="h-1/2 w-fit"/>
                            <p className="text-[#754927]">Farmácia</p>

                    </div>

                    <h1 className="text-[#754927] text-2xl sm:text-3xl">Droga Raia</h1>

                    <div className="flex flex-row
                                w-full h-[10%]">

                        <div className="flex flex-row items-center justify-center gap-x-2
                                        w-1/2 h-full">

                            <Image src={checkin} alt="Check-In" className="h-1/2 sm:h-2/3 w-fit"/>
                            <p className="text-[#754927] text-sm sm:text-md md:text-xl before:content-['Abre:_']">07h</p>

                        </div>

                        <div className="flex flex-row items-center justify-center gap-x-2 
                                        w-1/2 h-full">

                            <Image src={checkout} alt="Check-Out" className="h-1/2 sm:h-2/3 w-fit"/>
                            <p className="text-[#754927] text-sm sm:text-md md:text-xl before:content-['Fecha:_']">23h</p>

                        </div>

                    </div>

                    <div className="relative 
                                    flex flex-col flex-grow justify-evenly
                                    w-full min-h-[10%]
                                    p-5 rounded-2xl border-2 border-[#754927]">

                            <p className="absolute left-5 top-0
                                          px-2
                                          -translate-y-1/2
                                          bg-white text-[#754927]">Informações Gerais</p>

                            <div className="flex flex-col gap-y-5 w-full h-full overflow-auto">
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={address} alt="Endereço" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">Rua Capitão Felipe, número 203.</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={distance} alt="Endereço" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">Distância de 900m do apartamento.</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={car} alt="Endereço" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">À 4 minutos de carro.</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={telephone} alt="Endereço" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">Telefone: (12) 99635-0508</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={delivery} alt="Endereço" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">Faz entregas.</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={map} alt="Endereço" className="h-2/3 w-fit"/>
                                        <a href="https://maps.app.goo.gl/WMbr7wjco5o7sE6b6" className="underline text-blue-700" target="__top">
                                            <p className="text-blue-700 text-md sm:text-xl md:text-2xl">Clique para ver no mapa.</p>
                                        </a>
                                
                                </div>
                            </div>

                    </div>

                <button className="w-fit h-fit" onClick={() => redirect("/guia/emergencias/")}>
                    <Image src={close} alt="Voltar" className="absolute top-5 right-5 h-[1.5rem] sm:h-[2.5rem] w-fit"/>
                </button>

            </div>

        </div>
    )

}

export default Farmacia