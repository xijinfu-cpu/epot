'use client';

import { useEffect, useRef, useState } from "react";
import { MessageCircle, SendHorizontal, Sparkles, X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Author = "user" | "bot";

interface Message {
    id: string;
    from: Author;
    text: string;
    timestamp: number;
}

const suggestions = [
    "Layanan apa yang Anda tawarkan?",
    "Apakah Anda bekerja dengan startup?",
    "Berapa lama waktu proyek?",
    "Siapa yang memiliki IP setelah pengiriman?",
    "Apakah Anda bekerja secara remote?",
    "Apakah Anda menandatangani NDA?",
];

const botReplies = {
    services: "Kami menangani strategi brand, desain UI/UX, pengembangan web/app, sistem desain, hingga solusi AI (chatbot, otomasi, dan analitik). Semua bisa disesuaikan kebutuhan bisnis.",
    startup: "Ya. Banyak klien kami adalah startup tahap awal hingga growth. Kami membantu merapikan produk, alur, dan aset brand supaya siap scale.",
    timeline: "Rata-rata proyek utama selesai 4-8 minggu tergantung scope. Kami biasa memulai dengan kickoff dan sprint desain, lalu development serta QA.",
    ip: "Hak kekayaan intelektual (IP) menjadi milik klien setelah serah terima dan pelunasan sesuai perjanjian.",
    remote: "Ya, kami bekerja remote dan rutin sinkron via call, workspace kolaboratif, serta update mingguan.",
    nda: "Bisa. Kami terbiasa menandatangani NDA sebelum menerima detail sensitif.",
    default: "Saya siap bantu menjawab pertanyaanmu. Pilih salah satu pertanyaan di atas atau ketik hal lain yang ingin kamu tahu."
};

const getBotResponse = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("layanan") || lower.includes("tawarkan")) {
        return botReplies.services;
    }
    if (lower.includes("startup")) {
        return botReplies.startup;
    }
    if (lower.includes("lama") || lower.includes("timeline") || lower.includes("waktu") || lower.includes("durasi")) {
        return botReplies.timeline;
    }
    if (lower.includes("ip") || lower.includes("kekayaan") || lower.includes("hak") || lower.includes("kepemilikan")) {
        return botReplies.ip;
    }
    if (lower.includes("remote") || lower.includes("jarak jauh") || lower.includes("daring")) {
        return botReplies.remote;
    }
    if (lower.includes("nda") || lower.includes("non disclosure") || lower.includes("kerahasiaan")) {
        return botReplies.nda;
    }
    return botReplies.default;
};

const formatTime = (timestamp: number) => new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const [messages, setMessages] = useState<Message[]>(() => [{
        id: "welcome",
        from: "bot",
        text: "Hai! Aku asisten AI Effortless. Pilih pertanyaan di bawah atau ketik langsung untuk tahu lebih lanjut.",
        timestamp: Date.now(),
    }]);
    const endRef = useRef<HTMLDivElement | null>(null);

    const canSend = input.trim().length > 0 && !isThinking;

    useEffect(() => {
        if (!open) return;
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, open, isThinking]);

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;
        const userMessage: Message = {
            id: crypto.randomUUID(),
            from: "user",
            text: trimmed,
            timestamp: Date.now(),
        };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsThinking(true);
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: crypto.randomUUID(),
                from: "bot",
                text: getBotResponse(trimmed),
                timestamp: Date.now(),
            }]);
            setIsThinking(false);
        }, 800);
    };

    const handleSuggestion = (text: string) => {
        setInput(text);
        if (!open) setOpen(true);
    };

    return (
        <>
            <div className="fixed z-[999] bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col items-end gap-3">
                {open && (
                    <div className="w-[min(90vw,22rem)] sm:w-96 rounded-2xl shadow-2xl border border-border bg-white dark:bg-neutral-900 flex flex-col overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <Sparkles className="size-4" />
                                Effortless Chat Bot
                            </div>
                            <Button size="icon" variant="ghost" className="text-primary-foreground" onClick={() => setOpen(false)}>
                                <X className="size-4" />
                            </Button>
                        </div>
                        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 bg-muted/40">
                            {messages.map(message => (
                                <div key={message.id} className={cn("flex flex-col text-sm gap-1", message.from === "user" ? "items-end" : "items-start")}>
                                    <div className={cn(
                                        "rounded-2xl px-4 py-2 max-w-[85%]",
                                        message.from === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-white dark:bg-neutral-800 text-foreground rounded-bl-sm border border-border"
                                    )}>
                                        {message.text}
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wide text-muted-foreground">{formatTime(message.timestamp)}</span>
                                </div>
                            ))}
                            {isThinking && (
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                                    </span>
                                    AI sedang menulis jawaban...
                                </div>
                            )}
                            <div ref={endRef} />
                        </div>
                        <div className="px-4 py-3 space-y-2 border-t border-border bg-white dark:bg-neutral-900">
                            <div className="flex flex-wrap gap-2">
                                {suggestions.map((s, i) => (
                                    <button key={i} onClick={() => handleSuggestion(s)} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                                        {s}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-end gap-2">
                                <textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Tulis pertanyaanmu..."
                                    rows={2}
                                    className="flex-1 resize-none rounded-xl border border-border bg-muted/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey) {
                                            e.preventDefault();
                                            if (canSend) handleSend();
                                        }
                                    }}
                                />
                                <Button onClick={handleSend} disabled={!canSend} className="rounded-xl h-10 px-3">
                                    <SendHorizontal className="size-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
                <Button
                    size="lg"
                    onClick={() => setOpen(prev => !prev)}
                    className="rounded-full shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 px-4 gap-2"
                >
                    <MessageCircle className="size-5" />
                    <span className="text-sm font-semibold">{open ? "Tutup Chat" : "Chat Bot"}</span>
                </Button>
            </div>
        </>
    );
}

