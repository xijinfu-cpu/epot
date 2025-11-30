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
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto mb-8 font-medium">
                <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Layanan</span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    Kami melakukan <TextLoop>
                        <span>branding</span>
                        <span>desain</span>
                        <span>pengembangan</span>
                        <span>audit</span>
                        <span>pengujian</span>
                        <span>integrasi</span>
                    </TextLoop>, <br /><span className="text-neutral-400">Dari brand hingga audit — kami menangani setiap lapisan.</span>
                </h1>
            </div>
            <Carousel className="relative max-w-6xl font-medium mx-5 md:mx-auto">
                <CarouselNavigation
                    className='absolute -top-35 left-auto md:-top-20 w-full justify-end gap-2'
                    classNameButton='bg-neutral-800 cursor-pointer *:stroke-neutral-50 dark:bg-neutral-200 dark:*:stroke-neutral-800'
                    alwaysShow
                    chevronSize={24}
                />
                <CarouselContent className='bg-background'>
                    {services.map((item, i) => <Card title={item.name} link={item.href} sub={item.tagline} key={i} className="min-h-96 md:min-w-95 min-w-84 basis-84 md:basis-95 mr-5">
                        <div className="h-80 rounded-xl overflow-hidden bg-background relative">
                            <Image src={item.image} fill unoptimized alt={item.name} className={item.imgClassName} />
                        </div>
                    </Card>)}
                </CarouselContent>
            </Carousel>
        </section>
    </>);
}

export default Service;

