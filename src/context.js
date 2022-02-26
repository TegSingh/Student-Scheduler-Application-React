import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

// Define the context - This will give access to the provider and consumer
const AppContext = React.createContext()

// Define the default state for the reducer hook
const defaultState = {
    seeLoginForm: false,
    seeRegisterForm: false,
    person: {},
    todo: {}
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

    const registerPerson = (person) => {
        console.log(`Context: Register Form: name: ${person.name} email: ${person.email} password: ${person.password}`)
        dispatch({ type: 'REGISTER_PERSON', payload: person })
    }

    const addTodo = (todo) => {
        console.log(`Context: Add Todo: Name: ${todo.name} Due Date: ${todo.due_date} Date Added: ${todo.date_added} Person ID: ${todo.person_id}`)
        dispatch({ type: 'ADD_TODO', payload: todo })
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                showLoginForm,
                showRegisterForm,
                registerPerson,
                addTodo
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