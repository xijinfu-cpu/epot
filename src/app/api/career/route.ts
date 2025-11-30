import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const timestamp = new Date().toISOString();
        const entry = [
            "------------------------------",
            `Tanggal      : ${timestamp}`,
            `Nama         : ${body.name ?? "-"}`,
            `Email        : ${body.email ?? "-"}`,
            `WhatsApp     : ${body.phone ?? "-"}`,
            `Peran        : ${body.role ?? "-"}`,
            `Portofolio   : ${body.portfolio ?? "-"}`,
            `Pesan        : ${body.message ?? "-"}`,
            "",
        ].join("\n");

        const directory = path.join(process.cwd(), "data");
        const filePath = path.join(directory, "career-submissions.txt");

        if (!existsSync(directory)) {
            await mkdir(directory, { recursive: true });
        }

        await appendFile(filePath, entry, { encoding: "utf8" });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Gagal menyimpan lamaran:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}

