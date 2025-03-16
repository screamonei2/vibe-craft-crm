
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MoreHorizontal, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface ClientCardProps {
  client: {
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    avatar?: string;
    status: "active" | "inactive" | "lead";
    totalValue: number;
  };
  className?: string;
}

const ClientCard = ({ client, className }: ClientCardProps) => {
  const [starred, setStarred] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20";
      case "inactive":
        return "bg-slate-500/10 text-slate-500 hover:bg-slate-500/20";
      case "lead":
        return "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20";
      default:
        return "";
    }
  };

  return (
    <Card className={cn("p-5 overflow-hidden backdrop-blur-sm", 
      starred ? "border-2 border-primary/50 bg-primary/5" : "bg-white/90 border",
      className)}
    >
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12 ring-2 ring-primary/20">
          {client.avatar ? (
            <AvatarImage src={client.avatar} />
          ) : (
            <AvatarFallback className="bg-primary/10 text-primary font-mono">
              {getInitials(client.name)}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex-1 space-y-1 overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="font-medium truncate font-mono">{client.name}</h3>
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={() => setStarred(!starred)}
              >
                <Star 
                  className={cn("h-4 w-4", 
                    starred ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                  )} 
                />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Client</DropdownMenuItem>
                  <DropdownMenuItem>Add Deal</DropdownMenuItem>
                  <DropdownMenuItem>Schedule Meeting</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Client</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className={cn("capitalize text-xs", getStatusColor(client.status))}
            >
              <span className="mr-1">•</span>
              {client.status}
            </Badge>
            <p className="text-sm text-muted-foreground truncate">{client.company}</p>
          </div>
          <p className="text-sm font-medium font-mono tracking-tight">
            ${client.totalValue.toLocaleString()}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Button size="sm" variant="outline" className="gap-1 bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 border-primary/20">
          <Mail className="h-3.5 w-3.5" />
          <span className="text-xs font-mono">Email</span>
        </Button>
        <Button size="sm" variant="outline" className="gap-1 bg-gradient-to-r from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/20 border-accent/20">
          <Phone className="h-3.5 w-3.5" />
          <span className="text-xs font-mono">Call</span>
        </Button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-dashed grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
        <div className="text-muted-foreground">Email:</div>
        <div className="font-mono truncate">{client.email}</div>
        <div className="text-muted-foreground">Phone:</div>
        <div className="font-mono">{client.phone}</div>
      </div>
    </Card>
  );
};

export default ClientCard;
