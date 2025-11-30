import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface AboutProps {
    className?: string
}

const About: FunctionComponent<AboutProps> = ({ className }) => {
    return (<>
        <section className={cn("py-20 mx-5", className)}>
            <div className="max-w-5xl mx-auto mb-5 font-medium">
                <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Tentang Kami</span>
            </div>
            <div className="grid grid-cols-1 max-w-5xl mx-auto md:grid-cols-2 gap-8 md:gap-5">
                <div>
                    <h2 className="md:text-2xl">
                        Effortless berdiri dengan satu tujuan:
                        <span className="text-neutral-400"> membuat kehadiran digital menjadi sederhana dan berdampak. Kami percaya bahwa website yang baik bukan hanya soal estetika, tetapi juga tentang kecepatan, kemudahan penggunaan, dan kemampuan untuk membangun kepercayaan sejak kunjungan pertama.</span>
                    </h2>
                </div>
                <div>
                    <h2 className="md:text-2xl">
                        Sebagai PT Effortless Digital Agency,
                        <span className="text-neutral-400"> tim kami menggabungkan keahlian desain, pengembangan, dan strategi digital untuk menghadirkan solusi yang sesuai dengan kebutuhan unik setiap klien. Kami tidak hanya membangun website—kami menciptakan aset digital yang memperkuat identitas bisnis Anda dan mendorong pertumbuhan jangka panjang.</span>
                    </h2>
                </div>
            </div>
        </section>
    </>);
}

export default About;
