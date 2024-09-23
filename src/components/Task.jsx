import classNames from "classnames";
import { useStore } from "../store";
import "./Task.css";
import trashicon from "../assets/icons8-lixo.png";

export default function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <div
      className="task"
      draggable
      onDragStart={() => {
        setDraggedTask(task.title);
      }}
    >
      <div>{task.title}</div>
      <div className="bottomWrapper">
        <div>
          <img src={trashicon} onClick={() => deleteTask(task.title)} />
        </div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
}
