import { isSameDay } from "date-fns";
import { type ReactNode } from "react";
import { HabitContext } from "./useHabits";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import type { HabitItemProps, HabitType } from "../types/Types";

type HabitProviderProps = {
  children: ReactNode;
};

export function HabitProvider({ children }: HabitProviderProps) {
  const [habits, setHabit] = useLocalStorage<HabitItemProps>("habits", {
    habit: [],
  });

  function addHabit({ id, name }: HabitType): void {
    setHabit((habit) => ({
      habit: [...habit.habit, { id, name, complition: [] }],
    }));
  }

  function deleteHabit(id: number): void {
    setHabit((habit) => ({
      habit: habit.habit.filter((habit) => habit.id !== id),
    }));
  }

  function toggleHabit(id: number, date: Date) {
    setHabit((curr) => ({
      habit: curr.habit.map((h) => {
        if (h.id !== id) return h;

        const alreadyDone = h.complition?.some((d) => isSameDay(d, date));
        const complition = alreadyDone
          ? h.complition?.filter((d) => !isSameDay(d, date))
          : [...(h.complition || []), date];

        return { ...h, complition };
      }),
    }));
  }

  return (
    <HabitContext
      value={{ habits: habits.habit, addHabit, toggleHabit, deleteHabit }}
    >
      {children}
    </HabitContext>
  );
}
