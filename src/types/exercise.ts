/**
 * Core domain types for LetsGym.
 *
 * These interfaces are the single source of truth for the shape of exercise
 * and program data. Right now they back the static mock files in `src/data`,
 * and later they'll map onto the Supabase/Neon (PostgreSQL) tables — so keep
 * them normalized (routines reference exercises by id rather than embedding
 * full exercise objects).
 */

/** Primary and secondary muscles an exercise can train. */
export type MuscleGroup =
  | "Chest"
  | "Back"
  | "Lats"
  | "Traps"
  | "Shoulders"
  | "Biceps"
  | "Triceps"
  | "Forearms"
  | "Core"
  | "Quads"
  | "Hamstrings"
  | "Glutes"
  | "Calves"
  | "Full Body";

/** Equipment required to perform an exercise. */
export type Equipment =
  | "Barbell"
  | "Dumbbell"
  | "Kettlebell"
  | "Machine"
  | "Cable"
  | "Smith Machine"
  | "Resistance Band"
  | "Bodyweight";

/** Relative experience level a movement is appropriate for. */
export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

/** Beginner-oriented loading advice shown on the exercise detail page. */
export interface StartingWeightGuidance {
  /** Human-readable starting load, units included. e.g. "2 × 5–8 kg dumbbells". */
  beginnerRange: string;
  /** Optional cue for when and how to add weight. */
  progressionTip?: string;
}

/**
 * A single exercise in the library.
 *
 * `id` is a URL-safe slug (also used as the `/exercise/[id]` route segment).
 * `alternativeExerciseIds` reference other `Exercise.id` values.
 */
export interface Exercise {
  id: string;
  title: string;
  targetMuscle: MuscleGroup;
  synergists: MuscleGroup[];
  equipment: Equipment;
  difficulty: Difficulty;
  /** Path to a looping demo GIF, served from `/public` (e.g. "/exercises/x.gif"). */
  gifUrl: string;
  startingWeightGuidance: StartingWeightGuidance;
  /** Safety/form warning surfaced prominently in the UI. */
  injuryNote: string;
  /** Slugs of comparable movements (must match other `Exercise.id`s to resolve). */
  alternativeExerciseIds: string[];
  /** Ordered, step-by-step setup and execution cues. */
  setupSteps: string[];
}

/**
 * A prescribed exercise within a routine day: which movement, and the
 * beginner set/rep/rest scheme for it. References an `Exercise` by id.
 */
export interface RoutineExercise {
  exerciseId: string;
  sets: number;
  /** Rep target — a string to allow ranges like "8–12" or "AMRAP". */
  reps: string;
  /** Rest between sets, in seconds. */
  restSeconds: number;
}

/** One training day within a program. */
export interface RoutineDay {
  /** 1-indexed position within the program's week. */
  dayNumber: number;
  /** Display name for the day's emphasis, e.g. "Push" or "Full Body A". */
  focusName: string;
  /** Estimated session length in minutes. */
  durationMins: number;
  exercises: RoutineExercise[];
}

/** How many training days a program schedules per week. */
export type DaysPerWeek = 1 | 2 | 3 | 4 | 5 | 6;

/** High-level split style of a program. */
export type ProgramType = "Full Body" | "Upper/Lower" | "PPL";

/** A complete, selectable workout program. */
export interface WorkoutProgram {
  id: string;
  /** Friendly display name, e.g. "3-Day Full Body". */
  name: string;
  programType: ProgramType;
  daysPerWeek: DaysPerWeek;
  days: RoutineDay[];
}
