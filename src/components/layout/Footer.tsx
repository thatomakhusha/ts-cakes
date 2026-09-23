import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-10 bg-burgundy px-5 pt-12 sm:px-10 sm:pt-15">

            {/* Footer Top */}
            <div className="mx-auto grid w-full max-w-275 grid-cols-2 gap-x-8 gap-y-12 border-b border-cream/20 pb-12 md:grid-cols-[2fr_1fr_1fr_1fr]">

                {/* Brand */}
                <div className="col-span-2 flex flex-col gap-3.5 md:col-span-1">
                    <Image
                        src="/images/logo/Bakers Website logo-.png"
                        alt="T's Cakes"
                        width={80}
                        height={80}
                        className="w-20 opacity-90 brightness-0 invert"
                    />

                    <p className="text-sm leading-[1.7] text-cream/75">
                        Custom cakes & handmade treats,
                        <br />
                        baked fresh in Pretoria
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-2">
                        <a
                            href="https://www.instagram.com/ts_donuts"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/15 text-cream transition-colors duration-200 hover:bg-cream/25"
                        >
                            <FaInstagram size={17} />
                        </a>

                        <a
                            href="https://wa.me/27768881684"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/15 text-cream transition-colors duration-200 hover:bg-cream/25"
                        >
                            <FaWhatsapp size={17} />
                        </a>
                    </div>
                </div>

                {/* Shop */}
                <div className="flex flex-col gap-2.5">
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[1.5px] text-cream">
                        Shop
                    </p>

                    <Link
                        href="/#custom-creations"
                        className="text-sm text-cream/70 transition-colors duration-200 hover:text-cream"
                    >
                        Custom Creations
                    </Link>

                    <Link
                        href="/#our-treats"
                        className="text-sm text-cream/70 transition-colors duration-200 hover:text-cream"
                    >
                        Our Treats
                    </Link>
                </div>

                {/* Orders */}
                <div className="flex flex-col gap-2.5">
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[1.5px] text-cream">
                        Orders
                    </p>

                    <Link
                        href="/order#how-it-works"
                        className="text-sm text-cream/70 transition-colors duration-200 hover:text-cream"
                    >
                        How It Works
                    </Link>

                    <Link
                        href="/order"
                        className="text-sm text-cream/70 transition-colors duration-200 hover:text-cream"
                    >
                        Order Now
                    </Link>
                    <a
                        href="https://wa.me/27768881684"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cream/70 transition-colors duration-200 hover:text-cream"
                    >
                        WhatsApp Us
                    </a>
                </div>

                {/* Get in Touch */}
                <div className="col-span-2 flex flex-col gap-2.5 md:col-span-1">
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[1.5px] text-cream">
                        Get in Touch
                    </p>

                    <a
                        href="tel:+27768881684"
                        className="text-sm text-cream/70 transition-colors duration-200 hover:text-cream"
                    >
                        +27 76 888 1684
                    </a>

                    <p className="text-sm text-cream/70">
                        Pretoria, South Africa
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mx-auto flex w-full max-w-275 flex-col items-center justify-between gap-2 py-5 text-center text-[11px] text-cream/45 md:flex-row md:text-left">
                <p>
                    © 2026 T&apos;s Cakes · All rights reserved
                </p>

                <p>
                    Built by Thato Makhusha
                </p>
            </div>

        </footer>
    );
};

export default Footer;