import { Metadata } from "next";
import { readFile } from "fs/promises";
import path from "path";

interface Submission {
  [key: string]: string;
}

export const metadata: Metadata = {
  title: "Riwayat Aplikasi Karier",
  description: "Daftar lamaran yang tersimpan pada career-submissions.txt di server lokal.",
};

async function loadSubmissions(): Promise<Submission[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "career-submissions.txt");
    const raw = await readFile(filePath, { encoding: "utf8" });

    return raw
      .split("------------------------------")
      .map((block) => block.trim())
      .filter(Boolean)
      .map((block) => {
        const record: Record<string, string> = {};
        block.split("\n").forEach((line) => {
          const [label, ...rest] = line.split(":");
          const value = rest.join(":");
          if (label && value) {
            record[label.trim()] = value.trim();
          }
        });
        return record;
      })
      .reverse();
  } catch (error) {
    console.error("Gagal membaca career-submissions:", error);
    return [];
  }
}

export default async function CareerSubmissionsPage() {
  const submissions = await loadSubmissions();

  return (
    <section className="safe-container py-16 md:py-24">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="text-center space-y-3">
          <span className="inline-flex px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide text-primary border-primary/20">
            Riwayat Aplikasi
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold">Semua Data Karier</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Menampilkan isi file <code>career-submissions.txt</code> dari server lokal.
          </p>
        </header>
        {submissions.length === 0 ? (
          <p className="text-muted-foreground text-center">Belum ada data tersimpan.</p>
        ) : (
          <div className="space-y-5">
            {submissions.map((entry, index) => (
              <article key={index} className="border border-border bg-white rounded-2xl p-5 shadow-sm">
                {Object.entries(entry).map(([key, value]) => (
                  <p key={key} className="text-sm">
                    <span className="font-semibold">{key}</span>: {value}
                  </p>
                ))}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

