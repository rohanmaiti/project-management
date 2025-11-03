import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Info } from "../components/Info";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore.js";

export const Landingpage = () => {
  const { me } = useAuthStore();
  useEffect(() => {
    me();
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Info />
      </main>
      <Footer />
    </div>
  );
};
