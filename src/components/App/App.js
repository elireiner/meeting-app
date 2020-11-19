import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../routes/Home/Home';
import NewMeeting from '../NewMeeting/NewMeeting';
import TeamListPage from '../../routes/TeamListPage/TeamListPage.js';
import MeetingsListPage from '../../routes/MeetingsListPage/MeetingListPage.js';
import ManageParticipants from '../../routes/ManageParticipants/ManageParticipants.js';
import MeetingPage from '../MeetingPage/MeetingPage';
import Assess from '../Assess/Assess';
import TeamPage from '../TeamPage/TeamPage';
import CreateMeeting from '../CreateMeeting/CreateMeeting';
import MeetingTrends from '../MeetingTrends/MeetingTrends';
import TeamTrends from '../TeamTrends/TeamTrends';
import './App.css';

export default class App extends React.Component {

  render() {
    return (

      <div className='App'>
        {//this.state.hasError && <p className='red'>There was an error! Oh no!</p>
        }
        <Switch>
          <Route
            exact
            path={'/'}
            render={(props) => (
              <Home
              />
            )}
          />
          <Route
            path='/teams'
            component={TeamListPage}
          />
          <Route
            path={'/add-participants'}
            component={ManageParticipants}
          />
          <Route
            path={'/new-meeting-teams'}
            component={NewMeeting}
          />
          <Route
            path='/meetings'
            component={MeetingsListPage}
          />
          <Route
            path='/recurring-meeting/:meetingId/trends'
            component={MeetingTrends}
          />
          <Route
            path='/meeting/:meetingId'
            component={MeetingPage}
          />
          <Route
            path='/assess/:meetingId'
            component={Assess}
          />
          <Route
            path='/team/:teamId'
            component={TeamPage}
            exact />
          <Route
            path='/new-meeting/'
            component={CreateMeeting}
          />
          <Route
            path='/team/trends/:teamId'
            component={TeamTrends}
          />
          <Route
            path='/trends'
            component={MeetingsListPage}
          />
        </Switch>
      </div>
    )
  }
}