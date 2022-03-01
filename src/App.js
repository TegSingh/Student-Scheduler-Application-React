import React from 'react';
import Home from './Pages/Home'
import Todos from './Pages/Todos'
import CustomRouter from './Components/CustomRouter';
import ApiTest from './Components/ApiTest';


const App = () => {
    return (
        <React.Fragment>
            {/* <Home /> */}
            <CustomRouter />
            <ApiTest />
        </React.Fragment>
    );
}


export default App
