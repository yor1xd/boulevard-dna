"use client"

import Link from "next/link";
import Image from "next/image";

import go from "@/public/icons/right.svg";
import tamar from "@/public/images/tamar.png";
import beach from "@/public/icons/beach.svg";
import close from "@/public/icons/closebrown.svg";
import { redirect } from "next/navigation";

const Page = () => {

    return(
        <div className="relative flex h-[calc(100vh_-_4rem)] sm:h-[calc(100vh_-_5rem)]">

            <div className="relative flex flex-col items-center justify-between overflow-hidden
                            w-full h-[80%] mb-auto mt-[10%] mx-2
                            sm:w-[80%] sm:h-[80%] sm:mx-auto sm:my-auto
                            md:w-2/3 md:h-[80%] md:mx-auto md:my-auto
                            lg:w-2/3 lg:h-[80%] lg:mx-auto lg:my-auto
                            xl:w-1/3 xl:h-[80%] xl:mx-auto xl:my-auto
                            px-2 bg-white shadow-2xl rounded-2xl"
                 style={{animation: "pulseIn 0.5s forwards"}}>


                    <h1 className="font-brittany text-[#754927]
                               text-3xl
                               md:text-4xl
                               lg:text-5xl my-10">Pontos turísticos</h1>

                    <h1 className="text-[#754927]
                               text-md text-center
                               md:text-xl">Explore os melhores destinos da região!</h1>

                    <div className="flex flex-col
                                w-full h-[60%]
                                bg-white rounded-2xl overflow-auto p-0 sm:p-5 gap-y-5 m-2"
                     style={{boxShadow: "inset 0 2px 4px 4px rgb(0 0 0 / 0.1)"}}>


                            <Link href="/guia/pontosturisticos/tamar">
                                <div className="flex flex-row items-center gap-x-5 justify-between
                                                w-full h-36
                                                rounded-2xl shadow-2xl p-5 transition-transform hover:-translate-y-[5%] cursor-pointer select-none group">
                                        <div className="flex justify-center items-center min-w-fit min-h-fit p-3 aspect-square
                                                        border-2 border-[#754927] rounded-2xl">
                                
                                                <Image src={tamar} alt="Projeto Tamar" className="w-16 h-fit"/>
                                
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center
                                                        h-full flex-grow
                                                        ">
                                                <h1 className="text-[#754927]
                                                               text-xl font-bold
                                                               md:text-3xl
                                                               ">Projeto Tamar</h1>
                                                <p className="text-[#754927] flex-grow
                                                              text-md invisible absolute
                                                              sm:visible sm:relative
                                                              overflow-hidden">Veja tartarugas marinhas de perto em tours educativos e aprenda sobre sua preservação!</p>
                                        </div>
                                        <Image src={go} alt="See more!" className="h-12 w-fit group-hover:animate-pingX"/>
                                </div>
                            </Link>

                            <Link href="/guia/pontosturisticos/praia">
                                <div className="flex flex-row items-center gap-x-5 justify-between
                                                w-full h-36
                                                rounded-2xl shadow-2xl p-5 transition-transform hover:-translate-y-[5%] cursor-pointer select-none group">
                                        <div className="flex justify-center items-center min-w-fit min-h-fit p-3 aspect-square
                                                        border-2 border-[#754927] rounded-2xl">
                                
                                                <Image src={beach} alt="Praia do Itaguá" className="w-16 h-fit"/>
                                
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center
                                                        h-full flex-grow
                                                        ">
                                                <h1 className="text-[#754927]
                                                               text-xl font-bold
                                                               md:text-3xl
                                                               ">Praia do Itaguá</h1>
                                                <p className="text-[#754927] flex-grow
                                                              text-md invisible absolute
                                                              sm:visible sm:relative
                                                              overflow-hidden">Praia com quiosques e restaurantes, ideal para caminhadas à beira do mar!</p>
                                        </div>
                                        <Image src={go} alt="See more!" className="h-12 w-fit group-hover:animate-pingX"/>
                                </div>
                            </Link>

                            <Link href="/guia/pontosturisticos/pier">
                                <div className="flex flex-row items-center gap-x-5 justify-between
                                                w-full h-36
                                                rounded-2xl shadow-2xl p-5 transition-transform hover:-translate-y-[5%] cursor-pointer select-none group">
                                        <div className="flex justify-center items-center min-w-fit min-h-fit p-3 aspect-square
                                                        border-2 border-[#754927] rounded-2xl">
                                
                                                <Image src={beach} alt="Píer" className="w-16 h-fit"/>
                                
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center
                                                        h-full flex-grow
                                                        ">
                                                <h1 className="text-[#754927]
                                                               text-xl font-bold
                                                               md:text-3xl
                                                               ">Píer</h1>
                                                <p className="text-[#754927] flex-grow
                                                              text-md invisible absolute
                                                              sm:visible sm:relative
                                                              overflow-hidden">Ótimo lugar para a pesca e a apreciação das paisagens mar adentro!</p>
                                        </div>
                                        <Image src={go} alt="See more!" className="h-12 w-fit group-hover:animate-pingX"/>
                                </div>
                            </Link>

                            <Link href="/guia/pontosturisticos/baleia">
                                <div className="flex flex-row items-center gap-x-5 justify-between
                                                w-full h-36
                                                rounded-2xl shadow-2xl p-5 transition-transform hover:-translate-y-[5%] cursor-pointer select-none group">
                                        <div className="flex justify-center items-center min-w-fit min-h-fit p-3 aspect-square
                                                        border-2 border-[#754927] rounded-2xl">
                                
                                                <Image src={beach} alt="Praça da Baleia" className="w-16 h-fit"/>
                                
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center
                                                        h-full flex-grow
                                                        ">
                                                <h1 className="text-[#754927]
                                                               text-xl font-bold
                                                               md:text-3xl
                                                               ">Praça da Baleia</h1>
                                                <p className="text-[#754927] flex-grow
                                                              text-md invisible absolute
                                                              sm:visible sm:relative
                                                              overflow-hidden">Parque gramado à beira-mar com vista panorâmica e um esqueleto de baleia exposto sobre colunas!</p>
                                        </div>
                                        <Image src={go} alt="See more!" className="h-12 w-fit group-hover:animate-pingX"/>
                                </div>
                            </Link>

                            </div>

                <button className="absolute top-5 right-5 w-fit h-fit" onClick={() => redirect("/guia")}>
                    <Image src={close} alt="Voltar" className="h-[1.5rem] sm:h-[2.5rem] w-fit"/>
                </button>

            </div>
        </div>
    )

}

export default Page;