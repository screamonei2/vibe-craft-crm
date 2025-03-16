
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cva, type VariantProps } from "class-variance-authority";

const statCardVariants = cva("", {
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      primary: "bg-primary/10 text-primary border-none",
      accent: "bg-accent/10 text-accent border-none",
      outline: "border-2 border-primary/20",
      success: "bg-emerald-500/10 text-emerald-600 border-none",
      warning: "bg-amber-500/10 text-amber-600 border-none",
    },
    size: {
      default: "p-6",
      sm: "p-4",
      lg: "p-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface StatCardProps extends VariantProps<typeof statCardVariants> {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({
  title,
  value,
  icon,
  description,
  trend,
  variant,
  size,
  className,
}: StatCardProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden card-shadow card-shadow-hover",
        statCardVariants({ variant, size }),
        className
      )}
    >
      <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="h-5 w-5">{icon}</div>}
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend && (
          <div
            className={cn(
              "flex items-center text-xs mt-2",
              trend.isPositive ? "text-emerald-500" : "text-rose-500"
            )}
          >
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
