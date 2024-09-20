import { useStore } from "./store";
import { useMemo } from "react";
import { shallow } from "zustand/shallow";

export default function Temp({ state }) {
  const tasks = useStore(
    (store) => store.tasks //.filter((task) => task.state === state)
  );
  const filtered = useMemo(
    () => tasks.filter((task) => task.state === state),
    shallow
  );
}
