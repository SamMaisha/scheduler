import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(next) {
    setMode(next);
    setHistory((prev) => [...prev, next]);
  }

  function back() {
    const newHistory = [...history.slice(0, history.length - 1)];
    const prevMode = newHistory[newHistory.length - 1];

    setHistory(newHistory);

    setMode(prevMode);
  }

  return { mode, transition, back };
}
