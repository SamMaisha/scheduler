import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  const transition = (next) => {
    setMode(next);
  };

  return { mode, transition };
}
