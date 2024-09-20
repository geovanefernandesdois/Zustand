import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "testTask", state: "PLANNED" }],
});

export const useStore = create(store);
