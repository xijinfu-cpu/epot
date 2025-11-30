import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Syarat & Ketentuan - Effortless Agency",
    description: "Syarat dan ketentuan penggunaan layanan Effortless Agency termasuk layanan pembuatan website, maintenance, dan konsultasi digital.",
};

const sections = [
    {
        title: "1. Penerimaan Ketentuan",
        content: [
            "Dengan mengakses atau menggunakan layanan Effortless Agency, Anda menyatakan telah membaca, memahami, dan menyetujui ketentuan ini.",
            "Jika layanan digunakan atas nama perusahaan atau organisasi, Anda menyatakan berwenang mengikat pihak tersebut pada ketentuan ini."
        ],
    },
    {
        title: "2. Layanan",
        content: [
            "Kami menyediakan layanan pembuatan website, landing page, redesign, maintenance, dan konsultasi digital sesuai scope yang disepakati dalam proposal atau kontrak kerja.",
            "Setiap perubahan atau penambahan scope akan dijelaskan melalui dokumen tambahan atau surat kerja baru sebelum dieksekusi."
        ],
    },
    {
        title: "3. Kewajiban Klien",
        content: [
            "Klien wajib memberikan informasi dan materi (logo, konten, akses, dll.) yang dibutuhkan secara lengkap dan tepat waktu.",
            "Klien bertanggung jawab memastikan konten yang diberikan tidak melanggar hukum atau hak pihak ketiga.",
            "Persetujuan, revisi, dan umpan balik harus diberikan sesuai jadwal agar timeline proyek tidak terhambat."
        ],
    },
    {
        title: "4. Hak Kekayaan Intelektual",
        content: [
            "Hak atas materi yang Anda berikan tetap menjadi milik Anda.",
            "Hak atas desain, kode, dan aset yang dikembangkan Effortless Agency akan menjadi milik klien setelah seluruh pembayaran sesuai kontrak diselesaikan.",
            "Kami dapat menampilkan proyek Anda sebagai portofolio kecuali terdapat perjanjian tertulis yang melarangnya."
        ],
    },
    {
        title: "5. Pembayaran",
        content: [
            "Skema pembayaran mengacu pada proposal atau kontrak (misalnya DP + termin milestone).",
            "Pembayaran dilakukan melalui metode yang disepakati dan dianggap sah setelah bukti transaksi diterima.",
            "Keterlambatan pembayaran dapat menunda proses produksi, serah terima, atau layanan maintenance."
        ],
    },
    {
        title: "6. Revisi & Perubahan",
        content: [
            "Jumlah sesi revisi mengikuti ketentuan yang dijelaskan di proposal atau kontrak.",
            "Perubahan di luar scope awal akan dikategorikan sebagai pekerjaan tambahan dengan biaya terpisah setelah dikonfirmasi kedua belah pihak."
        ],
    },
    {
        title: "7. Maintenance & Support",
        content: [
            "Support pasca peluncuran diberikan sesuai paket yang dipilih (misal: masa garansi, maintenance bulanan).",
            "Permintaan perawatan di luar paket akan diklasifikasikan sebagai pekerjaan baru."
        ],
    },
    {
        title: "8. Pembatalan",
        content: [
            "Pembatalan proyek sebelum selesai harus disampaikan secara tertulis.",
            "Biaya yang telah dikerjakan tidak dapat dikembalikan. Pengembalian (jika ada) akan dihitung proporsional terhadap pekerjaan yang belum dilakukan."
        ],
    },
    {
        title: "9. Batasan Tanggung Jawab",
        content: [
            "Kami berupaya menjaga performa dan keamanan website sesuai praktik terbaik. Namun, kami tidak bertanggung jawab atas kerugian tidak langsung, kehilangan data, atau gangguan operasional akibat faktor di luar kendali kami.",
            "Klien bertanggung jawab mengelola kredensial akses dan kebijakan internal setelah website diserahkan."
        ],
    },
    {
        title: "10. Perubahan Ketentuan",
        content: [
            "Effortless Agency berhak memperbarui Syarat & Ketentuan sewaktu-waktu. Versi terbaru akan dipublikasikan pada halaman ini.",
            "Dengan tetap menggunakan layanan kami setelah pembaruan, Anda dianggap menyetujui versi terbaru."
        ],
    },
];

export default function TermsPage() {
    return (
        <section className="safe-container py-28">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center text-xs uppercase tracking-wide text-primary font-semibold border border-primary/20 rounded-full px-3 py-1">Syarat & Ketentuan</span>
                    <h1 className="text-3xl md:text-5xl font-semibold mt-4">Ketentuan Layanan Effortless Agency</h1>
                    <p className="text-sm md:text-base text-muted-foreground mt-4">
                        Harap baca dokumen ini sebelum menggunakan layanan kami. Dengan melanjutkan, Anda dianggap setuju dengan kebijakan yang berlaku.
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
                    <p>
                        Pertanyaan terkait Syarat & Ketentuan dapat dikirimkan melalui email <a href="mailto:hello@effortless.agency" className="text-primary underline-offset-4 underline">hello@effortless.agency</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}

