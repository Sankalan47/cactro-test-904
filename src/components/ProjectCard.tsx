import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertTriangle, CheckCircle } from "lucide-react";

interface ProjectCardProps {
  name: string;
  company: string;
  budget: number;
  profitability: number;
  actualHours: number;
  soldHours: number;
  status: "over-budget" | "on-track" | "under-budget";
  avatar: string;
}

export function ProjectCard({
  name,
  company,
  budget,
  profitability,
  actualHours,
  soldHours,
  status,
  avatar,
}: ProjectCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "over-budget":
        return "bg-red-500";
      case "on-track":
        return "bg-yellow-500";
      case "under-budget":
        return "bg-[#007d75]";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "over-budget":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "under-budget":
        return <CheckCircle className="h-4 w-4 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Total Budget</span>
            <span>{budget.toLocaleString()}€</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Profitability (100%)</span>
            <span className={profitability < 0 ? "text-destructive" : "text-primary"}>
              {profitability > 0 && "+"}
              {profitability.toLocaleString()}€
            </span>
          </div>
        </div>

        <div>
          <div className="w-full h-2.5 bg-muted/30 rounded-full overflow-hidden">
            <div
              className={`h-full ${getStatusColor()}`}
              style={{
                width: `${(actualHours / soldHours) * 100}%`,
                opacity: status === "on-track" ? "0.7" : "1",
              }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-sm">
            <span className="text-muted-foreground">Actual hours: {actualHours}</span>
            <div className="flex items-center gap-1">
              {getStatusIcon()}
              <span className={status === "over-budget" ? "text-destructive" : ""}>
                {status === "over-budget"
                  ? `${actualHours - soldHours} hours over Budget!`
                  : `${soldHours} sold hours`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
