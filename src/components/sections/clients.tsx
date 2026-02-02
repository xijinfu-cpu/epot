import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";

interface ClientsProps {
    className?: string
}

const Clients: FunctionComponent<ClientsProps> = ({ className }) => {
    const clients = [{
        logo: '/20260107_225201.png',
        w: 100,
        h: 64,
    }, {
        logo: '/HWlPSRFI7inNyQbU98gK8WtT7E.png',
        w: 128,
        h: 64,
        className: "max-md:border-r-0"
    }, {
        logo: '/case-unoversion.png',
        w: 64,
        h: 64,
    }, {
        logo: '/20250817_140141.png',
        w: 64,
        h: 64,
        className: 'border-r-0'
    }, {
        logo: '/AENA-Logo.png',
        w: 64,
        h: 64,
        className: 'md:border-b-0'
    }, {
        logo: '/logo-vio-2.png',
        w: 128,
        h: 64,
        className: 'md:border-b-0 max-md:border-r-0'
    }, {
        logo: '/XEI-Logo-Transparent-square.png',
        w: 64,
        h: 64,
    },]
    return (<>
        <section className={cn("w-full pb-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto">
                <div className="relative grid grid-cols-2 md:grid-cols-4 mt-8 md:mt-12 divide-x divide-y divide-dashed divide-neutral-200 dark:divide-neutral-800 border-b border-r border-dashed border-neutral-200 dark:border-neutral-800">
                    <div className="border-t border-l border-dashed border-neutral-200 dark:border-neutral-800 absolute w-full h-full pointer-events-none" />
                    {
                        clients.map((client, i) => <div key={i} className={cn("h-32 md:h-40 relative flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500", client.className)}>
                            <Image src={client.logo} width={client.w} height={client.h} unoptimized alt="logo" className={cn("object-contain max-h-16 w-auto", client.className)} />
                        </div>)
                    }
                    <div className={cn("h-32 md:h-40 relative flex items-center justify-center opacity-40 text-sm font-medium text-neutral-500")}>
                        dan mitra lainnya...
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Clients;
