const processSteps = [
    {
        number: 1,
        title: "Order Enquiry",
        description: "Send us the following details:",
        bullets: [
            "Event date",
            "Number of servings",
            "Preferred cake flavour(s)",
            "Theme and colour scheme",
            "Inspiration/reference images, if available",
            "Collection or delivery preference",
        ],
    },
    {
        number: 2,
        title: "Quotation",
        bullets: [
            "A quote will be provided based on your requirements.",
            "Quotes are available for 7 days.",
            "Prices may vary depending on the size, design complexity and decorative elements requested.",
        ],
    },
    {
        number: 3,
        title: "Booking & Deposit",
        bullets: [
            "A non-refundable 50% deposit is required to secure your booking.",
            "Your order is only confirmed once the deposit has been received.",
            "Dates are allocated on a first-come, first-served basis and cannot be reserved without a deposit.",
        ],
    },
    {
        number: 4,
        title: "Final Payment",
        bullets: [
            "The remaining balance must be paid by the day before collection or delivery.",
            "For wedding cakes, the remaining balance must be paid at least 7 days before collection or delivery.",
            "Failure to settle the balance by the due date may result in cancellation of the order.",
        ],
    },
    {
        number: 5,
        title: "Design Changes",
        bullets: [
            "Minor changes may be accommodated up to 7 days before the event date.",
            "Major changes may incur additional charges.",
            "No design changes will be accepted within 7 days of collection or delivery.",
        ],
    },
    {
        number: 6,
        title: "Collection & Delivery",
        bullets: [
            "Collection times must be arranged in advance.",
            "Clients are responsible for inspecting the cake upon collection.",
            "Delivery is available at an additional fee, depending on location.",
            "Once the cake has been collected or delivered, responsibility for its care transfers to the client.",
        ],
    },
    {
        number: 7,
        title: "Cancellations",
        bullets: [
            "Deposits are non-refundable.",
            "Cancellations made less than 7 days before the event will not qualify for a refund.",
        ],
    },
];

const OrderProcess = () => {
    return (
        <section
            id="how-it-works"
            className="scroll-mt-24 pb-15"
        >
            <div className="mb-8 text-center">
                <p className="mb-4 text-[0.8rem] font-medium uppercase tracking-[1px] text-burgundy-muted">
                    How it works
                </p>

                <h2 className="section-heading mb-4">
                    OUR ORDERING PROCESS
                </h2>

                <p className="section-description mx-auto max-w-xl text-center text-burgundy-soft">
                    Please review our ordering process below to ensure a smooth experience.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step) => (
                    <div
                        key={step.number}
                        className="flex flex-col gap-3 rounded-2xl bg-white p-5"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-burgundy text-sm font-bold text-cream">
                                {step.number}
                            </div>

                            <h3 className="font-display text-base font-bold text-burgundy">
                                {step.title}
                            </h3>
                        </div>

                        {step.description && (
                            <p className="text-sm leading-relaxed text-burgundy-soft">
                                {step.description}
                            </p>
                        )}

                        <ul className="flex list-disc flex-col gap-1.5 pl-4 text-left text-xs leading-[1.7] text-burgundy-soft">
                            {step.bullets.map((bullet) => (
                                <li key={bullet}>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OrderProcess;