import { Card } from "@/components/ui/card";
import { BudgetStatusHeader } from "@/components/BudgetStatusHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { BudgetChart } from "@/components/BudgetChart";
import { AlertTriangle, CheckCircle, RefreshCcw, LayoutGrid, Users } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { RevenueChart } from "./RevenueChart";
import { TeamMood } from "./TeamMood";
import { projects } from "@/constants";

export function Dashboard() {
  return (
    <div className="p-6">
      {/* Top Stats */}
      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <StatsCard value={5} label="Total Projects" icon={LayoutGrid} />
            <StatsCard value={1} label="Completed" icon={CheckCircle} />
            <StatsCard value={3} label="Ongoing" icon={RefreshCcw} />
            <StatsCard value={1} label="Delayed" icon={AlertTriangle} variant="destructive" />
            <StatsCard value={5} label="Employees" icon={Users} />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-6">
            <Card className="p-6">
              <RevenueChart />
            </Card>

            <BudgetChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <TeamMood />
        </div>
      </div>
      {/* Projects Section */}
      <div>
        <BudgetStatusHeader />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
