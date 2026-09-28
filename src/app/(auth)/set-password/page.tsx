"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const SetPasswordPage = () => {
    const router = useRouter();
    const supabase = createClient();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        const { error } = await supabase.auth.updateUser({
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        router.push("/login");
    }

    return (
        <main className="grid min-h-screen place-items-center bg-burgundy-muted px-5 py-10">
            <div className="w-full max-w-md rounded-3xl bg-cream p-8 sm:p-10">
                <div className="text-center">
                    <h1 className="font-display text-3xl text-burgundy">
                        Set your password
                    </h1>

                    <p className="mt-2 text-sm text-burgundy/60">
                        Create a password for your T&apos;s Cakes admin account.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 grid gap-5"
                >
                    <div>
                        <label
                            htmlFor="password"
                            className="text-sm font-semibold text-burgundy"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                            minLength={8}
                            className="mt-2 w-full rounded-xl border border-burgundy/15 bg-white px-4 py-3 outline-none focus:border-burgundy"
                            placeholder="Create a password"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="confirm-password"
                            className="text-sm font-semibold text-burgundy"
                        >
                            Confirm password
                        </label>

                        <input
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                            required
                            minLength={8}
                            className="mt-2 w-full rounded-xl border border-burgundy/15 bg-white px-4 py-3 outline-none focus:border-burgundy"
                            placeholder="Enter your password again"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-600">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded-full bg-burgundy px-5 py-3 font-semibold text-cream transition-opacity hover:opacity-90 disabled:opacity-50"
                    >
                        {loading ? "Saving..." : "Set password"}
                    </button>
                </form>
            </div>
        </main>
    );
};

export default SetPasswordPage;