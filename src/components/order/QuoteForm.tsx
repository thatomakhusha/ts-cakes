"use client";

import { FormEvent, useState } from "react";

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        occasion: "",
        date: "",
        product: "",
        servings: "",
        description: "",
    });

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { id, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [id]: value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const message = `
Hi, I'd like to request a quote from T's Cakes.

Name: ${formData.name}
WhatsApp Number: ${formData.whatsapp}
Occasion: ${formData.occasion}
Date Needed: ${formData.date}
Product Type: ${formData.product}
Number of Servings: ${formData.servings}

Order Details:
${formData.description}
        `.trim();

        const whatsappNumber = "27768881684";

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section
            id="request-a-quote"
            className="scroll-mt-24 pb-15"
        >
            <div className="mb-8 text-center">
                <p className="mb-4 text-[0.8rem] font-medium uppercase tracking-[1px] text-burgundy-muted">
                    REQUEST A QUOTE
                </p>

                <h2 className="section-heading mb-4">
                    Tell us about your order
                </h2>

                <p className="section-description mx-auto text-center">
                    Fill in your details and we&apos;ll get back to you with a quote.
                </p>
            </div>

            <div className="mx-auto w-full max-w-200 rounded-2xl bg-white p-6 sm:p-10">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                >
                    {/* Name + WhatsApp */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="name"
                                className="text-[11px] font-bold uppercase tracking-[1px] text-burgundy"
                            >
                                Your Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. Thandi Dlamini"
                                required
                                className="rounded-lg border border-burgundy/20 bg-cream px-4 py-3 text-sm text-burgundy outline-none placeholder:text-burgundy/40 focus:border-burgundy"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="whatsapp"
                                className="text-[11px] font-bold uppercase tracking-[1px] text-burgundy"
                            >
                                WhatsApp Number
                            </label>

                            <input
                                id="whatsapp"
                                type="tel"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                placeholder="e.g. 071 000 0000"
                                required
                                className="rounded-lg border border-burgundy/20 bg-cream px-4 py-3 text-sm text-burgundy outline-none placeholder:text-burgundy/40 focus:border-burgundy"
                            />
                        </div>
                    </div>

                    {/* Occasion + Date */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="occasion"
                                className="text-[11px] font-bold uppercase tracking-[1px] text-burgundy"
                            >
                                Occasion
                            </label>

                            <select
                                id="occasion"
                                value={formData.occasion}
                                onChange={handleChange}
                                required
                                className="rounded-lg border border-burgundy/20 bg-cream px-4 py-3 text-sm text-burgundy outline-none focus:border-burgundy"
                            >
                                <option value="" disabled>
                                    Select an occasion
                                </option>
                                <option>Birthday</option>
                                <option>Wedding</option>
                                <option>Graduation</option>
                                <option>Baby Shower</option>
                                <option>Themed</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="date"
                                className="text-[11px] font-bold uppercase tracking-[1px] text-burgundy"
                            >
                                Date Needed
                            </label>

                            <input
                                id="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="rounded-lg border border-burgundy/20 bg-cream px-4 py-3 text-sm text-burgundy outline-none focus:border-burgundy"
                            />
                        </div>
                    </div>

                    {/* Product + Servings */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="product"
                                className="text-[11px] font-bold uppercase tracking-[1px] text-burgundy"
                            >
                                Product Type
                            </label>

                            <select
                                id="product"
                                value={formData.product}
                                onChange={handleChange}
                                required
                                className="rounded-lg border border-burgundy/20 bg-cream px-4 py-3 text-sm text-burgundy outline-none focus:border-burgundy"
                            >
                                <option value="" disabled>
                                    Select a product
                                </option>
                                <option>Custom Cake</option>
                                <option>Cupcakes</option>
                                <option>Muffins</option>
                                <option>Scones</option>
                                <option>Biscuits</option>
                                <option>Treat Mix</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="servings"
                                className="text-[11px] font-bold uppercase tracking-[1px] text-burgundy"
                            >
                                Number of Servings
                            </label>

                            <input
                                id="servings"
                                type="number"
                                min="1"
                                value={formData.servings}
                                onChange={handleChange}
                                placeholder="e.g. 20"
                                required
                                className="rounded-lg border border-burgundy/20 bg-cream px-4 py-3 text-sm text-burgundy outline-none placeholder:text-burgundy/40 focus:border-burgundy"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="description"
                            className="text-[11px] font-bold uppercase tracking-[1px] text-burgundy"
                        >
                            Describe Your Order
                        </label>

                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Tell us your theme, colours, flavour, design ideas and any inspiration images..."
                            required
                            className="min-h-35 resize-none rounded-lg border border-burgundy/20 bg-cream px-4 py-3 text-sm text-burgundy outline-none placeholder:text-burgundy/40 focus:border-burgundy"
                        />
                    </div>

                    {/* Hint */}
                    <div className="rounded-md border-l-3 border-pink bg-pink/20 px-4 py-3 text-sm leading-relaxed text-burgundy-soft">
                        💡 The more detail you provide, the more accurate your quote will be.
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-fit rounded bg-burgundy px-8 py-4 text-[11px] font-bold uppercase tracking-[1.5px] text-cream transition-opacity duration-200 hover:opacity-85"
                    >
                        Send Enquiry
                    </button>
                </form>
            </div>
        </section>
    );
};

export default QuoteForm;