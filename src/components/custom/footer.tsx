import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface FooterProps {
    className?: string
}

const Footer: FunctionComponent<FooterProps> = ({ className }) => {
    return (
        <footer className={cn("grid mt-40 mx-5 md:mx-auto max-w-3xl", className)}>
            <div className="flex items-center">
                <Image src="/brand-logo.svg" width={64} height={64} alt="logo" className="rounded-1xl" />
                <div className="ml-4">
                    <h5 className="text-2xl font-semibold">
                        Effortless
                    </h5>
                    <p className="text-sm text-neutral-500 font-medium">
                    Digital Agency
                    </p>
                </div>
            </div>
            <div className="grid font-medium mt-20 pb-10 grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                    <p className="text-sm text-neutral-500">1. Halaman</p>
                    <ul className="mt-4 space-y-2">
                        {[{
                            label: 'Layanan',
                            link: '/services'
                        }, {
                            label: 'Cerita Klien',
                            link: '/client-stories'
                        }, {
                            label: 'Tentang Kami',
                            link: '/about'
                        }, {
                            label: 'Karir',
                            link: '/career'
                        }].map((page, i) => <li key={i}>
                            <Link href={page.link} className="hover:text-blue-600 flex items-center gap-1 duration-300">
                                {page.label} {page.ext && <ArrowUpRight size={20} strokeWidth={1} />}
                            </Link>
                        </li>)}
                    </ul>
                </div>
                <div>
                    <p className="text-sm text-neutral-500">2. Terhubung</p>
                    <ul className="mt-4 space-y-2">
                        {[{
                            label: 'LinkedIn',
                            link: '//linkedin.com/company/effortless.agency',
                            ext: true
                        }, {
                            label: 'Instagram',
                            link: '//instagram.com/effortless.agency',
                            ext: true
                        }
                            , {
                            label: 'WhatsApp',
                            link: '//wa.me/6287775566404',
                            ext: true
                        }].map((page, i) => <li key={i}>
                            <Link href={page.link} className="hover:text-blue-600 flex items-center gap-1 duration-300">
                                {page.label} {page.ext && <ArrowUpRight size={20} strokeWidth={1} />}
                            </Link>
                        </li>)}
                    </ul>
                </div>
                <div>
                    <p className="text-sm text-neutral-500">3. Legal</p>
                    <ul className="mt-4 space-y-2">
                        {[{
                            label: 'Syarat & Ketentuan',
                            link: '/terms'
                        }, {
                            label: 'Privasi',
                            link: '/privacy'
                        }
                            , {
                            label: 'Pengelolaan Data',
                            link: '/data-handling'
                        }].map((page, i) => <li key={i}>
                            <Link href={page.link} className="hover:text-blue-600 duration-300">
                                {page.label}
                            </Link>
                        </li>)}
                    </ul>
                </div>
                <div>

                </div>
            </div>
            <div className="py-5 border-t border-neutral-300">
                <p className="text-sm text-neutral-500">
                    &copy;2025 - PT Effortless Digital Agency. Hak cipta dilindungi.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

