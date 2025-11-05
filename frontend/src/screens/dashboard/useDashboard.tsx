import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore.js";

export const useDashboard = () => {
  const { authUser, dashboardLoading, get_custom_fileds } = useAuthStore();

  return {
    authUser,
    dashboardLoading,
  };
};
