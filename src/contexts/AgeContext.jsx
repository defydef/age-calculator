import { createContext } from "react";

// 1) Create a new Context component
const AgeContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        date: action.payload.date,
        month: action.payload.month,
        year: action.payload.year,
        error: action.payload.error,
      };
    default:
      throw new Error("Undefined action");
  }
}
