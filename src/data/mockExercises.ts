import type { Exercise } from "@/types/exercise";

/**
 * Static exercise library used to build the UI before Supabase/Neon is wired up.
 *
 * Notes:
 * - `gifUrl` points at `/public/exercises/*.gif`. Drop real demo GIFs there, or
 *   the detail page will show its placeholder panel — no broken layout either way.
 * - `alternativeExerciseIds` reference curated, muscle-accurate slugs that don't
 *   exist in the library yet. `getAlternatives()` resolves only real matches, so
 *   the UI degrades gracefully until those movements are seeded.
 */
export const mockExercises: Exercise[] = [
  {
    id: "incline-dumbbell-press",
    title: "Incline Dumbbell Press",
    targetMuscle: "Chest",
    synergists: ["Shoulders", "Triceps"],
    equipment: "Dumbbell",
    difficulty: "Beginner",
    gifUrl: "/exercises/incline-dumbbell-press.gif",
    startingWeightGuidance: {
      beginnerRange: "2 × 5–8 kg dumbbells",
      progressionTip:
        "Add ~2 kg per hand once you can complete 12 clean reps on your last set.",
    },
    injuryNote:
      "Keep your shoulder blades pinned to the bench and a light arch in your lower back. Don't let your elbows flare past ~75° — it overloads the shoulder joint.",
    alternativeExerciseIds: ["barbell-incline-press", "machine-chest-press"],
    setupSteps: [
      "Set the bench to a 30–45° incline and sit back with a dumbbell resting on each thigh.",
      "Kick the dumbbells up one at a time and press them to arm's length over your upper chest.",
      "Pull your shoulder blades back and down, keeping your wrists stacked over your elbows.",
      "Lower under control until the dumbbells are level with your chest, elbows at ~45°.",
      "Press back up and slightly together at the top without locking out hard.",
    ],
  },
  {
    id: "lat-pulldown",
    title: "Lat Pulldown",
    targetMuscle: "Lats",
    synergists: ["Biceps", "Traps"],
    equipment: "Cable",
    difficulty: "Beginner",
    gifUrl: "/exercises/lat-pulldown.gif",
    startingWeightGuidance: {
      beginnerRange: "20–30 kg on the stack",
      progressionTip:
        "Move up one plate when you can control 12 reps without leaning back for momentum.",
    },
    injuryNote:
      "Pull the bar to your upper chest — never behind your neck. Avoid heaving with your lower back; if you're swinging, drop the weight.",
    alternativeExerciseIds: ["assisted-pull-up", "straight-arm-pulldown"],
    setupSteps: [
      "Set the thigh pad so your knees fit snugly and your feet stay flat on the floor.",
      "Grip the bar slightly wider than shoulder-width with palms facing away.",
      "Sit tall, then lean back only 10–15° and lift your chest toward the bar.",
      "Drive your elbows down and back, pulling the bar to your upper chest.",
      "Return under control until your arms are fully extended and your lats stretch.",
    ],
  },
  {
    id: "goblet-squat",
    title: "Goblet Squat",
    targetMuscle: "Quads",
    synergists: ["Glutes", "Core"],
    equipment: "Kettlebell",
    difficulty: "Beginner",
    gifUrl: "/exercises/goblet-squat.gif",
    startingWeightGuidance: {
      beginnerRange: "8–12 kg kettlebell or dumbbell",
      progressionTip:
        "Increase by ~4 kg once you can hit 12 reps keeping your torso upright.",
    },
    injuryNote:
      "Keep your heels flat and let your knees track over your toes. Brace your core before descending, and stop just above any knee or lower-back pain.",
    alternativeExerciseIds: ["barbell-back-squat", "leg-press"],
    setupSteps: [
      "Hold a kettlebell or dumbbell vertically against your chest with both hands.",
      "Stand with feet a little wider than shoulder-width, toes turned slightly out.",
      "Take a breath, brace your core, and push your hips back as you bend your knees.",
      "Descend until your elbows brush the inside of your knees, keeping your chest tall.",
      "Drive through your whole foot to stand back up, squeezing your glutes at the top.",
    ],
  },
];
