import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { Check, X, } from "lucide-react";
import Card from "@/components/ui/card";
interface AuditProps {
    className?: string
}

const Audit: FunctionComponent<AuditProps> = ({ className }) => {
    const services = [{
        name: 'Audit Teknologi',
        sub: 'Review kualitas kode, keamanan, kinerja, dan infrastruktur',
        key: 'tech',
        // link: '/service/tech-audit'
    }, {
        name: 'Audit UX',
        sub: 'Evaluasi kegunaan, aksesibilitas, dan hambatan perjalanan pengguna',
        key: 'ux',
        // link: '/service/ux-audit'
    }, {
        name: 'Audit Biaya',
        sub: 'Optimalkan infrastruktur, tools, pengeluaran dev dan lainnya',
        key: 'cost',
        // link: '/service/cost-audit'
    }]
    return (
        <section className={cn("pt-20 md:pt-40 pb-20 max-sm:px-5", className)} id="audit">
            <div className="max-w-5xl mx-auto pb-10 font-medium relative">
                <h1 className="text-2xl md:text-4xl md:leading-12 my-2">
                    Audit, <br /><span className="text-neutral-400">Yang membuat Anda memahami, perbaikannya.</span>
                </h1>
                <p className="md:text-xl font-normal my-5 text-neutral-600 relative max-w-2xl">
                    Baik Anda mewarisi kode, bersiap untuk scale, atau ingin mengoptimalkan biaya, audit kami memberikan wawasan yang dapat ditindaklanjuti — sehingga Anda dapat bergerak lebih cepat, lebih aman, dan lebih cerdas.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-medium w-full max-w-6xl mx-auto px-5 md:px-0">
                {
                    services.map((service, i) => <Card key={i} sm altStyle reverse={i !== 1} title={service.name} sub={service.sub} className="min-h-96 w-full">
                        <div className="w-full duration-300 flex flex-col items-start justify-center rounded-xl p-5 bg-background min-h-64 md:min-h-72">
                            {
                                service.key === "tech" && <>
                                    <div className="grid grid-cols-2 gap-10">
                                        {[{ label: "Scalability Score", value: 89, }, { label: "Code Score", value: 45, }, { label: "CI/CD Score", value: 68, }, { label: "Pen Score", value: 97, }].map((item, i) => <div className="flex items-center justify-center flex-col" key={i}>
                                            <div className={`border-4 mb-2 flex items-center justify-center size-16 rounded-full p-3 ${item.value > 50 && item.value < 75 && 'border-amber-500 bg-amber-100 text-amber-500'} ${item.value < 50 && item.value < 75 && 'border-red-500 bg-red-100 text-red-500'} ${item.value > 50 && item.value > 75 && 'border-green-500 bg-green-100 text-green-500'}`}>
                                                {item.value}
                                            </div>
                                            <span className="text-sm">{item.label}</span>
                                        </div>)}
                                    </div>
                                </>
                            }
                            {
                                service.key === "ux" && <>
                                    <div className="flex flex-col gap-4">
                                        {[{ label: "Clear Navigation", value: true, }, { label: "Mobile Usablity", value: false, }, { label: "Fast Page Load", value: true, }].map((item, i) => <div className={`flex items-center justify-center gap-1 w-max ${item.value ? 'text-green-600' : 'text-red-500'}`} key={i}>
                                            {item.value ? <Check /> : <X />} {item.label}
                                        </div>)}
                                    </div>
                                </>
                            }
                            {
                                service.key === "cost" && <>
                                    <div className="flex flex-col gap-4">
                                        {[{ label: "Compute Cost: Stable", value: true, }, { label: "Dev Tool Cost: Unaccounted", value: false, }, { label: "Bandwidth Cost: Not-optimised", value: false, }].map((item, i) => <div className={`flex items-center justify-center gap-1 w-max ${item.value ? 'text-green-600' : 'text-red-500'}`} key={i}>
                                            {item.value ? <Check /> : <X />} {item.label}
                                        </div>)}
                                    </div>
                                </>
                            }
                        </div>
                    </Card>)
                }
            </div>
        </section>
    );
}

export default Audit;

