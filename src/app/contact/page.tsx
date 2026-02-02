import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Kontak — Effortless",
};

export default function Contact() {
    return (
        <section>
            <div className="max-w-5xl mx-auto pt-40 pb-40 text-center font-medium relative">
                <span className="text-blue-500 text-sm">Mari Terhubung</span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    Hubungi kami, <br /><span className="text-neutral-400">Mari bercakap-cakap.</span>
                </h1>
            </div>
            <div className="grid max-w-7xl mx-auto px-6 md:px-12 gap-16 grid-cols-1 md:grid-cols-2">
                <div className="h-120 relative bg-center bg-cover overflow-hidden rounded-2xl max-md:hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: 'url(/contact-office.png)' }} />
                <div className="grid bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-2 gap-2">
                    <div className="grid md:grid-cols-2 gap-2">
                        <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 h-40 md:h-full flex flex-col shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-shadow">
                            <h3 className="text-lg text-neutral-400 font-medium lowercase">
                                email
                            </h3>
                            <p className="mt-auto font-semibold text-lg tracking-tight">
                                hello@effortless.agency
                            </p>
                        </div>
                        <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 h-40 md:h-full flex flex-col shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-shadow">
                            <h3 className="text-lg text-neutral-400 font-medium lowercase">
                                formulir
                            </h3>
                            <Button asChild className="mt-auto w-fit text-sm rounded-full" variant={"secondary"}>
                                <Link href={"https://forms.gle/FGbrhFAQEsXs4p8m6"}>
                                    Isi Formulir <ArrowUpRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 h-60 md:h-full flex flex-col shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-shadow">
                        <h3 className="text-lg text-neutral-400 font-medium lowercase">
                            kantor
                        </h3>
                        <div className="mt-auto">
                            <p className="text-xl mb-1 font-semibold text-neutral-900 dark:text-white">Garut, Indonesia</p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-pretty">Effortless HQ, Jl. Raya Cikarang No. 123, Garut, Jawa Barat 44111</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 w-full bg-neutral-900 text-white rounded-2xl grid grid-cols-1 md:grid-cols-3 md:h-64 p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                    <div className="md:col-span-2 flex flex-col relative z-10">
                        <h3 className="text-2xl text-neutral-400 font-medium">
                            Proyek Mendesak?
                        </h3>
                        <p className="mt-auto font-medium text-3xl md:text-4xl tracking-tight leading-tight">
                            Jadwalkan Discovery Call 15 menit. <br />Langsung dengan Founder.
                        </p>
                    </div>
                    <div className="flex justify-end items-end max-md:mt-10 relative z-10">
                        <Button asChild variant={"outline"} className="px-8 py-6 text-base rounded-full border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:text-white transition-all">
                            <Link target="_blank" href={"https://calendar.app.google/m8F1dDP8Sz8wsjiv7"}>
                                Pesan Jadwal <ArrowUpRight className="ml-2 size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div >
        </section >
    );
}

