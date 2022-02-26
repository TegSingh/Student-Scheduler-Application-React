import React, { useRef } from 'react'
import { useGlobalContext } from '../context';

const TodoForm = () => {

    const { addTodo } = useGlobalContext();

    const nameContainer = useRef(null);
    const dueDateContainer = useRef(null);
    const dateAddedContainer = useRef(null);
    const personIdContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const current_date = new Date().toJSON().slice(0, 10)
        console.log(`Component: TODO FORM: Name: ${nameContainer.current.value} Due Date: ${dueDateContainer.current.value} Date Added: ${current_date} Person Id: ${personIdContainer.current.value}`);
        const todo = { name: nameContainer.current.value, due_date: dueDateContainer.current.value, date_added: current_date, person_id: personIdContainer.current.value }
        addTodo(todo)
    }

    return (
        <React.Fragment>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="todo-name" placeholder="Enter Todo Name" id="todo-name" ref={nameContainer} />
                <input type="date" name="todo-due-date" placeholder="Enter Due Date" id="todo-due-date" ref={dueDateContainer} />
                <input type="number" name="todo-person-id" placeholder="Enter ID" id="todo-person-id" ref={personIdContainer} />
                <button type="submit">Submit Todo</button>
            </form>
        </React.Fragment>
    )
}

export default TodoForm