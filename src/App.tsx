import { useState } from "react";
import HabitForm from "./component/HabitForm";
import HabitList from "./component/HabitList";
import Headers from "./component/Headers";
import type { HabitItemProps, HabitType } from "./types/Types";
import { isSameDay } from "date-fns";

function App() {
  const [habit, setHabit] = useState<HabitItemProps>({
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
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      {/* Headed */}
      <Headers />

      {/* form */}
      <HabitForm addHabit={addHabit} />

      {/* List card */}
      <HabitList habit={habit.habit} deleteHabit={deleteHabit} toggleHabit={toggleHabit} />
    </div>
  );
}

export default App;
