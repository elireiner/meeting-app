import React, { Component } from 'react'

const MeetingsContext = React.createContext({
  meetingList: [],
  usersMeetingList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setMeetingList: () => {},
  setUsersMeetingList: () => {}
})
export default MeetingsContext

export class MeetingListProvider extends Component {
  state = {
    meetingList: [],
    usersMeetingList: [],
    error: null,
  };

  setMeetingList = meetingList => {
    this.setState({ meetingList })
  }

  setUsersMeetingList = usersMeetingList => {
    this.setState({ usersMeetingList })
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
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setMeetingList: this.setMeetingList,
      setUsersMeetingList: this.setUsersMeetingList
    }
    return (
      <MeetingsContext.Provider value={value}>
        {this.props.children}
      </MeetingsContext.Provider>
    )
  }
}
