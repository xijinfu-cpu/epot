import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface AboutProps {
    className?: string
}

const About: FunctionComponent<AboutProps> = ({ className }) => {
    return (<>
        <section className={cn("py-24 md:py-32 mx-5", className)}>
            <div className="max-w-6xl mx-auto mb-10 md:mb-16 font-medium">
                <span className="border text-xs font-semibold tracking-wider uppercase py-1.5 px-4 border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-500">Tentang Kami</span>
            </div>
            <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 gap-10 md:gap-16">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-medium tracking-tight">
                        Effortless hadir dengan satu visi fundamental:
                        <span className="text-neutral-400 dark:text-neutral-500"> menyederhanakan kompleksitas digital. Kami percaya bahwa website luar biasa adalah sinergi antara estetika memukau, performa tinggi, dan navigasi intuitif yang membangun kredibilitas instan.</span>
                    </h2>
                </div>
                <div className="md:pt-2">
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-800 dark:text-neutral-200">
                        Sebagai <span className="font-semibold text-black dark:text-white">PT Effortless Digital Agency</span>,
                        <span className="text-neutral-500 dark:text-neutral-400"> kami meleburkan strategi bisnis dengan eksekusi teknis yang presisi. Kami tidak sekadar membangun website—kami menciptakan aset digital bernilai tinggi yang memperkuat identitas merek Anda, memperluas jangkauan pasar, dan mendorong pertumbuhan bisnis yang berkelanjutan.</span>
                    </p>
                </div>
            </div>
        </section>
    </>);
}

export default About;
