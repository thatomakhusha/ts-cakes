"use client";

import { FormEvent, useState } from "react";

const Reviews = () => {
    const [submitted, setSubmitted] = useState(false);

    function submitReview(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

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
                            <label className="grid gap-2 text-sm font-semibold">
                                Rating

                                <select
                                    name="rating"
                                    defaultValue="5"
                                    className="rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 font-normal outline-none"
                                >
                                    {[5, 4, 3, 2, 1].map((rating) => (
                                        <option
                                            value={rating}
                                            key={rating}
                                            className="text-burgundy"
                                        >
                                            {rating} stars
                                        </option>
                                    ))}
                                </select>
                            </label>

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