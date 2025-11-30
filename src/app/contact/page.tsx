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
            <div className="grid max-w-6xl mx-5 md:mx-auto gap-5 grid-cols-1 md:grid-cols-2">
                <div className="h-120 relative bg-center bg-cover overflow-hidden rounded-xl max-md:hidden" style={{ backgroundImage: 'url(/contact-office.png)' }} />
                <div className="grid bg-neutral-200 rounded-xl p-1 gap-1">
                    <div className="grid md:grid-cols-2 gap-1">
                        <div className="bg-white rounded-xl p-5 h-40 md:h-full flex flex-col">
                            <h3 className="text-xl text-neutral-400">
                                via Email
                            </h3>
                            <p className="mt-auto font-semibold">
                                hello@effortless.agency
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-5 h-40 md:h-full flex flex-col">
                            <h3 className="text-xl text-neutral-400">
                                via Formulir
                            </h3>
                            <Button asChild className="mt-auto w-fit text-sm">
                                <Link href={"https://forms.gle/FGbrhFAQEsXs4p8m6"}>
                                    Hubungi kami via formulir <ArrowUpRight />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-5 h-60 md:h-full flex flex-col">
                        <h3 className="text-xl text-neutral-400">
                            Alamat Surat
                        </h3>
                        <div className="mt-auto">
                            <p className="text-lg mb-1 font-medium text-neutral-400">Garut</p>
                            <p className="text-sm">Effortless, Jl. Raya Cikarang No. 123, Garut, Jawa Barat</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 w-full bg-white rounded-xl grid grid-cols-1 md:grid-cols-3 md:h-48 p-5">
                    <div className="md:col-span-2 flex flex-col">
                        <h3 className="text-xl text-neutral-400">
                            Punya sesuatu yang bisa kami bantu?
                        </h3>
                        <p className="mt-auto font-semibold">
                            Jadwalkan panggilan penemuan 15 menit dengan kami, ceritakan kepada kami.
                        </p>
                    </div>
                    <div className="flex justify-end max-md:mt-10">
                        <Button asChild variant={"outline"} className="px-5 max-sm:w-full group border-neutral-200">
                            <Link target="_blank" href={"https://calendar.app.google/m8F1dDP8Sz8wsjiv7"}>
                                Pesan panggilan <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div >
        </section >
    );
}

