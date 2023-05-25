import { create } from "zustand";
import { devtools } from "zustand/middleware";

const loadingBarStore = (set, get) => ({
  progress: 30,
  setProgress: (newVal) => set({ progress: newVal }),
});

export default create(devtools(loadingBarStore));
