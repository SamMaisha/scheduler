import { useState } from "react";

export function useVisualMode(initialMode) {
  let resultObj = {};
  const [mode, setMode] = useState(initialMode);
  resultObj["mode"] = mode;
  return resultObj;
}
