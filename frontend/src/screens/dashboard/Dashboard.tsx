import { PlusIcon } from "lucide-react";
import { PageHeader } from "../../common/components/PageHeader";
import { useDashboard } from "./useDashboard";
import { DashboardSkeleton } from "./components/DashboardSkeleton";
import CreateProjectDialog from "./components/CreateProjectDialog";
import { useEffect } from "react";
import { useAuthStore, type Authstore } from "../../store/useAuthStore";

export const Dashboard = () => {
  const {
    isCreateProjectDialogOpen,
    openCreatePojectDialog,
    closeCreateProjectDialog,
    isSubmitting,
    handelCreateProjectSubmit,
    handleCreateProjectFormFieldsChange,
    createProjectFormRef
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
          <PageHeader
            title={`Welcome back ${authUser?.first_name ?? "User"}`}
            description="Here's what's happening with your projects today"
            Icon={PlusIcon}
            buttonText="New Project"
            onClick={openCreatePojectDialog}
          />

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
        </div>
      )}
    </>
  );
};
