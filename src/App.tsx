import HabitForm from "./component/HabitForm";
import HabitList from "./component/HabitList";
import Headers from "./component/Headers";
import { HabitProvider } from "./context/HabitProvider";

function App() {
  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <HabitProvider>
        {/* Headed */}
        <Headers />
        {/* form */}
        <HabitForm />
        {/* List card */}
        <HabitList />
      </HabitProvider>
    </div>
  );
}

export default App;
