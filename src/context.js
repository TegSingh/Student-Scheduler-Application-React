import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

// Define the context - This will give access to the provider and consumer
const AppContext = React.createContext()

// Define the default state for the reducer hook
const defaultState = {
    seeLoginForm: false,
    seeRegisterForm: false
};

const AppProvider = ({ children }) => {
    // Create the use reducer hook
    const [state, dispatch] = useReducer(reducer, defaultState);

    // Method to show the Login form
    const showLoginForm = () => {
        console.log('Context: Show Login Form');
        dispatch({ type: 'SHOW_LOGIN_FORM' })
    }

    // Method to show Register Form
    const showRegisterForm = () => {
        console.log('Context: Show Register Form');
        dispatch({ type: 'SHOW_REGISTER_FORM' })
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                showLoginForm,
                showRegisterForm
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }