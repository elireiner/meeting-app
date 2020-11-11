import React from 'react';
import Nav from '../Nav/Nav';

export default class TeamTrends extends React.Component {
    render() {
       /* // Get team id
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
      */
        return (
            <>
               <Nav />
                <h1>Team {//team.name
                }'s metrics</h1>
                <ul>
                    {/*<li>How nessecery was this meeting?: {teamMetrics.listening}</li>
                    <li>Befoe the meeting, how well did we clearify the desired outcomes?: {teamMetrics.preparedness}</li>
                    <li>How well did we stay on point?: {teamMetrics.clarity}</li>
                    <li>How well did we summarize and agree on next steps?: {teamMetrics.listening}</li>
                    <li>How strongly did we encourage open discussion?: {teamMetrics.preparedness}</li>
            */}
                </ul>
            </>
        )
    }
}