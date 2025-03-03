"use client"

import Link from "next/link";
import Image from "next/image";

import go from "@/public/icons/right.svg";

import fish from "@/public/icons/fish.svg";
import museu from "@/public/images/museu.webp";

import close from "@/public/icons/closebrown.svg";
import { redirect } from "next/navigation";

const Page = () => {

    return(
        <div className="relative flex h-[calc(100vh_-_4rem)] sm:h-[calc(100vh_-_5rem)]">

            <div className="relative flex flex-col items-center justify-between
                            w-full h-[65%] mb-auto mt-[10%] mx-2
                            sm:w-[80%] sm:h-[70%] sm:mx-auto sm:my-auto
                            md:w-2/3 md:h-[70%] md:mx-auto md:my-auto
                            lg:w-2/3 lg:h-[70%] lg:mx-auto lg:my-auto
                            xl:w-1/3 xl:h-[70%] xl:mx-auto xl:my-auto
                            px-2 bg-white shadow-2xl rounded-2xl"
                 style={{animation: "pulseIn 0.5s forwards"}}>


                    <h1 className="font-brittany text-[#754927]
                               text-3xl
                               md:text-4xl
                               lg:text-5xl my-10">Passeios</h1>

                    <h1 className="text-[#754927]
                               text-md text-center
                               md:text-xl">Aventuras e relaxamento a apenas alguns passos!</h1>

                    <div className="flex flex-col
                                w-full h-fit
                                bg-white rounded-2xl overflow-auto p-1 sm:p-5 my-2 gap-y-5"
                     style={{boxShadow: "inset 0 2px 4px 4px rgb(0 0 0 / 0.1)"}}>


                            <Link href="/guia/passeios/aquario">
                                <div className="flex flex-row items-center gap-x-5
                                                w-full h-36
                                                rounded-2xl shadow-2xl p-5 transition-transform hover:-translate-y-[5%] cursor-pointer select-none group">
                                        <div className="flex justify-center items-center min-w-fit min-h-fit p-3 aspect-square
                                                        border-2 border-[#754927] rounded-2xl">
                                
                                                <Image src={fish} alt="Aquário de Ubatuba" className="w-16 h-fit"/>
                                
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center
                                                        h-full flex-grow
                                                        ">
                                                <h1 className="text-[#754927]
                                                               text-xl font-bold
                                                               md:text-3xl
                                                               ">Aquário de Ubatuba</h1>
                                                <p className="text-[#754927] flex-grow
                                                              text-md invisible absolute
                                                              sm:visible sm:relative
                                                              overflow-hidden">Aquário com várias espécies locais, um tanque aberto, pássaros e répteis!</p>
                                        </div>
                                        <Image src={go} alt="See more!" className="h-12 w-fit group-hover:animate-pingX"/>
                                </div>
                            </Link>

                            <Link href="/guia/passeios/museu">
                                <div className="flex flex-row items-center gap-x-5
                                                w-full h-36
                                                rounded-2xl shadow-2xl p-5 transition-transform hover:-translate-y-[5%] cursor-pointer select-none group">
                                        <div className="flex justify-center items-center min-w-fit min-h-fit p-3 aspect-square
                                                        border-2 border-[#754927] rounded-2xl">
                                
                                                <Image src={museu} alt="Museu Caiçara" className="w-16 h-fit"/>
                                
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center
                                                        h-full flex-grow
                                                        ">
                                                <h1 className="text-[#754927]
                                                               text-xl font-bold
                                                               md:text-3xl
                                                               ">Museu Caiçara</h1>
                                                <p className="text-[#754927] flex-grow
                                                              text-md invisible absolute
                                                              sm:visible sm:relative
                                                              overflow-hidden">Acervo diversificado que ilustra o cotidiano dos caiçaras!</p>
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