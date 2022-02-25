import React, { useRef } from 'react'

const RegisterForm = () => {

    const nameContainer = useRef(null);
    const emailContainer = useRef(null);
    const passwordContainer = useRef(null);

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(`Component: REGISTER FORM: Register Form Submitted Name: ${nameContainer.current.value} Email: ${emailContainer.current.value} Password: ${passwordContainer.current.value}`)
    }
    return (
        <React.Fragment>
            <form>
                <input type='text' name='register-name' ref={nameContainer} />
                <input type='email' name='register-email' ref={emailContainer} />
                <input type='password' name='register-password' ref={passwordContainer} />
                <button type='submit' onClick={(e) => handleRegister(e)}>Register</button>
            </form>
        </React.Fragment>
    )
}

export default RegisterForm;