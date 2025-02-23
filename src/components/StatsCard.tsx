import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  value: number;
  label: string;
  icon: LucideIcon;
  variant?: "default" | "destructive";
}

export function StatsCard({ value, label, icon: Icon, variant = "default" }: StatsCardProps) {
  return (
    <Card className={`p-4 ${variant === "destructive" ? "bg-destructive/20" : ""}`}>
      <div className="mb-0">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
          <Icon
            className={`h-8 w-8 text-[#007d75] ${
              variant === "destructive" ? "text-destructive" : "text-[#007d75]"
            } `}
          />
        </div>
      </div>
      <h3 className="text-4xl font-bold mb-2 text-center">{value}</h3>
      <p
        className={`${
          variant === "destructive" ? "text-destructive" : "text-muted-foreground"
        } text-center`}
      >
        {label}
      </p>
    </Card>
  );
}
