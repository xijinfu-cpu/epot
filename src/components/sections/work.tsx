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
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto mb-5 font-medium">
                <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Cerita Klien</span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    Karya dalam Proses, <br /><span className="text-neutral-400">Dari brand hingga kode hingga audit — kami menangani setiap lapisan.</span>
                </h1>
            </div>
            <ClientStoriesGrid />
            <div className="grid grid-cols-1 mx-5 md:grid-cols-3 gap-5 mt-5 max-w-6xl md:mx-auto">
                {
                    openSource.map((item, i) => <div key={i} className="p-5 bg-white rounded-xl items-start gap-5 font-medium flex">
                        <Image src={item.logo} height={64} width={64} alt={item.name} />
                        <div>
                            <h4 className="text-xl">
                                {item.name}
                            </h4>
                            <p className="mt-2 text-neutral-500 text-sm">{item.desc}</p>
                            {item.website && <Button variant={"outline"} asChild className="bg-background mt-4 !pl-4 hover:bg-neutral-200 py-1 px-2 text-sm">
                                <Link href={item.website} target="_blank">
                                    Kunjungi Proyek <ArrowUpRight />
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

