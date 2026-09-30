import { SlidersHorizontal, ListChecks, Dumbbell } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    icon: SlidersHorizontal,
    title: "Pick your days",
    body: "Tell us how many days a week you can train and the split style you want. Takes seconds.",
  },
  {
    n: "02",
    icon: ListChecks,
    title: "Get your routine",
    body: "We build a beginner-safe plan — every training day, every exercise, sets and reps mapped out.",
  },
  {
    n: "03",
    icon: Dumbbell,
    title: "Train with confidence",
    body: "Each move ships with a demo, a starting weight, and form cues — so you never have to guess.",
  },
] as const;

/** Three-step "how it works" strip, HUD-numbered and on-brand. */
export function HowItWorks() {
  return (
    <section>
      <Reveal>
        <SectionHeading
          index="01"
          eyebrow="How it works"
          title="From zero to a plan in three steps"
          description="No spreadsheets, no YouTube rabbit holes. A clear path from your first login to your first set."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <Reveal key={step.n} delay={i * 90}>
            <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 hover:bg-surface-2">
              {/* Oversized ghost number in the corner */}
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-7xl leading-none text-surface-2 transition-colors group-hover:text-accent/10"
                aria-hidden="true"
              >
                {step.n}
              </span>

              <span className="relative grid size-11 place-items-center rounded-lg bg-accent/15 text-accent ring-1 ring-inset ring-accent/25">
                <step.icon className="size-5" strokeWidth={2} />
              </span>

              <h3 className="relative mt-5 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
