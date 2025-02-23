type ProjectStatus = "over-budget" | "on-track" | "under-budget";

interface Project {
  name: string;
  company: string;
  budget: number;
  profitability: number;
  actualHours: number;
  soldHours: number;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    name: "Insurance App",
    company: "Veriti",
    budget: 70000,
    profitability: -2500,
    actualHours: 1100,
    soldHours: 1000,
    status: "over-budget",
  },
  {
    name: "Neo",
    company: "Bankia",
    budget: 70000,
    profitability: 4000,
    actualHours: 1100,
    soldHours: 1000,
    status: "on-track",
  },
  {
    name: "VR Website",
    company: "Barca",
    budget: 70000,
    profitability: 4000,
    actualHours: 1100,
    soldHours: 2000,
    status: "under-budget",
  },
  {
    name: "VR Website",
    company: "Barca",
    budget: 70000,
    profitability: 4000,
    actualHours: 1100,
    soldHours: 1100,
    status: "under-budget",
  },
];

export const data = [
  { name: "Over Budget", value: 19, color: "#FF4D4F" },
  { name: "On Budget", value: 33, color: "#7C8DB5" },
  { name: "Under Budget", value: 48, color: "#41E8DD" },
];

export const navItems = [
  { name: "Dashboard", href: "/", active: true },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Clients", href: "/clients" },
  { name: "Time", href: "/time" },
  { name: "Reports", href: "/reports" },
];

export const revenueData = [
  { date: "19 June", cost: 400 },
  { date: "20 June", cost: 1000 },
  { date: "21 June", cost: 3500 },
  { date: "22 June", cost: 3400 },
  { date: "23 June", cost: 4200 },
  { date: "24 June", cost: 6500 },
  { date: "25 June", cost: 6500 },
];
