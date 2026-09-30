"use client";

import { useCallback, useRef } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge, buttonStyles } from "@/components/ui";

const HERO_STATS = [
  { value: "1–6", label: "Day plans" },
  { value: "3", label: "Split styles" },
  { value: "0", label: "Guesswork" },
] as const;

/** Deterministic ember layout — fixed values so server/client HTML match. */
const EMBERS = [
  { left: "12%", dur: "8.5s", delay: "0s" },
  { left: "24%", dur: "10s", delay: "1.6s" },
  { left: "37%", dur: "7.4s", delay: "3.1s" },
  { left: "51%", dur: "11s", delay: "0.7s" },
  { left: "63%", dur: "9s", delay: "2.4s" },
  { left: "74%", dur: "8s", delay: "4.1s" },
  { left: "85%", dur: "10.6s", delay: "1.2s" },
  { left: "93%", dur: "7.8s", delay: "3.6s" },
] as const;

/**
 * Cinematic, high-tech landing hero: looping gym footage graded on-palette,
 * a cursor-tracking neon spotlight, a HUD grid, drifting embers, a rotating
 * glow ring, and staggered kinetic copy. Everything decorative respects
 * `prefers-reduced-motion` (handled in globals.css).
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef(0);

  // Point the neon spotlight at the cursor. Throttled to one write per frame.
  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const el = sectionRef.current;
      if (!el) return;
      const { clientX, clientY } = event;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty(
          "--mx",
          `${((clientX - rect.left) / rect.width) * 100}%`
        );
        el.style.setProperty(
          "--my",
          `${((clientY - rect.top) / rect.height) * 100}%`
        );
      });
    },
    []
  );

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="hero-ring relative isolate overflow-hidden rounded-2xl border border-border bg-surface"
    >
      {/* Looping gym footage. Drop an MP4 at public/videos/gym-hero.mp4 (and an
          optional poster) — the hero falls back to the dark surface if the file
          is absent, so the layout never breaks. */}
      <video
        className="animate-kenburns absolute inset-0 size-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/gym-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/gym-hero.mp4" type="video/mp4" />
      </video>

      {/* HUD grid */}
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Cinematic grade over the footage (darker left, deep fade at bottom). */}
      <div className="hero-scrim pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Neon spotlight following the cursor */}
      <div className="hero-spot pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Slow scanline sweep */}
      <div
        className="hero-scan pointer-events-none absolute inset-x-0 top-0"
        aria-hidden="true"
      />

      {/* Drifting neon embers */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {EMBERS.map((ember, i) => (
          <span
            key={i}
            className="hero-ember"
            style={
              {
                left: ember.left,
                "--dur": ember.dur,
                "--delay": ember.delay,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* Film grain for depth */}
      <div
        className="bg-grain pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[66vh] flex-col justify-end gap-6 p-8 sm:p-12 md:min-h-[78vh]">
        <Badge tone="accent" className="hero-rise w-fit">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <Sparkles className="size-3.5" />
          AI-powered training for beginners
        </Badge>

        <h1
          className="hero-rise max-w-4xl font-display text-5xl uppercase leading-[0.9] text-balance sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.06s" }}
        >
          Train with confidence from your{" "}
          <span className="hero-text-glow text-accent">very first rep.</span>
        </h1>

        <p
          className="hero-rise max-w-xl text-lg text-muted"
          style={{ animationDelay: "0.14s" }}
        >
          LetsGym builds your routine, demonstrates every movement, and tells you
          exactly where to start — so you walk in knowing your plan.
        </p>

        <div
          className="hero-rise mt-1 flex flex-wrap gap-3"
          style={{ animationDelay: "0.22s" }}
        >
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

        {/* Stat strip */}
        <div
          className="hero-rise mt-4 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6"
          style={{ animationDelay: "0.3s" }}
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <span className="font-display text-3xl leading-none tabular-nums sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
