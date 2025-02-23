"use client";

import { Switch } from "@/components/ui/switch";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { revenueData } from "@/constants";

export function RevenueChart() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h3 className="text-lg text-muted-foreground">Total revenue</h3>
          <p className="text-sm text-muted-foreground">Cost €</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Month</span>
          <Switch />
          <span className="text-sm text-muted-foreground">Week</span>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueData}
            margin={{
              top: 5,
              right: isMobile ? 10 : 20,
              left: isMobile ? -20 : 0,
              bottom: 5,
            }}
          >
            <CartesianGrid
              horizontal={true}
              vertical={true}
              strokeDasharray="3 3"
              stroke="#e5e7eb"
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9CA3AF" }}
              tickFormatter={(value) => (isMobile ? value.split(" ")[0] : value)}
              fontSize={12}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              ticks={[1000, 2000, 3000, 4000, 5000, 6000, 7000]}
              tick={{ fill: "#9CA3AF" }}
              fontSize={12}
              tickFormatter={(value) => (isMobile ? `${value / 1000}k` : value)}
            />
            <Line type="monotone" dataKey="cost" stroke="#41E8DD" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
