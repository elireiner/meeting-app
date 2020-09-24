import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends React.Component {

    render() {
        return (
            <>
                <nav className="homeNav">Meeting app</nav>
                <section className="homeBody">
                    <Link to='/new-meeting-teams'>Create meeting</Link>
                    <Link to='/meetings'>Your meetings</Link>
                    <Link to='/trends'>Team trends</Link>
                </section>
            </>
        )
    }
}