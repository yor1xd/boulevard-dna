"use client"

import Image from "next/image";
import login from "@/public/icons/login.svg";
import password from "@/public/icons/password.svg";
import wifi from "@/public/icons/wifianimated.svg";
import copy from "@/public/icons/copy.svg";
import eye from "@/public/icons/eye.svg";
import hide from "@/public/icons/eye-hide.svg";
import copied from "@/public/icons/copied.svg";
import close from "@/public/icons/closebrown.svg";

import { useState } from "react";
import { redirect } from "next/navigation";

const Wifi = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [hasCopiedName, setCopyName] = useState(false);
    const [hasCopiedPassword, setCopyPassword] = useState(false);

    return(
        <div className="relative flex">
            <div className="relative top-36 flex flex-col w-full mx-2 md:w-2/3 xl:w-1/2 2xl:w-1/3 h-2/3 md:mx-auto my-auto bg-[#ffffff] rounded-2xl shadow-2xl py-4 md:py-10 lg:pt-10" style={{animation: "pulseIn 0.5s ease-in-out"}}>

                <div className="flex flex-row items-center gap-4 justify-center mb-10">
                    <h1 className="text-4xl lg:text-6xl text-[#754927] lg:my-12 font-brittany font-medium">Wi-fi</h1>
                    <Image src={wifi} alt="Wi-fi name" className="h-12 w-fit"/>
                </div>

                <div className="flex flex-col gap-y-5">

                    <div className="flex flex-row items-center gap-4 mx-2 md:mx-5 lg:mx-10">
                        <Image src={login} alt="Login: " className="h-9 lg:h-12 w-fit"/>
                        <div className="relative [flex-basis:100%]">
                            <div className="text-md lg:text-lg xl:text-xl text-[#1d1d1d] border-2 border-[#754927] bg-white rounded-lg p-5 font-mono">ap304</div>
                            <span className="absolute top-0 -translate-y-1/2 left-3 text-lg text-[#754927] bg-background px-2 font-mono">nome da rede</span>
                            <Image src={copy} alt="Copy to clipboard" className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 h-1/3 sm:h-1/2 w-fit transition-opacity opacity-75 hover:opacity-100 cursor-pointer active:scale-95" onClick={() => {if(!(hasCopiedPassword)) {setCopyName(true); navigator.clipboard.writeText("lvalentiml15wifi"); setTimeout(() => setCopyName(false), 3000)}}}/>

                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-4 mx-2 md:mx-5 lg:mx-10">
                        <Image src={password} alt="Login: " className="h-9 lg:h-12 w-fit"/>
                        <div className="relative [flex-basis:100%]">
                            <div className="text-md lg:text-lg xl:text-xl text-[#1d1d1d] border-2 border-[#754927] bg-white rounded-lg p-5 font-mono">{showPassword ? "nando221" : "*******  "}</div>
                            <span className="absolute top-0 -translate-y-1/2 left-3 text-lg text-[#754927] bg-background px-2 font-mono">senha da rede</span>
                            <Image src={copy} alt="Copy to clipboard" className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 h-1/3 sm:h-1/2 w-fit transition-opacity opacity-75 hover:opacity-100 cursor-pointer active:scale-95" onClick={() => {if(!(hasCopiedName)) {setCopyPassword(true); navigator.clipboard.writeText("nando221"); setTimeout(() => setCopyPassword(false), 3000)}}}/>
                            <Image src={(showPassword) ? hide : eye} alt="Copy to clipboard" className="absolute top-1/2 -translate-y-1/2 right-11 sm:right-16 h-1/3 sm:h-1/2 w-fit transition-opacity opacity-75 hover:opacity-100 cursor-pointer active:scale-95" onClick={() => setShowPassword(!showPassword)}/>

                        </div>
                    </div>

                    {(hasCopiedName || hasCopiedPassword) && 
                    
                    <div className="flex flex-row absolute bg-background shadow-2xl top-full left-1/2 -translate-x-1/2 rounded-lg items-center w-[85%] h-[6em] mt-5" style={{animation: "pulseIn, pulseOut", animationDelay: "0s, 2500ms", animationDuration: "500ms, 500ms"}}>
                        <Image src={copied} alt="Copied!" className="h-1/2 w-fit ml-5"/>
                        <span className="text-xl text-green-600 px-5 py-5 h-fit w-fit">{`${(hasCopiedPassword && "Senha da rede copiada") || (hasCopiedName && "Nome da rede copiado")} para a área de transferência!`}</span>
                    </div>}

                </div>

            <button className="w-fit h-fit" onClick={() => redirect("/guia")}>
                <Image src={close} alt="Voltar" className="absolute top-5 right-5 h-[1.5rem] sm:h-[2.5rem] w-fit"/>
            </button>
                
                
            </div>
        </div>
    )

}

export default Wifi;