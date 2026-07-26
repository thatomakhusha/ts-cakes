import { AlertTriangle } from "lucide-react";

const AllergyNotice = () => {
    return (
        <section className="flex justify-center pb-15">
            <div className="flex items-center justify-center gap-3 rounded-xl border-l-3 border-pink bg-pink/20 px-5 py-3">

                <AlertTriangle
                    size={20}
                    strokeWidth={2}
                    className="shrink-0 text-burgundy"
                />

                <div className="text-center">
                    <h3 className="mb-1 text-sm font-bold uppercase tracking-[1px] text-burgundy">
                        Allergy Notice
                    </h3>

                    <p className="text-sm leading-relaxed text-burgundy-soft">
                        Our products may contain dairy, eggs, wheat, nuts and other allergens.
                    </p>

                    <p className="text-sm leading-relaxed text-burgundy-soft">
                        Please inform us of any allergies or dietary requirements when placing your order.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AllergyNotice;