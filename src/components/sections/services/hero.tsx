'use client'

import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { TextLoop } from "../../ui/text-loop";
import Image from "next/image";
import Card from "@/components/ui/card";

interface HeroProps {
    className?: string
}

const Hero: FunctionComponent<HeroProps> = ({ className }) => {
    const services = [{
        name: 'Branding',
        tagline: 'Bangun Identitas yang Kuat',
        href: '/services/#branding',
        image: '/services-branding.png',
        imgClassName: 'object-cover'
    }, {
        name: 'Desain',
        tagline: 'Desain yang Berfungsi',
        href: '/services/#designing',
        image: '/services-design.png',
        imgClassName: 'object-cover'
    }, {
        name: 'Pengembangan',
        tagline: 'Kode yang Terukur',
        href: '/services/#development',
        image: '/services-development.png',
        imgClassName: 'object-cover'
    }, {
        name: 'Audit',
        tagline: 'Audit & Improvisasi',
        href: '/services/#audit',
        image: '/services-audit.png',
        imgClassName: 'object-cover'
    }]
    return (<>
        <section className={cn("w-full relative bg-no-repeat bg-contain md:bg-[url(/services-hero-forest.png)]", className)}>
            <div className="py-40 max-sm:px-5" style={{ background: 'linear-gradient(343deg,rgba(245, 245, 245, 1) 70%, rgba(0, 0, 0, 0) 100%)' }}>
                <div className="text-center pb-25 font-medium relative">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Semua Lapisan</span>
                    <h1 className="text-xl md:text-4xl md:leading-12 my-2">
                        Layanan yang mengirimkan <TextLoop>
                            <span>hal kompleks</span>
                            <span>aplikasi web</span>
                            <span>aplikasi mobile</span>
                            <span>model AI</span>
                            <span>website</span>
                        </TextLoop>, <br /><span className="text-neutral-400">Tanpa basa-basi. Hanya yang menggerakkan jarum.</span>
                    </h1>
                    <p className="font-normal md:text-xl mt-5 text-neutral-600 relative max-w-2xl mx-auto">
                        Baik Anda memerlukan identitas brand, aplikasi yang terukur, atau code review, kami menghadirkan dengan presisi, kecepatan, dan kejelasan — tanpa celah, tanpa misalignment.
                    </p>
                </div>
                <div className="grid font-medium grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch relative max-w-6xl w-full px-5 md:px-0 mx-auto">
                    {services.map((item, i) => <Card arrowDirDown sm titleClassName="text-base md:text-lg" subClassName="text-sm md:text-base" key={i} title={item.name} sub={item.tagline} link={item.href} className="w-full">
                        <div className="rounded-xl overflow-hidden bg-background relative aspect-[4/3] md:aspect-[5/3]">
                            <Image src={item.image} fill unoptimized alt={item.name} className={cn("object-cover", item.imgClassName)} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" />
                        </div>
                    </Card>)}
                </div>
            </div>
        </section>
    </>);
}

export default Hero;

