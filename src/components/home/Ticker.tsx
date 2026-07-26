import { CakeSlice, ChefHat } from "lucide-react";

const tickerItems = [
    {
        text: "Fresh cakes baked daily",
        icon: CakeSlice,
    },
    {
        text: "Custom birthday cakes available",
        icon: ChefHat,
    },
];

const repeatedTickerItems = Array(5).fill(tickerItems).flat();

const Ticker = () => {
    return (
        <section className="my-8 overflow-hidden bg-white py-5">
            <div className="flex w-max animate-ticker gap-15">

                {/* First copy */}
                <div className="flex gap-15">
                    {repeatedTickerItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={`first-${index}`}
                                className="flex items-center gap-15 font-handwriting"
                            >
                                <p className="text-base italic sm:text-[1.2rem]">
                                    {item.text}
                                </p>

                                <Icon
                                    size={28}
                                    strokeWidth={1.5}
                                    className="shrink-0 sm:h-8 sm:w-8"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Second identical copy */}
                <div className="flex gap-15">
                    {repeatedTickerItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={`second-${index}`}
                                className="flex items-center gap-15 font-handwriting"
                            >
                                <p className="text-base italic sm:text-[1.2rem]">
                                    {item.text}
                                </p>

                                <Icon
                                    size={28}
                                    strokeWidth={1.5}
                                    className="shrink-0 sm:h-8 sm:w-8"
                                />
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Ticker;