"use client"

import Button from "@/components/button";
import wifi from "@/public/icons/wifi-icon.svg";
import instructions from "@/public/icons/instructions.svg";
import location from "@/public/icons/location.svg";
import rules from "@/public/icons/rules2.svg";
import emergency from "@/public/icons/emergency.svg";
import tourism from "@/public/icons/tourism.svg";
import food from "@/public/icons/food2.svg";
import tour from "@/public/icons/tour.svg";
import telephone from "@/public/icons/telephone white.svg";

const buttonMap = new Map();

buttonMap.set(wifi, "Wi-fi");
buttonMap.set(location, "Localização");
buttonMap.set(instructions, "Instruções");
buttonMap.set(rules, "Regras");
buttonMap.set(emergency, "Emergências");
buttonMap.set(tourism, "Pontos turísticos");
buttonMap.set(food, "Comer e beber");
buttonMap.set(tour, "Passeios");
buttonMap.set(telephone, "Contatos");

const Guia = () => {
    //<div className="flex flex-col items-center pt-20 sm:pt-32">
    return(
        <div className="flex flex-col items-center pt-16">
            <h1 className="font-brittany text-[#754927] text-4xl sm:text-7xl animate-fromabelowop select-none">Informações Gerais</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 my-24 mx-5 w-[90%] lg:w-[50%]">
                {Array.from(buttonMap.entries()).map(([key, value], index) => <Button img={key} title={value} index={index} key={index}/>)}
            </div>
        </div>
    )

}

export default Guia;