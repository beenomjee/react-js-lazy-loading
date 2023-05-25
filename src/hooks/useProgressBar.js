import { useEffect } from "react";
import { useLoadingBarStore } from "../store";

const useProgressBar = () => {
  const { progress, setProgress } = useLoadingBarStore();
  useEffect(() => {
    if (progress !== 30) return;

    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [progress]);
};

export default useProgressBar;
