import type { Metadata } from "next";
import { Belleza } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar  from "../components/navbar";
import Image from "next/image";
import whatsapp from "@/public/icons/whatsapp-tile.svg";
import airbnb from "@/public/icons/airbnb-tile.svg";

const belleza = Belleza({
    weight: "400",
    subsets: ["latin"],
    style: "normal",
    variable: "--font-belleza",
});

const brittany = localFont({
    src: "../public/fonts/BrittanySignature.woff2",
    variable: "--font-brittany",
})

export const metadata: Metadata = {
  title: "Itabeach304",
  description: "Apartamento 304 Itaguá/Ubatuba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link rel="icon" href="/logo/icon svg.svg" sizes="any"/>
        <body className={`${belleza.className} ${belleza.variable} ${brittany.variable} antialiased min-h-screen`}>
            <Navbar/>

            
            {children}


            <div className="fixed right-0 bottom-0 flex flex-row gap-5 w-[fit-content] h-[fit-content] m-10 invisible sm:visible z-0">
                <a href="https://wa.me/12996179948?text=Oi%2C%20queria%20tirar%20d%C3%BAvidas%20sobre%20o%20apartamento%20304%20de%20itagu%C3%A1." target="_blank">
                    <Image src={whatsapp} alt="Contact whatsapp" width={48} className="rounded-full transition-transform hover:scale-110 cursor-pointer"
                    style={{boxShadow: "5px 5px 5px grey"}}/>
                </a>
                <a href="https://www.airbnb.com.br/rooms/1237030016386778277" target="_blank">
                <Image src={airbnb} alt="Contact whatsapp" width={48} className="rounded-full transition-transform hover:scale-110 cursor-pointer"
                style={{boxShadow: "5px 5px 5px grey"}}/>
                </a>
            </div>
        </body>
    </html>
  );
}
