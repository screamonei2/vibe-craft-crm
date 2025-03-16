
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
    <Card className={cn("p-5 card-shadow card-shadow-hover", className)}>
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          {client.avatar ? (
            <AvatarImage src={client.avatar} />
          ) : (
            <AvatarFallback className="bg-primary/10 text-primary">
              {getInitials(client.name)}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{client.name}</h3>
            <Badge
              variant="outline"
              className={cn("capitalize", getStatusColor(client.status))}
            >
              {client.status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{client.company}</p>
          <p className="text-sm font-medium">
            ${client.totalValue.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Button size="sm" variant="outline" className="flex-1 gap-1">
          <Mail className="h-4 w-4" />
          Email
        </Button>
        <Button size="sm" variant="outline" className="flex-1 gap-1">
          <Phone className="h-4 w-4" />
          Call
        </Button>
      </div>
    </Card>
  );
};

export default ClientCard;
