import "./Column.css";
import { useStore } from "../store";
import Task from "./Task";

export default function Column({ state }) {
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  return (
    <div className="column">
      <p>{state}</p>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
}
