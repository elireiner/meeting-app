import React from 'react';
import { Link } from 'react-router-dom';

export default class MeetingLink extends React.Component {
    render() {
        const path = { 
            pathname: `meeting/${this.props._id}`, 
            meeting: this.props
          };
        return (
            <>
                <Link to={path}>{this.props.name}</Link>
            </>
        )
    }
}