import { useAuthStore } from "../../store/useAuthStore.js";

export const useDashboard = () => {
  const { authUser, loading } = useAuthStore();

  return {
    authUser,
    loading
  };
};
