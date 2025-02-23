"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import User1 from "@/assets/user1.jpg";
import User2 from "@/assets/user2.jpg";
import User3 from "@/assets/user3.jpg";
import User4 from "@/assets/user4.jpg";
import User5 from "@/assets/user5.jpg";
interface TeamMember {
  id: string;
  name: string;
  role: string;
  mood: number;
  image: string;
}

const initialTeamMembers: TeamMember[] = [
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

export function TeamMood() {
  const [teamMembers, setTeamMembers] = React.useState(initialTeamMembers);
  const [draggingId, setDraggingId] = React.useState<string | null>(null);
  const sliderRefs = React.useRef<Map<string, HTMLDivElement>>(new Map());

  const handleDragStart = (memberId: string) => {
    setDraggingId(memberId);
  };

  const handleDrag = (e: React.MouseEvent | React.TouchEvent, memberId: string) => {
    if (draggingId !== memberId) return;

    const sliderEl = sliderRefs.current.get(memberId);
    if (!sliderEl) return;

    const rect = sliderEl.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    let percentage = ((clientX - rect.left) / rect.width) * 100;

    // Clamp the percentage between 0 and 100
    percentage = Math.max(0, Math.min(100, percentage));

    setTeamMembers((prev) =>
      prev.map((member) => (member.id === memberId ? { ...member, mood: percentage } : member))
    );
  };

  const handleDragEnd = React.useCallback(() => {
    setDraggingId(null);
  }, []);

  React.useEffect(() => {
    const handleMouseUp = () => {
      handleDragEnd();
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleDragEnd]);

  return (
    <Card>
      <div className="w-full max-w-md space-y-6 p-6">
        <h2 className="text-xl font-semibold text-gray-900">Team mood</h2>
        <div className="space-y-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-medium text-gray-900">{member.name}</h3>
                </div>
                <p className="text-sm text-gray-500">{member.role}</p>
                <div
                  className="relative mt-2 cursor-pointer touch-none"
                  ref={(el) => el && sliderRefs.current.set(member.id, el)}
                  onMouseDown={() => handleDragStart(member.id)}
                  onTouchStart={() => handleDragStart(member.id)}
                  onMouseMove={(e) => handleDrag(e, member.id)}
                  onTouchMove={(e) => handleDrag(e, member.id)}
                >
                  <div className="h-[2px] w-full bg-gray-200" />
                  <div
                    className={cn(
                      "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-grab transition-all",
                      draggingId === member.id && "cursor-grabbing scale-110"
                    )}
                    style={{
                      left: `${member.mood}%`,
                    }}
                  >
                    {getMoodEmoji(member.mood)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function getMoodEmoji(mood: number) {
  if (mood < 33) return "😠";
  if (mood < 66) return "🙂";
  return "😄";
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
