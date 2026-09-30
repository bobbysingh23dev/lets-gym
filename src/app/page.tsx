import Link from "next/link";
import { getAllExercises } from "@/lib/queries";
import { ExerciseCard } from "@/components/exercise/ExerciseCard";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyLetsGym } from "@/components/home/WhyLetsGym";
import { SplitStyles } from "@/components/home/SplitStyles";
import { FinalCta } from "@/components/home/FinalCta";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Reveal } from "@/components/home/Reveal";

export default function HomePage() {
  const exercises = getAllExercises();

  return (
    <div className="space-y-24 pb-8">
      <Hero />

      <HowItWorks />

      <WhyLetsGym />

      <SplitStyles />

      {/* Featured exercises */}
      <section>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              index="04"
              eyebrow="The library"
              title="Popular beginner moves"
              description="Every exercise comes with a demo, starting weights, and safe-form cues."
            />
            <Link
              href="/planner"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              See a full routine →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exercises.map((exercise, i) => (
            <Reveal key={exercise.id} delay={i * 80}>
              <ExerciseCard exercise={exercise} />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
