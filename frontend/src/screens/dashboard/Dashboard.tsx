import { PageHeader } from "../../common/components/PageHeader";
import { PlusIcon } from "lucide-react";
import { useDashboard } from "./useDashboard";

export const Dashboard = () => {
  const { authUser } = useDashboard();

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
