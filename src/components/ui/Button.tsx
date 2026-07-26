import Link from "next/link";

type ButtonProps = {
    href: string;
    children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
    return (
        <Link
            href={href}
            className="mt-2 inline-block rounded bg-burgundy px-8 py-3.5 text-[11px] font-bold uppercase tracking-[1.5px] text-cream transition-opacity duration-200 hover:opacity-85"
            >
                {children}
        </Link>
    );
}