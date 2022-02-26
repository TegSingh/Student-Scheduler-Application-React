// Use this if and when required: Mainly used when scaling the project
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Todos from '../Pages/Todos';


const CustomRouter = () => {
    return (
        <React.Fragment>
            <Router>
                <Link to="/">Home</Link>
                <Link to="/todos">Todos</Link>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/todos" element={<Todos />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default CustomRouter
