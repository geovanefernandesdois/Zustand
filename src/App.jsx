import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="App">
      <h1 className="title">Zustand Kanban</h1>
      <div className="columns">
        <Column state="PLANNED" />
        <Column state="ONGOING" />
        <Column state="DONE" />
      </div>
    </div>
  );
}

export default App;
