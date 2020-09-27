import React from 'react';
import { Link } from 'react-router-dom';
import { meetings } from '../../mock-data';

export default class MeetingPage extends React.Component {
    render() {

        // Get meeting id
        let meetingId;
        if (this.props.match.params.meetingId) {
            meetingId = this.props.match.params.meetingId;
        }
        else {
            let pathname = this.props.location.pathname;
            let  pathnameMinusFirstSlash = pathname.substring(pathname.indexOf("/") + 1);
            meetingId =  pathnameMinusFirstSlash.substring( pathnameMinusFirstSlash.indexOf("/") + 1);
            meetingId.trim();
        }

        //Get meeting object
        let meeting = meetings.filter(meeting => Object.values(meeting).includes(meetingId))[0]

        //Set path and property for Assess link
        const path = {
            pathname: `/assess/${meetingId}`,
            meeting: meeting
        };
        
        return (
            <>
                <p>{meeting.timestamp}</p>
                <p>{meeting.name}</p>
                <p>{meeting.type}</p>
                <p>{meeting.department}</p>
                <p>{meeting.description}</p>
                <Link to={path}>Assess</Link>
            </>
        )
    }
}