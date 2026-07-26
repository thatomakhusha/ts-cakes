import Button from "@/components/ui/Button";

const Hero = () => {
    return (
        <section className="mt-5 mb-18 flex flex-col items-center justify-center gap-4 px-4 text-center sm:px-0">

            <p className="inline-block rounded-full bg-pink px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[1px]">
                Freshly Baked Daily
            </p>

            <p className="text-[0.75rem] font-medium uppercase tracking-[1px] text-burgundy-muted sm:text-[0.8rem]">
                Custom cakes · Pretoria
            </p>

            <h1 className="max-w-175 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.15] text-burgundy">
                Custom cakes & handmade treats
            </h1>

            <p className="max-w-115 text-sm leading-relaxed text-burgundy-soft sm:text-base">
                Beautiful, personalised cakes and freshly baked treats for every occasion
            </p>

            <Button href="/order">
                Order a custom cake
            </Button>

        </section>
    );
};

export default Hero;