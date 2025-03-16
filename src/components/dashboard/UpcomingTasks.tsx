
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Plus } from "lucide-react";

interface Task {
  id: string;
  title: string;
  date: Date;
  completed: boolean;
  priority: "high" | "medium" | "low";
}

interface UpcomingTasksProps {
  tasks: Task[];
  className?: string;
}

const UpcomingTasks = ({ tasks, className }: UpcomingTasksProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-rose-500/10 text-rose-600";
      case "medium":
        return "bg-amber-500/10 text-amber-600";
      case "low":
        return "bg-emerald-500/10 text-emerald-600";
      default:
        return "";
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
        <Button size="sm" className="h-8 gap-1">
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start space-x-4 p-3 rounded-md hover:bg-secondary/50 transition-colors"
            >
              <Checkbox id={task.id} checked={task.completed} />
              <div className="space-y-1 flex-1">
                <label
                  htmlFor={task.id}
                  className="font-medium cursor-pointer text-sm"
                >
                  {task.title}
                </label>
                <p className="text-xs text-muted-foreground">
                  {format(task.date, "MMM d, h:mm a")}
                </p>
              </div>
              <div
                className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingTasks;
