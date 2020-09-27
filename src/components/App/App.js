import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import NewMeeting from '../NewMeeting/NewMeeting';
import Meetings from '../Meetings/Meetings';
import Teams from '../Teams/Teams';
import MeetingPage from '../MeetingPage/MeetingPage';
import Assess from '../Assess/Assess';
import TeamPage from '../TeamPage/TeamPage';
import CreateMeeting from '../CreateMeeting/CreateMeeting';
import TeamTrends from '../TeamTrends/TeamTrends';

export default class App extends React.Component {

  render() {
    return (

      <div className="App">
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
            />
          )}
        />

        <Route path="/new-meeting-teams" component={NewMeeting} />{" "}
        <Route path="/meetings" component={Meetings} />{" "}
        <Route path="/teams" component={Teams} />{" "}
        <Route path="/meeting/:meetingId" component={MeetingPage} />{" "}
        <Route path="/assess/:meetingId" component={Assess} />{" "}
        <Route path="/team/:teamId" component={TeamPage} exact />{" "}
        <Route path="/new-meeting/:teamId" component={CreateMeeting} />{" "}
        <Route path="/team/trends/:teamId" component={TeamTrends} />{" "}
        <Route path="/team-trends" component={Teams} />{" "}
      </div>
    )
  }
}