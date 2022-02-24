import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './context'

ReactDOM.render(
    <React.Fragment>
        <AppProvider>
            <App />
        </AppProvider>
    </React.Fragment>,
    document.getElementById('root')
);