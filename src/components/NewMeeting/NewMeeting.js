import React from 'react';
import { Link } from 'react-router-dom';
import './NewMeeting.css';

export default class NewMeeting extends React.Component {

    render() {
        return (
            <>
                <nav className="newMeetingNav">Meeting app</nav>
                <section className="newMeetingBody">
                    <Link to='/teams'>Choose from your teams</Link>
                    <Link to='/teams'>Join a new team</Link>
                </section>
            </>
        )
    }
}