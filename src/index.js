import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { TeamListProvider } from './contexts/TeamListContext'
import { TeamProvider } from './contexts/TeamContext'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <TeamListProvider>
            <TeamProvider>
                <App />
            </TeamProvider>
        </TeamListProvider>
    </BrowserRouter>, document.getElementById('root'));