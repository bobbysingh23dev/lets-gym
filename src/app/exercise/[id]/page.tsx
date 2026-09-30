import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  AlertTriangle,
  ArrowLeft,
  Dumbbell,
  ListOrdered,
  Scale,
} from "lucide-react";
import {
  getAllExercises,
  getAlternatives,
  getExerciseById,
} from "@/lib/queries";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

// Prerender a static page for every exercise in the library at build time.
export function generateStaticParams() {
  return getAllExercises().map((exercise) => ({ id: exercise.id }));
}

// In Next.js 16 `params` is a Promise — await it here too.
export async function generateMetadata({
  params,
}: PageProps<"/exercise/[id]">): Promise<Metadata> {
  const { id } = await params;
  const exercise = getExerciseById(id);

  if (!exercise) {
    return { title: "Exercise not found" };
  }

  return {
    title: exercise.title,
    description: `How to perform the ${exercise.title}: setup steps, beginner starting weight, and safety notes.`,
  };
}

export default async function ExercisePage({
  params,
}: PageProps<"/exercise/[id]">) {
  // `params` is a Promise in Next.js 16 — must be awaited (or read with `use()`
  // in a Client Component). This is the key breaking change from Next 14.
  const { id } = await params;
  const exercise = getExerciseById(id);

  if (!exercise) {
    notFound();
  }

  const alternatives = getAlternatives(exercise);

  return (
    <article className="space-y-8">
      <Link
        href="/planner"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-4" />
        Back to planner
      </Link>

      {/* Header */}
      <header className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Badge tone="accent">{exercise.difficulty}</Badge>
          <Badge>{exercise.targetMuscle}</Badge>
          <Badge>{exercise.equipment}</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {exercise.title}
        </h1>
        <p className="text-muted">
          Works your <span className="text-foreground">{exercise.targetMuscle}</span>
          {exercise.synergists.length > 0 && (
            <> — supported by {exercise.synergists.join(", ")}.</>
          )}
        </p>
      </header>

      {/* Demo GIF (placeholder until real media is dropped in /public/exercises) */}
      <div className="grid aspect-video w-full place-items-center rounded-xl border border-border bg-surface">
        {/* Swap for <Image /> or <img src={exercise.gifUrl} /> once the GIF exists. */}
        <div className="flex flex-col items-center gap-2 text-muted">
          <Dumbbell className="size-8" />
          <span className="text-sm">Demo GIF</span>
          <code className="rounded bg-surface-2 px-2 py-0.5 text-xs">
            {exercise.gifUrl}
          </code>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Setup steps */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex items-center gap-2">
            <ListOrdered className="size-4 text-accent" />
            <CardTitle>How to perform it</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {exercise.setupSteps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent/15 text-xs font-semibold text-accent">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Starting weight */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <Scale className="size-4 text-accent" />
            <CardTitle>Where to start</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-lg font-semibold">
              {exercise.startingWeightGuidance.beginnerRange}
            </p>
            {exercise.startingWeightGuidance.progressionTip && (
              <p className="text-sm leading-relaxed text-muted">
                {exercise.startingWeightGuidance.progressionTip}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Injury / safety note */}
      <div className="flex gap-3 rounded-xl border border-warning/30 bg-warning/10 p-4">
        <AlertTriangle className="size-5 shrink-0 text-warning" />
        <div>
          <p className="text-sm font-semibold text-warning">Form &amp; safety</p>
          <p className="mt-1 text-sm leading-relaxed text-warning/80">
            {exercise.injuryNote}
          </p>
        </div>
      </div>

      {/* Alternatives (only rendered when the referenced movements exist) */}
      {alternatives.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold tracking-tight">
            Try instead
          </h2>
          <div className="flex flex-wrap gap-2">
            {alternatives.map((alt) => (
              <Link
                key={alt.id}
                href={`/exercise/${alt.id}`}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent/50 hover:text-accent"
              >
                {alt.title}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
