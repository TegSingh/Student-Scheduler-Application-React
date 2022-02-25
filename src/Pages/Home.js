import React, { useEffect } from "react";
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";
import { useGlobalContext } from "../context";

const Home = () => {

    const { seeLoginForm, seeRegisterForm, showLoginForm, showRegisterForm } = useGlobalContext();

    useEffect(() => {
        console.log(`Component: HOME: seeLoginForm = ${seeLoginForm} seeRegisterForm = ${seeRegisterForm}`)
    }, [seeLoginForm, seeRegisterForm])

    return (
        <React.Fragment>
            <h1 className="heading-center">Welcome to Scheduling Application</h1>
            <button className="login-button" onClick={() => showLoginForm()}>Login</button>
            <button className="register-button" onClick={() => showRegisterForm()}>Register</button>
            {seeLoginForm && <LoginForm />}
            {seeRegisterForm && <RegisterForm />}
        </React.Fragment>
    )
}

export default Home;