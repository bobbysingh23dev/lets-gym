import type { WorkoutProgram } from "@/types/exercise";

/**
 * Static workout programs for building the planner UI ahead of the database.
 *
 * With only three seed exercises, each day reuses them under different set/rep
 * schemes — enough to exercise the layout. Real programs will pull a fuller
 * library per muscle group once Supabase/Neon is connected.
 */
export const mockPrograms: WorkoutProgram[] = [
  {
    id: "full-body-3day",
    name: "3-Day Full Body",
    programType: "Full Body",
    daysPerWeek: 3,
    days: [
      {
        dayNumber: 1,
        focusName: "Full Body A",
        durationMins: 45,
        exercises: [
          { exerciseId: "goblet-squat", sets: 3, reps: "8–12", restSeconds: 90 },
          { exerciseId: "incline-dumbbell-press", sets: 3, reps: "8–12", restSeconds: 90 },
          { exerciseId: "lat-pulldown", sets: 3, reps: "10–12", restSeconds: 75 },
        ],
      },
      {
        dayNumber: 2,
        focusName: "Full Body B",
        durationMins: 40,
        exercises: [
          { exerciseId: "lat-pulldown", sets: 4, reps: "8–10", restSeconds: 90 },
          { exerciseId: "goblet-squat", sets: 3, reps: "10–15", restSeconds: 75 },
          { exerciseId: "incline-dumbbell-press", sets: 3, reps: "10–12", restSeconds: 75 },
        ],
      },
      {
        dayNumber: 3,
        focusName: "Full Body C",
        durationMins: 45,
        exercises: [
          { exerciseId: "incline-dumbbell-press", sets: 4, reps: "6–10", restSeconds: 120 },
          { exerciseId: "goblet-squat", sets: 3, reps: "12–15", restSeconds: 75 },
          { exerciseId: "lat-pulldown", sets: 3, reps: "12–15", restSeconds: 60 },
        ],
      },
    ],
  },
];
