import React from 'react';
import { teams } from '../../mock-data';

export default class TeamTrends extends React.Component {
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

        //Get team metrics
        const teamMetrics = team.metrics;
      
        return (
            <>
                <h1>Team {team.name}'s metrics</h1>
                <ul>
                    <li>Listening: {teamMetrics.listening}</li>
                    <li>Preparedness: {teamMetrics.preparedness}</li>
                    <li>Clarity: {teamMetrics.clarity}</li>
                </ul>
            </>
        )
    }
}