import React from 'react';
import Home from './Pages/Home'
import Todos from './Pages/Todos'

const App = () => {
    return (
        <React.Fragment>
            <Home />
            <Todos />
        </React.Fragment>
    );
}

export default App