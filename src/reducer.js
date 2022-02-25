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

}


export default reducer;