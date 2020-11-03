import React from 'react';
import { Link } from 'react-router-dom';
import './NewMeeting.css';
import Nav from '../Nav/Nav'

export default class NewMeeting extends React.Component {

    render() {
        const usersTeams = { 
            pathname: `/teams`, 
            state: { allTeams: false }
          };

        const allTeams = { 
            pathname: `/teams`, 
            state: { allTeams: true }
          };
        return (
            <>
                     <Nav />
                <section className="newMeetingBody">
                    <Link to={usersTeams}>Choose from your teams</Link>
                    <Link to={allTeams}>Join a new team</Link>
                </section>
            </>
        )
    }
}