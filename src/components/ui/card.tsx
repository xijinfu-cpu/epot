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
    const titleClasses = cn(sm ? 'text-lg' : 'text-2xl', 'font-medium tracking-tight', titleClassName)
    const subClasses = cn('text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed', subClassName)
    const subLinkClasses = cn('text-neutral-500 dark:text-neutral-400 group-hover/link:text-blue-600 transition-colors duration-300', subClassName)

    return (<div className={cn("p-1.5 group bg-white dark:bg-neutral-900 flex rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 hover:shadow-lg transition-all duration-300", className, reverse ? 'flex-col-reverse' : 'flex-col')}>
        <div className="overflow-hidden rounded-xl">
            {children}
        </div>
        <div className="p-6">
            {link ? <Link href={link} className="hover:text-blue-600 group/link duration-300 relative block">
                <h1 className={titleClasses}>
                    {title}<br /><span className={subLinkClasses}>{sub}</span>
                    {altStyle ? <div className={`bg-white dark:bg-neutral-800 p-1.5 rounded-full absolute ${reverse ? 'top-29' : '-top-16'} right-0 group-hover/link:translate-x-1 duration-300 opacity-0 group-hover/link:opacity-100 shadow-sm`}>
                        <Arrow size={24} strokeWidth={2} className="text-blue-600" />
                    </div> : <Arrow size={28} strokeWidth={1.5} className={`absolute top-1 right-0 ${arrowDirDown ? 'group-hover/link:translate-y-1' : 'group-hover/link:translate-x-1 group-hover/link:-translate-y-1'} duration-300 opacity-0 group-hover/link:opacity-100 text-blue-600`} />}
                </h1>
            </Link> : <h1 className={titleClasses}>
                {title}<br /><span className={subClasses}>{sub}</span>
            </h1>}
        </div>
    </div>);
}

export default Card;

