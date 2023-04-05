import { useState } from "react";

export function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  return { mode };
}
