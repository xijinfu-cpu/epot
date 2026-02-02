import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import ClientStoriesGrid from "./client-stories-grid";

interface WorkProps {
    className?: string
}

const Work: FunctionComponent<WorkProps> = ({ className }) => {
    const openSource = [{
        name: 'Nikah Fix',
        desc: 'NikahFix adalah tema website undangan pernikahan bergaya Netflix: modern, sinematik, dan responsif.',
        logo: '/logo-nikahfix.png',
        website: '//nikahfix.digsy.my.id',
    }, {
        name: 'Digsy',
        desc: 'Digsy adalah tema website perusahaan digital berbasis WordPress yang modern, intuitif, dan responsif.',
        logo: '/logo-digsy.png',
    }]
    return (<>
        <section className={cn("w-full py-20 px-5", className)}>
            <div className="max-w-6xl mx-auto mb-10 md:mb-16 font-medium">
                <span className="border text-xs font-semibold tracking-wider uppercase py-1.5 px-4 border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-500">Studi Kasus</span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-medium tracking-tight my-4">
                    Karya Pilihan.<br /><span className="text-neutral-500 font-normal">Dedikasi untuk kualitas, dari strategi hingga eksekusi.</span>
                </h1>
            </div>
            <ClientStoriesGrid />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
                {
                    openSource.map((item, i) => <div key={i} className="p-6 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl items-start gap-5 font-medium flex shadow-sm hover:shadow-md transition-all duration-300">
                        <Image src={item.logo} height={56} width={56} alt={item.name} className="shrink-0 rounded-lg" />
                        <div>
                            <h4 className="text-lg font-semibold tracking-tight">
                                {item.name}
                            </h4>
                            <p className="mt-2 text-neutral-500 text-sm leading-relaxed text-pretty">{item.desc}</p>
                            {item.website && <Button variant={"outline"} asChild className="bg-transparent mt-4 h-auto py-1 px-0 text-blue-600 hover:text-blue-700 hover:bg-transparent text-sm border-none shadow-none font-semibold p-0">
                                <Link href={item.website} target="_blank" className="flex items-center gap-1">
                                    Lihat Proyek <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </Button>}
                        </div>
                    </div>)
                }
            </div>
        </section>
    </>);
}

export default Work;

