import { useState, type JSX } from "react";
import Button from "./Button";
import type { HabitType } from "../types/Types";

function HabitForm({addHabit}: {addHabit: (habit: HabitType) => void}): JSX.Element {

  const [name, setName] = useState<string>("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>):void {
    e.preventDefault()

    if (name.trim() === "") return
    setName("")
    const val = {
      id: Math.floor(Math.random() * 1000),
      name: name
    }
    addHabit(val)
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
      value={name}
      onChange={e => setName(e.target.value)}
        className="
        flex-1 
        rounded-lg
        bg-zinc-800
        px-4 py-2 
        outline-none 
        focus-visible:ring-2
        focus-visible:ring-violet-500"
        type="text"
        placeholder="New habit..."
      />
      <Button 
      disabled={name.trim() === ""}
      className="rounded-lg px-4 py-2 font-medium">
        Add Habit
      </Button>
    </form>
  );
}

export default HabitForm;
