import React, { useEffect } from 'react'
import putRequest from '../Hooks/putRequest'
import deleteRequest from '../Hooks/deleteRequest'

const TodoList = ({ todos }) => {

    useEffect(() => {
        console.log(`Component: TODOLIST: Displaying Todos ${todos}`);
    }, [])

    const handlePut = (id) => {
        console.log(`Component: TODOLIST: Updating Todo ID: ${id}`);
    }

    const handleDelete = (id) => {
        console.log(`Component: TODOLIST: Deleting Todo ID: ${id}`);
    }
    return (
        <React.Fragment>
            {
                todos.map(({ id, name, due_date, date_added, person_id }) => {
                    return (<div className="todo-div" key={id}>
                        <p>{name}</p>
                        <p>{due_date}</p>
                        <p>{date_added}</p>
                        <button onClick={(id) => handlePut(id)} className="update-button">Update</button>
                        <button onClick={(id) => handleDelete(id)} className="delete-button">Delete</button>
                    </div>)
                })
            }
        </React.Fragment>
    )
}

export default TodoList;