"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const LoginForm = () => {
    const router = useRouter();
    const supabase = createClient();
    const searchParams = useSearchParams();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(
        searchParams.get("error") === "auth-callback"
            ? "Your invitation link could not be completed. Please request a new invitation."
            : "",
    );
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError("Invalid email or password.");
            setLoading(false);
            return;
        }

        router.push("/dashboard");
    }

    return (
        <main className="grid min-h-screen place-items-center bg-burgundy-muted px-5 py-10">
        <div className="w-full max-w-md rounded-3xl bg-cream p-8">
            {/* Back to website */}
            <Link
                href="/"
                className="inline-flex items-center text-sm font-semibold text-burgundy/65 transition-colors hover:text-burgundy"
            >
            ← Back to website
            </Link>

            {/* Logo */}
            <Image
                src="/images/logo/Bakers Website logo-.png"
                alt="T's Cakes logo"
                width={120}
                height={120}
                className="mx-auto mt-4 h-28 w-28 object-contain"
            />

            {/* Heading */}
            <div className="mt-2 text-center">
            <h1 className="font-display text-[2rem] text-burgundy">
                Admin sign in
            </h1>

            <p className="mt-2 text-sm text-burgundy-muted">
                Manage customer reviews and website content.
            </p>
            </div>

            {/* Login form */}
            <form
                className="mt-7"
                onSubmit={handleSubmit}
            >
            {/* Email */}
            <div className="mb-5">
                <label
                    htmlFor="email"
                    className="font-body text-sm font-bold text-burgundy"
                >
                    Email address
                </label>

                <input
                    id="email"
                    type="email"
                    placeholder="admin@tscakes.co.za"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="mt-2 w-full rounded-2xl border border-[#e8c9c4] bg-white px-4 py-3 text-sm text-burgundy outline-none placeholder:text-burgundy/40 focus:border-burgundy"
                />
            </div>

            {/* Password */}
            <div>
                <label
                    htmlFor="password"
                    className="font-body text-sm font-bold text-burgundy"
                >
                    Password
                </label>

                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className="mt-2 w-full rounded-2xl border border-[#e8c9c4] bg-white px-4 py-3 text-sm text-burgundy outline-none placeholder:text-burgundy/40 focus:border-burgundy"
                />
            </div>
            {error && (
                <p className="mt-4 text-sm text-red-600">
                    {error}
                </p>
            )}
            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="mt-8 w-full rounded-full bg-burgundy px-6 py-4 text-sm font-semibold text-cream transition-colors hover:bg-burgundy/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {loading ? "Signing in..." : "Sign in to dashboard"}
            </button>
            </form>
        </div>
        </main>
    );
};

export default LoginForm;