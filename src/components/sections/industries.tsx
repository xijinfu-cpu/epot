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
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto font-medium">
                <span className="border text-sm py-1 px-3 border-neutral-300 rounded-2xl">Industri</span>
                <h1 className="md:text-4xl md:leading-12 text-2xl my-2">
                    Segmen yang Kami Layani, <br /><span className="text-neutral-400">Untuk Brand yang Bergerak Cepat — dan Berpikir ke Depan</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 max-w-6xl mx-5 md:mx-auto">
                {
                    industries.map((clientStory, i) => <div key={i} className={cn(`flex flex-col justify-end p-8 rounded-xl md:min-h-96 font-medium bg-no-repeat bg-center bg-cover bg-white relative duration-300 group`, clientStory.className)} style={(clientStory.image && { backgroundImage: `url('${clientStory.image}')` }) as React.CSSProperties}>
                        <h1 className={`text-sm ${clientStory.invert ? 'bg-black text-white' : 'bg-white text-black'} w-fit px-3 py-1.5 rounded-2xl font-medium`}>
                            {clientStory.title}
                        </h1>
                        {/* <div className="bg-transparent backdrop-blur-md rounded-xl flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300">
                            <Button asChild className="text-sm text-primary" variant={"outline"}>
                                <Link href={clientStory.link}>
                                    Learn more <MoveRight strokeWidth={1.5} />
                                </Link>
                            </Button>
                        </div> */}
                    </div>)
                }
            </div>
        </section>
    </>);
}

export default Industries;

