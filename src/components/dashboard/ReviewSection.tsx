import ReviewCard from "./ReviewCard";
import { Review, ReviewStatus } from "./types";

type ReviewsSectionProps = {
    reviews: Review[];
    filter: ReviewStatus | "all";
    onShowAll: () => void;
    onUpdateStatus: (id: number, status: ReviewStatus) => void;
};

const ReviewsSection = ({
    reviews,
    filter,
    onShowAll,
    onUpdateStatus,
}: ReviewsSectionProps) => {
    const heading =
        filter === "all"
            ? "All Reviews"
            : filter === "pending"
                ? "Awaiting Review"
                : filter === "approved"
                    ? "Published Reviews"
                    : "Rejected Reviews";

    return (
        <section className="mt-10 overflow-hidden rounded-3xl border border-burgundy/10 bg-cream">
            <div className="flex flex-col justify-between gap-4 px-6 py-7 sm:flex-row sm:items-center sm:px-10">
                <div>
                    <h2 className="font-display text-3xl text-burgundy">
                        {heading}
                    </h2>

                    <p className="mt-1 text-sm text-burgundy/50">
                        {reviews.length}{" "}
                        {reviews.length === 1 ? "review" : "reviews"}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onShowAll}
                    className="self-start text-sm font-semibold text-burgundy transition-colors hover:text-burgundy/60 sm:self-auto"
                >
                    Show all reviews
                </button>
            </div>

            <div>
                {reviews.length === 0 ? (
                    <div className="p-12 text-center text-burgundy/50">
                        No reviews in this category.
                    </div>
                ) : (
                    reviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                            onUpdateStatus={onUpdateStatus}
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default ReviewsSection;