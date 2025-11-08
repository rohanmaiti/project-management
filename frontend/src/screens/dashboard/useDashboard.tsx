import { useRef, useState } from "react";

export const useDashboard = () => {
  const [isCreateProjectDialogOpen, setIsCreateProjectDialogOpen] =
    useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createProjectFormRef = useRef<any>({
    name: "",
    description: "",
    status: "PLANNING",
    priority: "MEDIUM",
    start_date: "",
    end_date: "",
    teamid: "",
  });

  const handleCreateProjectFormFieldsChange = (
    e: React.ChangeEvent<HTMLElement | any>
  ) => {
    const { name, value } = e.target;
    createProjectFormRef.current = {
      ...createProjectFormRef.current,
      [name]: value,
    };
  };

  const openCreatePojectDialog = ():void => {
    setIsCreateProjectDialogOpen(true);
  };

  const closeCreateProjectDialog = ():void => {
    setIsCreateProjectDialogOpen(false);
  };

  const handelCreateProjectSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    console.log(100, createProjectFormRef.current);
    setIsSubmitting(false);
  };
  return {
    isCreateProjectDialogOpen,
    setIsCreateProjectDialogOpen,
    openCreatePojectDialog,
    closeCreateProjectDialog,
    handleCreateProjectFormFieldsChange,
    handelCreateProjectSubmit,
    isSubmitting,
    createProjectFormRef
  };
};
