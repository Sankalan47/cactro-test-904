import { Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { navItems } from "@/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-[#1C1F2B] px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="text-[#41E8DD] text-2xl font-bold">H</span>
            <span className="text-white text-2xl font-bold">OURS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm ${
                  item.active
                    ? "text-[#41E8DD] border-b-2 border-[#41E8DD] pb-1"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Bell className="h-5 w-5" />
          </Button>

          <div className="hidden sm:flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <span className="text-gray-400">Mario</span>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-400">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#1C1F2B] p-6">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm ${
                      item.active ? "text-[#41E8DD]" : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="sm:hidden flex items-center space-x-2 pt-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <span className="text-gray-400">Mario</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
