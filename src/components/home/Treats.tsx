"use client";

import { useState } from "react";

const treatCategories = [
    {
        id: "scones",
        label: "Scones",
    },
    {
        id: "biscuits-tarts",
        label: "Biscuits & Tarts",
    },
    {
        id: "treat-mixes",
        label: "Treat Mixes",
    },
    {
        id: "muffins",
        label: "Muffins",
    },
];

const treats = {
    scones: [
        {
            name: "Plain Scones",
            description: "Classic, buttery, and freshly baked.",
            image: "/images/treats/plain-scones.jpeg",
        },
        {
            name: "Custard Scones",
            description: "Soft scones filled with custard.",
            image: "/images/treats/custard-scones.jpeg",
        },
        {
            name: "Coconut Scones",
            description: "Lightly sweetened with coconut.",
            image: "/images/treats/coconut-scones.jpeg",
        },
        {
            name: "Blueberry Scones",
            description: "Packed with fresh blueberries.",
            image: "/images/treats/blueberry-scones.jpeg",
        },
    ],

    "biscuits-tarts": [
        {
            name: "Mixed Biscuits",
            description: "A variety of freshly baked biscuits.",
            image: "/images/treats/mixed-biscuits.jpeg",
        },
        {
            name: "Jam Tarts",
            description: "Sweet pastry filled with jam.",
            image: "/images/treats/jam-tarts.jpeg",
        },
    ],

    "treat-mixes": [
        {
            name: "Scones & Biscuits",
            description: "A delicious mix of freshly baked scones and biscuits.",
            image: "/images/treats/scones-biscuit-box.jpeg",
        },
    ],

    muffins: [
        {
            name: "Muffin Box",
            description: "A delicious selection of freshly baked muffins.",
            image: "/images/treats/muffin-box.jpeg",
        },
    ],
};

const Treats = () => {
    const [activeTab, setActiveTab] = useState("scones");

    const activeTreats =
        treats[activeTab as keyof typeof treats];

    return (
        <section
            id="our-treats"
            className="scroll-mt-24 flex flex-col items-center py-13 text-center"
        >
            <p className="mb-4 text-[0.8rem] font-medium uppercase tracking-[1px] text-burgundy-muted">
                OUR TREATS
            </p>

            <h2 className="section-heading mb-4">
                Treats to satisfy your palate
            </h2>

            {/* Tabs */}
            <div className="mt-8 flex max-w-full gap-2 overflow-x-auto rounded-full px-1 pb-1">
                {treatCategories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition-colors duration-300 md:px-7 ${
                            activeTab === category.id
                                ? "bg-burgundy text-cream"
                                : "text-burgundy"
                        }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Treat Cards */}
            <div className="mt-8 flex w-full justify-center gap-3 overflow-x-auto px-1 pb-2">
                {activeTreats.map((treat) => (
                    <div
                        key={treat.name}
                        className="flex w-65 shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
                    >
                        <div
                            className="h-50 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${treat.image})`,
                            }}
                        />

                        <div className="p-5 text-left">
                            <h3 className="mb-1 font-display font-bold text-burgundy">
                                {treat.name}
                            </h3>

                            <p className="text-sm text-burgundy-soft">
                                {treat.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Treats;