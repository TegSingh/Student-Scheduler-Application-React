import React, { useEffect } from 'react'
import deleteRequest from '../Services/deleteRequest';
import getRequest from '../Services/getRequest'
import postRequest from '../Services/postRequest'
import putRequest from '../Services/putRequest';

const ApiTest = () => {

    useEffect(() => {

        // GET Request
        console.log("Get a List of Todos");
        getRequest("http://localhost:8080/api/todo");
        console.log("Get a List of Persons");
        getRequest("http://localhost:8080/api/person");
        console.log("Get Todos for a particular person");
        getRequest("http://localhost:8080/api/person/1/todos");

        // POST Request
        console.log("Add a new Person to the List of People");
        const person = {
            "name": "Person ABC",
            "email": "person@abc.com",
            "password": "passwordABC"
        };
        postRequest("http://localhost:8080/api/person", person);

        console.log("Add a new Todo to the List of Todos");
        const todo = {
            "name": "Front End for Scheduling Application",
            "due_date": "2022-03-03",
            "date_added": "2022-02-26",
            "person_id": 2
        }
        postRequest("http://localhost:8080/api/todo", todo)

        // PUT Request
        console.log("Update a Person with a provided ID")
        const personID = 2
        const updatePerson = {
            "name": "Person PQR",
            "email": "person@PQR.com",
            "password": "newpassword"
        }
        putRequest(`http://localhost:8080/api/person/${personID}`, updatePerson)

        console.log("Update a Todo with a provided ID")
        const todoID = 3
        const updateTodo = {
            "name": "API calls for Scheduling Application in React",
            "due_date": "2022-03-01",
            "date_added": "2022-02-27",
            "person_id": 2
        }
        putRequest(`http://localhost:8080/api/todo/${todoID}`, updateTodo)

        // DELETE Request
        console.log("Delete a Person with a provided ID");
        const deletePersonID = 3;
        deleteRequest(`http://localhost:8080/api/person/${deletePersonID}`);

        console.log("Delete a Todo with a provided ID")
        const deleteTodoID = 4;
        deleteRequest(`http://localhost:8080/api/todo/${deleteTodoID}`);

    }, []);

    return (
        <React.Fragment>
            <h1>Check Developer Console for API request results</h1>
        </React.Fragment>
    )
}

export default ApiTest;