import { cn } from "@/lib/utils";
import { FunctionComponent, } from "react";
import { Button } from "../../ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

interface HeroProps {
    className?: string
}

const Hero: FunctionComponent<HeroProps> = ({ className }) => {
    const projects = [{
        name: 'Hyperwafer',
        desc: 'AI-powered platform for workflow automation.',
        icon: '/logo-placeholder.png',
        color: 'bg-[var(--hyperwafer)]',
        link: '#'
    }, {
        name: 'Unoversion',
        desc: 'AI-powered platform for recommendation & search.',
        icon: '/logo-placeholder.png',
        color: 'bg-[var(--unoversion)]',
        link: '#'
    }, {
        name: 'Kartikey AI',
        desc: 'AI-powered platform for enterprise-level digital security.',
        icon: '/logo-placeholder.png',
        color: 'bg-blue-600',
        link: '#'
    }, {
        name: 'Mahalik Foundation',
        desc: 'Grass-level Private-backed NGO for Social Good.',
        icon: '/logo-placeholder.png',
        color: 'bg-[var(--mahalik)] text-black',
        link: '#'
    }, {
        name: 'SciHawk SecureTech',
        desc: "India's first C.E.M.A offering, R&D company based in India.",
        icon: '/logo-placeholder.png',
        color: 'bg-slate-900',
        link: '#'
    },]
    const tools = [{
        icon: '/logo-nikahfix.png',
        name: 'Nikah Fix',
        desc: 'NikahFix adalah tema website undangan pernikahan bergaya Netflix: modern, sinematik, dan responsif.',
    }, {
        icon: '/logo-digsy.png',
        name: 'Digsy',
        desc: 'Digsy adalah tema website perusahaan digital berbasis WordPress yang modern, intuitif, dan responsif.',
    }]
    return (<>
        <section className={cn("w-full px-5", className)}>
            <div className="max-w-5xl mx-auto pt-20 md:pt-28 pb-8 md:pb-10 font-medium relative">
                <span className="text-blue-500 text-xs sm:text-sm">Work That Works</span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-12 my-3 md:my-2">
                    Built at Effortless, <br /><span className="text-neutral-400">Our Work, End to End.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 font-normal my-4 md:my-5 text-neutral-600 relative max-w-xl">
                    From brand identity to AI apps to code audits — we build and refine products end to end.
                </p>
                <div className="flex mt-5 gap-2">
                    <Button asChild variant={"outline"} className="!px-4 md:!px-5 text-sm md:text-base hover:bg-black hover:text-white">
                        <Link href="/contact">
                            Talk to us <ArrowUpRight className="size-5 md:size-6" />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 font-medium relative max-w-7xl mx-auto">
                <div className="bg-white rounded-xl flex flex-col min-h-80 md:min-h-96 p-4 md:p-5">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                        <h1 className="text-lg sm:text-xl md:text-xl leading-tight">
                            Projects We&apos;ve Shipped <br /><span className="text-neutral-400 text-sm sm:text-base">Real builds. Live apps.</span>
                        </h1>
                        <Link href={"/projects"} className="flex items-center gap-1 sm:ml-auto my-auto bg-background px-3 sm:px-4 py-1.5 sm:py-2 h-fit rounded-full group hover:text-blue-600 text-sm w-fit">
                            View more <ArrowUpRight className="size-4 group-hover:translate-x-1 duration-200 group-hover:-translate-y-1" />
                        </Link>
                    </div>
                    <InfiniteSlider gap={16} speed={40} className="rounded-xl bg-background mt-4 md:mt-5 py-4 md:py-5">
                        {projects.map((project, index) => {
                            return (<div key={index} className={cn("text-white h-80 sm:h-90 md:h-100 w-64 sm:w-72 md:w-80 rounded-xl p-4 md:p-5 flex flex-col", project.color)}>
                                <Image src={project.icon} alt={project.name} width={100} className="-ml-2 md:-ml-3 w-20 h-20 md:w-24 md:h-24" height={100} />
                                <h1 className="mt-auto text-lg md:text-xl">
                                    {project.name}
                                </h1>
                                <p className="text-xs sm:text-sm opacity-50 mt-1">
                                    {project.desc}
                                </p>
                            </div>)
                        })}
                    </InfiniteSlider>
                </div>
                <div className="bg-white rounded-xl flex flex-col p-4 md:p-5">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                        <h1 className="text-lg sm:text-xl md:text-xl leading-tight">
                            Open Source Work <br /><span className="text-neutral-400 text-sm sm:text-base">Real builds. Live apps.</span>
                        </h1>
                        <Link href={"/open-source"} className="flex items-center gap-1 sm:ml-auto my-auto bg-background px-3 sm:px-4 py-1.5 sm:py-2 h-fit rounded-full group hover:text-blue-600 text-sm w-fit">
                            View more <ArrowUpRight className="size-4 group-hover:translate-x-1 duration-200 group-hover:-translate-y-1" />
                        </Link>
                    </div>
                    <InfiniteSlider reverse gap={16} speed={40} className="rounded-xl bg-background mt-4 md:mt-5 py-4 md:py-5">
                        {tools.map((project, index) => {
                            return (<div key={index} className="h-80 sm:h-90 md:h-100 w-64 sm:w-72 md:w-80 bg-white rounded-xl p-4 md:p-5 flex flex-col">
                                <Image src={project.icon} alt={project.name} width={64} className="-ml-2 md:-ml-3 w-14 h-14 sm:w-16 sm:h-16" height={64} />
                                <h1 className="mt-auto text-lg md:text-xl">
                                    {project.name}
                                </h1>
                                <p className="text-xs sm:text-sm opacity-50 mt-1">
                                    {project.desc}
                                </p>
                            </div>)
                        })}
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    </>);
}

export default Hero;


