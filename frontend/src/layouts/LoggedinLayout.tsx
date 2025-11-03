import { useUser } from "@clerk/react-router";
import { Navigate, Outlet } from "react-router";
import { Loading } from "../components/Loading";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { useAuthStore } from "../store/useAuthStore.js";

export const LoggedinLayout = () => {
  const { isSignedIn, isLoaded } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { me, loading } = useAuthStore();
  useEffect(() => {
    me();
  }, []);

  if (!isLoaded || loading) {
    return <Loading />;
  }

  if (!isSignedIn) return <Navigate to="/login" />;

  return (
    <div className="flex bg-white dark:bg-zinc-950 text-gray-900 dark:text-slate-100">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-1 flex flex-col h-screen">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 h-full p-2 xl:p-6 xl:px-6 overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
