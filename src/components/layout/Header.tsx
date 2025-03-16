
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Bell, 
  Search, 
  User, 
  Moon, 
  Sun, 
  Settings,
  HelpCircle,
  LogOut,
  BellOff,
  Check
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Header = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New message from Sarah",
      time: "Just now",
      read: false,
    },
    {
      id: 2,
      title: "Call scheduled with Brian",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "Deal status updated",
      time: "Yesterday",
      read: true,
    },
  ]);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Here you would actually implement the dark mode toggle with a theme context
  };

  return (
    <header className="h-16 border-b backdrop-blur-md border-border/40 flex items-center justify-between px-6 bg-background/80 sticky top-0 z-10">
      <div className={cn("w-1/3 transition-opacity duration-200", 
                        searchVisible ? "opacity-100" : "opacity-0 md:opacity-100")}>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-full pl-9 rounded-full bg-secondary border-none focus-visible:ring-1 focus-visible:ring-primary font-mono text-sm"
          />
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setSearchVisible(!searchVisible)}
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center gap-1 md:gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-primary/10 hover:text-primary"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-amber-500" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-primary/10 hover:text-primary"
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-primary text-white text-xs font-mono" 
                >
                  {unreadCount}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-80 backdrop-blur-md bg-white/95 dark:bg-black/95" 
            align="end"
          >
            <DropdownMenuLabel className="flex justify-between items-center font-mono">
              <span>Notifications</span>
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-xs text-primary hover:bg-transparent font-mono"
                  onClick={markAllAsRead}
                >
                  <Check className="h-3 w-3 mr-1" />
                  Mark all as read
                </Button>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            {notifications.length > 0 ? (
              <>
                {notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className={cn(
                      "flex flex-col items-start p-3 cursor-pointer",
                      !notification.read && "bg-primary/5"
                    )}
                  >
                    <div className="flex items-start w-full">
                      <div className="flex-1">
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-xs text-muted-foreground font-mono">
                          {notification.time}
                        </div>
                      </div>
                      {!notification.read && (
                        <div className="h-2 w-2 rounded-full bg-primary mt-1"></div>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center font-mono text-xs text-primary">
                  View all notifications
                </DropdownMenuItem>
              </>
            ) : (
              <div className="py-6 flex flex-col items-center justify-center text-center">
                <BellOff className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm font-medium">No notifications</p>
                <p className="text-xs text-muted-foreground">
                  You're all caught up!
                </p>
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-9 w-9 rounded-full hover:bg-primary/10"
            >
              <Avatar className="h-9 w-9 ring-2 ring-primary/20 transition-all duration-200 hover:ring-primary/40">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-primary/10 text-primary font-mono">
                  JD
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-56 backdrop-blur-md bg-white/95 dark:bg-black/95"
            align="end"
          >
            <div className="p-2 border-b">
              <div className="flex items-center gap-2 p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-primary/10 text-primary font-mono">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium font-mono">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </div>
            </div>
            
            <div className="p-1">
              <DropdownMenuItem className="gap-2 cursor-pointer">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 cursor-pointer">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 cursor-pointer">
                <HelpCircle className="h-4 w-4" />
                <span>Help & Support</span>
              </DropdownMenuItem>
            </div>
            
            <DropdownMenuSeparator />
            
            <div className="p-1">
              <DropdownMenuItem className="gap-2 text-rose-500 cursor-pointer">
                <LogOut className="h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
