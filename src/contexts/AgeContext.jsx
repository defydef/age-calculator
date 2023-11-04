import { createContext, useContext, useReducer } from "react";

// 1) Create a new Context component
const AgeContext = createContext();

const initialState = {
  date: "",
  month: "",
  year: "",
  error: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        date: state.date,
        month: state.month,
        year: state.year,
        error: action.payload,
      };
    case "date/inputDay":
      return {
        ...state,
        date: action.payload,
      };
    case "date/inputMonth":
      return {
        ...state,
        month: action.payload,
      };
    case "date/inputYear":
      return {
        ...state,
        year: action.payload,
      };
    default:
      throw new Error("Undefined action");
  }
}

function AgeProvider({ children }) {
  const [{ date, month, year, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <AgeContext.Provider value={{ date, month, year, error, dispatch }}>
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
