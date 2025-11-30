import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/career-form";

export const metadata: Metadata = {
    title: "Karier - Effortless Agency",
    description: "Bergabunglah bersama Effortless Agency. Kirimkan minat dan portofolio Anda melalui formulir karier kami.",
};

export default function CareerPage() {
    return (
        <section className="safe-container py-20 md:py-28">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-border shadow-sm p-6 sm:p-8 md:p-10">
                <div className="text-center space-y-3 mb-10">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-primary/20 text-primary">Karier</span>
                    <h1 className="text-3xl md:text-5xl font-semibold">Mari Bangun Produk Hebat Bersama Effortless</h1>
                    <p className="text-sm md:text-base text-muted-foreground">
                        Kami selalu mencari talent berbakat yang ingin bekerja secara kolaboratif, gesit, dan peduli pada detail.
                        Kirimkan data diri dan portofolio, kami akan menghubungi ketika formasi tim sesuai.
                    </p>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

