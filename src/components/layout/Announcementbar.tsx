"use client";

import { useEffect, useState } from "react";

const announcements = [
    "Fresh cakes baked daily",
    "Custom birthday cakes available",
];

export default function AnnouncementBar() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((currentIndex) => {
                if (currentIndex === announcements.length - 1) {
                    return 0;
                }

                return currentIndex + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center bg-pink px-5 py-2.5">
            <p className="text-center text-xs font-bold uppercase text-burgundy sm:text-sm">
                {announcements[index]}
            </p>
        </div>
    );
}