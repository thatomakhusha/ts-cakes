import { ReviewStatus } from "./types";

type ReviewStatsProps = {
    counts: {
        pending: number;
        approved: number;
        rejected: number;
    };
    filter: ReviewStatus | "all";
    onFilterChange: (filter: ReviewStatus) => void;
};

const ReviewStats = ({
    counts,
    filter,
    onFilterChange,
}: ReviewStatsProps) => {
    const stats = [
        {
            label: "Awaiting review",
            count: counts.pending,
            status: "pending" as const,
        },
        {
            label: "Published",
            count: counts.approved,
            status: "approved" as const,
        },
        {
            label: "Rejected",
            count: counts.rejected,
            status: "rejected" as const,
        },
    ];

    return (
        <div className="mt-10 grid gap-5 md:grid-cols-3">
            {stats.map((stat) => (
                <button
                    key={stat.status}
                    type="button"
                    onClick={() => onFilterChange(stat.status)}
                    className={`rounded-3xl border p-7 text-left transition-colors ${
                        filter === stat.status
                            ? "border-burgundy bg-white"
                            : "border-burgundy/10 bg-cream hover:border-burgundy/30"
                    }`}
                >
                    <p className="text-burgundy/60">
                        {stat.label}
                    </p>

                    <p className="mt-6 font-display text-4xl text-burgundy">
                        {stat.count}
                    </p>
                </button>
            ))}
        </div>
    );
};

export default ReviewStats;