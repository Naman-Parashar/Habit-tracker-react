import { useState } from "react";
import HabitForm from "./component/HabitForm";
import HabitList from "./component/HabitList";
import Headers from "./component/Headers";
import type { HabitItemProps, HabitType } from "./types/Types";

function App() {
  const [habit, setHabit]= useState<HabitItemProps>({
    habit: []
  });

  function addHabit({id,name}: HabitType):void {
    setHabit(habit => ({
      habit: [...habit.habit, {id,name}]
    }))
  }
  return (
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        {/* Headed */}
        <Headers />

        {/* form */}
        <HabitForm addHabit={addHabit}/>

      {/* List card */}
      <HabitList habit={habit.habit}/>
      </div>
  );
}

export default App;
