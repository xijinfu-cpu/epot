import { FileText, ShieldCheck } from "lucide-react";
import { FunctionComponent } from "react";

const ContractPage: FunctionComponent = () => {
    return (
        <main className="min-h-screen bg-[#F0F4F8] dark:bg-neutral-900 pb-20 font-sans">
            <div className="max-w-5xl mx-auto px-5 py-8">
                {/* Header Back Link */}


                <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
                        <FileText className="w-8 h-8" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                        Formulir Kerjasama
                    </h1>

                    {/* Description */}
                    <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
                        Langkah awal kolaborasi profesional kita. Silakan lengkapi detail proyek di bawah ini untuk penerbitan kontrak otomatis.
                    </p>
                </div>

                {/* Form Container */}
                <div className="mt-12 bg-white dark:bg-neutral-800 rounded-3xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                    {/* Secure Banner */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 py-3 px-6 flex items-center justify-center gap-2 border-b border-blue-100 dark:border-blue-900/30">
                        <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                            Secure & Confidential Agreement System
                        </span>
                    </div>

                    {/* Iframe Wrapper */}
                    <div className="w-full relative bg-neutral-50 dark:bg-neutral-900">
                        {/* Replace this src with your actual Google Form Embed URL */}
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdi6dEZg_3zJS-PLy7VuO_SEM5hGuYFVPQwb1WWV133aac7EQ/viewform?embedded=true"
                            className="w-full h-[1900px] border-0"
                            title="Formulir Kerjasama"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ContractPage;
