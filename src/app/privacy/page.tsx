import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kebijakan Privasi - Effortless Agency",
    description: "Kebijakan privasi yang menjelaskan bagaimana Effortless Agency mengumpulkan, menggunakan, dan melindungi data pengguna.",
};

const sections = [
    {
        title: "1. Informasi yang Kami Kumpulkan",
        content: [
            "Data kontak yang Anda kirim melalui formulir website, email, atau WhatsApp (nama, email, nomor telepon, detail bisnis).",
            "Materi atau dokumen proyek yang Anda bagikan untuk keperluan pengerjaan website.",
            "Data teknis dasar saat Anda mengunjungi website kami (misalnya alamat IP, jenis perangkat, halaman yang dikunjungi) untuk analitik."
        ],
    },
    {
        title: "2. Cara Penggunaan Data",
        content: [
            "Menjawab pertanyaan atau permintaan proposal yang Anda ajukan.",
            "Menjalankan proyek sesuai kebutuhan yang disepakati.",
            "Mengirimkan pembaruan, penawaran, atau informasi terkait layanan Effortless Agency (jika Anda setuju menerima).",
            "Meningkatkan kualitas website dan layanan kami melalui analitik anonim."
        ],
    },
    {
        title: "3. Penyimpanan & Keamanan",
        content: [
            "Kami menyimpan data pada layanan hosting dan alat produktivitas yang terpercaya dengan standar keamanan industri.",
            "Akses ke data hanya diberikan kepada tim yang membutuhkan untuk menjalankan pekerjaan.",
            "Kami melakukan langkah-langkah wajar untuk melindungi data dari akses tidak sah, namun tidak dapat menjamin keamanan absolut."
        ],
    },
    {
        title: "4. Berbagi Data",
        content: [
            "Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga.",
            "Data hanya dibagikan kepada mitra/penyedia layanan jika diperlukan untuk mendukung proyek dan telah diatur dalam perjanjian kerahasiaan."
        ],
    },
    {
        title: "5. Hak Pengguna",
        content: [
            "Anda dapat meminta akses, perbaikan, atau penghapusan data pribadi yang kami simpan.",
            "Anda bebas menghentikan komunikasi pemasaran kapan saja dengan menghubungi kami."
        ],
    },
    {
        title: "6. Cookies & Pelacakan",
        content: [
            "Website kami dapat menggunakan cookies untuk keperluan analitik dan pengalaman pengguna.",
            "Anda dapat mengatur preferensi cookies melalui pengaturan browser masing-masing."
        ],
    },
    {
        title: "7. Perubahan Kebijakan Privasi",
        content: [
            "Effortless Agency dapat memperbarui kebijakan privasi ini sewaktu-waktu.",
            "Perubahan akan diberitahukan melalui pembaruan tanggal pada halaman ini."
        ],
    },
    {
        title: "8. Kontak",
        content: [
            "Jika memiliki pertanyaan mengenai kebijakan privasi ini, hubungi kami melalui email hello@effortless.studio atau WhatsApp +62 851-8304-8357."
        ],
    },
];

export default function PrivacyPage() {
    return (
        <section className="safe-container py-28">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center text-xs uppercase tracking-wide text-primary font-semibold border border-primary/20 rounded-full px-3 py-1">Kebijakan Privasi</span>
                    <h1 className="text-3xl md:text-5xl font-semibold mt-4">Bagaimana Kami Mengelola Data Anda</h1>
                    <p className="text-sm md:text-base text-muted-foreground mt-4">
                        Privasi Anda penting bagi kami. Kebijakan ini menjelaskan cara kami mengumpulkan, menggunakan, dan melindungi informasi pribadi yang Anda berikan.
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

