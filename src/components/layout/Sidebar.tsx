
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Users,
  MessageSquare,
  CalendarDays,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  Home,
  PieChart,
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isCollapsed: boolean;
  isActive: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, isCollapsed, isActive }: SidebarItemProps) => {
  return (
    <Link to={href} className="w-full">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 p-3 rounded-lg",
          isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
          isCollapsed && "justify-center p-2"
        )}
      >
        <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
        {!isCollapsed && <span>{label}</span>}
      </Button>
    </Link>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const sidebarItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Users, label: "Clients", href: "/clients" },
    { icon: BarChart3, label: "Deals", href: "/deals" },
    { icon: MessageSquare, label: "Messages", href: "/messages" },
    { icon: CalendarDays, label: "Calendar", href: "/calendar" },
    { icon: PieChart, label: "Reports", href: "/reports" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div
      className={cn(
        "h-screen flex flex-col bg-sidebar p-3 border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <div className="flex items-center justify-between mb-6 p-2">
        {!collapsed && (
          <h1 className="text-2xl font-bold text-primary">VibeC</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto text-sidebar-foreground hover:bg-sidebar-accent h-8 w-8"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>

      <div className="flex flex-col space-y-1">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isCollapsed={collapsed}
            isActive={location.pathname === item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
