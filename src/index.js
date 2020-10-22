import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { TeamsProvider } from './contexts/TeamsContext'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <TeamsProvider>
            <App />
        </TeamsProvider>
    </BrowserRouter>, document.getElementById('root'));