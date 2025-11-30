'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent, useEffect, useRef } from "react";

console.log("MyComponent is definitively running on the client!"); // THIS IS KEY

interface BrandingProps {
    className?: string
}

const Branding: FunctionComponent<BrandingProps> = ({ className }) => {
    const brandStrategyRef = useRef<HTMLDivElement>(null);
    const brandStrategyVideoRef = useRef<HTMLVideoElement>(null);
    const visualIdRef = useRef<HTMLDivElement>(null);
    const visualIdVideoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const brandStrategyElement = brandStrategyRef.current;
        const brandStrategyVideoElement = brandStrategyVideoRef.current;
        const visualIdElement = visualIdRef.current;
        const visualIdVideoElement = visualIdVideoRef.current;
        // Handle the brandStrategy video playback on mouse enter/leave
        if (brandStrategyElement && brandStrategyVideoElement && visualIdElement && visualIdVideoElement) {
            brandStrategyElement.onmouseenter = () => {
                brandStrategyVideoElement.play();
            };
            brandStrategyElement.onmouseleave = () => {
                brandStrategyVideoElement.pause();
            };

            visualIdElement.onmouseenter = () => {
                visualIdVideoElement.play()
            }
            visualIdElement.onmouseleave = () => {
                visualIdVideoElement.pause()
            }
            return () => {
                brandStrategyElement.onmouseenter = null;
                brandStrategyElement.onmouseleave = null;
                visualIdElement.onmouseenter = null;
                visualIdElement.onmouseleave = null;
            };
        }

    }, []); // Empty dependency array means this effect runs only once on mount

    return (<section id="branding" className={cn("py-10 md:py-20 max-sm:px-5", className)}>
        <div className="max-w-5xl mx-auto font-medium relative">
            <div className="relative">
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    Branding, <br /><span className="text-neutral-400">Yang membangun Identitas Kuat.</span>
                </h1>
                <p className="md:text-xl font-normal my-5 text-neutral-600 relative max-w-2xl">
                    Brand yang kuat dimulai dengan strategi — bukan hanya logo. Kami mendefinisikan suara, visi, dan identitas visual Anda sehingga produk Anda masuk akal dari hari pertama.
                </p>
                <div className="w-16 h-16 max-md:hidden absolute top-0 overflow-hidden rounded-xl right-0 bg-white">
                    <video preload="auto" className="w-full h-full object-cover" controls={false} muted loop autoPlay>
                        <source src="/branding-showreel-1.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="w-16 h-16 max-md:hidden absolute top-16 overflow-hidden rounded-xl right-16 bg-white">
                    <video preload="auto" className="w-full h-full object-cover" controls={false} muted loop autoPlay>
                        <source src="/branding-showreel-2.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="w-16 h-16 max-md:hidden absolute top-32 overflow-hidden rounded-xl right-0 bg-white">
                    <video preload="auto" className="w-full h-full object-cover" controls={false} muted loop autoPlay>
                        <source src="/branding-showreel-3.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 font-medium max-w-6xl mx-auto mt-15 gap-5">
            <div ref={brandStrategyRef} className="p-1 bg-white flex flex-col rounded-xl">
                <div className="duration-300 overflow-hidden rounded-xl bg-background aspect-[4/3] md:aspect-video">
                    <video preload="metadata" ref={brandStrategyVideoRef} className="w-full h-full object-cover" controls={false} muted loop>
                        <source src="/branding-postit.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="p-5">
                    {/* <Link href={'/service/brand-strategy'} className="hover:text-blue-500 group/link duration-300 relative">
                        <h1 className="text-2xl mt-auto">
                            Brand Strategy <br /><span className="text-neutral-400 group-hover/link:text-blue-400 duration-300">Define your mission, audience, market fit and more.</span>
                        </h1>
                        <div className="bg-white p-1 rounded-2xl absolute -top-17 right-5 group-hover/link:translate-x-2 duration-300 opacity-0 group-hover/link:opacity-100">
                            <ArrowRight size={32} strokeWidth={1.25} className="text-blue-500" />
                        </div>
                    </Link> */}
                    <h1 className="text-xl md:text-2xl mt-auto">
                        Strategi Brand <br /><span className="text-neutral-400">Definisikan misi, audiens, kesesuaian pasar, dan lainnya.</span>
                    </h1>
                </div>
            </div>
            <div ref={visualIdRef} className="p-1 bg-white flex flex-col rounded-xl">
                <div className="duration-300 overflow-hidden rounded-xl bg-background aspect-[4/3] md:aspect-video">
                    <video preload="metadata" ref={visualIdVideoRef} className="w-full h-full object-cover" controls={false} muted loop id="visual-identity-vid-1" >
                        <source src="/branding-office.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="p-5">
                    {/* <Link href={'/service/visual-identity'} className="hover:text-blue-500 group/link duration-300 relative">
                        <h1 className="text-2xl mt-auto">
                            Visual Identity <br /><span className="text-neutral-400 group-hover/link:text-blue-400 duration-300">Create a cohesive look: logo, color, typography, and more.</span>
                        </h1>
                        <div className="bg-white p-1 rounded-2xl absolute -top-17 right-5 group-hover/link:translate-x-2 duration-300 opacity-0 group-hover/link:opacity-100">
                            <ArrowRight size={32} strokeWidth={1.25} className="text-blue-500" />
                        </div>
                    </Link> */}
                    <h1 className="text-xl md:text-2xl mt-auto">
                        Identitas Visual <br /><span className="text-neutral-400">Ciptakan tampilan yang kohesif: logo, warna, tipografi, dan lainnya.</span>
                    </h1>
                </div>
            </div>
        </div>
    </section>);
}

export default Branding;

