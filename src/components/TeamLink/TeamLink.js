import React from 'react';
import { Link } from 'react-router-dom';

export default class TeamLink extends React.Component {
    render() {
        const newTo = {
            pathname: `team/${this.props._id}`,
            team: this.props
        };
        return (
            <Link to={newTo}>{this.props.name}</Link>
        )
    }
}