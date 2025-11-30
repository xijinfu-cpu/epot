import ClientStoriesGrid from "@/components/sections/client-stories-grid";
import Clients from "@/components/sections/clients";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cerita Klien - Effortless",
};

export default function ClientStories() {
    return (
        <>
            <section>
                <div className="max-w-5xl mx-5 md:mx-auto pt-40 text-center font-medium relative">
                    <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Website yang Kami Bangun Bersama</span>
                    <h1 className="text-xl md:text-4xl md:leading-12 my-2">
                        Cerita Klien, Cerita Website Jadi Nyata <br /><span className="text-neutral-400">Dari konsep awal sampai situs siap kampanye, semuanya dirakit tim Effortless.</span>
                    </h1>
                    <p className="text-sm font-normal my-5 text-neutral-600 mx-auto relative max-w-xl">
                        “Effortless tidak hanya mendesain tampilan, mereka menyiapkan mesin konversi yang kami impikan.” — Rafi, Aurora Boutique.
                    </p>
                </div>
            </section>
            <section className="py-20">
                <ClientStoriesGrid />
            </section>
            <Clients />
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
        </>
    );
}

