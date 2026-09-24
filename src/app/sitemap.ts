import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.tscakes.co.za",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://www.tscakes.co.za/order",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];
}
