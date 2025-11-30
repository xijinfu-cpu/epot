import { MoveRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Tim — Effortless",
};

export default function Team() {
    return (
        <>
            <section>
                <div className="max-w-5xl mx-5 md:mx-auto pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-40 text-center font-medium relative">
                    <span className="border text-xs sm:text-sm py-1 px-3 border-neutral-300 rounded-2xl">Tim Kami</span>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-10 my-3 md:my-2 px-2">
                        Orang-Orang di Balik Effortless, <br className="hidden sm:inline" /><span className="text-neutral-400">Tim yang membangun produk dengan presisi dan passion.</span>
                    </h1>
                </div>
                <div className="grid max-w-6xl mx-5 md:mx-auto grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 relative z-10 mb-20">
                    <div className="bg-white rounded-xl min-h-80 md:min-h-100 flex flex-col font-medium p-1">
                        <div className="h-64 sm:h-72 md:h-80 duration-300 overflow-hidden rounded-xl bg-background">
                            <div className="relative w-full h-full">
                                <Image src={"/team-photo.png"} alt="team" fill unoptimized className="object-cover" />
                            </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 mt-auto px-4 my-3 md:my-2">
                            Tim Kami
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-80 md:min-h-100 flex flex-col font-medium p-1">
                        <div className="h-64 sm:h-72 md:h-80 flex items-center justify-center duration-300 overflow-hidden rounded-xl right-0 bg-background p-5 sm:p-8 md:p-12">
                            <div>
                                <h3 className="text-base sm:text-lg md:text-xl text-center leading-relaxed mb-4">
                                    Kami adalah sekelompok builder, designer, dan problem solver yang percaya bahwa perangkat lunak harus bekerja — tanpa drama.
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-500 text-center leading-relaxed">
                                    Setiap anggota tim membawa keahlian unik mereka, tetapi kami semua berbagi satu tujuan: membangun produk yang berarti dengan kode bersih dan komunikasi jelas.
                                </p>
                            </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 mt-auto px-4 my-3 md:my-2">
                            Filosofi Kami
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-80 md:min-h-100 md:col-span-2 flex flex-col font-medium p-1">
                        <div className="h-auto min-h-64 sm:min-h-72 md:h-80 overflow-hidden rounded-xl right-0 bg-background flex items-center justify-center p-4 md:p-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 w-full">
                                {[
                                    { 
                                        title: 'Full-Stack Developers', 
                                        desc: 'Membangun dari frontend hingga backend dengan teknologi modern dan best practices.' 
                                    }, 
                                    { 
                                        title: 'UI/UX Designers', 
                                        desc: 'Menciptakan pengalaman yang intuitif dan visual yang memukau.' 
                                    }, 
                                    { 
                                        title: 'AI Engineers', 
                                        desc: 'Mengintegrasikan kecerdasan buatan yang benar-benar berfungsi dalam produk.' 
                                    }
                                ].map((item, i) =>
                                    <div key={`role-${i}`} className="min-h-52 sm:h-56 md:h-64 p-4 md:p-5 bg-white flex flex-col rounded-lg">
                                        <div className="span size-7 md:size-8 font-semibold text-xs md:text-sm bg-background rounded-full items-center justify-center flex">{i + 1}</div>
                                        <h3 className="text-base md:text-lg mt-auto leading-tight">{item.title}</h3>
                                        <p className="text-xs md:text-sm text-neutral-400 mt-1">{item.desc}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 mt-auto px-4 my-3 md:my-2">
                            Keahlian Tim
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-80 md:min-h-100 flex flex-col font-medium p-1">
                        <div className="h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl right-0 bg-background flex items-center justify-center p-5 sm:p-8 md:p-12">
                            <div>
                                <p className="text-xs">Bekerja bersama:</p>
                                <h3 className="text-base sm:text-lg my-2 leading-relaxed">Kami tidak bekerja dalam silo. Setiap proyek adalah kolaborasi antara designer, developer, dan strategist dari hari pertama.</h3>
                                <p className="text-xs sm:text-sm mt-2 leading-relaxed">
                                    Komunikasi langsung. Feedback cepat. Iterasi tanpa penundaan.
                                </p>
                            </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 mt-auto px-4 my-3 md:my-2">
                            Kolaborasi
                        </h1>
                    </div>
                    <div className="bg-white rounded-xl min-h-80 md:min-h-100 flex flex-col font-medium p-1">
                        <div className="h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl right-0 bg-background flex items-center justify-center p-5 sm:p-8 md:p-12">
                            <div>
                                <p className="mt-2 text-base sm:text-lg mb-3 leading-relaxed">Kami percaya pada ownership dan accountability. Setiap anggota tim memiliki tanggung jawab penuh atas pekerjaan mereka.</p>
                                <p className="text-xs sm:text-sm leading-relaxed">
                                    Tidak ada blame game. Tidak ada penundaan. Hanya pengiriman yang konsisten dan kualitas yang terjaga.
                                </p>
                            </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight md:leading-12 mt-auto px-4 my-3 md:my-2">
                            Tanggung Jawab
                        </h1>
                    </div>
                </div>
            </section>
            <section className="pt-10 md:pt-20">
                <div className="max-w-5xl p-4 sm:p-5 rounded-xl bg-white mx-5 md:mx-auto">
                    <Link href={"/contact"} className="flex flex-col sm:flex-row group font-medium">
                        <span>
                            <span className="text-xs sm:text-sm md:pl-2">Ingin bergabung dengan tim kami?</span>
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


