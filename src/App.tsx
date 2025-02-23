import "./App.css";
import { Dashboard } from "@/components/Dashboard";
import { Navbar } from "@/components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
