import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav'

export default class MeetingPage extends React.Component {
    render() {
        /*  if (!this.props) {
              return null
          }*/
        //Get meeting object
        let meeting = this.props.location.state.meeting.meeting

        //Set path and property for Assess link
        const path = {
            pathname: `/assess/${meeting._id}`,
            meeting: meeting
        };

        return (
            <>
              <Nav />
                <p>{meeting.meeting_time}</p>
                <p>{meeting.meeting_name}</p>
                <p>{meeting.type}</p>
                <p>{meeting.department}</p>
                <p>{meeting.description}</p>
                <Link to={path}>Assess</Link>

            </>
        )
    }
}