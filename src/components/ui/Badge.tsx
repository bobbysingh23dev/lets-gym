import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeTone = "accent" | "neutral" | "warning";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

/** Small pill label for tags like difficulty, muscle group, or duration. */
export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  const tones: Record<BadgeTone, string> = {
    accent: "border-accent/30 bg-accent/15 text-accent",
    neutral: "border-border bg-surface-2 text-muted",
    warning: "border-warning/30 bg-warning/15 text-warning",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
