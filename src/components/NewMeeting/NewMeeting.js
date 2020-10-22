import React from 'react';
import { Link } from 'react-router-dom';
import './NewMeeting.css';

export default class NewMeeting extends React.Component {

    render() {
        const usersTeams = { 
            pathname: `/teams`, 
            allTeams: false
          };

        const allTeams = { 
            pathname: `/teams`, 
            allTeams: true
          };
        return (
            <>
                <nav className="newMeetingNav">Meeting app</nav>
                <section className="newMeetingBody">
                    <Link to={usersTeams}>Choose from your teams</Link>
                    <Link to={allTeams}>Join a new team</Link>
                </section>
            </>
        )
    }
}