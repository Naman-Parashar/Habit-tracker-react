import { eachDayOfInterval, endOfWeek, format, isFuture, isSameDay, startOfWeek } from "date-fns";
import type { HabitType } from "../types/Types";
import Button from "./Button";

function HabitItem({id,name,deleteHabit, complition, toggleHabit }: HabitType) {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  return (
    <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <span className="font-medium">{name}</span>
          <span className="text-sm text-amber-400">🔥 2</span>
        </div>

        <Button onClick={() => deleteHabit && deleteHabit(id)} varient="ghost-destructive" className="text-sm">Delete</Button>
      </div>

      <div className="flex gap-1.5">
        {visibleDates.map((date) => (
            
          <Button 
          className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs" 
          key={date.toISOString()} 
          disabled={isFuture(date)}
          varient={complition?.some(d => isSameDay(date, d)) ? "primary" : "secondary"}
          onClick={() => toggleHabit && toggleHabit(id, date)}
          >
            <span className="font-medium">{format(date, "EEE")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default HabitItem;
