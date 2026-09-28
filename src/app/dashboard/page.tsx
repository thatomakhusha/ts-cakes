import { redirect } from "next/navigation";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import { createClient } from "@/lib/supabase/server";
import { ReviewStatus } from "@/components/dashboard/types";

const DashboardPage = async () => {
    const supabase = await createClient();

    const { data } = await supabase.auth.getClaims();

    if (!data?.claims) {
        redirect("/login");
    }

    const { data: reviews, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Failed to load reviews:", error);
    }
    
    const dashboardReviews =
        reviews?.map((review) => ({
            id: Number(review.id),
            name: review.name,
            date: review.date,
            category: review.category,
            review: review.review,
            rating: review.rating,
            status: review.status as ReviewStatus,
        })) ?? [];

    

    return (
        <main className="min-h-screen bg-burgundy-muted">
            <DashboardHeader />
            <DashboardOverview initialReviews={dashboardReviews} />
        </main>
    );
};

export default DashboardPage;