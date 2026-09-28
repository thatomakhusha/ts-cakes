"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const CallbackPage = () => {
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        async function handleInvitation() {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                router.replace("/login?error=auth-callback");
                return;
            }

            router.replace("/set-password");
        }

        handleInvitation();
    }, [router, supabase]);

    return (
        <main className="grid min-h-screen place-items-center bg-burgundy-muted px-5 py-10">
            <div className="text-center">
                <h1 className="font-display text-3xl text-burgundy">
                    Setting up your account...
                </h1>

                <p className="mt-2 text-sm text-burgundy/60">
                    Please wait while we prepare your admin account.
                </p>
            </div>
        </main>
    );
};

export default CallbackPage;