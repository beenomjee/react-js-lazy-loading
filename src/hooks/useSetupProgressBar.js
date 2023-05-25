import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useLoadingBarStore } from "../store";

const useSetupProgressBar = () => {
  const setProgress = useLoadingBarStore((store) => store.setProgress);
  const location = useLocation();
  const previousPath = useRef(null);

  useEffect(() => {
    if (previousPath.current === location.pathname) return;
    previousPath.current = location.pathname;
    setProgress(30);
  }, [location]);
};

export default useSetupProgressBar;
