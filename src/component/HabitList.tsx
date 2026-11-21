import type { JSX } from "react/jsx-runtime";
import type { HabitType } from "../types/Types";
import HabitItem from "./HabitItem";
import { useHabits } from "../context/useHabits";

function HabitList(): JSX.Element {
const { habits } = useHabits()
  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Add one above to get started!
      </p>
    );
  }
  return <div className="flex flex-col gap-3">
    {habits.map((habit:HabitType)=> {
        return (
        <HabitItem key={habit.id} {...habit}/>
    )
    })}
  </div>;
}

export default HabitList;
