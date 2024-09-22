import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "TestTask", state: "ONGOING" }],
  draggedTask: null,
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  setDraggedTask: (title) => set({ draggedTask: title }),
});

export const useStore = create(store);
