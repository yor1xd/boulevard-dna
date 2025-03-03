"use client"

import noise from "@/public/icons/noise.svg";
import garage2 from "@/public/icons/garage2.svg";
import wet from "@/public/icons/wet.svg";
import towel from "@/public/icons/towel.svg";
import clock from "@/public/icons/clock.svg";
import minor from "@/public/icons/minor.svg";
import food from "@/public/icons/foodbrown.svg";
import trash from "@/public/icons/trash.svg";
import hanger from "@/public/icons/hanger.svg";
import cloth from "@/public/icons/cloth.svg";
import close from "@/public/icons/closebrown.svg";

import Image from "next/image";
import { redirect } from "next/navigation";

const Condominio = () => {
    return(
        <div className="relative flex h-[calc(100vh_-_4rem)] sm:h-[calc(100vh_-_5rem)]">
            <div className="relative flex flex-col w-full mx-2 md:w-2/3 lg:w-1/2 h-4/5 md:mx-auto my-auto p-5 bg-[#ffffff] shadow-xl rounded-2xl items-center justify-between" 
            style={{animation: "pulseIn 0.5s ease-in-out"}}>
                <h1 className="text-3xl md:text-4xl xl:text-5xl text-[#754927] font-brittany font-medium mt-5 mb-7 sm:mb-10">Regras do Condomínio</h1>
                <div className="flex flex-col w-full p-5 h-[75%] bg-white rounded-2xl overflow-auto gap-y-5" style={{boxShadow: "inset 0 2px 4px 4px rgb(0 0 0 / 0.1)"}}>
                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={noise} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Proibido som alto e qualquer barulho que possa ser considerado perturbação do sossego.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={garage2} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Estacionar somente na vaga de garagem do apartamento</p>   
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={wet} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Proibido transitar molhado nas dependências do condomínio</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={towel} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Obrigatório o uso de toalha na área da piscina</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={clock} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Horário de uso da piscina: das 9h às 20h.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={minor} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Menores não podem utilizá-la desacompanhados.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={food} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Proibido comer e beber na área da piscina.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={trash} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Acondicionar o lixo em sacos apropriados e depositá-lo na lixeira, que fica localizada no pavimento térreo.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={hanger} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Proibido pendurar qualquer objeto na sacada.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={cloth} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Utilizar trajes apropriados na piscina.</p>
                    </div>

                </div>

                <button className="w-fit h-fit" onClick={() => redirect("/guia/regras")}>
                    <Image src={close} alt="Voltar" className="absolute top-5 right-5 h-[1.5rem] sm:h-[2.5rem] w-fit"/>
                </button>
            </div>
        </div>
    )

}

export default Condominio;