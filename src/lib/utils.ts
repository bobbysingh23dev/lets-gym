/**
 * Join conditional class names into a single string.
 *
 * A dependency-free stand-in for `clsx`. If you later need Tailwind class
 * conflict resolution, swap this for `clsx` + `tailwind-merge`.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
