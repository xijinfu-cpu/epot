'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent, useRef, useState } from "react";
import { Play } from "lucide-react";

interface HeroProps {
    className?: string
}

const Hero: FunctionComponent<HeroProps> = ({ className }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (<>
        <section className={cn("w-full pt-24 sm:pt-28 md:pt-40 relative", className)}>
            <div className="max-w-5xl mx-4 sm:mx-5 md:mx-auto pb-8 md:pb-10 lg:pb-15 font-medium flex flex-col md:flex-row md:items-end relative z-10">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-col gap-1 sm:gap-1 md:gap-0 leading-tight">
                    <p>Memikirkan.</p>
                    <p>Membangun.</p>
                    <p>Meluncurkan.</p>
                </div>
                <div className="max-w-full sm:max-w-sm md:ml-auto mt-6 sm:mt-8 md:mt-0 pb-0 md:pb-5">
                    <h3 className="text-sm sm:text-base leading-relaxed font-normal text-neutral-600">
                        Kami adalah partner terpercaya untuk menghadirkan website yang tidak hanya tampil memukau, tetapi juga berkinerja optimal. Dari konsep hingga peluncuran, kami memastikan setiap detail mencerminkan keunggulan bisnis Anda.
                    </h3>
                </div>
            </div>
            <div className="max-w-6xl mx-4 sm:mx-5 md:mx-auto rounded-lg md:rounded-xl bg-white p-0.5 sm:p-1 relative group">
                <video 
                    ref={videoRef}
                    loop 
                    playsInline
                    preload="metadata"
                    className="w-full h-auto rounded-lg md:rounded-xl object-cover cursor-pointer"
                    onClick={togglePlayPause}
                >
                    <source src="/hero-reel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                    <button
                        onClick={togglePlayPause}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 sm:p-3.5 md:p-4 transition-all duration-300 shadow-lg hover:scale-105"
                        aria-label="Play video"
                    >
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-neutral-800 ml-0.5" fill="currentColor" />
                    </button>
                )}
            </div>
        </section>
    </>);
}

export default Hero;

