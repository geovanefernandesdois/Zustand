import "./Column.css";
import Task from "./Task";
import { useStore } from "../store";

// Função seletora estável
const selectTasksByState = (state) => (store) =>
  store.tasks.filter((task) => task.state === state);

export default function Column({ state }) {
  // Passando uma função seletora estável para o useStore
  const tasks = useStore(selectTasksByState(state));

  return (
    <div className="column">
      <p>{state}</p>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
}
