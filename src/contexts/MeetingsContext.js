import React, { Component } from 'react'

const MeetingsContext = React.createContext({
  meetingList: [],
  usersMeetingList: [],
  recurringMeetingList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setMeetingList: () => {},
  setUsersMeetingList: () => {},
  setRecurringMeetingList: () => {}
})

export default MeetingsContext

export class MeetingsProvider extends Component {
  state = {
    meetingList: [],
    usersMeetingList: [],
    recurringMeetingList: [],
    error: null,
  };

  setMeetingList = meetingList => {
    this.setState({ meetingList })
  }

  setUsersMeetingList = usersMeetingList => {
    this.setState({ usersMeetingList })
  }

  setRecurringMeetingList = recurringMeetingList => {
    this.setState({ recurringMeetingList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      meetingList: this.state.meetingList,
      usersMeetingList: this.state.usersMeetingList,
      recurringMeetingList: this.state.recurringMeetingList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setMeetingList: this.setMeetingList,
      setUsersMeetingList: this.setUsersMeetingList,
      setRecurringMeetingList: this.setRecurringMeetingList
    }
    return (
      <MeetingsContext.Provider value={value}>
        {this.props.children}
      </MeetingsContext.Provider>
    )
  }
}
