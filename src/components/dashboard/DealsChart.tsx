
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface DealsChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  className?: string;
}

const DealsChart = ({ data, className }: DealsChartProps) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <Card className={className}>
      <CardHeader className="pb-0">
        <CardTitle className="text-lg">Deals by Stage</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-background p-2 rounded-md shadow-md border border-border">
                        <p className="font-medium">{data.name}</p>
                        <p className="text-sm text-accent">${data.value.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">
                          {((data.value / total) * 100).toFixed(1)}% of total
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center">
              <div
                className="h-3 w-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              />
              <div className="text-sm">
                <span className="font-medium">{item.name}</span>
                <span className="text-muted-foreground ml-1 text-xs">
                  ${item.value.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DealsChart;
