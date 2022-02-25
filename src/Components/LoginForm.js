import React, { useRef } from 'react'

const LoginForm = () => {

    const emailContainer = useRef(null);
    const passwordContainer = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`Component: LOGIN FORM: Login form submitted with Email: ${emailContainer.current.value} Password: ${passwordContainer.current.value}`);
    }
    return (
        <React.Fragment>
            <form>
                <input type="email" name="login-email" ref={emailContainer} />
                <input type="password" name="login-password" ref={passwordContainer} />
                <button type="submit" onClick={(e) => handleLogin(e)}>Login</button>
            </form>
        </React.Fragment>
    )
}

export default LoginForm