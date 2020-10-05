import React from 'react';
import { Link } from 'react-router-dom';
import { teams } from '../../mock-data';

export default class TeamPage extends React.Component {
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

        //Get team object
        let team = teams.filter(team => Object.values(team).includes(teamId))[0]

        //Set path and property for create new meeting link
        const meetingTo = {
            pathname: `/new-meeting/${teamId}`,
            team: team
        };
        const trendsTo = {
            pathname: `/team/trends/${teamId}`,
            team: team
        };

        return (
            <>
                <p>{team.name}</p>
                <p>{team.department}</p>
                <Link to={meetingTo}>Create a meeting with this team</Link>
                <Link to={trendsTo}>Team trends</Link>
            </>
        )
    }
}