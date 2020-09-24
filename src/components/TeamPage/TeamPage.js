import React from 'react';
import { Link } from 'react-router-dom';
import { teams } from '../../mock-data';

export default class MeetingPage extends React.Component {
    render() {

        // Get team id
        let teamId;
        if (this.props.match.params.teamId) {
            teamId = this.props.match.params.teamId;
        }
        else {
            let pathname = this.props.location.pathname;
            let pathnameMinusFirstSlash = pathname.substring(pathname.indexOf("/") + 1);
            teamId = pathnameMinusFirstSlash.substring(pathnameMinusFirstSlash.indexOf("/") + 1);
            teamId.trim();
        }

        //Get meeting object
        let team = teams.filter(team => Object.values(team).includes(teamId))[0]

        //Set path and property for Assess link
        const newTo = {
            pathname: `/new-meeting/${teamId}`,
            team: team
        };

        return (
            <>
              
                <p>{team.name}</p>
                <p>{team.department}</p>
                <Link to={newTo}>Create a meeting with this team</Link>
            </>
        )
    }
}