import Audit from "@/components/sections/services/audit";
import Branding from "@/components/sections/services/branding";
import Designing from "@/components/sections/services/design";
import Development from "@/components/sections/services/development";
import Hero from "@/components/sections/services/hero";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Layanan — Effortless",
};

export default function Services() {
    const FAQs = [
        {
            question: "Layanan apa yang Anda tawarkan?",
            answer: "Kami menawarkan branding, desain, pengembangan full-stack, integrasi AI, pengembangan Model Kustom, audit UX, audit teknis dan lainnya. Dari ide hingga peluncuran, kami menangani seluruh siklus produk dan lebih dari itu."
        },
        {
            question: "Apakah Anda bekerja dengan startup?",
            answer: "Ya. Kami mengkhususkan diri dalam membantu startup tahap awal dan berkembang meluncurkan MVP, memperbaiki kode, dan menambahkan AI — dengan kecepatan dan kejelasan."
        },
        {
            question: "Berapa lama waktu proyek?",
            answer: "Sebagian besar MVP membutuhkan 6–10 minggu; platform penuh membutuhkan 10–16 minggu. Setelah scoping, kami memberikan jadwal yang jelas — dan menaatinya."
        },
        {
            question: "Siapa yang memiliki IP setelah pengiriman?",
            answer: "Anda — 100%. Semua kode sumber, desain, dan aset diserahkan kepada Anda. Kami hanya mempertahankan hak untuk tools dan framework yang dapat digunakan kembali."
        },
        {
            question: "Apakah Anda bekerja secara remote?",
            answer: "Ya — kami sepenuhnya remote dan berkolaborasi dengan pendiri secara global. Kami menggunakan Slack, GitHub, dan sinkronisasi mingguan untuk menjaga komunikasi cepat dan jelas."
        },
        {
            question: "Apakah Anda menandatangani NDA?",
            answer: "Ya — kami melakukannya."
        }
    ]
    return (
        <>
            <Hero />
            <Branding />
            <Designing />
            <Development />
            <Audit />
            <section className="pt-20 md:pt-40 pb-20 max-sm:px-5 font-medium relative">
                <div className="max-w-5xl mx-auto">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Cara Kami Bekerja</span>
                    <h1 className="md:text-4xl md:leading-12 text-2xl my-2">
                        Alur Kami<br /><span className="text-neutral-400">Sederhana. Jelas. Tanpa kejutan.</span>
                    </h1>
                </div>
                <div className="mt-10 grid md:grid-cols-3 gap-4 relative max-w-6xl mx-auto">
                    <Image src={"/arrow-up.svg"} height={128} width={128} alt="up-arrow" className="absolute hidden md:block opacity-10 -top-20 rotate-12 right-75" />
                    <Image src={"/arrow-down.svg"} height={128} width={128} alt="down-arrow" className="absolute hidden md:block opacity-10 -bottom-20 left-75" />
                    {[
                        {
                            icon: 'solar:compass-bold-duotone',
                            name: 'Memahami',
                            desc: 'Kami menyelaraskan tujuan, pengguna, dan batasan Anda.'
                        },
                        {
                            icon: 'solar:code-square-bold-duotone',
                            name: 'Membangun',
                            desc: 'Kami mendesain, coding, dan menguji — dengan pembaruan mingguan.'
                        }, {
                            icon: 'solar:rocket-2-bold-duotone',
                            name: 'Mengirim',
                            desc: 'Kami meluncurkan, mendukung, dan menyerahkan — tanpa ujung yang longgar.'
                        },].map((item, i) => <div key={i} className="bg-white h-64 flex flex-col rounded-xl p-8">
                            <Icon icon={item.icon} className="size-10 text-blue-500" />
                            <h3 className="text-xl mt-auto">
                                {item.name}
                            </h3>
                            <p className="text-sm text-neutral-500">
                                {item.desc}
                            </p>
                        </div>)}
                </div>
            </section>
            <section className="pt-20 md:pt-40 pb-20 max-sm:px-5 font-medium relative">
                <div className="max-w-5xl mx-auto">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Ada Pertanyaan? Kami Punya Jawaban</span>
                    <h1 className="md:text-4xl md:leading-12 text-2xl my-2">
                        Pertanyaan yang Sering Diajukan<br /><span className="text-neutral-400">Semua yang perlu Anda ketahui tentang cara kami bekerja, jadwal, dan apa yang diharapkan.</span>
                    </h1>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="max-w-6xl mx-auto rounded-2xl mt-10 grid md:grid-cols-2 gap-5 text-left">
                    {FAQs.map((item) => (
                        <div
                            className="group"
                            key={item.question}>
                            <AccordionItem
                                value={item.question}
                                className="bg-white peer rounded-xl border-none px-7 py-1">
                                <AccordionTrigger className="cursor-pointer hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p>{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                            <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                        </div>
                    ))}
                </Accordion>
            </section>
            <section className="pt-10 md:pt-20">
                <div className="max-w-5xl p-5 rounded-xl bg-white mx-5 md:mx-auto">
                    <Link href={"/contact"} className="flex group font-medium">
                        <span>
                            <span className="text-sm md:pl-2">Ada yang bisa kami bantu?</span>
                            <h1 className="md:text-8xl text-3xl">
                                Mari Terhubung
                            </h1>
                        </span>
                        <MoveRight className="ml-auto -translate-x-10 group-hover:translate-x-0 duration-300 group-hover:text-blue-600 size-10 max-md:mt-auto md:size-32" />
                    </Link>
                </div>
            </section>
            {/* <section className="max-w-6xl mx-auto px-5 py-10 md:py-20 mb-17 font-medium overflow-hidden relative text-center bg-white rounded-xl">
                <Image src={"/story-hands.png"} width={512} height={400} alt="hands" className="absolute rotate-90 max-sm:hidden top-30 -left-30" />
                <div className="max-w-lg mx-auto">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Ready to Build?</span>
                    <h1 className="text-2xl leading-10 my-2">
                        Let’s Build Something That Actually Ships
                    </h1>
                    <p className="text-neutral-400">No more guessing. No fluff. No ghosting. Just clean execution and clear communication.</p>
                </div>
                <div className="flex max-sm:flex-col w-full gap-2 mt-15 items-center justify-center">
                    <Button asChild className="px-5 max-sm:w-full group">
                        <Link href={"/contact"}>
                            Let&apos;s connect <MoveRight strokeWidth={1.5} className="size-5 group-hover:translate-x-1 duration-300" />
                        </Link>
                    </Button>
                    <Button asChild variant={"outline"} className="px-5 max-sm:w-full group border-neutral-200">
                        <Link target="_blank" href={"https://calendar.app.google/D5zNA5sETNtreLvL6"}>
                            Book a call <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                        </Link>
                    </Button>
                </div>
            </section> */}
        </>
    );
}

