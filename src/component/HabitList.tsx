import type { HabitType } from "../types/Types";
import HabitItem from "./HabitItem";

function HabitList() {
  const habits:HabitType[] = [
    {id:1, name:"naman"}
  ];
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
        <HabitItem key={habit.id} habit={habit}/>
    )
    })}
  </div>;
}

export default HabitList;
