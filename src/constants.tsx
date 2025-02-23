import User1 from "@/assets/user1.jpg";
import User2 from "@/assets/user2.jpg";
import User3 from "@/assets/user3.jpg";
import User4 from "@/assets/user4.jpg";
import User5 from "@/assets/user5.jpg";

type ProjectStatus = "over-budget" | "on-track" | "under-budget";

interface Project {
  name: string;
  company: string;
  budget: number;
  profitability: number;
  actualHours: number;
  soldHours: number;
  status: ProjectStatus;
  avatar: string;
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
    avatar: User1,
  },
  {
    name: "Neo",
    company: "Bankia",
    budget: 70000,
    profitability: 4000,
    actualHours: 1100,
    soldHours: 1000,
    status: "on-track",
    avatar: User2,
  },
  {
    name: "VR Website",
    company: "Barca",
    budget: 70000,
    profitability: 4000,
    actualHours: 1100,
    soldHours: 2000,
    status: "under-budget",
    avatar: User3,
  },
  {
    name: "VR Website",
    company: "Barca",
    budget: 70000,
    profitability: 4000,
    actualHours: 1100,
    soldHours: 1100,
    status: "under-budget",
    avatar: User4,
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

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  mood: number;
  image: string;
}

export const initialTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Andrea",
    role: "UX Junior",
    mood: 50,
    image: User1,
  },
  {
    id: "2",
    name: "Alvaro",
    role: "Back-end developer",
    mood: 80,
    image: User2,
  },
  {
    id: "3",
    name: "Juan",
    role: "UX Senior",
    mood: 70,
    image: User3,
  },
  {
    id: "4",
    name: "Jose",
    role: "Marketing",
    mood: 30,
    image: User4,
  },
  {
    id: "5",
    name: "Maria",
    role: "UX Junior",
    mood: 60,
    image: User5,
  },
];
