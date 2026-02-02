'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface HeroProps {
    className?: string
}

const Hero: FunctionComponent<HeroProps> = ({ className }) => {
    return (<>
        <section className={cn("w-full pt-24 sm:pt-32 md:pt-40 relative", className)}>
            <div className="max-w-6xl mx-5 md:mx-auto pb-8 md:pb-12 lg:pb-16 font-medium flex flex-col md:flex-row md:items-end relative z-10">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-col gap-1 sm:gap-2 leading-[0.9] tracking-tighter text-neutral-900 dark:text-neutral-50">
                    <p>Strategi.</p>
                    <p>Estetika.</p>
                    <p>Teknologi.</p>
                </div>
                <div className="max-w-full sm:max-w-md md:ml-auto mt-8 sm:mt-10 md:mt-0 pb-1">
                    <h3 className="text-base sm:text-lg leading-relaxed font-normal text-neutral-600 dark:text-neutral-400 text-pretty">
                        Mitra strategis Anda dalam menciptakan pengalaman digital kelas dunia. Kami memadukan desain imersif dengan teknologi mutakhir untuk mempercepat validasi dan pertumbuhan bisnis Anda.
                    </h3>
                </div>
            </div>
            <div className="max-w-7xl mx-4 sm:mx-5 md:mx-auto rounded-xl md:rounded-2xl bg-white/50 dark:bg-neutral-900/50 p-2 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm relative z-50 group shadow-2xl shadow-neutral-200/50 dark:shadow-none overflow-hidden">
                <div className="relative w-full pt-[56.25%] sm:pt-[50%] md:pt-[45%] rounded-lg md:rounded-xl overflow-hidden">
                    <video
                        loop
                        playsInline
                        preload="metadata"
                        autoPlay
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                    >
                        <source src="/hero-reel.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    </>);
}

export default Hero;


