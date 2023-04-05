import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(next, replace = false) {
    setMode(next);

    if (replace) {
      const newHistory = history.filter((word) => word !== mode);
      setHistory([...newHistory, next]);
    } else {
      setHistory((prev) => [...prev, next]);
    }
  }

  function back() {
    if (history.length > 1) {
      const newHistory = [...history.slice(0, history.length - 1)];
      const prevMode = newHistory[newHistory.length - 1];

      setHistory(newHistory);

      setMode(prevMode);
    }
  }

  return { mode, transition, back };
}
