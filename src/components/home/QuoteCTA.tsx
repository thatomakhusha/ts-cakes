import Link from "next/link";

const QuoteCTA = () => {
    return (
        <section className="px-10 pb-15">
            <div className="mx-auto flex w-full max-w-200 flex-col items-center justify-between gap-6 rounded-2xl bg-burgundy p-8 text-center md:flex-row md:gap-10 md:p-12">
                
                {/* Text */}
                <div className="flex flex-1 flex-col gap-3">
                    <h2 className="font-display text-[2.2rem] font-medium leading-[1.2] text-cream">
                        Seen something you love?
                        <br />
                        Let's make it happen.
                    </h2>

                    <p className="text-sm leading-[1.6] text-cream/75">
                        Every cake and treat is made to order — just for you.
                    </p>
                </div>

                {/* Button */}
                <Link
                    href="/order"
                    className="shrink-0 rounded bg-cream px-7 py-3.5 text-[11px] font-bold uppercase tracking-[1.5px] text-burgundy transition-opacity duration-200 hover:opacity-85"
                >
                    Request a quote →
                </Link>
            </div>
        </section>
    );
};

export default QuoteCTA;