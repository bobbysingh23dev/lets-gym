import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { getAllPrograms } from "@/lib/queries";
import { RoutineDayCard } from "@/components/planner/RoutineDayCard";
import { Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Planner",
  description:
    "Your beginner-friendly workout routine, day by day, with sets and reps.",
};

export default function PlannerPage() {
  // For step 1 we render the first seed program. A later step adds the
  // interactive days-per-week / split picker on top of this same data.
  const program = getAllPrograms()[0];

  return (
    <div className="space-y-6">
      <header>
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight">{program.name}</h1>
          <Badge tone="accent">
            <CalendarDays className="size-3" />
            {program.daysPerWeek} days / week
          </Badge>
          <Badge>{program.programType}</Badge>
        </div>
        <p className="mt-1 text-muted">
          Tap any exercise to see how it&apos;s performed and where to start.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {program.days.map((day) => (
          <RoutineDayCard key={day.dayNumber} day={day} />
        ))}
      </div>
    </div>
  );
}
