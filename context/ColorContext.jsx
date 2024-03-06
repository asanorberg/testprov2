import { useReducer } from "react"; //useReducer hook
import { createContext, useContext } from "react"; // funktioner

const ColorContext = createContext(); //ny context skapas med createContext-funktionen

const initialState = {
  backgroundColor: "red", //Initial state-objekt med backgroundColor property set till "red"
};

export function colorReducer(state, action) {
  //reducer-funktion
  switch (
    action.type //om action type är "SELECT_COLOR"
  ) {
    case "SELECT_COLOR": //gör detta
      return {
        ...state,
        backgroundColor: action.payload, //uppdaterar backgroundColor propertyn i state-objektet till payload value från action
      };
    default: //om action inte matchar något case
      return state; //return current state
  }
}

export const ColorProvider = ({ children }) => {
  //ColorProvider-komponent som skickar color context till sina children
  const [state, dispatch] = useReducer(colorReducer, initialState); //useReducer hook för att manage state med colorReducer-funktionen och initial state

  const colorSelect = (color) => {
    //funktion colorSelect definieras
    dispatch({ type: "SELECT_COLOR", payload: color }); //dispatchar en action av type "SELECT_COLOR" med color payload
  };

  return (
    <ColorContext.Provider value={{ state, colorSelect }}>
      {" "}
      {/*ger state och colorSelect-funktionen som value för ColorContext*/}{" "}
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext); //custom hook för att få access till color context
