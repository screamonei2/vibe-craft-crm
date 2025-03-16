
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface Activity {
  id: number;
  title: string;
  description: string;
  time: Date;
  type: "client" | "deal" | "task" | "message";
}

interface RecentActivityProps {
  activities: Activity[];
  className?: string;
}

const RecentActivity = ({ activities, className }: RecentActivityProps) => {
  const getActivityTypeColor = (type: Activity["type"]) => {
    switch (type) {
      case "client":
        return "bg-blue-500";
      case "deal":
        return "bg-emerald-500";
      case "task":
        return "bg-amber-500";
      case "message":
        return "bg-violet-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className={cn("card-shadow", className)}>
      <CardHeader className="pb-3">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex px-6">
              <div className="mr-4 flex flex-col items-center">
                <div
                  className={cn("h-2 w-2 rounded-full", getActivityTypeColor(activity.type))}
                />
                <div className="h-full w-[1px] bg-border" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {format(activity.time, "h:mm a 'on' MMM d, yyyy")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
