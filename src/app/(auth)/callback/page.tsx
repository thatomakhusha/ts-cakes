"use client";

import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const CallbackContent = () => {
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        let mounted = true;

        async function handleCallback() {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (session) {
                if (mounted) {
                    router.replace("/set-password");
                }

                return;
            }

            const {
                data: { subscription },
            } = supabase.auth.onAuthStateChange(
                (event, session) => {
                    if (
                        mounted &&
                        session &&
                        (event === "SIGNED_IN" ||
                            event === "INITIAL_SESSION")
                    ) {
                        router.replace("/set-password");
                    }
                },
            );

            setTimeout(async () => {
                const {
                    data: { session },
                } = await supabase.auth.getSession();

                if (!session && mounted) {
                    router.replace("/login?error=auth-callback");
                }
            }, 5000);

            return () => {
                subscription.unsubscribe();
            };
        }

        const cleanupPromise = handleCallback();

        return () => {
            mounted = false;

            cleanupPromise.then((cleanup) => {
                cleanup?.();
            });
        };
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
