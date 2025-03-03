"use client"

import Image from "next/image"

import food from "@/public/images/jundu.png";
import checkin from "@/public/icons/check.svg";
import checkout from "@/public/icons/checkout.svg";
import address from "@/public/icons/location brown.svg";
import distance from "@/public/icons/distance.svg";
import car from "@/public/icons/garage.svg";
import telephone from "@/public/icons/telephone.svg";
import website from "@/public/icons/url.svg";
import map from "@/public/icons/map.svg";
import close from "@/public/icons/closebrown.svg";

import { redirect } from "next/navigation";

const JunduLoungeBar = () => {

    return(
        <div className="relative flex flex-col
                        min-h-[calc(100vh_-_4rem)] 
                        sm:min-h-[calc(100vh_-_5rem)]">
        
            <div className="relative
                            flex flex-col items-center justify-start gap-y-5
                            w-[95%] h-auto mx-2 my-auto
                            md:w-4/5 md:mx-auto
                            lg:w-2/3 lg:mx-auto
                            xl:w-1/3 xl:mx-auto
                            p-5 bg-[#ffffff] shadow-xl rounded-2xl" 
                style={{ animation: "pulseIn 0.5s ease-in-out" }}>

                    <div className="flex flex-col items-center justify-evenly
                                    w-[5rem] sm:w-1/6 h-fit aspect-square
                                    rounded-2xl border-2 border-[#754927]">
                                
                            <Image src={food} alt="Restaurante" className="w-full h-fit"/>

                    </div>

                    <h1 className="text-[#754927] text-3xl">Jundu Lounge Bar</h1>

                    <h1 className="text-[#754927]
                               text-md text-center
                               md:text-xl">Drinks exclusivos, frutos do mar frescos e uma experiência única à beira-mar!</h1>

                    <div className="flex flex-row
                                w-full h-[10%]">

                        <div className="flex flex-row items-center justify-center gap-x-2
                                        w-1/2 h-full">

                            <Image src={checkin} alt="Check-In" className="h-6 sm:h-12 w-fit"/>
                            <p className="text-[#754927] text-sm sm:text-md md:text-xl sm:before:content-['Abre:_']">11:30h</p>

                        </div>

                        <div className="flex flex-row items-center justify-center gap-x-2 
                                        w-1/2 h-full">

                            <Image src={checkout} alt="Check-Out" className="h-6 sm:h-12 w-fit"/>
                            <p className="text-[#754927] text-sm sm:text-md md:text-xl sm:before:content-['Fecha:_']">00:00h</p>

                        </div>

                    </div>

                    <div className="relative 
                                    flex flex-col flex-grow justify-evenly
                                    w-full min-h-[40%] max-h-[20rem]
                                    p-5 rounded-2xl border-2 border-[#754927]">

                            <p className="absolute left-5 top-0
                                          px-2
                                          -translate-y-1/2
                                          bg-white text-[#754927]">Informações Gerais</p>

                            <div className="flex flex-col gap-y-5 w-full h-full overflow-scroll overflow-x-auto">
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={address} alt="Endereço" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">Av. Leovigildo Dias Vieira, 810</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={distance} alt="Distância" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">Distância de 500m do apartamento.</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={car} alt="Tempo de Carro" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">À 7 minutos a pé.</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={telephone} alt="Telefone" className="h-2/3 w-fit"/>
                                        <p className="text-[#754927] text-md sm:text-xl md:text-2xl">Telefone: (12) 3833-8732</p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={website} alt="Website" className="h-2/3 w-fit"/>
                                        <a href="https://junduubatuba.com.br/lounge-bar/" className="underline text-blue-700" target="__top">
                                            <p className="text-md sm:text-xl md:text-2xl">https://www.junduubatuba.com.br/</p>
                                        </a>
                                
                                </div>
                                <div className="flex flex-row items-center justify-start gap-x-2
                                                w-fit h-10">
                                
                                        <Image src={map} alt="Mapa" className="h-2/3 w-fit"/>
                                        <a href="https://maps.app.goo.gl/qLwrzLoVhHwqXiHC7" className="underline text-blue-700" target="__top">
                                            <p className="text-blue-700 text-md sm:text-xl md:text-2xl">Clique para ver no mapa.</p>
                                        </a>
                                
                                </div>
                            </div>

                    </div>

                <button className="absolute top-5 right-5 w-fit h-fit" onClick={() => redirect("/guia/comerebeber/")}>
                    <Image src={close} alt="Voltar" className="h-[1.5rem] sm:h-[2.5rem] w-fit"/>
                </button>

            </div>

            <div className="w-full h-20 sm:h-8"/>

        </div>
    )

}

export default JunduLoungeBar
