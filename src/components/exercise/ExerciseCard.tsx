import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Exercise } from "@/types/exercise";
import { Badge } from "@/components/ui";

/** Compact, linkable summary of an exercise for grids and lists. */
export function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <Link
      href={`/exercise/${exercise.id}`}
      className="group block rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/50 hover:bg-surface-2"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold tracking-tight transition-colors group-hover:text-accent">
            {exercise.title}
          </h3>
          <p className="mt-0.5 text-sm text-muted">
            {exercise.targetMuscle} · {exercise.equipment}
          </p>
        </div>
        <ArrowRight className="size-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Badge tone="accent">{exercise.difficulty}</Badge>
        {exercise.synergists.slice(0, 2).map((muscle) => (
          <Badge key={muscle}>{muscle}</Badge>
        ))}
      </div>
    </Link>
  );
}
