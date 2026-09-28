import { Review, ReviewStatus } from "./types";

type ReviewCardProps = {
    review: Review;
    onUpdateStatus: (id: number, status: ReviewStatus) => void;
};

const ReviewCard = ({
    review,
    onUpdateStatus,
}: ReviewCardProps) => {
    return (
        <article className="border-t border-burgundy/10 px-6 py-8 sm:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-body text-lg font-bold text-burgundy">
                            {review.name}
                        </h3>

                        <span className="rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-green-700">
                            {review.status}
                        </span>

                        <span className="text-sm text-burgundy/50">
                            {review.date}
                        </span>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-4">
                        <span className="text-lg tracking-wide text-burgundy">
                            {"★".repeat(review.rating)}
                        </span>

                        <span className="text-sm uppercase tracking-wide text-burgundy/50">
                            {review.category}
                        </span>
                    </div>

                    <p className="mt-7 max-w-5xl text-base leading-8 text-burgundy/65">
                        {review.review}
                    </p>
                </div>

                <div className="flex shrink-0 gap-2">
                    {review.status !== "approved" && (
                        <button
                            type="button"
                            onClick={() =>
                                onUpdateStatus(review.id, "approved")
                            }
                            className="rounded-full bg-burgundy px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-burgundy/90"
                        >
                            Approve
                        </button>
                    )}

                    {review.status !== "rejected" && (
                        <button
                            type="button"
                            onClick={() =>
                                onUpdateStatus(review.id, "rejected")
                            }
                            className="rounded-full bg-burgundy/10 px-7 py-3 text-sm font-semibold text-burgundy transition-colors hover:bg-burgundy hover:text-cream"
                        >
                            Reject
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ReviewCard;