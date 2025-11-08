import { create } from "zustand";
import { axiosInstance } from "../utils/axiosInstance";

export type Authstore = {
  loading: boolean,
  dashboardLoading: boolean,
  authUser: any,
  me: () => Promise<void>,
  get_custom_fileds: () => Promise<void>
}

export const useAuthStore = create<Authstore>((set, get) => ({
  // states 
  loading: false,
  dashboardLoading: false,
  authUser: null,
  
  // methods
  me: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/v1/me");
      set({ authUser: res.data });
    } catch (error: any) {
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
    } catch (error: any) {
      console.log("error getting custom field", error?.message);
    } finally {
      set({ dashboardLoading: false });
    }
  },
}));
