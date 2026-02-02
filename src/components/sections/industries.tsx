import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface IndustriesProps {
    className?: string
}

const Industries: FunctionComponent<IndustriesProps> = ({ className }) => {
    const industries = [{
        title: "eCommerce",
        link: "/solution/ecommerce",
        image: "/industries-ecommerce.png",
        className: 'md:col-span-2'
    }, {
        title: "Company Profile",
        link: "/solution/saas",
        image: '/industries-company-profile.png',
        invert: true,
        className: 'md:justify-start'
    }, {
        title: "Clinic",
        link: "/solution/data",
        image: '/industries-clinic.png',
        className: 'md:justify-start'
    }, {
        title: "Education",
        link: "/solution/cybersecurity",
        image: '/industries-education.png',
    }, {
        title: "Media",
        link: "/solution/iot",
        image: '/industries-media.jpg',
        className: 'md:justify-start md:items-end'
    }, {
        title: "AI",
        link: "/solution/ai",
        image: '/industries-ai.png',
        invert: true,
        className: 'md:col-span-2'
    },]
    return (<>
        <section className={cn("w-full py-20 px-5", className)}>
            <div className="max-w-6xl mx-auto font-medium">
                <span className="border text-xs font-semibold tracking-wider uppercase py-1.5 px-4 border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-500">Fokus Industri</span>
                <h1 className="md:text-4xl md:leading-tight text-2xl my-4 font-medium tracking-tight">
                    Sektor Industri.<br /><span className="text-neutral-500 font-normal">Keahlian mendalam untuk tantangan spesifik industri Anda.</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
                {
                    industries.map((clientStory, i) => <div key={i} className={cn(`flex flex-col justify-end p-8 rounded-2xl md:min-h-80 font-medium bg-no-repeat bg-center bg-cover bg-neutral-100 dark:bg-neutral-900 relative duration-500 group overflow-hidden shadow-sm hover:shadow-xl`, clientStory.className)} style={(clientStory.image && { backgroundImage: `url('${clientStory.image}')` }) as React.CSSProperties}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                        <h1 className={`text-sm ${clientStory.invert ? 'bg-black/90 text-white backdrop-blur-md' : 'bg-white/90 text-black backdrop-blur-md'} w-fit px-4 py-2 rounded-full font-semibold relative z-10 shadow-sm`}>
                            {clientStory.title}
                        </h1>
                    </div>)
                }
            </div>
        </section>
    </>);
}

export default Industries;

