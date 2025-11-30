'use client';

import Card from "@/components/ui/card";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FunctionComponent, useEffect, useRef } from "react";

interface DevelopmentProps {
    className?: string
}

const Development: FunctionComponent<DevelopmentProps> = ({ className }) => {
    const mobDevRef = useRef<HTMLDivElement>(null);
    const mobDevVideoRef = useRef<HTMLVideoElement>(null);
    const webDevelopment = [{
        name: 'FastAPI',
        icon: 'logos:fastapi-icon',
    }, {
        name: 'Fastify',
        icon: 'logos:fastify-icon',
    }, {
        name: 'Hono.js',
        icon: 'logos:hono',
    }, {
        name: 'Postman',
        icon: 'logos:postman-icon',
    }, {
        name: 'OpenAPI',
        icon: 'logos:openapi-icon',
    }, {
        name: 'Express.js',
        icon: 'logos:express',
    }, {
        name: 'MongoDB',
        icon: 'logos:mongodb-icon',
    }, {
        name: 'MySQL',
        icon: 'logos:mysql-icon',
    }, {
        name: 'PostgreSQL',
        icon: 'logos:postgresql',
    }, {
        name: 'AWS',
        icon: 'logos:aws',
    }, {
        name: 'Docker',
        icon: 'logos:docker-icon',
    }, {
        name: 'GitHub',
        icon: 'logos:github-icon',
    }, {
        name: 'React.js',
        icon: 'logos:react',
    }, {
        name: 'Next.js',
        icon: 'logos:nextjs-icon',
    }, {
        name: 'Vue.js',
        icon: 'logos:vue',
    }, {
        name: 'Tailwind',
        icon: 'logos:tailwindcss-icon',
    }, {
        name: 'Astro.js',
        icon: 'logos:astro-icon',
    }, {
        name: 'Storybook',
        icon: 'logos:storybook-icon',
    }, {
        name: 'Jest',
        icon: 'logos:jest',
    }, {
        name: 'Vercel',
        icon: 'logos:vercel-icon',
    },]
    const services = [{
        name: 'Pengembangan Web',
        sub: 'Aplikasi cepat, aman, dan terukur yang dibangun untuk penggunaan dunia nyata',
        // link: '/service/web-development',
        key: 'wd',
    }, {
        name: 'Pengembangan Mobile',
        sub: 'Komponen yang dapat digunakan kembali, aturan jelas, dan serah terima developer yang mulus',
        video: '/dev-mobile.mp4',
        // link: '/service/mobile-development'
    }, {
        name: 'Pengembangan AI',
        sub: 'Fitur cerdas yang mengotomatisasi, membantu, dan memprediksi',
        key: 'ai',
        // link: '/service/wireframe'
    }]
    useEffect(() => {
        const mobDevElement = mobDevRef.current;
        const mobDevVideoElement = mobDevVideoRef.current;

        // Handle the mobDev video playback on mouse enter/leave
        if (mobDevElement && mobDevVideoElement) {
            mobDevElement.onmouseenter = () => {
                mobDevVideoElement.play();
            };
            mobDevElement.onmouseleave = () => {
                mobDevVideoElement.pause();
            };

            return () => {
                mobDevElement.onmouseenter = null;
                mobDevElement.onmouseleave = null;
            };
        }

    }, []); // Empty dependency array means this effect runs only once on mount
    return (
        <section className={cn("pt-20 md:pt-40 pb-20 max-sm:px-5", className)} id="development">
            <div className="max-w-5xl mx-auto pb-10 font-medium relative">
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    Pengembangan, <br /><span className="text-neutral-400">Yang Terukur & Dibangun untuk Bertahan.</span>
                </h1>
                <p className="md:text-xl font-normal my-5 text-neutral-600 relative max-w-2xl">
                    Kami mengembangkan aplikasi yang tangguh dan siap masa depan menggunakan MERN, Python, PHP, dan React Native. Dengan integrasi AI dan dukungan DevOps, kami membangun sistem yang terukur, berkinerja, dan berkembang dengan bisnis Anda.
                </p>
                <div className="flex absolute -top-10 md:-top-6 lg:top-30 md:right-2 lg:-right-18 gap-3 md:gap-4 lg:gap-5">
                    <Icon icon={"logos:visual-studio-code"} className="size-8 md:size-10 lg:size-12" />
                    <Icon icon={"logos:javascript"} className="size-8 md:size-10 lg:size-12" />
                    <Icon icon={"logos:python"} className="size-8 md:size-10 lg:size-12" />
                    <Icon icon={"logos:php"} className="size-8 md:size-10 lg:size-12" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-medium w-full max-w-6xl mx-auto px-5 md:px-0">
                {
                    services.map((service, i) => <Card sm altStyle title={service.name} sub={service.sub} key={i} className="w-full min-h-96">
                        {
                            service.key === "wd" && <>
                                <div className="overflow-hidden flex flex-col gap-10 justify-center bg-background rounded-xl aspect-[4/3] md:aspect-[5/4]">
                                    <div className="grid grid-cols-2 h-full">
                                        <div className="flex max-h-64 flex-col items-center justify-center">
                                            <div className="grid grid-cols-2 gap-1">
                                                {["solar:clapperboard-text-bold-duotone", "solar:clapperboard-bold-duotone", "solar:plug-circle-bold-duotone", "solar:layers-bold-duotone"].map((item, i) => <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white" key={i}>
                                                    <Icon icon={item} className="size-6" />
                                                </div>)}
                                            </div>
                                            <p className="text-sm mt-2 opacity-50">
                                                dan lainnya...
                                            </p>
                                        </div>
                                        <div>
                                            <InfiniteSlider direction="vertical" speed={30} speedOnHover={60} className="h-fit">
                                                {
                                                    webDevelopment.map((technology, i) => <div key={i} className="bg-white rounded-xl py-2 px-2 md:px-4 flex items-center gap-3">
                                                        <Icon icon={technology.icon} className="size-8" />
                                                        <p className="text-sm font-medium">
                                                            {technology.name}
                                                        </p>
                                                    </div>)
                                                }
                                            </InfiniteSlider>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            service.key === "ai" && <>
                                <div className="flex flex-col gap-10 justify-center bg-background rounded-xl aspect-[4/3] md:aspect-[5/4]">
                                    <InfiniteSlider speed={40}>
                                        {["logos:google-gemini", "logos:openai-icon", "logos:mistral-ai-icon", "logos:stability-ai-icon", "logos:meta-icon", "logos:claude-icon", "logos:google-bard-icon"].map((item, i) => <Icon icon={item} key={i} className="size-10 ml-3" />)}
                                    </InfiniteSlider>
                                    <InfiniteSlider speed={40} reverse>
                                        {["logos:hugging-face-icon", "logos:aws", "logos:google-cloud", "logos:cloudflare-icon", "logos:dialogflow", "logos:digital-ocean-icon", "logos:linode", "logos:docker-icon"].map((item, i) => <Icon icon={item} key={i} className="size-10 ml-3" />)}
                                    </InfiniteSlider>
                                </div>
                            </>
                        }
                    </Card>)
                }
            </div>
        </section>
    );
}

export default Development;

