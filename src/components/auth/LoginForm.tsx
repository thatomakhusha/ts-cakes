"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();
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
                onSubmit={(e) => {
                    e.preventDefault();
                    router.push("/dashboard");
                }}
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
                    className="mt-2 w-full rounded-2xl border border-[#e8c9c4] bg-white px-4 py-3 text-sm text-burgundy outline-none placeholder:text-burgundy/40 focus:border-burgundy"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="mt-8 w-full rounded-full bg-burgundy px-6 py-4 text-sm font-semibold text-cream transition-colors hover:bg-burgundy/90"
            >
                Sign in to dashboard
            </button>
            </form>
        </div>
        </main>
    );
};

export default LoginForm;