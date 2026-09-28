"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const Reviews = () => {
    const supabase = createClient();

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    async function submitReview(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setError("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = formData.get("name")?.toString().trim();
        const category = formData.get("category")?.toString();
        const review = formData.get("review")?.toString().trim();

       if (!name || !category || !rating || !review) {
            setError("Please complete all fields, including your rating.");
            return;
        }

        const { error } = await supabase
            .from("reviews")
            .insert({
                name,
                date: new Date().toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                }),
                category,
                review,
                rating,
                status: "pending",
            });

        if (error) {
            console.error("Failed to submit review:", error);
            setError("Something went wrong. Please try again.");
            return;
        }

        setSubmitted(true);
    }

    return (
        <section className="py-24">
            <div className="mx-auto max-w-admin px-5 sm:px-8">
                {/* Section heading */}
                <div className="max-w-2xl">
                    <p className="font-mono text-sm uppercase text-burgundy/50">
                        Customer reviews
                    </p>

                    <h2 className="mt-3 font-display text-4xl text-burgundy sm:text-5xl">
                        What our customers say
                    </h2>

                    <p className="mt-4 text-burgundy/60">
                        We love hearing about your experience with T&apos;s Cakes.
                    </p>
                </div>

                {/* Approved reviews */}
                <div className="mt-12">
                    <p className="text-sm text-burgundy/50">
                        No reviews yet.
                    </p>
                </div>

                {/* Review submission */}
                <div className="mx-auto mt-14 max-w-2xl rounded-3xl bg-burgundy p-7 text-cream sm:p-10">
                    <h3 className="font-display text-3xl text-cream">
                        Share your sweet experience
                    </h3>

                    <p className="mt-2 text-sm text-cream/70">
                        Your review will appear after a quick approval from our team.
                    </p>

                    {error && (
                        <p className="mt-4 text-sm text-red-200">
                            {error}
                        </p>
                    )}

                    {submitted ? (
                        <div className="mt-6 rounded-2xl bg-cream/10 p-5">
                            <p className="font-semibold">
                                Thank you for your lovely review.
                            </p>

                            <p className="mt-1 text-sm text-cream/70">
                                It has been sent for approval.
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={submitReview}
                            className="mt-7 grid gap-4 sm:grid-cols-2"
                        >
                            {/* Name */}
                            <label className="grid gap-2 text-sm font-semibold">
                                Your name

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="e.g. Naledi M."
                                    required
                                    className="rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 font-normal outline-none placeholder:text-cream/40"
                                />
                            </label>

                            {/* Category */}
                            <label className="grid gap-2 text-sm font-semibold">
                                Occasion

                                <select
                                    name="category"
                                    required
                                    defaultValue=""
                                    className="rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 font-normal outline-none"
                                >
                                    <option
                                        value=""
                                        disabled
                                        className="text-burgundy"
                                    >
                                        Select an occasion
                                    </option>

                                    <option
                                        value="Birthday cake"
                                        className="text-burgundy"
                                    >
                                        Birthday cake
                                    </option>

                                    <option
                                        value="Wedding cake"
                                        className="text-burgundy"
                                    >
                                        Wedding cake
                                    </option>

                                    <option
                                        value="Custom cake"
                                        className="text-burgundy"
                                    >
                                        Custom cake
                                    </option>

                                    <option
                                        value="Cupcakes"
                                        className="text-burgundy"
                                    >
                                        Cupcakes
                                    </option>

                                    <option
                                        value="Other"
                                        className="text-burgundy"
                                    >
                                        Other
                                    </option>
                                </select>
                            </label>

                            {/* Rating */}
                            <div className="grid gap-2 text-sm font-semibold">
                                <span>Rating</span>

                                <div
                                    className="flex items-center gap-1"
                                    onMouseLeave={() => setHoverRating(0)}
                                >
                                    {[1, 2, 3, 4, 5].map((star) => {
                                        const activeRating =
                                            hoverRating || rating;

                                        return (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setRating(star)}
                                                onMouseEnter={() =>
                                                    setHoverRating(star)
                                                }
                                                aria-label={`${star} star${
                                                    star === 1 ? "" : "s"
                                                }`}
                                                className="text-3xl leading-none transition-transform hover:scale-110"
                                            >
                                                <span
                                                    className={
                                                        star <= activeRating
                                                            ? "text-cream"
                                                            : "text-cream/30"
                                                    }
                                                >
                                                    ★
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Review */}
                            <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
                                Your review

                                <textarea
                                    name="review"
                                    rows={4}
                                    required
                                    placeholder="Tell us what made your order special..."
                                    className="resize-none rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 font-normal outline-none placeholder:text-cream/40"
                                />
                            </label>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-burgundy transition-opacity hover:opacity-90 sm:col-span-2 sm:justify-self-start"
                            >
                                Submit review
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reviews;