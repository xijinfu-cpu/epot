import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pengelolaan Data - Effortless Agency",
    description: "Penjelasan mengenai bagaimana Effortless Agency menangani data proyek dan informasi klien secara aman dan transparan.",
};

const sections = [
    {
        title: "1. Prinsip Pengelolaan Data",
        content: [
            "Kami hanya mengumpulkan data yang relevan dengan pengerjaan proyek dan konsultasi layanan.",
            "Setiap akses terhadap data dikendalikan dan dicatat untuk memastikan transparansi.",
            "Kami memprioritaskan keamanan, kerahasiaan, dan integritas data klien."
        ],
    },
    {
        title: "2. Penyimpanan Dokumen & Materi",
        content: [
            "Dokumen, aset visual, dan konten yang Anda kirim disimpan pada layanan cloud aman (contoh: Google Drive, Notion, atau sistem internal) dengan akses terbatas.",
            "Data kerja digunakan hanya oleh tim yang terlibat dalam proyek. Setelah proyek selesai, materi dapat diarsipkan atau dihapus sesuai kesepakatan."
        ],
    },
    {
        title: "3. Akses & Kredensial",
        content: [
            "Jika proyek membutuhkan akses ke akun pihak ketiga (misal: hosting, CMS, analytics), kami meminta akses terbatas (role khusus) untuk meminimalkan risiko.",
            "Kredensial disimpan sementara dengan pengaturan keamanan seperti password manager dan akan dihapus setelah proyek selesai atau ketika diminta."
        ],
    },
    {
        title: "4. Backup & Retensi Data",
        content: [
            "Kami membuat salinan cadangan (backup) untuk file proyek utama selama masa pengerjaan guna mencegah kehilangan data.",
            "Durasi penyimpanan backup mengikuti kesepakatan kontrak. Klien dapat meminta penghapusan setelah proyek selesai."
        ],
    },
    {
        title: "5. Kerahasiaan",
        content: [
            "Seluruh anggota tim Effortless Agency terikat pada standar kerahasiaan internal.",
            "Jika diperlukan, kami siap menandatangani perjanjian NDA untuk melindungi informasi sensitif klien."
        ],
    },
    {
        title: "6. Kepatuhan & Permintaan Penghapusan",
        content: [
            "Klien berhak meminta laporan data apa saja yang kami simpan serta mengajukan penghapusan ketika proyek selesai.",
            "Permintaan akan diproses maksimal 7 hari kerja setelah kami menerima instruksi resmi."
        ],
    },
    {
        title: "7. Kontak Terkait Data",
        content: [
            "Untuk pertanyaan atau instruksi terkait data, hubungi kami di hello@effortless.studio atau WhatsApp +62 851-8304-8357."
        ],
    },
];

export default function DataHandlingPage() {
    return (
        <section className="safe-container py-28">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center text-xs uppercase tracking-wide text-primary font-semibold border border-primary/20 rounded-full px-3 py-1">Pengelolaan Data</span>
                    <h1 className="text-3xl md:text-5xl font-semibold mt-4">Cara Kami Menjaga Data Proyek Anda</h1>
                    <p className="text-sm md:text-base text-muted-foreground mt-4">
                        Dokumen ini menjelaskan bagaimana Effortless Agency mengelola akses, penyimpanan, dan keamanan data klien secara bertanggung jawab.
                    </p>
                </div>
                <div className="space-y-8 bg-white rounded-3xl shadow-sm border border-border p-6 md:p-10">
                    {sections.map((section) => (
                        <article key={section.title} className="space-y-3">
                            <h2 className="text-xl md:text-2xl font-semibold text-primary">{section.title}</h2>
                            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
                                {section.content.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
                <div className="mt-10 text-sm text-muted-foreground text-center">
                    <p>Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}</p>
                </div>
            </div>
        </section>
    );
}

