"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const PriceCTA = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="flex justify-center px-4 py-10 text-center">
                <div className="flex w-full max-w-3xl flex-col items-center gap-4 rounded-2xl bg-pink/30 px-6 py-10">
                    <p className="text-[0.75rem] font-medium uppercase tracking-[1px] text-burgundy-muted">
                        PRICING
                    </p>

                    <h2 className="section-heading">
                        Looking for prices?
                    </h2>

                    <p className="max-w-lg text-sm leading-7 text-burgundy-soft">
                        View our full selection and pricing in our price pamphlet.
                    </p>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-2 rounded bg-burgundy px-6 py-3 text-xs font-bold uppercase tracking-widest text-cream transition-opacity hover:opacity-85"
                    >
                        View Prices
                    </button>
                </div>
            </section>

            {/* Pamphlet Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative max-h-[95vh] max-w-4xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close price pamphlet"
                            className="absolute -right-2 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-burgundy shadow-md transition-opacity hover:opacity-85"
                        >
                            <X size={20} />
                        </button>

                        <Image
                            src="/images/pamphlet/pamphlet.jpeg"
                            alt="T's Cakes price pamphlet"
                            width={1200}
                            height={1600}
                            className="max-h-[90vh] w-auto rounded-lg object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default PriceCTA;