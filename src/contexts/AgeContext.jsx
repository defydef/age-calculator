import { createContext, useContext, useReducer } from "react";

// 1) Create a new Context component
const AgeContext = createContext();

const initialState = {
  day: "",
  month: "",
  year: "",
  dateDiff: {},
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        day: state.day,
        month: state.month,
        year: state.year,
        error: action.payload?.errors,
        dateDiff: action.payload?.dateDiff,
      };
    case "date/inputDay":
      return {
        ...state,
        day: action.payload,
        error: null, // reset previous error
      };
    case "date/inputMonth":
      return {
        ...state,
        month: action.payload,
        error: null, // reset previous error
      };
    case "date/inputYear":
      return {
        ...state,
        year: action.payload,
        error: null, // reset previous error
      };
    default:
      throw new Error("Undefined action");
  }
}

function AgeProvider({ children }) {
  const [{ day, month, year, error, dateDiff }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <AgeContext.Provider
      value={{ day, month, year, error, dateDiff, dispatch }}
    >
      {children}
    </AgeContext.Provider>
  );
}

function useAge() {
  const context = useContext(AgeContext);
  if (context === undefined)
    throw new Error(
      "useAge is undefined because it is defined inside the children component of App"
    );
  return context;
}

export { AgeProvider, useAge };
