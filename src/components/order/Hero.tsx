const Hero = () => {
    return (
        <section id="order-hero" className="mt-5 mb-18 flex flex-col items-center justify-center gap-4 px-4 text-center sm:px-0">

            <p className="inline-block rounded-full bg-pink px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[1px]">
                Made to order
            </p>

            <p className="text-[0.75rem] font-medium uppercase tracking-[1px] text-burgundy-muted sm:text-[0.8rem]">
                T&apos;s Cakes · Pretoria
            </p>

            <h1 className="max-w-175 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.15] text-burgundy">
                Let&apos;s create something beautiful together
            </h1>
        </section>
    );
};

export default Hero;