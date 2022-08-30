import { createContext, useEffect,useReducer } from "react";
import {AuthReducer} from "./AuthReducer";

const init_state = {
  user: JSON.parse(localStorage.getItem("current_User")) || null,
  isLoading: false,
  hasError: false,
};


export const AuthContext = createContext(init_state);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, init_state);
  
  useEffect(()=>{
    localStorage.setItem("currentUser", JSON.stringify(state.user))
    console.log(state.user)
  },[state.user])

  
   return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.hasError,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
