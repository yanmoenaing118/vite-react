import { useReducer, createContext } from "react";

export const Context = createContext();

const getAuthenticatedUser = () => {
  if (typeof window != undefined && localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  }
  return null;
};

const initialState = {
  user: getAuthenticatedUser()
};

/**
 * action = { type: "", palyload: any } || ""
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: { ...action.payload } };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      break;
  }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default StoreProvider;
