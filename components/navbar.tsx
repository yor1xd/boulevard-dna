"use client"

import Image from "next/image";

import logo from "../public/logo/icon svg.svg";
import menu from "@/public/icons/menu.svg";
import wifi from "@/public/icons/wifi-icon.svg";
import local from "@/public/icons/location.svg";
import rules from "@/public/icons/rules2.svg";
import telephone from "@/public/icons/telephone white.svg";

import { redirect, usePathname } from "next/navigation";

/* 

<Link href={(pathname == "/guia") ? "/" : "/guia"}>
            <button className="absolute right-5 top-[20%] md:top-[15%] flex flex-col items-center h-1/3 md:h-1/2 w-[fit-content] group visible sm:invisible">
                <Image src={(pathname == "/guia") ? home : menu} alt="Open Menu" className="h-full w-[fit-content] transition-transform group-hover:scale-110" onClick={() => {redirect("/guia")}}/>
                <p className="font-belleza text-[#fefefe]">{(pathname == "/guia") ? "Home" : "Menu"}</p>
            </button>
            </Link>

*/

const Navbar = () => {
    const pathname = usePathname();

    return(
        <div className="fixed bottom-0 left-0 sm:sticky sm:left-0 sm:top-0 z-20 flex flex-row w-full h-16 sm:h-20 bg-[--foreground] shadow-2xl items-center justify-evenly sm:justify-between">

            <div className="flex flex-col w-[fit-content] h-full cursor-pointer select-none items-center sm:absolute sm:invisible visible relative" onClick={() => redirect("/guia/wi-fi")}>
                <Image src={wifi} alt="logo" className="h-1/2 md:h-1/2 w-[fit-content] my-auto"/>
                <p className="text-[#fefefe]">Wi-fi</p>
            </div>

            <div className="flex flex-col w-[fit-content] h-full cursor-pointer select-none items-center sm:absolute sm:invisible visible relative" onClick={() => redirect("/guia/localizacao")}>
                <Image src={local} alt="logo" className="h-1/2 md:h-1/2 w-[fit-content] my-auto"/>
                <p className="text-[#fefefe]">Local</p>
            </div>



            <div className="flex flex-row w-[fit-content] h-full sm:gap-x-2 sm:mx-5 cursor-pointer select-none" onClick={() => {if(window.innerWidth >= 600 && pathname == "/") window.scrollTo({top: 0, behavior: "smooth"}); else redirect("/")}}>
                <Image src={logo} alt="logo" className="h-1/2 md:h-1/2 w-[fit-content] my-auto"/>
                <h1 className="absolute invisible sm:relative sm:visible text-[--background] text-2xl sm:text-4xl my-auto">ItaguáBeach304</h1>
            </div>


            <div className="flex flex-col w-[fit-content] h-full cursor-pointer select-none items-center sm:absolute sm:invisible visible relative" onClick={() => redirect("/guia/regras")}>
                <Image src={rules} alt="logo" className="h-1/2 md:h-1/2 w-[fit-content] my-auto"/>
                <p className="text-[#fefefe]">Regras</p>
            </div>

            <div className="flex flex-col w-[fit-content] h-full cursor-pointer select-none items-center sm:absolute sm:invisible visible relative" onClick={() => redirect("/guia/")}>
                <Image src={menu} alt="logo" className="h-1/2 md:h-1/2 w-[fit-content] my-auto"/>
                <p className="text-[#fefefe]">Outros</p>
            </div>

            <div className="absolute invisible sm:relative sm:visible h-full sm:w-[20rem] flex flex-row justify-evenly">

                <button className="relative group flex flex-col h-full w-fit items-center justify-center transition-transform hover:scale-95" onClick={() => redirect("/guia/wi-fi")}>
                    <Image src={wifi} alt="Wi-Fi" className="h-[45%] w-fit mb-2"/>
                    <p className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl text-[#fefefe]">Wifi</p>
                </button>

                
                <button className="relative group flex flex-col h-full w-fit items-center justify-center transition-transform hover:scale-95" onClick={() => redirect("/guia/localizacao")}>
                    <Image src={local} alt="Wi-Fi" className="h-[45%] w-fit mb-2"/>
                    <p className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl text-[#fefefe]">Local</p>
                </button>

                <button className="relative group flex flex-col h-full w-fit items-center justify-center transition-transform hover:scale-95" onClick={() => redirect("/guia/regras")}>
                    <Image src={rules} alt="Wi-Fi" className="h-[45%] w-fit mb-2"/>
                    <p className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl text-[#fefefe]">Regras</p>
                </button>

                <button className="relative group flex flex-col h-full w-fit items-center justify-center transition-transform hover:scale-95" onClick={() => redirect("/guia/contatos")}>
                    <Image src={telephone} alt="Wi-Fi" className="h-[45%] w-fit mb-2"/>
                    <p className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl text-[#fefefe]">Contato</p>
                </button>

                <button className="relative group flex flex-col h-full w-fit items-center justify-center transition-transform hover:scale-95" onClick={() => {if(window.innerWidth >= 600 && pathname == "/") window.scrollTo({top: 600, behavior: "smooth"}); else redirect("/guia/")}}>
                    <Image src={menu} alt="Wi-Fi" className="h-[45%] w-fit mb-2"/>
                    <p className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl text-[#fefefe]">Menu</p>
                </button>



            
            </div>

        </div>
    )
}

export default Navbar;