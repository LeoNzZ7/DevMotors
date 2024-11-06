import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
    heading: string;
    buttonUrl: string;
    buttonTitle: string;
    bannerUrl: string;
    icon: ReactNode;
}

export const Hero = ({ bannerUrl, buttonTitle, buttonUrl, heading, icon }: HeroProps) => {
    return (
        <main className="w-full relative flex flex-col items-center justify-center" >
            <div className="absolute flex flex-col items-center justify-center z-10">
                <h1 className="text-2xl sm:text-4xl text-white mb-3 font-bold text-center" >
                    {heading}
                </h1>
                <a
                    target="_blank"
                    href={buttonUrl}
                    className="flex items-center justify-center gap-2 mt-3 bg-green-500 rounded-md py-2 px-6 text-white font-medium hover:bg-green-600 transition-colors duration-300" >
                    {icon}
                    {buttonTitle}
                </a>
            </div>
            <div className="w-full h-96 relative bg-black" >
                <Image
                    src={bannerUrl}
                    priority
                    quality={100}
                    fill={true}
                    alt={heading}
                    sizes="(max-width: 700px) 100vw, (max-width: 1024px) 75vw, 60vw"
                    className="w-full object-cover relative opacity-30 bg-fixed" />
            </div>
        </main>
    )
}