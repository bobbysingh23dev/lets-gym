import Link from "next/link";
import { Clock } from "lucide-react";
import type { RoutineDay } from "@/types/exercise";
import { getExerciseById } from "@/lib/queries";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

/** A single day of a program, listing its prescribed exercises. */
export function RoutineDayCard({ day }: { day: RoutineDay }) {
  return (
    <Card>
      <CardHeader className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Day {day.dayNumber}
          </p>
          <CardTitle className="mt-0.5 text-lg">{day.focusName}</CardTitle>
        </div>
        <Badge tone="accent">
          <Clock className="size-3" />
          {day.durationMins} min
        </Badge>
      </CardHeader>

      <CardContent className="space-y-2">
        {day.exercises.map((item) => {
          const exercise = getExerciseById(item.exerciseId);

          return (
            <Link
              key={item.exerciseId}
              href={`/exercise/${item.exerciseId}`}
              className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background/40 px-3 py-2 text-sm transition-colors hover:border-accent/40 hover:text-accent"
            >
              <span className="font-medium">
                {exercise?.title ?? item.exerciseId}
              </span>
              <span className="shrink-0 text-muted">
                {item.sets} × {item.reps}
              </span>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
