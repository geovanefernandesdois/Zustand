import produce from "immer";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  tasks: [],
  draggedTask: null,
  addTask: async (title, state) =>
    set(
      produce((store) => {
        store.tasks.push({ title, state });
      }),
      // (store) => ({ tasks: [...store.tasks, { title, state }] }),
      false,
      "addTask"
    ),
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { ...task, state } : task
      ),
    })),
});

export const useStore = create(persist(devtools(store), { name: "store" }));
