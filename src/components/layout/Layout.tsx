
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(!isMobile);
    };

    const handleToggleSidebar = () => {
      setSidebarOpen(prev => !prev);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('toggle-sidebar', handleToggleSidebar);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('toggle-sidebar', handleToggleSidebar);
    };
  }, [isMobile]);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div 
        className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 md:hidden ${
          sidebarOpen && !isMobile ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      <div 
        className={`fixed md:static inset-y-0 left-0 z-30 transition-transform duration-300 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
