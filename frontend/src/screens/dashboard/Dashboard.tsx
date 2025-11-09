import { PlusIcon } from "lucide-react";
import { PageHeader } from "../../common/components/PageHeader";
import { useDashboard } from "./useDashboard";
import { DashboardSkeleton } from "./components/DashboardSkeleton";
import CreateProjectDialog from "./components/CreateProjectDialog";
import { useEffect } from "react";
import { useAuthStore, type Authstore } from "../../store/useAuthStore";
import StatsGrid from "./components/StatsGrid";
import ProjectOverview from "./components/ProjectOverview";
import RecentActivity from "./components/RecentActivity";
import TasksSummary from "./components/TaskSummary";

export const Dashboard = () => {
  const {
    isCreateProjectDialogOpen,
    openCreatePojectDialog,
    closeCreateProjectDialog,
    isSubmitting,
    handelCreateProjectSubmit,
    handleCreateProjectFormFieldsChange,
    createProjectFormRef,
  } = useDashboard();

  const { authUser, get_custom_fileds, dashboardLoading }: Authstore =
    useAuthStore();

  useEffect(() => {
    get_custom_fileds();
  }, []);

  return (
    <>
      {dashboardLoading ? (
        <DashboardSkeleton />
      ) : (
        <div className="min-w-full">
          <div className="sticky top-0 z-10 bg-gray-50 dark:bg-zinc-950  pb-4">
            <PageHeader
              title={`Welcome back ${authUser?.first_name ?? "User"}`}
              description="Here's what's happening with your projects today"
              Icon={PlusIcon}
              buttonText="New Project"
              onClick={openCreatePojectDialog}
            />

            <StatsGrid />
          </div>

          <CreateProjectDialog
            isDialogOpen={isCreateProjectDialogOpen}
            closeCreateProjectDialog={closeCreateProjectDialog}
            handleCreateProjectFormFieldsChange={
              handleCreateProjectFormFieldsChange
            }
            isSubmitting={isSubmitting}
            handelCreateProjectSubmit={handelCreateProjectSubmit}
            createProjectFormRef={createProjectFormRef}
          />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ProjectOverview
                isDialogOpen={isCreateProjectDialogOpen}
                closeCreateProjectDialog={closeCreateProjectDialog}
                handleCreateProjectFormFieldsChange={
                  handleCreateProjectFormFieldsChange
                }
                isSubmitting={isSubmitting}
                handelCreateProjectSubmit={handelCreateProjectSubmit}
                createProjectFormRef={createProjectFormRef}
                openCreatePojectDialog={openCreatePojectDialog}
              />
              <RecentActivity />
            </div>
            <div>
              <TasksSummary />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
