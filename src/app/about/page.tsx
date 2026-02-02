import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
    title: "Tentang — Effortless",
};

export default function About() {
    return (
        <>
            <section>
                <div className="max-w-6xl mx-5 md:mx-auto pt-28 sm:pt-32 md:pt-44 pb-20 sm:pb-28 md:pb-40 text-center font-medium relative">
                    <span className="border text-xs font-semibold tracking-wider uppercase py-1.5 px-4 border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-500">Tentang Kami</span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight my-6 md:my-8 px-2 tracking-tight text-balance">
                        Kami Membangun Seperti Mitra Strategis. <br className="hidden sm:inline" /><span className="text-neutral-500 dark:text-neutral-400 font-normal">Tanpa janji berlebihan. Hanya eksekusi presisi dan komunikasi transparan.</span>
                    </h1>
                </div>
                <div className="grid max-w-7xl mx-5 md:mx-auto grid-cols-1 sm:grid-cols-2 font-semibold mb-8 md:mb-12 gap-4 sm:gap-0 relative border-b border-neutral-200 dark:border-neutral-800 pb-8">
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight font-medium tracking-tight">
                            Berbasis di Indonesia.
                        </h1>
                    </div>
                    <div className="sm:text-right">
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight font-medium tracking-tight">
                            Berpikir Global.
                        </h1>
                    </div>
                </div>
                <div className="grid max-w-7xl mx-5 md:mx-auto grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl min-h-80 md:min-h-[30rem] flex flex-col font-medium p-2 shadow-sm border border-neutral-100 dark:border-neutral-800">
                        <div className="h-64 sm:h-72 md:h-80 flex items-center justify-center duration-300 overflow-hidden rounded-xl bg-neutral-50 dark:bg-neutral-800 p-8 sm:p-12">
                            <h3 className="text-lg sm:text-xl md:text-2xl text-center leading-relaxed font-normal text-pretty">&quot;Kejelasan di atas kompleksitas. Kecepatan di atas kesempurnaan yang tak kunjung rilis. Pengiriman adalah reputasi kami.&quot;</h3>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-3xl leading-tight mt-auto px-6 my-4 md:my-6 tracking-tight">
                            Misi Kami
                        </h1>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl min-h-80 md:min-h-[30rem] flex flex-col font-medium p-2 shadow-sm border border-neutral-100 dark:border-neutral-800">
                        <div className="h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl bg-neutral-50 dark:bg-neutral-800 p-4 flex items-center justify-center">
                            <InfiniteSlider reverse direction="vertical" speed={40} speedOnHover={25} gap={12}>
                                {[
                                    {
                                        "badge": "Integritas",
                                        "title": "Masalah Anda adalah masalah kami",
                                        "description": "Kami tidak lari dari tanggung jawab. Kami menyelesaikannya."
                                    },
                                    {
                                        "badge": "Kemitraan",
                                        "title": "Berpikir seperti pemilik",
                                        "description": "Setiap keputusan teknis didasarkan pada dampak bisnis Anda."
                                    },
                                    {
                                        "badge": "Transparansi",
                                        "title": "Tanpa kejutan",
                                        "description": "Komunikasi jujur, jadwal realistis, dan laporan berkala."
                                    },
                                    {
                                        "badge": "Kualitas",
                                        "title": "Kode yang terukur",
                                        "description": "Dibangun untuk hari ini, siap untuk esok."
                                    }
                                ].map((item, i) => <div key={`card-${i}`} className="bg-white dark:bg-neutral-900 shadow-sm border border-neutral-100 dark:border-neutral-700 max-w-[240px] sm:max-w-[280px] md:max-w-lg rounded-xl p-5 md:p-6">
                                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{item.badge}</span>
                                    <h2 className="text-base sm:text-lg my-1.5 font-semibold text-neutral-900 dark:text-white">{item.title}</h2>
                                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.description}</p>
                                </div>)}
                            </InfiniteSlider>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-3xl leading-tight mt-auto px-6 my-4 md:my-6 tracking-tight">
                            Nilai Inti
                        </h1>
                    </div>

                    <div className="bg-white dark:bg-neutral-900 rounded-2xl min-h-80 md:min-h-[30rem] md:col-span-2 flex flex-col font-medium p-2 shadow-sm border border-neutral-100 dark:border-neutral-800">
                        <div className="h-auto min-h-64 sm:min-h-72 md:h-96 overflow-hidden rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center p-6 md:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 w-full">
                                {[{ title: 'Identifikasi Akar Masalah', desc: 'Kami tidak mendiagnosa gejala. Kami menemukan penyebab utama.' }, { title: 'Kolaborasi Lintas Fungsi', desc: 'Desain, teknis, dan bisnis bersinergi sejak hari pertama.' }, { title: 'Eksekusi Tangkas', desc: 'Rilis iteratif, umpan balik cepat, perbaikan berkelanjutan.' }, { title: 'Kepemilikan Penuh', desc: 'Kami mengawal dari konsep hingga pasca-peluncuran.' }].map((item, i) =>
                                    <div key={`appr-${i}`} className="min-h-40 sm:h-48 md:h-56 p-5 md:p-6 bg-white dark:bg-neutral-900 flex flex-col rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-shadow">
                                        <div className="size-8 md:size-10 font-bold text-sm md:text-base bg-neutral-100 dark:bg-neutral-800 rounded-full items-center justify-center flex text-neutral-900 dark:text-white mb-2">{i + 1}</div>
                                        <h3 className="text-base md:text-lg mt-auto leading-tight font-semibold">{item.title}</h3>
                                        <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">{item.desc}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-3xl leading-tight mt-auto px-6 my-4 md:my-6 tracking-tight">
                            Metodologi
                        </h1>
                    </div>
                </div>
            </section>
            <section className="py-20 md:py-32 px-5">
                <div className="max-w-7xl mx-auto p-8 md:p-12 lg:p-16 rounded-[2rem] bg-neutral-900 text-white relative overflow-hidden group shadow-2xl">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                    <Link href={"/contact"} className="flex flex-col md:flex-row group relative z-10 items-start md:items-end justify-between gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-base md:text-lg font-medium text-neutral-400">Siap Memulai?</span>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9]">
                                Hubungi <br />Kami
                            </h1>
                        </div>
                        <div className="md:mb-2">
                            <div className="bg-white text-black rounded-full p-6 md:p-8 group-hover:scale-110 transition-transform duration-500">
                                <MoveRight className="w-8 h-8 md:w-12 md:h-12 group-hover:-rotate-45 transition-transform duration-500" strokeWidth={1.5} />
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}

