"use client"

import Image from "next/image";

import mcdonalds from "@/public/icons/mcdonalds.svg";
import picanha from "@/public/images/picanha.jpg";
import jundu from "@/public/images/jundu.png";
import raizes from "@/public/images/raizes.png";
import amigos from "@/public/images/amigos.jpg";
import close from "@/public/icons/closebrown.svg";

import go from "@/public/icons/right.svg";
import { redirect } from "next/navigation";
import Link from "next/link";

const ComerEBeber = () => {

    return(
        <div className="relative flex h-[calc(100vh_-_4rem)] sm:h-[calc(100vh_-_5rem)] overflow-hidden">

            <div className="relative flex flex-col items-center justify-evenly
                            w-full h-[90%] mb-auto mt-[10%] mx-1
                            sm:w-[80%] sm:h-[90%] sm:mx-auto sm:my-auto
                            md:w-2/3 md:h-[90%] md:mx-auto md:my-auto
                            lg:w-2/3 lg:h-[90%] lg:mx-auto lg:my-auto
                            xl:w-1/3 xl:h-[90%] xl:mx-auto xl:my-auto
                            px-2 bg-white shadow-2xl rounded-2xl"
                 style={{animation: "pulseIn 0.5s forwards"}}>

                    <h1 className="font-brittany text-[#754927]
                               text-3xl
                               md:text-4xl
                               lg:text-5xl my-10">Comer e Beber</h1>

                    <h1 className="text-[#754927]
                               text-md text-center
                               md:text-xl">A excelente localização do apartamento oferece uma grande variedade de restaurantes nas proximidades!</h1>

                    <div className="flex flex-col
                                w-full h-[60%]
                                bg-white rounded-2xl overflow-auto p-2 my-2 sm:p-5 gap-y-5"
                     style={{boxShadow: "inset 0 2px 4px 4px rgb(0 0 0 / 0.1)"}}>

                            <Link href="/guia/comerebeber/mcdonalds">
                                <div className="flex flex-row flex-grow items-center gap-x-5
                                                w-full h-36
                                                rounded-2xl shadow-2xl p-5 transition-transform hover:-translate-y-[5%] cursor-pointer select-none group">
                                        <div className="flex justify-center items-center min-w-fit min-h-fit p-3 aspect-square
                                                        border-2 border-[#754927] rounded-2xl">
                                
                                                <Image src={mcdonalds} alt="MC Donald's" className="w-8 sm:w-16 h-fit"/>
                                
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center
                                                        h-full flex-grow
                                                        ">
                                                <h1 className="text-[#754927]
                                                               text-lg font-bold
                                                               md:text-3xl
                                                               ">McDonald&apos;s</h1>
                                                <p className="text-[#754927] flex-grow
                                                              text-md invisible absolute
                                                              sm:visible sm:relative
                                                              overflow-hidden">Ideal para refeições rápidas antes ou depois de explorar a orla!</p>
                                        </div>
                                        <Image src={go} alt="See more!" className="h-12 w-fit group-hover:animate-pingX"/>
                                </div>
                            </Link>

                            <Link href="/guia/comerebeber/jundu">
                                <div className="flex flex-row items-center gap-x-5
                                                w-full h-36
                                                rounded-2xl shadow-2xl p-5 transition-transform hover:-translate-y-[5%] cursor-pointer select-none group">
                                        <div className="flex justify-center items-center min-w-fit min-h-fit p-3 aspect-square
                                                        border-2 border-[#754927] rounded-2xl">
                                
                                                <Image src={jundu} alt="Jundu Lounge Bar" className="w-8 sm:w-16 h-fit"/>
                                
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center
                                                        h-full flex-grow
                                                        ">
                                                <h1 className="text-[#754927]
                                                               text-lg font-bold
                                                               md:text-3xl
                                                               ">Jundu Lounge Bar</h1>
                                                <p className="text-[#754927] flex-grow
                                                              text-md invisible absolute
                                                              sm:visible sm:relative
                                                              overflow-hidden">Drinks exclusivos, frutos do mar frescos e uma experiência única à beira-mar!</p>
                                        </div>
                                        <Image src={go} alt="See more!" className="h-12 w-fit group-hover:animate-pingX"/>
                                </div>
                            </Link>

                            <Link href="/guia/comerebeber/picanhanatabua">
                                <div className="flex flex-row items-center gap-x-5
                                                w-full h-36
                                                rounded-2xl shadow-2xl p-5 transition-transform hover:-translate-y-[5%] cursor-pointer select-none group">
                                        <div className="flex justify-center items-center min-w-fit min-h-fit p-3 aspect-square
                                                        border-2 border-[#754927] rounded-2xl">
                                
                                                <Image src={picanha} alt="Picanha na tábua" className="w-8 sm:w-16 h-fit"/>
                                
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center
                                                        h-full flex-grow
                                                        ">
                                                <h1 className="text-[#754927]
                                                               text-lg font-bold
                                                               md:text-3xl
                                                               ">Picanha na Tábua</h1>
                                                <p className="text-[#754927] flex-grow
                                                              text-md invisible absolute
                                                              sm:visible sm:relative
                                                              overflow-hidden">Restaurante casual à la carte e bar rústico à beira-mar que serve carnes na brasa!</p>
                                        </div>
                                        <Image src={go} alt="See more!" className="h-12 w-fit group-hover:animate-pingX"/>
                                </div>
                            </Link>

                            <Link href="/guia/comerebeber/raizes">
                                <div className="flex flex-row items-center gap-x-5
                                                w-full h-36
                                                rounded-2xl shadow-2xl p-5 transition-transform hover:-translate-y-[5%] cursor-pointer select-none group">
                                        <div className="flex justify-center items-center min-w-fit min-h-fit p-3 aspect-square
                                                        border-2 border-[#754927] rounded-2xl">
                                
                                                <Image src={raizes} alt="Restaurante Raízes" className="w-8 sm:w-16 h-fit"/>
                                
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center
                                                        h-full flex-grow
                                                        ">
                                                <h1 className="text-[#754927]
                                                               text-lg font-bold
                                                               md:text-3xl
                                                               ">Restaurante Raízes</h1>
                                                <p className="text-[#754927] flex-grow
                                                              text-md invisible absolute
                                                              sm:visible sm:relative
                                                              overflow-hidden">Ambiente elegante e drinques criativos em um restaurante refinado com frutos do mar e pizzas.</p>
                                        </div>
                                        <Image src={go} alt="See more!" className="h-12 w-fit group-hover:animate-pingX"/>
                                </div>
                            </Link>

                            <Link href="/guia/comerebeber/cantinhodosamigos">
                                <div className="flex flex-row items-center gap-x-5
                                                w-full h-36
                                                rounded-2xl shadow-2xl p-5 transition-transform hover:-translate-y-[5%] cursor-pointer select-none group">
                                        <div className="flex justify-center items-center min-w-fit min-h-fit p-3 aspect-square
                                                        border-2 border-[#754927] rounded-2xl">
                                
                                                <Image src={amigos} alt="Cantinho dos Amigos" className="w-8 sm:w-16 h-fit"/>
                                
                                        </div>
                                        <div className="flex flex-col gap-y-2 justify-center
                                                        h-full flex-grow
                                                        ">
                                                <h1 className="text-[#754927]
                                                               text-lg font-bold
                                                               md:text-3xl
                                                               ">Cantinho dos Amigos</h1>
                                                <p className="text-[#754927] flex-grow
                                                              text-md invisible absolute
                                                              sm:visible sm:relative
                                                              overflow-hidden">Saboreie pizzas artesanais e refeições completas à apenas 3 minutos do apartamento!</p>
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

export default ComerEBeber;