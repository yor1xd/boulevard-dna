"use client"

import condo from "@/public/icons/condo.svg";
import house from "@/public/icons/house.svg";
import close from "@/public/icons/closebrown.svg";

import Image from "next/image";
import { redirect } from "next/navigation";

const Regras = () => {

    return(
        <div className="relative flex h-[calc(100vh_-_4rem)] sm:h-[calc(100vh_-_5rem)]">

            <div className="relative flex flex-col items-center justify-evenly
                            w-full min-h-1/2 mb-auto mt-[25%] mx-2
                            sm:w-2/3 sm:h-1/2 sm:mx-auto sm:my-auto
                            md:w-2/3 md:h-2/3 md:mx-auto md:my-auto
                            lg:w-1/3 lg:h-2/3 lg:mx-auto lg:my-auto
                            px-2 bg-white shadow-2xl rounded-2xl"
                 style={{animation: "pulseIn 0.5s forwards"}}>

                <h1 className="font-brittany text-[#754927]
                               text-3xl
                               md:text-4xl
                               lg:text-5xl my-10">Regras da Casa</h1>

                <h1 className="text-[#754927]
                               text-md text-center
                               md:text-xl">Escolha um dos conjuntos de regras:</h1>
            
                <div className="flex flex-row justify-evenly items-center
                                w-[16rem]
                                md:w-[20rem]
                                lg:w-[24rem]" style={{aspectRatio: "2 / 1"}}>

                    <button className="flex flex-col items-center justify-evenly
                                       w-1/3 h-fit
                                       aspect-square
                                       bg-white rounded-2xl border-2 border-[#754927] shadow-2xl
                                       transition-transform hover:scale-105 active:scale-100"
                            onClick={() => redirect("/guia/regras/casa")}>

                        <Image src={house} alt="Casa" className="h-1/2 w-fit"/>
                        <p className="max-w-[90%] text-ellipsis overflow-hidden text-[#754927]">Casa</p>
                    </button>

                    <button className="flex flex-col items-center justify-evenly
                                       w-1/3 h-fit
                                       aspect-square
                                       bg-white rounded-2xl border-2 border-[#754927] shadow-2xl
                                       transition-transform hover:scale-105 active:scale-100"
                            onClick={() => redirect("/guia/regras/condominio")}>

                        <Image src={condo} alt="Casa" className="h-1/2 w-fit"/>
                        <p className="max-w-[90%] text-ellipsis overflow-hidden text-[#754927]">Condomínio</p>
                    </button>

                </div>

                <button className="w-fit h-fit" onClick={() => redirect("/guia")}>
                    <Image src={close} alt="Voltar" className="absolute top-5 right-5 h-[1.5rem] sm:h-[2.5rem] w-fit"/>
                </button>

            </div>
        </div>
    )

}

export default Regras;