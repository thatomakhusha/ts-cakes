"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const DashboardHeader = () => {
    const router = useRouter();
    const supabase = createClient();

    async function handleSignOut() {
        await supabase.auth.signOut({
            scope: "local",
        });

        router.push("/login");
    }

    return (
        <header className="border-b border-burgundy/10 bg-cream">
            <div className="mx-auto flex max-w-cream items-center justify-between px-5 py-4 sm:px-8">
                <div className="flex items-center gap-3">
                    <Image
                        src="/images/logo/Bakers Website logo-.png"
                        alt="T's Cakes logo"
                        width={100}
                        height={100}
                        className="h-20 w-20"
                    />

                    <div>
                        <h1 className="font-display text-xl text-burgundy">
                            Admin dashboard
                        </h1>

                        <p className="text-xs text-burgundy/50">
                            Reviews management
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleSignOut}
                    className="rounded-full border border-burgundy/20 px-4 py-2 text-sm font-semibold text-burgundy transition-colors hover:bg-burgundy hover:text-cream"
                >
                    Sign out
                </button>
            </div>
        </header>
    );
};

export default DashboardHeader;