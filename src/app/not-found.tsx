import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] w-full bg-white dark:bg-neutral-900 flex flex-col items-center justify-center p-5 text-center">
            <div className="space-y-6 max-w-lg">
                <h1 className="text-8xl md:text-9xl font-medium tracking-tighter text-neutral-900 dark:text-white">
                    404
                </h1>
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-medium text-neutral-800 dark:text-neutral-100">
                        Halaman Tidak Ditemukan
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
                        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
                    </p>
                </div>
                <div className="pt-8">
                    <Button asChild className="rounded-full px-8 h-12 text-base" size="lg">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kembali ke Beranda
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
