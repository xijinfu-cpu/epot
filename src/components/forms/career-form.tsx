'use client';

import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface FieldConfig {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
}

const fields: FieldConfig[] = [
    { label: "Nama Lengkap", name: "name", placeholder: "Tuliskan nama lengkap Anda", required: true },
    { label: "Email", name: "email", type: "email", placeholder: "nama@domain.com", required: true },
    { label: "Nomor WhatsApp", name: "phone", placeholder: "+62 ...", required: true },
    { label: "Peran yang Diminati", name: "role", placeholder: "Contoh: Frontend Engineer / Product Designer", required: true },
    { label: "Tautan Portofolio / CV", name: "portfolio", placeholder: "URL Behance, GitHub, atau CV", required: true },
];

export function ContactForm({ className }: { className?: string }) {
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        const formElement = event.currentTarget;
        const formData = new FormData(formElement);

        try {
            const response = await fetch("/api/career/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            });

            const text = await response.text();
            let success = response.ok;
            let errorMessage: string | null = null;
            if (text) {
                try {
                    const parsed = JSON.parse(text);
                    if (typeof parsed.success === "boolean") {
                        success = parsed.success;
                    }
                    if (parsed.error) {
                        errorMessage = parsed.error;
                    }
                } catch (error) {
                    console.warn("Gagal membaca respons JSON:", error, text);
                }
            }

            if (!success) {
                throw new Error(errorMessage ?? "Gagal menyimpan lamaran");
            }

            formElement.reset();
            setMessage("");
            setSubmitted(true);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Terjadi kesalahan saat mengirim data. Silakan coba lagi.";
            setError(message);
            console.error("Career form error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className={cn("space-y-5", className)} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map((field) => (
                    <div key={field.name} className="space-y-2">
                        <label htmlFor={field.name} className="text-sm font-medium text-muted-foreground">{field.label}</label>
                        <input
                            id={field.name}
                            name={field.name}
                            type={field.type ?? "text"}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="w-full rounded-2xl border border-border bg-muted/50 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        />
                    </div>
                ))}
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Cerita singkat atau preferensi</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Bagikan pengalaman, ketersediaan waktu, atau alasan ingin bergabung."
                    rows={5}
                    className="w-full rounded-2xl border border-border bg-muted/50 px-4 py-3 text-sm resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
            </div>
            <Button type="submit" size="lg" disabled={loading} className="w-full md:w-auto rounded-full">
                {loading ? "Mengirim..." : "Kirim Aplikasi"}
            </Button>
            {error && <p className="text-sm text-red-500">{error}</p>}
            {submitted && (
                <div className="text-sm text-primary font-medium">
                    Terima kasih! Data Anda telah kami terima. Tim Effortless akan menghubungi melalui email atau WhatsApp jika ada kecocokan.
                </div>
            )}
        </form>
    );
}

