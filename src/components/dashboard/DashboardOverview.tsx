import Link from "next/link";

const DashboardOverview = () => {
    return ( 
        <section className="mx-auto max-w-admin px-5 py-10 sm:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div className="font-display">
                    <p className=" uppercase">
                        Welcome back, Tshwari
                    </p>
                    <h1 className="mt-2 text-4xl">
                        Customer reviews
                    </h1>
                    <p className="mt-2 text-burgundy/60">
                        Review, approve or reject new customer feedback.
                    </p>
                </div>
                <Link href="/" className="rounded-full border border-burgundy/20 px-4 py-2 text-sm font-semibold text-burgundy transition-colors hover:bg-burgundy hover:text-cream">
                    View live website
                </Link>
            </div>
        </section>
     );
}
 
export default DashboardOverview;