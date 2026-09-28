const ReviewStats = () => {
    return (
        <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-burgundy/10 bg-cream p-7">
                <p className="text-burgundy/60">
                    Awaiting review
                </p>

                <p className="mt-6 font-display text-4xl text-burgundy">
                    2
                </p>
            </div>

            <div className="rounded-3xl border border-burgundy bg-white p-7">
                <p className="text-burgundy/60">
                    Published
                </p>

                <p className="mt-6 font-display text-4xl text-burgundy">
                    3
                </p>
            </div>

            <div className="rounded-3xl border border-burgundy/10 bg-cream p-7">
                <p className="text-burgundy/60">
                    Rejected
                </p>

                <p className="mt-6 font-display text-4xl text-burgundy">
                    0
                </p>
            </div>
        </div>
    );
};

export default ReviewStats;