import { Sparkles, PlayCircle, Gauge, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI-built routines",
    body: "A plan shaped around your schedule and split — not a generic template you have to decode.",
  },
  {
    icon: PlayCircle,
    title: "Every move, demoed",
    body: "A looping demo for each exercise, so you know exactly what good form looks like before you lift.",
  },
  {
    icon: Gauge,
    title: "Real starting weights",
    body: "Concrete beginner loads and clear rules for when to add more. No vague “lift what feels right.”",
  },
  {
    icon: ShieldCheck,
    title: "Injury-safe cues",
    body: "Form warnings and safe ranges baked into every movement, so your first months build habits, not strains.",
  },
] as const;

/** Value-proposition grid — four cards on why LetsGym beats going in blind. */
export function WhyLetsGym() {
  return (
    <section>
      <Reveal>
        <SectionHeading
          index="02"
          eyebrow="Why LetsGym"
          title="Built for the first-timer, not the influencer"
          description="Everything a beginner actually needs to walk in prepared — and nothing that gets in the way."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {FEATURES.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 80}>
            <div className="group flex h-full gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50 hover:bg-surface-2">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent ring-1 ring-inset ring-accent/25 transition-transform group-hover:scale-105">
                <feature.icon className="size-5" strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
