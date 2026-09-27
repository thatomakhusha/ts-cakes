import Image from "next/image";

const DashboardPage = () => {
    return (
        <main className="min-h-screen bg-burgundy-muted">
            {/* Header */}
            <header className="border-b border-[#e8c9c4] bg-cream">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/images/logo/Bakers Website logo-.png"
                            alt="T's Cakes logo"
                            width={55}
                            height={55}
                            className="h-12 w-12 object-contain"
                        />

                        <div>
                            <h1 className="font-display text-xl text-burgundy">
                                T&apos;s Cakes
                            </h1>

                            <p className="font-body text-xs text-burgundy/60">
                                Admin Dashboard
                            </p>
                        </div>
                    </div>

                    {/* Logout */}
                    <button
                        type="button"
                        className="rounded-full border border-burgundy/20 px-5 py-2.5 text-sm font-semibold text-burgundy transition-colors hover:bg-burgundy hover:text-cream"
                    >
                        Log out
                    </button>
                </div>
            </header>

            {/* Dashboard content */}
            <section className="mx-auto max-w-7xl px-6 py-10">
                {/* Welcome */}
                <div>
                    <p className="font-body text-sm font-semibold text-burgundy/60">
                        Admin
                    </p>

                    <h2 className="mt-1 font-display text-4xl text-burgundy">
                        Welcome back
                    </h2>

                    <p className="mt-2 max-w-xl font-body text-sm text-burgundy/70">
                        Manage your T&apos;s Cakes website, customer reviews,
                        and content from here.
                    </p>
                </div>

                {/* Dashboard cards */}
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    <div className="rounded-3xl bg-cream p-6">
                        <p className="font-body text-sm font-semibold text-burgundy/60">
                            Reviews
                        </p>

                        <h3 className="mt-3 font-display text-3xl text-burgundy">
                            0
                        </h3>

                        <p className="mt-2 text-sm text-burgundy/60">
                            Customer reviews
                        </p>
                    </div>

                    <div className="rounded-3xl bg-cream p-6">
                        <p className="font-body text-sm font-semibold text-burgundy/60">
                            Messages
                        </p>

                        <h3 className="mt-3 font-display text-3xl text-burgundy">
                            0
                        </h3>

                        <p className="mt-2 text-sm text-burgundy/60">
                            Customer enquiries
                        </p>
                    </div>

                    <div className="rounded-3xl bg-cream p-6">
                        <p className="font-body text-sm font-semibold text-burgundy/60">
                            Website
                        </p>

                        <h3 className="mt-3 font-display text-3xl text-burgundy">
                            Live
                        </h3>

                        <p className="mt-2 text-sm text-burgundy/60">
                            tscakes.co.za
                        </p>
                    </div>
                </div>

                {/* Management section */}
                <div className="mt-10">
                    <h3 className="font-display text-2xl text-burgundy">
                        Manage website
                    </h3>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <button
                            type="button"
                            className="rounded-3xl bg-cream p-6 text-left transition-transform hover:-translate-y-1"
                        >
                            <h4 className="font-display text-xl text-burgundy">
                                Customer Reviews
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-burgundy/65">
                                View, approve, and manage reviews submitted by
                                customers.
                            </p>
                        </button>

                        <button
                            type="button"
                            className="rounded-3xl bg-cream p-6 text-left transition-transform hover:-translate-y-1"
                        >
                            <h4 className="font-display text-xl text-burgundy">
                                Website Content
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-burgundy/65">
                                Manage content displayed on the T&apos;s Cakes
                                website.
                            </p>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DashboardPage;
