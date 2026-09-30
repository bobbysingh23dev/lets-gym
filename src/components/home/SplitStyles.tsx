import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const SPLITS = [
  {
    name: "Full Body",
    cadence: "2–3 days / week",
    forWho: "Total beginners",
    desc: "Hit every muscle each session. The most practice per movement with the least overwhelm.",
    perks: ["Fastest to learn", "Flexible schedule", "Great for month one"],
    recommended: true,
  },
  {
    name: "Upper / Lower",
    cadence: "4 days / week",
    forWho: "Ready for more",
    desc: "Alternate upper- and lower-body days to add volume once the basics feel natural.",
    perks: ["More sets per muscle", "Balanced recovery", "Clear day structure"],
    recommended: false,
  },
  {
    name: "Push / Pull / Legs",
    cadence: "5–6 days / week",
    forWho: "Serious about it",
    desc: "The classic high-frequency split — Push, Pull, Legs — for when the gym is a habit.",
    perks: ["Highest frequency", "Maximum volume", "Bodybuilder favourite"],
    recommended: false,
  },
] as const;

/** Split-style showcase — the three program shapes the planner can generate. */
export function SplitStyles() {
  return (
    <section>
      <Reveal>
        <SectionHeading
          index="03"
          eyebrow="Split styles"
          title="Three ways to build your week"
          description="Start simple and level up when you're ready. Every split is programmed beginner-safe from day one."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {SPLITS.map((split, i) => (
          <Reveal key={split.name} delay={i * 90}>
            <div
              className={cn(
                "group flex h-full flex-col rounded-xl border bg-surface p-6 transition-colors",
                split.recommended
                  ? "border-accent/50 ring-1 ring-inset ring-accent/20"
                  : "border-border hover:border-accent/50 hover:bg-surface-2"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {split.forWho}
                </span>
                {split.recommended ? (
                  <Badge tone="accent">Recommended</Badge>
                ) : null}
              </div>

              <h3 className="mt-3 font-display text-3xl uppercase leading-none">
                {split.name}
              </h3>
              <p className="mt-1 text-sm text-accent">{split.cadence}</p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {split.desc}
              </p>

              <ul className="mt-5 space-y-2">
                {split.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <Check
                      className="size-4 shrink-0 text-accent"
                      strokeWidth={2.5}
                    />
                    {perk}
                  </li>
                ))}
              </ul>

              <Link
                href="/planner"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Build this split
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
