import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Two-digit section index, e.g. "01". Rendered in the mono eyebrow. */
  index: string;
  /** Short uppercase label next to the index. */
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Consistent, systematic section header: a numbered mono eyebrow, a display
 * title, and an optional supporting line. Shared by every landing section so
 * the page reads as one coherent system.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest">
        <span className="tabular-nums text-accent">{index}</span>
        <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
        <span className="text-muted">{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
