import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "TestTask", state: "ONGOING" }],
});

export const useStore = create(store);
