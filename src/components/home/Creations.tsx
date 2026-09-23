"use client";

import { useState } from "react";
import Image from "next/image";

const cakeImages = [
    "/images/cakes/wedding-cake-3.jpeg",
    "/images/cakes/birthday-cake-1.jpeg",
    "/images/cakes/wedding-cake-2.jpeg",
    "/images/cakes/birthday-cake-2.jpeg",
    "/images/cakes/graduation-cake-2.jpeg",
    "/images/cakes/birthday-cake-3.jpeg",
    "/images/cakes/wedding-cake-1.jpeg",
    "/images/cakes/birthday-cake-5.jpeg",
    "/images/cakes/graduation-cake.jpeg",
    "/images/cakes/birthday-cake-6.jpeg",
    "/images/cakes/Church-cake.jpeg",
    "/images/cakes/birthday-cake-7.jpeg",
    "/images/cakes/birthday-cake-8.jpeg",
];

const cupcakeImages = [
    "/images/cakes/cupcakes-3.jpeg",
    "/images/cakes/cupcakes-1.jpeg",
    "/images/cakes/cupcakes-2.jpeg",
    "/images/cakes/cupcakes-4.jpeg",
    "/images/cakes/cupcakes-5.jpeg",
    "/images/cakes/cupcakes-6.jpeg",
    "/images/cakes/cupcakes-7.jpeg",
];


const Creations = () => {
    const [currentCake, setCurrentCake] = useState(0);
    const [currentCupcake, setCurrentCupcake] = useState(0);

    return (
        <section
            id="custom-creations"
            className="scroll-mt-24 flex flex-col items-center py-13 text-center"
        >
            <p className="mb-4 text-[0.8rem] font-medium uppercase tracking-[1px] text-burgundy-muted">
                CUSTOM CREATIONS
            </p>

            <h2 className="section-heading mb-4">
                Made for your moments
            </h2>

            <p className="section-description">
                Beautifully baked and personalised for every occasion.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-6">

                {/* Custom Cakes */}
                <div className="flex flex-col items-center">
                    <div
                        className="group relative h-75 w-65 cursor-pointer overflow-hidden rounded-[20px]"
                        onClick={() =>
                            setCurrentCake(
                                (currentCake + 1) % cakeImages.length
                            )
                        }
                    >
                        <Image
                            src={cakeImages[currentCake]}
                            alt="Custom cake"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white transition-opacity duration-300 group-hover:opacity-0">
                            Click to view more
                        </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl text-burgundy">
                        Custom Cakes
                    </h3>
                </div>

                <span className="hidden text-xl text-burgundy-muted md:inline">
                    ♡
                </span>

                {/* Custom Cupcakes */}
                <div className="flex flex-col items-center">
                    <div
                        className="group relative h-75 w-65 cursor-pointer overflow-hidden rounded-[20px]"
                        onClick={() =>
                            setCurrentCupcake(
                                (currentCupcake + 1) % cupcakeImages.length
                            )
                        }
                    >
                        <Image
                            src={cupcakeImages[currentCupcake]}
                            alt="Custom cupcakes"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white transition-opacity duration-300 group-hover:opacity-0">
                            Click to view more
                        </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl text-burgundy">
                        Custom Cupcakes
                    </h3>
                </div>

                <span className="hidden text-xl text-burgundy-muted md:inline">
                    ♡
                </span>

            </div>
        </section>
    );
};

export default Creations;