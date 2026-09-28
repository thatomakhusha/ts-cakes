import { redirect } from "next/navigation";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import { createClient } from "@/lib/supabase/server";

const DashboardPage = async () => {
    const supabase = await createClient();

    const { data } = await supabase.auth.getClaims();

    if (!data?.claims) {
        redirect("/login");
    }

    return (
        <main className="min-h-screen bg-burgundy-muted">
            <DashboardHeader />
            <DashboardOverview />
        </main>
    );
};

export default DashboardPage;