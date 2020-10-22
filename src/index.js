import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { TeamsContext } from './contexts/TeamsContext'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <TeamsContext>
            <App />
        </TeamsContext>
    </BrowserRouter>, document.getElementById('root'));