'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight, Menu, MoveRight, X } from "lucide-react";
import { HyperText } from "../magicui/hyper-text";

interface HeaderProps {
    className?: string
}

const Header: FunctionComponent<HeaderProps> = ({ className }) => {
    const pathname = usePathname();
    const [offset, setOffset] = useState(0);
    const [visible, setVisible] = useState(true);
    const [Open, setOpen] = useState(false)
    const lastScrollY = useRef(0);
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
            if (delta < 4) return;
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
        <header className={cn("fixed w-full left-0 top-0 z-50 transition-transform duration-300", !visible && "-translate-y-full", className)}>
            <div className={`px-5 py-4 duration-300 from-background to-transparent bg-gradient-to-b shadow-neutral-400/10 ${offset > 10 && 'backdrop-blur-sm'} w-full flex items-center`}>
                <Link href={"/"} className="flex items-center gap-2">
                    <Image src="/brand-logo.svg" width={20} height={20} alt="logo" className="rounded-full bg-white" />
                    <HyperText preserveCase className={`text-sm font-medium max-md:hidden`}>effortless</HyperText>
                </Link>
                <nav className={`hidden md:flex text-sm items-center gap-2 mx-auto`}>
                    {[{
                        name: 'Beranda',
                        href: '/',
                    }, {
                        name: 'Layanan',
                        href: '/services',
                    }, {
                        name: 'Cerita Klien',
                        href: '/client-stories',
                    }, {
                        name: 'Tentang Kami',
                        href: '/about',
                    }, {
                        name: 'Tim',
                        href: '/team',
                    },].map((item, index) => (
                        <Link href={item.href} key={index} data-active={item.href === pathname} className="data-[active=true]:text-blue-500 hover:bg-white data-[active=true]:bg-white flex items-center gap-1 rounded-full py-1.5 px-3 font-medium duration-300 hover:text-blue-500">{item.name} {item.ext && <ArrowUpRight size={20} strokeWidth={1.5} />}</Link>
                    ))}
                </nav>
                <Button asChild className={`hidden md:flex`}>
                    <Link href={"/contact"}>
                        Mari Terhubung <MoveRight strokeWidth={1.5} />
                    </Link>
                </Button>
                <Button onClick={() => setOpen(true)} className="ml-auto md:hidden bg-white" variant={"secondary"} size={"icon"}>
                    <Menu />
                </Button>
            </div>
        </header>
        <div data-open={Open} className="fixed py-4 px-5 w-full h-full data-[open=true]:visible opacity-0 data-[open=true]:opacity-100 invisible bg-white/60 flex -translate-x-10 data-[open=true]:translate-x-0 flex-col backdrop-blur-lg z-[999] duration-300">
            <div className="flex items-center">
                <div className="flex items-center gap-2">
                    <Image src="/brand-logo.svg" width={20} height={20} alt="logo" className="rounded-full bg-white" />
                    <HyperText preserveCase className={`text-sm font-medium`}>effortless</HyperText>
                </div>
                <Button onClick={() => setOpen(false)} className="ml-auto md:hidden" variant={"outline"} size={"icon"}>
                    <X />
                </Button>
            </div>
            <nav className={`flex flex-col text-sm justify-center mt-auto gap-2`}>
                {[{
                    name: 'Beranda',
                    href: '/',
                }, {
                    name: 'Layanan',
                    href: '/services',
                }, {
                    name: 'Cerita Klien',
                    href: '/client-stories',
                }, {
                    name: 'Tentang Kami',
                    href: '/about',
                }, {
                    name: 'Tim',
                    href: '/team',
                },].map((item, index) => (
                    <Link href={item.href} key={index} data-active={item.href === pathname} className="data-[active=true]:text-blue-500 hover:bg-white data-[active=true]:bg-white w-fit flex items-center gap-1 rounded-full py-2 px-4 f text-xl font-medium duration-300 hover:text-blue-500">{item.name} {item.ext && <ArrowUpRight size={20} strokeWidth={1.5} />}</Link>
                ))}
            </nav>
            <Button asChild className={`mt-auto w-fit`}>
                <Link href={"/contact"}>
                    Mari Terhubung <MoveRight strokeWidth={1.5} />
                </Link>
            </Button>
        </div>
    </>);
}

export default Header;

