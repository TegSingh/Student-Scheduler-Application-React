import React, { useEffect } from 'react'
import putRequest from '../Services/putRequest'
import deleteRequest from '../Services/deleteRequest'

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
                todos.map((t, id) => {
                    return (<div className="todo-div" key={id}>
                        <p>{t?.name}</p>
                        <p>{t?.due_date}</p>
                        <p>{t?.date_added}</p>
                        <button onClick={(e) => handlePut(t?.id)} className="update-button">Update</button>
                        <button onClick={(e) => handleDelete(t?.id)} className="delete-button">Delete</button>
                    </div>)
                })
            }
        </React.Fragment>
    )
}

export default TodoList;