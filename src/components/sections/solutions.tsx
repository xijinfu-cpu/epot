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
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-6xl mx-5 md:mx-auto font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mt-5 rounded-xl">
                <div className="p-5 md:pt-3">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Solusi</span>
                    <h1 className="md:text-4xl md:leading-12 text-2xl my-2">
                        Kami mengerjakan, <br /><span className="text-neutral-400">Yang penting.</span>
                    </h1>
                </div>
                {
                    Solutions.map((item, i) => <div
                        key={i}
                        className="bg-background bg-center bg-no-repeat bg-cover rounded-xl p-5 flex justify-end flex-col aspect-[4/3] md:aspect-[3/4] w-full"
                        style={{ backgroundImage: `url(${item.image})` }}>
                        <h1 className={`text-sm md:text-base ${item.invert ? 'bg-black text-white' : 'bg-white text-black'} w-fit px-3 py-1.5 rounded-2xl font-medium`}>
                            {item.label}
                        </h1>
                    </div>)
                }
                <div className="p-5 md:pt-3 border border-dashed border-neutral-200 rounded-xl flex flex-col justify-between gap-4">
                    <h1 className="md:text-3xl md:leading-12 text-2xl">
                        dan banyak lagi, <br /><span className="text-neutral-400">yang tidak bisa kami sebutkan di sini</span>
                    </h1>
                    <Button asChild className="mt-5">
                        <Link href={"/contact"}>
                            Bicara dengan kami <ArrowUpRight />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    </>);
}

export default Solutions;

