import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonStyles } from "@/components/ui";
import { Reveal } from "./Reveal";

/** Closing call-to-action band — the last push toward building a routine. */
export function FinalCta() {
  return (
    <Reveal>
      <section className="relative isolate overflow-hidden rounded-2xl border border-accent/30 bg-surface p-8 text-center sm:p-14">
        {/* Neon glow wash behind the copy */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 120% at 50% 0%, color-mix(in srgb, var(--color-accent) 22%, transparent), transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* Faint HUD grid, reused from the hero */}
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-4xl uppercase leading-[0.95] text-balance sm:text-5xl md:text-6xl">
            Your first rep is one{" "}
            <span className="hero-text-glow text-accent">tap away.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted sm:text-lg">
            Build a beginner-safe routine in under a minute — free, no account
            required to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/planner"
              className={buttonStyles("primary", "lg", "hero-cta")}
            >
              Build my routine
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/exercise/goblet-squat"
              className={buttonStyles("secondary", "lg")}
            >
              Browse an exercise
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
