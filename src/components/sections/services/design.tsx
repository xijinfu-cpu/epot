'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import { FunctionComponent } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Icon } from "@iconify/react/dist/iconify.js";
import Card from "@/components/ui/card";
import { Safari } from "@/components/magicui/safari";
import Image from "next/image";

interface DesigningProps {
    className?: string
}

const Designing: FunctionComponent<DesigningProps> = ({ className }) => {
    const services = [{
        name: 'Desain UI',
        sub: 'Antarmuka yang bersih dan intuitif berdasarkan kebutuhan dan perilaku pengguna.',
        key: 'ui',
    }, {
        name: 'Sistem Desain',
        sub: 'Komponen yang dapat digunakan kembali, aturan jelas, dan serah terima developer yang mulus',
        key: 'ds',
    }, {
        name: 'Wireframe',
        sub: 'Blueprint struktural untuk menyelaraskan alur dan tata letak sejak awal.',
        key: 'wr',
    }]
    return (
        <section className={cn("pt-20 md:pt-40 pb-20 max-sm:px-5", className)} id="designing">
            <div className="max-w-5xl mx-auto pb-10 font-medium relative">
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    Desain, <br /><span className="text-neutral-400">Yang Bekerja untuk Pengguna Nyata — Bukan Hanya Layar.</span>
                </h1>
                <p className="md:text-xl font-normal my-5 text-neutral-600 relative max-w-2xl">
                    Pengalaman yang intuitif, dapat diakses, dan menyenangkan — dari wireframe hingga prototipe interaktif. Kami mendesain untuk penggunaan, bukan hanya estetika.
                </p>
                <div className="flex absolute -top-8 md:-top-4 lg:top-30 right-0 md:-right-10 lg:-right-18 gap-3 md:gap-4 lg:gap-5">
                    <Icon icon={"logos:figma"} className="size-8 md:size-10 lg:size-12" />
                    <Icon icon={"logos:adobe-xd"} className="size-8 md:size-10 lg:size-12" />
                    <Icon icon={"logos:sketch"} className="size-8 md:size-10 lg:size-12" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-medium w-full max-w-6xl mx-auto px-5 md:px-0">
                {
                    services.map((service, i) => <Card sm altStyle reverse={i == 1} title={service.name} sub={service.sub} key={i} className="min-h-96 w-full">
                        {service.key === "wr" && <div className="duration-300 overflow-hidden rounded-xl bg-background p-3 flex flex-col gap-3 h-full">
                            <Image
                                src="/design-wireframe.gif"
                                alt="Contoh wireframe"
                                width={640}
                                height={360}
                                className="w-full rounded-lg border border-neutral-200 shadow-sm object-cover"
                                priority
                            />
                        </div>}
                        {service.key === 'ds' && <div className="px-5 font-medium duration-300 overflow-hidden rounded-xl bg-background aspect-[4/3] md:aspect-[5/4] w-full">
                            <InfiniteSlider gap={20} direction="vertical" reverse speed={40}>
                                <div>
                                    <p className="mb-2 text-sm">Button Sizes</p>
                                    <div className="flex items-center flex-wrap gap-3">
                                        <Button size={"lg"}>
                                            Button
                                        </Button>
                                        <Button className="rounded-md py-1.5">
                                            Button
                                        </Button>
                                        <Button size={"sm"}>
                                            Button
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-2 text-sm mt-5">Button Types</p>
                                    <div className="flex items-center flex-wrap gap-3">
                                        <Button variant={"default"} className="rounded-md py-1.5">
                                            Button
                                        </Button>
                                        <Button variant={"destructive"} className="rounded-md py-1.5">
                                            Button
                                        </Button>
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <p className="mb-2 mt-5">Colors</p>
                                    <div className="flex items-center flex-wrap gap-3">
                                        <div className="flex items-center border p-1 pr-2 border-neutral-300 rounded-full">
                                            <span className="w-5 h-5 bg-orange-600 mr-1 rounded-full" />
                                            Primary
                                        </div>
                                        <div className="flex items-center border p-1 pr-2 border-neutral-300 rounded-full">
                                            <span className="w-5 h-5 bg-blue-600 mr-1 rounded-full" />
                                            Secondary
                                        </div>
                                        <div className="flex items-center border p-1 pr-2 border-neutral-300 rounded-full">
                                            <span className="w-5 h-5 bg-neutral-600 mr-1 rounded-full" />
                                            Accent
                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <p className="mb-2 mt-5">Breadcrumb</p>
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </div>
                                <div className="text-sm">
                                    <p className="mb-2 mt-5">Alert</p>
                                    <Alert variant="default">
                                        <Terminal />
                                        <AlertTitle>Heads up!</AlertTitle>
                                        <AlertDescription>
                                            Write alert description here!
                                        </AlertDescription>
                                    </Alert>
                                    <Alert variant="destructive" className="mt-2">
                                        <Terminal />
                                        <AlertTitle>Heads up!</AlertTitle>
                                        <AlertDescription>
                                            Write alert description here!
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </InfiniteSlider>
                        </div>}
                        {service.key === "ui" && <div className="duration-300 overflow-hidden rounded-xl bg-background p-5 aspect-[4/3] md:aspect-[5/4] w-full">
                            <Safari
                                url="effortless.agency"
                                className="size-full"
                                imageSrc="/design-ui-preview.png"
                            />
                        </div>}
                    </Card>)
                }
            </div>
        </section>
    );

}

export default Designing;

