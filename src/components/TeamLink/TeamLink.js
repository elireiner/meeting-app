import React from 'react';
import { Link } from 'react-router-dom';

export default class TeamLink extends React.Component {
    render() {
        const onlyTrends = this.props.onlyTrends;
        let path;

        if (!onlyTrends) {
            path = {
                pathname: `/team/${this.props.team._id}`,
                team: this.props.team
            }
        };

        if (onlyTrends) {
            path = {
                pathname: `/team/trends/${this.props.team._id}`,
                team: this.props.team
            }
        };

        return (
            <li> <Link to={path}>{this.props.team.teams_name}</Link></li>
        )
    }
}