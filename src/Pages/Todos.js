// Component to display Todos for a person with a certain ID
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TodoForm from '../Components/TodoForm';
import getRequest from '../Hooks/getRequest';
import TodoList from '../Components/TodoList';


const Todos = () => {

    // Get the Person ID from Route parameters
    const { person_id } = useParams();
    console.log(`Component: TODOS: Person ID: ${person_id}`);

    // Generate a state value for the todos
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Make get request for todos specific to a person
        const request_url = `http://localhost:3000/api/person/${person_id}/todos`
        const request_result = getRequest(request_url);
        console.log("Component: TODOS: Request result: ", request_result);
        setTodos(request_result);

    }, [todos])

    return (
        <React.Fragment>
            <h1>This is the Todos List</h1>
            <TodoList todos={todos} />
        </React.Fragment>
    )
}

export default Todos;