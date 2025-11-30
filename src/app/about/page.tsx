import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Tentang — Effortless",
};

export default function About() {
    return (
        <>
            <section>
                <div className="max-w-5xl mx-5 md:mx-auto pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-40 text-center font-medium relative">
                    <span className="border text-xs sm:text-sm py-1 px-3 border-neutral-300 rounded-2xl">Tentang Kami</span>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-10 my-3 md:my-2 px-2">
                        Kami Membangun Seperti Pendiri — Karena Kami Berpikir Seperti Mereka, <br className="hidden sm:inline" /><span className="text-neutral-400">Tanpa janji berlebihan. Hanya kode bersih dan komunikasi jelas.</span>
                    </h1>
                    <div className="absolute top-8 right-4 max-lg:hidden w-80 opacity-30 pointer-events-none">
                        <Image src={"/about-bird.png"} width={320} height={320} alt="peacock" className="w-full h-auto" />
                    </div>
                </div>
                <div className="grid max-w-6xl mx-5 md:mx-auto grid-cols-1 sm:grid-cols-2 font-semibold mb-5 md:mb-8 gap-4 sm:gap-0 relative">
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 my-2">
                            Berbasis di Indonesia
                        </h1>
                    </div>
                    <div className="sm:text-right">
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 my-2">
                            Kisah Effortless
                        </h1>
                    </div>
                </div>
                <div className="grid max-w-6xl mx-5 md:mx-auto grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 relative z-10">
                    <div className="bg-white rounded-xl min-h-80 md:min-h-100 flex flex-col font-medium p-1">
                        <div className="h-64 sm:h-72 md:h-80 flex items-center justify-center duration-300 overflow-hidden rounded-xl right-0 bg-background p-5 sm:p-8 md:p-12">
                            <h3 className="text-base sm:text-lg md:text-xl text-center leading-relaxed">Kejelasan di atas kompleksitas. Kecepatan di atas pamer. Pengiriman di atas janji.</h3>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 mt-auto px-4 my-3 md:my-2">
                            Misi Kami
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-80 md:min-h-100 flex flex-col font-medium p-1">
                        <div className="h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl right-0 bg-background p-2 flex items-center justify-center">
                            <InfiniteSlider reverse direction="vertical" speed={40} speedOnHover={25} gap={8}>
                                {[
                                    {
                                        "badge": "Presisi di Atas Hype",
                                        "title": "Kami menyelesaikan masalah, bukan mengesankan.",
                                        "description": "Tanpa over-engineering. Tanpa mode demo. Hanya kode bersih, desain jelas, dan dampak nyata."
                                    },
                                    {
                                        "badge": "Mengutamakan Pendiri",
                                        "title": "Kami berpikir seperti pemilik.",
                                        "description": "Kami membalas dalam hitungan menit, bukan hari. Kami melindungi jadwal, anggaran, dan visi Anda — karena kami pernah mengalaminya."
                                    },
                                    {
                                        "badge": "Tanpa Basa-Basi. Hanya Pengiriman.",
                                        "title": "Kami mengirim yang bekerja.",
                                        "description": "Tanpa menghilang. Tanpa penundaan. Satu tim. Nol serah terima. Jika rusak, kami perbaiki — cepat."
                                    },
                                    {
                                        "badge": "Kejelasan di Atas Kompleksitas",
                                        "title": "Kami mulai dari masalah — bukan teknologi.",
                                        "description": "Tanpa jargon. Tanpa kebingungan. Hanya jawaban jujur dan solusi sederhana yang terukur."
                                    },
                                    {
                                        "badge": "Bangun Sekali. Kirim Sekali.",
                                        "title": "Kualitas tertanam sejak hari pertama.",
                                        "description": "Kami tidak terburu-buru meluncurkan dan memperbaiki nanti. Kami membangunnya dengan benar — jadi tetap benar."
                                    }
                                ].map((item, i) => <div key={`card-${i}`} className="bg-white max-w-[240px] sm:max-w-[280px] md:max-w-lg rounded-lg p-4 md:p-5">
                                    <span className="text-xs text-blue-600">{item.badge}</span>
                                    <h2 className="text-sm sm:text-base my-1">{item.title}</h2>
                                    <p className="text-xs sm:text-sm text-neutral-500">{item.description}</p>
                                </div>)}
                            </InfiniteSlider>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 mt-auto px-4 my-3 md:my-2">
                            Nilai Kami
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-80 md:min-h-100 md:col-span-2 flex flex-col font-medium p-1">
                        <div className="h-auto min-h-64 sm:min-h-72 md:h-80 overflow-hidden rounded-xl right-0 bg-background flex items-center justify-center p-4 md:p-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 w-full">
                                {[{ title: 'Mulai dari Masalah', desc: 'Bukan tech stack. Bukan UI. Hambatan yang sebenarnya.' }, { title: 'Desain dengan Kode', desc: 'Tanpa silo. Desainer dan developer bekerja bersama dari hari pertama.' }, { title: 'Bangun Sekali. Kirim Cepat. Tidak Ada Perbaikan Nanti.', desc: 'Arsitektur bersih. Pengujian penuh. Nol bug kritis.' }, { title: 'Miliki Hasilnya', desc: 'Kami tidak serahkan dan menghilang. Kami melihatnya sampai selesai — seperti pemilik.' }].map((item, i) =>
                                    <div key={`appr-${i}`} className="min-h-52 sm:h-56 md:h-64 p-4 md:p-5 bg-white flex flex-col rounded-lg">
                                        <div className="span size-7 md:size-8 font-semibold text-xs md:text-sm bg-background rounded-full items-center justify-center flex">{i + 1}</div>
                                        <h3 className="text-base md:text-lg mt-auto leading-tight">{item.title}</h3>
                                        <p className="text-xs md:text-sm text-neutral-400 mt-1">{item.desc}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 mt-auto px-4 my-3 md:my-2">
                            Pendekatan Kami
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-80 md:min-h-100 flex flex-col font-medium p-1">
                        <div className="h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl right-0 bg-background flex items-center justify-center p-5 sm:p-8 md:p-12">
                            <div>
                                <p className="text-xs">Untuk setiap pendiri yang mempercayai kami:</p>
                                <h3 className="text-base sm:text-lg my-2 leading-relaxed">Kami akan melindungi waktu Anda, menghormati visi Anda, dan menghadirkan apa yang kami janjikan — tepat waktu, sesuai lingkup, sesuai standar.</h3>

                                <p className="text-xs sm:text-sm mt-2 leading-relaxed">Jika ada yang rusak, kami memperbaikinya — cepat.
                                    Jika tenggat waktu berubah, kami memberi tahu Anda — dalam 24 jam.
                                    Dan jika tidak berhasil, kami bertanggung jawab.</p>

                                <p className="mt-3 md:mt-4 text-xs sm:text-sm">Ini bukan layanan. Ini kemitraan.</p>
                            </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 mt-auto px-4 my-3 md:my-2">
                            Komitmen
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-80 md:min-h-100 flex flex-col font-medium p-1">
                        <div className="h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl right-0 bg-background flex items-center justify-center p-5 sm:p-8 md:p-12">
                            <div>
                                <p className="mt-2 text-base sm:text-lg mb-3 leading-relaxed">Effortless tidak didirikan untuk menjadi agensi. Ini dibangun untuk memperbaiki apa yang rusak dalam pengembangan produk — dimulai dengan kecepatan, kepemilikan, dan pengiriman.</p>
                                <p className="text-xs sm:text-sm leading-relaxed">
                                    Di dunia mode demo dan penundaan, kami memilih kejelasan. Effortless adalah jawaban kami untuk perangkat lunak yang hanya… bekerja.
                                </p>
                            </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 mt-auto px-4 my-3 md:my-2">
                            Kisah Latar
                        </h1>
                    </div>
                </div>
            </section>
            <section className="pt-10 md:pt-20">
                <div className="max-w-5xl p-4 sm:p-5 rounded-xl bg-white mx-5 md:mx-auto">
                    <Link href={"/contact"} className="flex flex-col sm:flex-row group font-medium">
                        <span>
                            <span className="text-xs sm:text-sm md:pl-2">Ada yang bisa kami bantu?</span>
                            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                                Mari Terhubung
                            </h1>
                        </span>
                        <MoveRight className="ml-0 sm:ml-auto translate-x-0 sm:-translate-x-10 group-hover:translate-x-0 duration-300 group-hover:text-blue-600 size-8 sm:size-10 mt-2 sm:mt-auto md:size-20 lg:size-32" />
                    </Link>
                </div>
            </section>
        </>
    );
}

