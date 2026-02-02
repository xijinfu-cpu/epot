import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface FooterProps {
    className?: string
}

type FooterLink = {
    label: string;
    link: string;
    ext?: boolean;
};

const Footer: FunctionComponent<FooterProps> = ({ className }) => {
    const pageLinks: FooterLink[] = [
        { label: 'Layanan', link: '/services' },
        { label: 'Cerita Klien', link: '/client-stories' },
        { label: 'Tentang Kami', link: '/about' },
        { label: 'Karir', link: '/career' },
    ];

    const connectLinks: FooterLink[] = [
        { label: 'LinkedIn', link: '//linkedin.com/company/effortless.agency', ext: true },
        { label: 'Instagram', link: '//instagram.com/effortless.agency', ext: true },
        { label: 'WhatsApp', link: '//wa.me/6287775566404', ext: true },
    ];

    const legalLinks: FooterLink[] = [
        { label: 'Syarat & Ketentuan', link: '/terms' },
        { label: 'Privasi', link: '/privacy' },
        { label: 'Pengelolaan Data', link: '/data-handling' },
    ];

    return (
        <footer className={cn("grid mt-10 mx-auto max-w-7xl pb-5 px-8 md:px-12", className)}>
            <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-8 py-5 border-b border-dashed border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-4">
                    <div className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-2 rounded-2xl shadow-sm">
                        <Image src="/brand-logo.svg" width={48} height={48} alt="logo" className="rounded-xl" />
                    </div>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight">
                            Effortless
                        </h5>
                        <p className="text-sm text-neutral-500 font-medium">
                            Digital Agency & Strategic Partner
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid font-medium mt-4 grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
                <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-6">Menu</p>
                    <ul className="space-y-4">
                        {pageLinks.map((page, i) => <li key={i}>
                            <Link href={page.link} className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white flex items-center gap-1 duration-300 text-sm font-medium">
                                {page.label} {page.ext && <ArrowUpRight size={14} strokeWidth={1.5} />}
                            </Link>
                        </li>)}
                    </ul>
                </div>
                <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-6">Sosial</p>
                    <ul className="space-y-4">
                        {connectLinks.map((page, i) => <li key={i}>
                            <Link href={page.link} className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white flex items-center gap-1 duration-300 text-sm font-medium">
                                {page.label} {page.ext && <ArrowUpRight size={14} strokeWidth={1.5} />}
                            </Link>
                        </li>)}
                    </ul>
                </div>
                <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-6">Legal</p>
                    <ul className="space-y-4">
                        {legalLinks.map((page, i) => <li key={i}>
                            <Link href={page.link} className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white duration-300 text-sm font-medium">
                                {page.label}
                            </Link>
                        </li>)}
                    </ul>
                </div>
                <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-6">Lokasi</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Effortless HQ<br />
                        Jl. Raya Cikarang No. 123,<br />
                        Garut, Jawa Barat 44111<br />
                        Indonesia
                    </p>
                </div>
            </div>
            <div className="mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-neutral-500">
                    &copy; 2025 PT Effortless Digital Agency. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">All systems normal</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

