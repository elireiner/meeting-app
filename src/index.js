import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { TeamListProvider } from './contexts/TeamListContext'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <TeamListProvider>
            <App />
        </TeamListProvider>
    </BrowserRouter>, document.getElementById('root'));