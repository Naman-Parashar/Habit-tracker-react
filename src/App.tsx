import HabitForm from "./component/HabitForm";
import HabitList from "./component/HabitList";
import Headers from "./component/Headers";

function App() {
  return (
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        {/* Headed */}
        <Headers />

        {/* form */}
        <HabitForm/>

      {/* List card */}
      <HabitList/>
      </div>
  );
}

export default App;
