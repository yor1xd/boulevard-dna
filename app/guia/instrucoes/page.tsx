"use client"

import car from "@/public/icons/garage2.svg";
import check from "@/public/icons/check.svg";
import checkin from "@/public/icons/checkin.svg";
import checkout from "@/public/icons/checkout.svg";
import door from "@/public/icons/door.svg";
import cart from "@/public/icons/cart.svg";
import wet from "@/public/icons/wet.svg";
import towel from "@/public/icons/towel.svg";
import building from "@/public/icons/condo.svg";
import close from "@/public/icons/closebrown.svg";

import Image from "next/image";
import { redirect } from "next/navigation";

const Instrucoes = () => {

    return(
        <div className="relative flex
                        h-[calc(100vh_-_4rem)] 
                        sm:h-[calc(100vh_-_5rem)]">

            <div className="relative
                            flex flex-col items-center justify-between
                            w-full h-4/5 mx-2 my-auto
                            md:w-4/5 md:mx-auto
                            lg:w-2/3 lg:mx-auto
                            xl:w-1/2 xl:mx-auto
                            p-5 bg-[#ffffff] shadow-xl rounded-2xl" 
                 style={{ animation: "pulseIn 0.5s ease-in-out" }}>
                
                <h1 className="font-brittany text-[#754927]
                               text-3xl
                               md:text-4xl
                               lg:text-5xl my-10">Instruções</h1>

                <div className="flex flex-row
                                w-full h-[10%]">

                    <div className="flex flex-row items-center justify-center gap-x-2
                                    w-1/2 h-full">

                        <Image src={check} alt="Check-In" className="h-1/2 sm:h-2/3 w-fit"/>
                        <p className="text-[#754927] text-sm sm:text-md md:text-xl sm:before:content-['Horário_de_']">Check-In: 14h</p>

                    </div>

                    <div className="flex flex-row items-center justify-center gap-x-2 
                                    w-1/2 h-full">

                        <Image src={checkout} alt="Check-Out" className="h-1/2 sm:h-2/3 w-fit"/>
                        <p className="text-[#754927] text-sm sm:text-md md:text-xl sm:before:content-['Horário_de_']">Check-Out: 11h</p>

                    </div>

                </div>

                <div className="flex flex-col
                                w-full h-[60%]
                                bg-white rounded-2xl overflow-auto p-5 gap-y-5"
                     style={{boxShadow: "inset 0 2px 4px 4px rgb(0 0 0 / 0.1)"}}>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={car} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Utilizar somente a vaga única correspondente ao apartamento.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={checkin} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Confirmar o horário de chegada para que o responsável possa se organizar e te aguardar no momento certo.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={wet} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Certificar-se de desligar corretamente a mangueira d&apos;água da parte externa do prédio.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={door} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Não deixar as portas de vidro da entrada do prédio abertas.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={cart} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Ao utilizar o carrinho de compras, retorná-lo ao local onde foi retirado, dentro das dependências do prédio.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={building} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Ao sair pela garagem, certifique-se que o portão foi corretamente fechado.</p>
                    </div>

                    <div className="flex flex-row gap-x-5 h-fit items-center">
                        <Image src={towel} alt="" className="h-[1rem] sm:h-[2rem] w-fit"/>
                        <p className="text-[#754927] text-md sm:text-[1.5rem]">Retirar o excesso de areia e se secar antes de entrar no elevador.</p>
                    </div>
                    
                    
                </div>

            <button className="absolute top-5 right-5 w-fit h-fit" onClick={() => redirect("/guia")}>
                <Image src={close} alt="Voltar" className="h-[1.5rem] sm:h-[2.5rem] w-fit"/>
            </button>
                

                   
            </div>
        </div>
    )

}

export default Instrucoes;