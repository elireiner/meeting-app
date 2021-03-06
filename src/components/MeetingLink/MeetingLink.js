import React from 'react';
import { Link } from 'react-router-dom';
import '../MainLinks.css';

export default class MeetingLink extends React.Component {
    render() {
        let path;
        if (this.props.render) {
            path = (this.props.render.onlyRecurring && this.props.render.onlyTrends) ?
                {
                    pathname: `recurring-meeting/${this.props.meeting.meeting_id}/trends`,
                    state: { meeting: this.props.meeting }
                } : {
                    pathname: `meeting/${this.props.meeting.meeting_id}`,
                    state: { meeting: this.props }
                }
        }
        else {
            path = {
                pathname: `meeting/${this.props.meeting._id}`,
                state: { meeting: this.props }
            }
        }

        return (
            <>
                <Link className='mainLink' to={path}>{this.props.meeting.meeting_name}</Link>
            </>
        )
    }
}