import React, { useEffect } from 'react'
import getRequest from '../Hooks/getRequest'
import postRequest from '../Hooks/postRequest'

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
            "person_id": 3
        }
        postRequest("http://localhost:8080/api/todo", todo)

    }, []);

    return (
        <React.Fragment>
            <h1>Check Developer Console for API request results</h1>
        </React.Fragment>
    )
}

export default ApiTest