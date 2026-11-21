import { createContext, useContext } from "react";
import type { HabitType } from "../types/Types";

type Context = {
  habits: HabitType[];
  addHabit: (habit: { id: number; name: string }) => void;
  deleteHabit: (id: number) => void;
  toggleHabit: (id: number, date: Date) => void;
};

export const HabitContext = createContext<null | Context>(null);

export function useHabits() {
  const habitContext = useContext(HabitContext);
  if (habitContext == null) throw new Error("Null context");

  return habitContext;
}
