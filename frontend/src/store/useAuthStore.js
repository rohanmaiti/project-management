import { create } from "zustand";
import { axiosInstance } from "../utils/axiosInstance";

export const useAuthStore = create((set) => ({
  loading: false,
  dashboardLoading: false,
  authUser: null,
  me: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/v1/me");
      set({ authUser: res.data });
    } catch (error) {
      console.log("error in me api", error?.message);
    } finally {
      set({ loading: false });
    }
  },

  get_custom_fileds: async () => {
    set({ dashboardLoading: true });
    try {
      const res = await axiosInstance.get("/v1/get-custom-fields");
      console.log(res);
    } catch (error) {
      console.log("error getting custom field", error?.message);
    } finally {
      set({ dashboardLoading: false });
    }
  },
}));
