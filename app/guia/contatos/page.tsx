"use client"

import instagram from "@/public/icons/instagram.svg";
import whatsapp from "@/public/icons/whatsapp-tile.svg"
import airbnb from "@/public/icons/airbnb-tile.svg";
import close from "@/public/icons/closebrown.svg";

import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";

const Contato = () => {

    return(
        <div className="relative flex h-[calc(100vh_-_4rem)] sm:h-[calc(100vh_-_5rem)]">

            <div className="relative flex flex-col items-center justify-evenly
                            w-full min-h-1/2 mb-auto mt-[25%] mx-2
                            sm:w-2/3 sm:min-h-1/2 sm:mx-auto sm:my-auto
                            md:w-2/3 md:min-h-2/3 md:mx-auto md:my-auto
                            lg:w-2/3 lg:min-h-[60%] lg:mx-auto lg:my-auto
                            xl:w-1/3
                            px-2 bg-white shadow-2xl rounded-2xl"
                 style={{animation: "pulseIn 0.5s forwards"}}>

                <h1 className="font-brittany text-[#754927]
                               text-3xl
                               md:text-4xl
                               lg:text-5xl my-10">Contatos</h1>

                <h1 className="text-[#754927]
                               text-md text-center
                               md:text-xl">Tem algum problema? Não hesite em nos procurar!</h1>

                <h1 className="text-[#754927]
                               text-md text-center
                               md:text-xl">Selecione um dos meios de contato!</h1>
            
                <div className="flex flex-row justify-evenly items-center
                                w-[80%] gap-x-5 h-fit flex-grow
                                md:w-[20rem]
                                lg:w-[24rem]" style={{aspectRatio: "2 / 1"}}>

                        <div className="w-1/4 h-fit flex-grow flex flex-col justify-start items-center overflow-hidden transition-transform hover:scale-105 cursor-pointer" onClick={() => {window.open("https://wa.me/12981975865?text=Oi%2C queria tirar dúvidas sobre o apartamento 304 de itaguá.", "__top")}}>

                                <Image src={whatsapp} alt="Whatsapp" className="h-[80%] w-fit aspect-square object-contain"/>
                                <p className="line-clamp-1 text-md text-[#754927]">Whatsapp</p>
                        
                        </div>

                        <div className="w-1/4 h-fit flex-grow flex flex-col justify-start items-center overflow-hidden transition-transform hover:scale-105 cursor-pointer" onClick={() => {window.open("https://www.instagram.com/ap304itagua", "__top")}}>

                                <Image src={instagram} alt="Whatsapp" className="w-full h-fit aspect-square object-contain"/>
                                <p className="line-clamp-1 text-md text-[#754927]">Instagram</p>
                        
                        </div>

                        <div className="w-1/4 h-fit flex-grow flex flex-col justify-start items-center overflow-hidden transition-transform hover:scale-105 cursor-pointer" onClick={() => {window.open("https://www.airbnb.com.br/rooms/1237030016386778277", "__top")}}>

                                <Image src={airbnb} alt="Whatsapp" className="h-[80%] w-fit aspect-square object-contain"/>
                                <p className="line-clamp-1 text-md text-[#754927]">Airbnb</p>
                        
                        </div>

                    

                </div>

                <button className="absolute top-5 right-5 w-fit h-fit" onClick={() => redirect("/guia", RedirectType.push)}>
                    <Image src={close} alt="Voltar" className="h-[1.5rem] sm:h-[2.5rem] w-fit"/>
                </button>

            </div>
        </div>
    )

}

export default Contato;