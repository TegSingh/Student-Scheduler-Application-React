import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

// Define the context - This will give access to the provider and consumer
const AppContext = React.createContext()

// Define the default state for the reducer hook
const defaultState = {

};

const AppProvider = ({ children }) => {
    // Create the use reducer hook
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <AppContext.Provider
            value={{}}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }