import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { TeamsProvider } from './contexts/TeamsContext';
import { MeetingsProvider } from './contexts/MeetingsContext';
import { AssessmentsProvider } from './contexts/AssessmentsContext';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <TeamsProvider>
            <MeetingsProvider>
                <AssessmentsProvider>
                    <App />
                </AssessmentsProvider>
            </MeetingsProvider>
        </TeamsProvider>
    </BrowserRouter>, document.getElementById('root'));