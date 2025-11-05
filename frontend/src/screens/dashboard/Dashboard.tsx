import { PlusIcon } from "lucide-react";
import { PageHeader } from "../../common/components/PageHeader";
import { useDashboard } from "./useDashboard";
import { DashboardSkeleton } from "./components/DashboardSkeleton";

export const Dashboard = () => {
  const { authUser, dashboardLoading } = useDashboard();

  if (dashboardLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="min-w-full">
      <PageHeader
        title={`Welcome back ${authUser?.first_name ?? "User"}`}
        description="Here's what's happening with your projects today"
        Icon={PlusIcon}
        buttonText="New Project"
      />
    </div>
  );
};
