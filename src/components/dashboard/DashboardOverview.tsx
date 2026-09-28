"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ReviewStats from "./ReviewStats";
import ReviewsSection from "./ReviewSection";
import { Review, ReviewStatus } from "./types";

const initialReviews: Review[] = [
    {
        id: 1,
        name: "Naledi M.",
        date: "18 May 2026",
        category: "Birthday cake",
        review:
            "The cake was even more beautiful than I imagined and tasted absolutely incredible. Every detail was perfect.",
        rating: 5,
        status: "approved",
    },
    {
        id: 2,
        name: "Lerato K.",
        date: "12 May 2026",
        category: "Wedding cake",
        review:
            "The cake looked beautiful and tasted amazing. Everyone at the wedding loved it.",
        rating: 5,
        status: "approved",
    },
    {
        id: 3,
        name: "Boitumelo R.",
        date: "5 May 2026",
        category: "Custom cake",
        review:
            "Everything from the design to the taste was perfect. I would definitely order again.",
        rating: 5,
        status: "approved",
    },
    {
        id: 4,
        name: "Karabo M.",
        date: "2 May 2026",
        category: "Birthday cake",
        review:
            "The cake was delicious and looked exactly like the design I requested.",
        rating: 5,
        status: "pending",
    },
    {
        id: 5,
        name: "Mpho T.",
        date: "28 April 2026",
        category: "Cupcakes",
        review:
            "The cupcakes were fresh, beautiful and everyone at the party enjoyed them.",
        rating: 5,
        status: "pending",
    },
];

const DashboardOverview = () => {
    const [reviews, setReviews] = useState<Review[]>(initialReviews);
    const [filter, setFilter] = useState<ReviewStatus | "all">("pending");

    const counts = useMemo(
        () => ({
            pending: reviews.filter((review) => review.status === "pending").length,
            approved: reviews.filter((review) => review.status === "approved").length,
            rejected: reviews.filter((review) => review.status === "rejected").length,
        }),
        [reviews],
    );

    const shownReviews =
        filter === "all"
            ? reviews
            : reviews.filter((review) => review.status === filter);

    function updateStatus(id: number, status: ReviewStatus) {
        setReviews((current) =>
            current.map((review) =>
                review.id === id
                    ? { ...review, status }
                    : review,
            ),
        );
    }

    return (
        <section className="mx-auto max-w-admin px-5 py-10 sm:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div className="font-display">
                    <p className="uppercase">
                        Welcome back, Tshwari
                    </p>

                    <h1 className="mt-2 text-4xl">
                        Customer reviews
                    </h1>

                    <p className="mt-2 text-burgundy/60">
                        Review, approve or reject new customer feedback.
                    </p>
                </div>

                <Link
                    href="/"
                    className="rounded-full border border-burgundy/20 px-4 py-2 text-sm font-semibold text-burgundy transition-colors hover:bg-burgundy hover:text-cream"
                >
                    View live website
                </Link>
            </div>

            <ReviewStats
                counts={counts}
                filter={filter}
                onFilterChange={setFilter}
            />

            <ReviewsSection
                reviews={shownReviews}
                filter={filter}
                onShowAll={() => setFilter("all")}
                onUpdateStatus={updateStatus}
            />
        </section>
    );
};

export default DashboardOverview;