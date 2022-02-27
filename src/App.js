import React from 'react';
import Home from './Pages/Home'
import Todos from './Pages/Todos'
import CustomRouter from './Components/CustomRouter';
import ApiTest from './Components/ApiTest';

// const cors = require('cors');
// const corsOptions = {
//     origin: 'http://localhost:8080/api',
//     credentials: true,
//     optionSuccessStatus: 200
// }
// App.use(cors(corsOptions));

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
