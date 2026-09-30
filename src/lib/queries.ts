import { mockExercises } from "@/data/mockExercises";
import { mockPrograms } from "@/data/mockRoutines";
import type { Exercise, WorkoutProgram } from "@/types/exercise";

/**
 * Data-access seam for LetsGym.
 *
 * Everything reads from the static mock arrays for now. When Supabase/Neon is
 * connected, replace the bodies here (likely making them `async`) and the rest
 * of the app shouldn't need to change much — components already treat these as
 * the only way to reach data.
 */

export function getAllExercises(): Exercise[] {
  return mockExercises;
}

export function getExerciseById(id: string): Exercise | undefined {
  return mockExercises.find((exercise) => exercise.id === id);
}

/** Resolve an exercise's alternatives to real `Exercise` records (unknown ids dropped). */
export function getAlternatives(exercise: Exercise): Exercise[] {
  return exercise.alternativeExerciseIds
    .map((id) => getExerciseById(id))
    .filter((item): item is Exercise => item !== undefined);
}

export function getAllPrograms(): WorkoutProgram[] {
  return mockPrograms;
}

export function getProgramByDays(
  daysPerWeek: number
): WorkoutProgram | undefined {
  return mockPrograms.find((program) => program.daysPerWeek === daysPerWeek);
}
