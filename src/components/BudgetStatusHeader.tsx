import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Download, Filter, Plus, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function BudgetStatusHeader() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-3 sm:items-center mb-4">
      <h2 className="text-2xl font-semibold">Budget status</h2>

      {/* Desktop View */}
      <div className="hidden sm:flex items-center gap-2">
        <Button variant="default" className="bg-[#007d75]">
          <Plus className="mr-2 h-4 w-4" /> Add New Project
        </Button>
        <Button variant="outline" className="border-[#007d75] text-[#007d75]">
          <Download className="mr-2 h-4 w-4 text-[#007d75]" /> Download report
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="border-[#007d75] text-[#007d75]">
              <CalendarIcon className="mr-2 h-4 w-4" />
              dd/mm/yyyy - dd/mm/yyyy
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="range" />
          </PopoverContent>
        </Popover>
        <Button variant="outline" className="border-[#007d75] text-[#007d75]">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      {/* Mobile View */}
      <div className="flex sm:hidden items-center gap-2 w-full">
        <Button variant="default" className="bg-[#007d75] flex-1">
          <Plus className="mr-2 h-4 w-4" /> Add New Project
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="border-[#007d75] text-[#007d75]">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" /> Download report
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CalendarIcon className="mr-2 h-4 w-4" /> Select date range
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Filter className="mr-2 h-4 w-4" /> Filter
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
