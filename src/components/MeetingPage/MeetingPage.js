import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav'
import './MeetingPage.css'

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
                <div className="meeting-page-body">
                    <p className="meeting-page-body-item">{meeting.meeting_time}</p>
                    <p className="meeting-page-body-item">{meeting.meeting_name}</p>
                    {//This will not be needed in V1 <p className="meeting-page-body-item">{meeting.type}</p>
                    //This will not be needed in V1 <p className="meeting-page-body-item">{meeting.department}</p>
                }
                    <p className="meeting-page-body-item">{meeting.description}</p>
                    <Link to={path} className="meeting-page-body-item">Assess</Link>
                </div>

            </>
        )
    }
}