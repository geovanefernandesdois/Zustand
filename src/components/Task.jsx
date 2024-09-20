import classNames from "classnames";
import { useStore } from "../store";
import "./Task.css";

const STATUS = "ONGOING";

export default function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  return (
    <div className="task">
      <div>{task.title}</div>
      <div className="bottomWrapper">
        <div></div>
        <div className={classNames("status", STATUS)}>{task.state}</div>
      </div>
    </div>
  );
}
