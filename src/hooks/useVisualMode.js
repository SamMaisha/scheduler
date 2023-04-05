import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(next) {
    setMode(next);
  }

  function back() {}

  return { mode, transition, back };
}
