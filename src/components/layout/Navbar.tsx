"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/#custom-creations", label: "Custom Creations" },
    { href: "/#our-treats", label: "Our Treats" },
    { href: "/#about", label: "About" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-cream px-5 py-4 md:px-9">

            {/* Navbar Row */}
            <div className="relative flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                >
                    <Image
                        src="/images/logo/Bakers Website logo-.png"
                        alt="T's Cakes logo"
                        width={100}
                        height={100}
                        className="h-auto w-20"
                    />
                </Link>

                {/* Desktop Navigation - Centered */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap text-base font-bold text-burgundy hover:underline"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Order Button */}
                <Link
                    href="/order"
                    className="hidden rounded bg-burgundy px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-cream transition-opacity hover:opacity-85 md:block"
                >
                    Order Now
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    className="text-burgundy md:hidden"
                >
                    {menuOpen ? (
                        <X size={26} />
                    ) : (
                        <Menu size={26} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="flex flex-col gap-5 border-t border-burgundy/10 pt-5 md:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-base font-bold text-burgundy"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="/order"
                        onClick={() => setMenuOpen(false)}
                        className="w-fit rounded bg-burgundy px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-cream transition-opacity hover:opacity-85"
                    >
                        Order Now
                    </Link>
                </div>
            )}
        </nav>
    );
}