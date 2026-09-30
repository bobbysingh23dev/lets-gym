import Link from "next/link";
import { Dumbbell } from "lucide-react";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/planner", label: "Planner" },
  { href: "/exercise/goblet-squat", label: "Exercises" },
] as const;

/** Site-wide footer with brand mark, navigation, and fine print. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border">
      <div className="flex w-full flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-2 text-base font-semibold tracking-tight">
          <span className="grid size-7 place-items-center rounded-lg bg-accent text-accent-foreground">
            <Dumbbell className="size-4" strokeWidth={2.5} />
          </span>
          Lets<span className="text-accent">Gym</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted">
          &copy; {year} LetsGym · Train with confidence.
        </p>
      </div>
    </footer>
  );
}
