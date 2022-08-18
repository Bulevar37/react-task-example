import TaskForm from "./componets/TaskForm";
import Tasklist from "./componets/Tasklist";
function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <Tasklist />
      </div>
    </main>
  );
}

export default App;
