import Image from "next/image";
import Button from "@/components/ui/Button";

const About = () => {
    return (
        <section id="about" className="scroll-mt-40 pb-15">
            <div className="mx-auto grid w-full max-w-275 grid-cols-1 items-center gap-15 md:grid-cols-2">

                {/* Image */}
                <div className="relative mx-auto aspect-4/5 w-full max-w-87.5 overflow-hidden rounded-2xl md:mx-0">
                    <Image
                        src="/images/logo/Bakers Website logo-.png"
                        alt="Tshwari Modise, baker behind Ts Cakes in Pretoria"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-4 text-left">
                    <span className="rounded-full bg-pink px-3.5 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-burgundy">
                        Our Story
                    </span>

                    <h2 className="font-display text-[2.2rem] font-medium leading-[1.2] text-burgundy">
                        Made with love,
                        <br />
                        baked with passion
                    </h2>

                    <p className="text-[0.95rem] leading-[1.8] text-burgundy-soft">
                        Hi, I'm Tshwari Modise — also known as Tshwaraganang — and I'm the baker behind Ts Cakes. Based in Pretoria, I specialise in custom cakes, cupcakes and freshly baked treats for every occasion. Every order is made from scratch with the finest ingredients and a whole lot of love.
                    </p>

                    <p className="text-[0.95rem] leading-[1.8] text-burgundy-soft">
                        Whether it's a birthday cake, a wedding masterpiece or a box of scones, I put the same care and attention into every single order. From Ts Cakes Bakery in Pretoria, every creation is made to bring something special to your celebration.
                    </p>

                    <Button href="/order">
                        Order with us
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default About;