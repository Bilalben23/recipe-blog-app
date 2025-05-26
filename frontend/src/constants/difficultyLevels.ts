// src/constants/difficultyLevels.ts

export type Difficulty = "easy" | "medium" | "hard";

interface DifficultyLevelInfo {
    name: string;
    bgColor: string;
}

export const difficultyLevels: Record<Difficulty, DifficultyLevelInfo> = {
    easy: {
        name: "Easy",
        bgColor: "bg-green-100 text-green-800",
    },
    medium: {
        name: "Medium",
        bgColor: "bg-yellow-100 text-yellow-800",
    },
    hard: {
        name: "Hard",
        bgColor: "bg-red-100 text-red-800",
    },
};
