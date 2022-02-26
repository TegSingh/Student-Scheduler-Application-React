// This is the file defining the reducer function for usereducer to be used in context

const reducer = (state, action) => {

    if (action.type === 'SHOW_LOGIN_FORM') {
        console.log("Reducer: Show Login Form")
        const newState = { ...state, seeLoginForm: true, seeRegisterForm: false }
        console.log(newState);
        return newState;
    }

    if (action.type === 'SHOW_REGISTER_FORM') {
        console.log("Reducer: Show Register Form")
        const newState = { ...state, seeLoginForm: false, seeRegisterForm: true }
        console.log(newState);
        return newState;
    }

    if (action.type === 'REGISTER_PERSON') {
        const person = action.payload
        console.log(`Reducer: Register Person name: ${person.name} email: ${person.email} password: ${person.password}`)
        return { ...state, person: person }
    }

    if (action.type === 'ADD_TODO') {
        const todo = action.payload
        console.log(`Reducer: Add Todo Name: ${todo.name} Due Date: ${todo.due_date} Date Added: ${todo.date_added} Person ID: ${todo.person_id}`)
        return { ...state, todo: todo }
    }

}


export default reducer;