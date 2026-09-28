"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import ReviewStats from "./ReviewStats";
import ReviewsSection from "./ReviewSection";
import { Review, ReviewStatus } from "./types";

type DashboardOverviewProps = {
    initialReviews: Review[];
};

const DashboardOverview = ({
    initialReviews,
}: DashboardOverviewProps) => {
    const supabase = createClient();

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

    async function updateStatus(id: number, status: ReviewStatus) {
        const { error } = await supabase
            .from("reviews")
            .update({ status })
            .eq("id", id);

        if (error) {
            console.error("Failed to update review status:", error);
            return;
        }

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