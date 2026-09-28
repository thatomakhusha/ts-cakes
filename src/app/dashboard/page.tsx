import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardOverview from "@/components/dashboard/DashboardOverview";

const DashboardPage = () => {
    return (
        <main className="min-h-screen bg-cream-lighter">
            <DashboardHeader />

            <DashboardOverview/>
        </main>
    );
};

export default DashboardPage;