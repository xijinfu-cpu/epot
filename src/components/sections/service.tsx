import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";
import { TextLoop } from "../ui/text-loop";
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
} from '@/components/ui/carousel';
import Card from "../ui/card";

interface ServiceProps {
    className?: string
}

const Service: FunctionComponent<ServiceProps> = ({ className }) => {
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
        <section className={cn("w-full py-20 px-5", className)}>
            <div className="max-w-6xl mx-auto mb-10 md:mb-16 font-medium">
                <span className="border text-xs font-semibold tracking-wider uppercase py-1.5 px-4 border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-500">Layanan</span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-medium tracking-tight my-4">
                    Keahlian Kami: <TextLoop interval={3000}>
                        <span>Branding</span>
                        <span>Desain</span>
                        <span>Development</span>
                        <span>Audit</span>
                        <span>Testing</span>
                        <span>Integrasi</span>
                    </TextLoop>.<br />
                    <span className="text-neutral-500 font-normal">Solusi menyeluruh, dari konsep strategis hingga implementasi teknis.</span>
                </h1>
            </div>
            <Carousel className="relative max-w-6xl font-medium mx-auto">
                <CarouselNavigation
                    className='absolute -top-24 right-0 w-auto justify-end gap-2'
                    classNameButton='bg-neutral-100 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border-none'
                    alwaysShow
                    chevronSize={20}
                />
                <CarouselContent className='bg-transparent py-4 pl-1'>
                    {services.map((item, i) => <Card title={item.name} link={item.href} sub={item.tagline} key={i} className="min-h-96 md:min-w-96 min-w-80 basis-80 md:basis-96 mr-6">
                        <div className="h-80 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                            <Image src={item.image} fill unoptimized alt={item.name} className={cn("object-cover transition-transform duration-700 hover:scale-105", item.imgClassName)} />
                        </div>
                    </Card>)}
                </CarouselContent>
            </Carousel>
        </section>
    </>);
}

export default Service;

