import { renderHook, act } from "@testing-library/react-hooks";

import { useVisualMode } from "hooks/useVisualMode";

// test EMPTY state
const FIRST = "FIRST";

test("useVisualMode should initialize with default value", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  expect(result.current.mode).toBe(FIRST);
});
