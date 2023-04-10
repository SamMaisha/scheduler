import React, { useState } from "react";

export default function useApplicationData() {
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
