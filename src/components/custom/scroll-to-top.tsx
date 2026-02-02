'use client'

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={cn(
                "fixed group right-4 md:right-6 bottom-6 z-40 p-3 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            )}
        >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2} />
        </button>
    );
}
