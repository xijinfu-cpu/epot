import Hero from "@/components/sections/hero";
import Service from "@/components/sections/service";
import Work from "@/components/sections/work";
import Clients from "@/components/sections/clients";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Industries from "@/components/sections/industries";
import Solutions from "@/components/sections/solutions";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Clients />
      <Service />
      <Industries />
      <Solutions />
      <section className="py-20 md:py-32 px-5">
        <div className="max-w-7xl mx-auto p-8 md:p-12 lg:p-16 rounded-[2rem] bg-neutral-900 text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 opacity-10"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
          <Link href={"/contact"} className="flex flex-col md:flex-row group relative z-10 items-start md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-base md:text-lg font-medium text-neutral-400">Siap Memulai Transformasi?</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9]">
                Mari <br className="hidden md:block" />Berkolaborasi
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

