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
    "Bisa bantu hitung estimasi biaya?",
    "Berapa lama buat website custom?",
    "Apa saja layanan AI kalian?",
];

const botReplies = {
    pricing: "Untuk estimasi biaya, kami biasanya melakukan discovery singkat terlebih dahulu. Ceritakan jenis proyek atau fitur utama yang dibutuhkan, nanti kami siapkan kisaran anggaran dan timeline awal.",
    timeline: "Sebagian besar proyek website lengkap selesai dalam 4-8 minggu tergantung kompleksitas integrasi. Sprint awal fokus pada desain, kemudian development dan implementasi AI/otomasi.",
    services: "Kami membantu branding, desain produk digital, pengembangan web & aplikasi, serta eksperimen AI. Semua layanan kami dirancang end-to-end dari riset hingga deployment.",
    default: "Saya siap bantu menjawab pertanyaan seputar layanan Effortless. Ceritakan kebutuhanmu, dan kami arahkan langkah berikutnya."
}

const getBotResponse = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("harga") || lower.includes("biaya") || lower.includes("budget")) {
        return botReplies.pricing;
    }
    if (lower.includes("lama") || lower.includes("timeline") || lower.includes("waktu")) {
        return botReplies.timeline;
    }
    if (lower.includes("layanan") || lower.includes("apa saja") || lower.includes("services") || lower.includes("ai")) {
        return botReplies.services;
    }
    return botReplies.default;
}

const formatTime = (timestamp: number) => new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const [messages, setMessages] = useState<Message[]>(() => [{
        id: "welcome",
        from: "bot",
        text: "Hai! Aku asisten AI Effortless. Tanyakan apa saja tentang layanan, timeline, atau kolaborasi.",
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

