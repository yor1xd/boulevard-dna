import Image, { StaticImageData } from "next/image";
import { redirect } from "next/navigation";

const Button = ({img, title, index} : {img: StaticImageData, title: string, index: number}) => {

    return(
        <div 
        className="flex flex-col items-center justify-evenly w-[100%] h-[100%] [aspect-ratio:1] bg-foreground rounded-2xl shadow-2xl opacity-0 transition-transform hover:scale-105 cursor-pointer"
        style={{
            animation: "pulseIn 0.5s ease-in-out", 
            animationDelay: `${index * 0.05}s`, 
            animationFillMode: "forwards"}}
        onClick={() => {redirect(`/guia/${title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "")}`)}}>

            <Image src={img} alt={title} className="w-1/2" draggable={false}/>
            <p className="text-[#754927] text-[1.8vh] xl:text-[2.5vh] line-clamp-1 px-5 select-none md:select-text">{title}</p>

        </div>
    )

}

export default Button;