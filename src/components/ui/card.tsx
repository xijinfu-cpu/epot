import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

interface CardProps {
    children: React.ReactNode | React.ReactNode[]
    className?: string
    title: string
    link?: string
    sub?: string
    titleClassName?: string
    subClassName?: string
    sm?: boolean
    altStyle?: boolean
    arrowDirDown?: boolean
    reverse?: boolean
}

const Card: FunctionComponent<CardProps> = ({
    children,
    className,
    title,
    link,
    sub,
    titleClassName,
    subClassName,
    sm,
    altStyle,
    arrowDirDown,
    reverse = false
}) => {
    const Arrow = arrowDirDown ? ArrowDown : ArrowUpRight
    const titleClasses = cn(sm ? 'text-lg' : 'text-2xl', titleClassName)
    const subClasses = cn('text-neutral-400', subClassName)
    const subLinkClasses = cn('text-neutral-400 group-hover/link:text-blue-300 duration-400', subClassName)
    return (<><div className={cn("p-1 group bg-white flex rounded-xl", className, reverse ? 'flex-col-reverse' : 'flex-col')}>
        <div>
            {children}
        </div>
        <div className="p-5">
            {link ? <Link href={link} className="hover:text-blue-500 group/link duration-300 relative">
                <h1 className={titleClasses}>
                    {title}<br /><span className={subLinkClasses}>{sub}</span>
                    {altStyle ? <div className={`bg-white p-1 rounded-2xl absolute ${reverse ? 'top-29' : '-top-17'} right-0 group-hover/link:translate-x-2 duration-300 opacity-0 group-hover/link:opacity-100`}>
                        <Arrow size={32} strokeWidth={1.25} className="text-blue-500" />
                    </div> : <Arrow size={32} strokeWidth={1} className={`absolute top-5 right-5 ${arrowDirDown ? 'group-hover/link:translate-y-1' : 'group-hover/link:translate-x-1 group-hover/link:-translate-y-1'} duration-300 opacity-0 group-hover/link:opacity-100`} />}
                </h1>
            </Link> : <h1 className={titleClasses}>
                {title}<br /><span className={subClasses}>{sub}</span>
            </h1>}
        </div>
    </div></>);
}

export default Card;

