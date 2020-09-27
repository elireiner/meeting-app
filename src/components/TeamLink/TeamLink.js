import React from 'react';
import { Link } from 'react-router-dom';

export default class TeamLink extends React.Component {
    render() {
        const onlyTrends = this.props.onlyTrends;
        let path;

        if (!onlyTrends) {
            path = {
                pathname: `team/${this.props._id}`,
                team: this.props
            }
        };


        if (onlyTrends) {
            path = {
                pathname: `/team/trends/${this.props._id}`,
                team: this.props
            }
        };
        
        return (
            <Link to={path}>{this.props.name}</Link>
        )
    }
}