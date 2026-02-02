'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight, Menu, MoveRight, X } from "lucide-react";


interface HeaderProps {
    className?: string
}

type NavLink = {
    name: string;
    href: string;
    ext?: boolean;
};

const Header: FunctionComponent<HeaderProps> = ({ className }) => {
    const pathname = usePathname();
    const [offset, setOffset] = useState(0);
    const [visible, setVisible] = useState(true);
    const [Open, setOpen] = useState(false)
    const lastScrollY = useRef(0);
    const navLinks: NavLink[] = [
        { name: 'Beranda', href: '/' },
        { name: 'Layanan', href: '/services' },
        { name: 'Studi Kasus', href: '/client-stories' },
        { name: 'Tentang Kami', href: '/about' },
        // { name: 'Tim', href: '/team' },
    ];
    useEffect(() => {
        lastScrollY.current = window.scrollY;
        function onScroll() {
            const current = window.scrollY;
            setOffset(current);
            const delta = Math.abs(current - lastScrollY.current);
            if (current <= 20) {
                setVisible(true);
                lastScrollY.current = current;
                return;
            }
            if (delta < 5) return;
            if (current > lastScrollY.current) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            lastScrollY.current = current;
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [])
    return (<>
        <header className={cn("fixed w-full left-0 top-0 z-50 transition-all duration-500", !visible && "-translate-y-full", className)}>
            <div className={`px-5 py-4 duration-500 ${offset > 20 ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm border-b border-neutral-100 dark:border-neutral-800' : 'bg-transparent'} w-full flex items-center max-w-7xl mx-auto rounded-b-2xl mt-0 md:mt-2`}>
                <Link href={"/"} className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white shadow-sm group-hover:scale-105 transition-transform">
                        <Image src="/brand-logo.svg" fill alt="logo" className="object-cover p-1" />
                    </div>
                    <span className={`text-base font-semibold tracking-tight text-neutral-900 dark:text-white max-md:hidden`}>effortless</span>
                </Link>
                <nav className={`hidden md:flex text-sm items-center gap-1 mx-auto bg-neutral-100/50 dark:bg-neutral-800/50 p-1 rounded-full border border-neutral-200/50 dark:border-neutral-700/50 backdrop-blur-sm`}>
                    {navLinks.map((item, index) => (
                        <Link href={item.href} key={index} data-active={item.href === pathname} className="data-[active=true]:bg-white dark:data-[active=true]:bg-neutral-900 data-[active=true]:text-neutral-900 dark:data-[active=true]:text-white text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 rounded-full py-2 px-5 font-medium duration-300 transition-all shadow-none data-[active=true]:shadow-sm">{item.name} {item.ext && <ArrowUpRight size={14} strokeWidth={2} />}</Link>
                    ))}
                </nav>
                <div className="flex items-center gap-2 ml-auto">
                    <Button asChild className={`hidden md:flex rounded-full px-6 font-medium`} size="sm">
                        <Link href={"/contact"}>
                            Mari Berkolaborasi <MoveRight className="ml-1 w-4 h-4" strokeWidth={2} />
                        </Link>
                    </Button>
                    <Button onClick={() => setOpen(true)} className="ml-auto md:hidden rounded-full" variant={"ghost"} size={"icon"}>
                        <Menu className="w-6 h-6" strokeWidth={1.5} />
                    </Button>
                </div>
            </div>
        </header>
        <div data-open={Open} className="fixed inset-0 w-full h-screen bg-black/50 backdrop-blur-sm z-[998] opacity-0 invisible data-[open=true]:visible data-[open=true]:opacity-100 transition-all duration-500 md:hidden" onClick={() => setOpen(false)} />
        <div data-open={Open} className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-neutral-900 shadow-2xl z-[999] p-6 flex flex-col translate-x-full data-[open=true]:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden border-l border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white shadow-sm">
                        <Image src="/brand-logo.svg" fill alt="logo" className="object-cover p-1" />
                    </div>
                    <span className={`text-lg font-bold tracking-tight text-neutral-900 dark:text-white`}>effortless</span>
                </div>
                <Button onClick={() => setOpen(false)} variant={"ghost"} size={"icon"} className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
                    <X className="w-6 h-6" strokeWidth={1.5} />
                </Button>
            </div>
            <nav className={`flex flex-col gap-2`}>
                {navLinks.map((item, index) => (
                    <Link href={item.href} key={index} data-active={item.href === pathname} onClick={() => setOpen(false)} className="data-[active=true]:bg-neutral-100 dark:data-[active=true]:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center justify-between rounded-xl py-4 px-4 text-lg font-medium duration-300 transition-colors border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800">
                        {item.name}
                        {item.ext ? <ArrowUpRight size={18} strokeWidth={2} /> : <MoveRight size={18} strokeWidth={1.5} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />}
                    </Link>
                ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-dashed border-neutral-200 dark:border-neutral-800">
                <Button asChild className={`w-full rounded-full py-6 text-base font-semibold shadow-lg`}>
                    <Link href={"/contact"}>
                        Mari Berkolaborasi <MoveRight className="ml-2 w-5 h-5" strokeWidth={2} />
                    </Link>
                </Button>
                <div className="mt-6 text-center text-xs text-neutral-400 font-medium">
                    &copy; 2025 Effortless Digital Agency
                </div>
            </div>
        </div>
    </>);
}

export default Header;

