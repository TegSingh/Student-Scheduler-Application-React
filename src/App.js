import React from 'react';
import Home from './Pages/Home'
import Todos from './Pages/Todos'

const App = () => {
    return (
        <React.Fragment>
            <h1>Welcome to the Student Scheduler Application</h1>
            <Home />
            <Todos />
        </React.Fragment>
    );
}

export default App