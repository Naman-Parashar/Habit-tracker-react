import HabitForm from "./component/HabitForm";
import Headers from "./component/Headers";

function App() {
  return (
    <>
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        {/* Headed */}
        <Headers />

        {/* form */}
        <HabitForm/>

      </div>

      {/* List card */}
    </>
  );
}

export default App;
