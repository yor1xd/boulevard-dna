"use client"

import smoking from "@/public/icons/no smoking.svg";
import economy from "@/public/icons/economy.svg";
import id from "@/public/icons/id.svg";
import guestsblock from "@/public/icons/guestsblock.svg";
import damage from "@/public/icons/damage.svg";
import trash from "@/public/icons/trash.svg";
import cat from "@/public/icons/cat.svg";
import car from "@/public/icons/garage.svg";
import close from "@/public/icons/closebrown.svg";

import Image from "next/image";
import { redirect } from "next/navigation";

const Casa = () => {

    return(
        <div className="relative flex h-[calc(100vh_-_4rem)] sm:h-[calc(100vh_-_5rem)]">
            <div className="relative flex flex-col w-full mx-2 md:w-2/3 lg:w-1/2 h-4/5 md:mx-auto my-auto p-5 bg-[#ffffff] shadow-xl rounded-2xl items-center justify-between" 
            style={{animation: "pulseIn 0.5s ease-in-out"}}>
                <h1 className="text-3xl md:text-4xl xl:text-5xl text-[#754927] font-brittany font-medium mt-5 mb-7 sm:mb-10">Regras da Casa</h1>
                <div className="flex flex-col w-full p-5 h-[75%] bg-white rounded-2xl overflow-auto gap-y-5" style={{boxShadow: "inset 0 2px 4px 4px rgb(0 0 0 / 0.1)"}}>
                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={smoking} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Proibido fumar dentro do apartamento.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={economy} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Ao sair, desligue os ar-condicionados e ventiladores para contribuir com a economia de energia.</p>   
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={id} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">É necessário identificar todos os hóspedes que estarão no apartamento. Todos devem estar incluídos na reserva.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={guestsblock} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Visitas externas não são permitidas. Apenas pessoas incluídas na reserva podem acessar o apartamento.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={damage} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Caso ocorra qualquer dano ou avaria, pedimos que nos notifique imediatamente para que possamos resolver de forma justa e equilibrada para ambas as partes.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={trash} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Por favor, retire o lixo regularmente e evite deixar louça suja na pia.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={cat} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Não aceitamos animais de estimação.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={car} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Vaga na garagem para 1 automóvel</p>
                    </div>

                </div>

                <button className="w-fit h-fit" onClick={() => redirect("/guia/regras")}>
                    <Image src={close} alt="Voltar" className="absolute top-5 right-5 h-[1.5rem] sm:h-[2.5rem] w-fit"/>
                </button>
            </div>
        </div>
    )

}

export default Casa;