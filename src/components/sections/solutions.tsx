import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SolutionsProps {
    className?: string
}

const Solutions: FunctionComponent<SolutionsProps> = ({ className }) => {
    const Solutions = [{
        image: '/solutions-digital-strategy.jpg',
        label: 'Strategi Digital',
        invert: true
    }, {
        image: '/solutions-uiux.jpg',
        label: 'Desain UI/UX',
    }, {
        image: '/solutions-cloud-devops.png',
        label: 'Arsitektur Cloud & DevOps',
    }, {
        image: '/solutions-brand-identity.jpg',
        label: 'Identitas Brand',
    }, {
        image: '/solutions-support.jpg',
        label: 'Pemeliharaan & Support Produk',
    }, {
        image: '/solutions-mach-ready.jpg',
        label: 'MACH‑ready',
    },]
    return (<>
        <section className={cn("w-full py-20 px-5", className)}>
            <div className="max-w-6xl mx-auto font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 rounded-2xl">
                <div className="p-6 md:pt-4 flex flex-col justify-center">
                    <div>
                        <span className="border text-xs font-semibold tracking-wider uppercase py-1.5 px-4 border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-500">Solusi</span>
                        <h1 className="md:text-4xl md:leading-tight text-2xl my-4 font-medium tracking-tight">
                            Spektrum Digital.<br /><span className="text-neutral-500 font-normal">Dari fondasi hingga skala.</span>
                        </h1>
                    </div>
                </div>
                {
                    Solutions.map((item, i) => <div
                        key={i}
                        className="bg-neutral-100 dark:bg-neutral-900 bg-center bg-no-repeat bg-cover rounded-2xl p-6 flex justify-end flex-col aspect-[4/3] md:aspect-[3/4] w-full shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
                        style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                        <h1 className={`text-sm md:text-base ${item.invert ? 'bg-black/90 text-white backdrop-blur-md' : 'bg-white/90 text-black backdrop-blur-md'} w-fit px-4 py-2 rounded-full font-semibold relative z-10 shadow-sm`}>
                            {item.label}
                        </h1>
                    </div>)
                }
                <div className="p-8 md:pt-6 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col justify-between gap-6 bg-neutral-50/50 dark:bg-neutral-900/10">
                    <h1 className="md:text-3xl md:leading-tight text-2xl font-medium tracking-tight">
                        Dan masih banyak lagi... <br /><span className="text-neutral-400 font-normal text-lg">Solusi yang disesuaikan dengan kebutuhan unik Anda.</span>
                    </h1>
                    <Button asChild className="mt-auto w-fit rounded-full px-6" size={"lg"}>
                        <Link href={"/contact"}>
                            Diskusikan Kebutuhan Anda <ArrowUpRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    </>);
}

export default Solutions;

