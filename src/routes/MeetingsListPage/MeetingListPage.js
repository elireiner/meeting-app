import React, { Component } from 'react'
import MeetingsContext from '../../contexts/MeetingsContext'
import MeetingApiService from '../../services/meetings-api-service'
import { Section } from '../../components/Utils/Utils'
import MeetingLink from '../../components/MeetingLink/MeetingLink'
import Nav from '../../components/Nav/Nav';

export default class MeetingsListPage extends Component {
  static contextType = MeetingsContext

  async componentDidMount() {
    this.context.clearError()


    // TODO: change dynamically depending on user
    let currentUser = 1
    await MeetingApiService.getMeetingsForUser(currentUser)
      .then(this.context.setUsersMeetingList)
      .catch(this.context.setError)

    await MeetingApiService.getAllMeetings()
      .then(this.context.setMeetingList)
      .catch(this.context.setError)

    MeetingApiService.getRecurringMeeting(currentUser)
      .then(this.context.setRecurringMeetingList)
      .catch(this.context.setError)
  }

  renderMeetings() {
    let onlyTrends = false;
    const state = this.props.location.state;

    if (state.recurringMeetings) {
      const { recurringMeetingList = [] } = this.context

      const render = {
        onlyRecurring: true,
        onlyTrends: true
      }


      return recurringMeetingList.map(meeting =>
        <MeetingLink
          key={meeting.meeting_id}
          meeting={meeting}
          render={render}
        />
      )
    }

    else if (!state.recurringMeetings) {
      const { usersMeetingList = [] } = this.context

      return usersMeetingList.map(meeting =>
        <MeetingLink
          key={meeting.meeting_id}
          meeting={meeting}
          onlyTrends={onlyTrends}
        />
      )

    }

  }

  render() {
    const { error } = this.context
    return (
      <>
        <Nav />
        <Section list className='MeetingsListPage'>

          {//TODO: render the heading below
          }
          <h1>Your meetings</h1>
          {error
            ? <p className='red'>There was an error, try again</p>
            : this.renderMeetings()}
        </Section>
      </>
    )
  }
}