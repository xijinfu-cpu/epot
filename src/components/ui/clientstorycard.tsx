import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { Button } from "./button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface ClientStoryCardProps {
    className?: string,
    link: string,
    title: string,
    bgimg: string
}

const ClientStoryCard: FunctionComponent<ClientStoryCardProps> = ({ className, link, title, bgimg }) => {
    return (<div className={cn("bg-white dark:bg-neutral-900 p-6 relative group rounded-2xl h-100 flex flex-col bg-no-repeat bg-cover overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 dark:border-neutral-800", className)} style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <h1 className="text-xl md:text-2xl font-semibold my-2 mt-auto max-w-sm relative z-10 text-white leading-tight">
            {title}
        </h1>
        <div className="bg-black/20 backdrop-blur-md rounded-xl flex flex-col items-center justify-center absolute inset-0 w-full h-full invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 z-20">
            <Button asChild className="text-sm bg-white text-black hover:bg-neutral-200 transition-colors border-none" variant={"default"}>
                <Link href={link}>
                    Lihat Studi Kasus <MoveRight className="ml-2 w-4 h-4" strokeWidth={2} />
                </Link>
            </Button>
        </div>
    </div>);
}

export default ClientStoryCard;
