import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { data } from "@/constants";

export function BudgetChart() {
  const [view, setView] = useState<"profitability" | "status">("profitability");

  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="font-semibold text-lg">Budget</h3>
        <div className="flex items-center gap-2">
          <span className={view === "profitability" ? "text-foreground" : "text-muted-foreground"}>
            Profitability
          </span>
          <Switch
            checked={view === "status"}
            onCheckedChange={(checked) => setView(checked ? "status" : "profitability")}
          />
          <span className={view === "status" ? "text-foreground" : "text-muted-foreground"}>
            Status
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={110}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  content={({ viewBox }) => {
                    if (!viewBox) return null;
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    const { cx, cy } = viewBox;
                    return (
                      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={cx} y={cy} className="text-4xl font-bold" fill="currentColor">
                          5
                        </tspan>
                        <tspan
                          x={cx}
                          y={cy + 25}
                          className="text-sm text-muted-foreground"
                          fill="currentColor"
                        >
                          Total projects
                        </tspan>
                      </text>
                    );
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-8 mt-6">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-muted-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
