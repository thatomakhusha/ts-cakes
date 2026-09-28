"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const CallbackContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const supabase = createClient();

    useEffect(() => {
        async function handleCallback() {
            const tokenHash = searchParams.get("token_hash");
            const type = searchParams.get("type");

            if (tokenHash && type === "invite") {
                const { error } = await supabase.auth.verifyOtp({
                    token_hash: tokenHash,
                    type: "invite",
                });

                if (error) {
                    console.error(
                        "Failed to verify invitation:",
                        error,
                    );

                    router.replace("/login?error=auth-callback");
                    return;
                }

                router.replace("/set-password");
                return;
            }

            const code = searchParams.get("code");

            if (code) {
                const { error } =
                    await supabase.auth.exchangeCodeForSession(code);

                if (error) {
                    console.error(
                        "Failed to exchange auth code:",
                        error,
                    );

                    router.replace("/login?error=auth-callback");
                    return;
                }

                router.replace("/set-password");
                return;
            }

            router.replace("/login?error=auth-callback");
        }

        handleCallback();
    }, [router, searchParams, supabase]);

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

const CallbackPage = () => {
    return (
        <Suspense
            fallback={
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
            }
        >
            <CallbackContent />
        </Suspense>
    );
};

export default CallbackPage;
