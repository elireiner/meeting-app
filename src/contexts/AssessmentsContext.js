import React, { Component } from 'react'

const AssessmentsContext = React.createContext({
  meetingList: [],
  usersAssessmentList: [],
  usersRecurringAssessmentList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setAssessmentList: () => {},
  setUsersAssessmentList: () => {},
  setUsersRecurringAssessmentList: () => {}
})

export default AssessmentsContext

export class AssessmentsProvider extends Component {
  state = {
    meetingList: [],
    usersAssessmentList: [],
    usersRecurringAssessmentList: [],
    error: null,
  };

  setAssessmentList = meetingList => {
    this.setState({ meetingList })
  }

  setUsersAssessmentList = usersAssessmentList => {
    this.setState({ usersAssessmentList })
  }

  setUsersRecurringAssessmentList = usersRecurringAssessmentList => {
    console.log(usersRecurringAssessmentList)
    this.setState({ usersRecurringAssessmentList })
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
      usersAssessmentList: this.state.usersAssessmentList,
      usersRecurringAssessmentList: this.state.usersRecurringAssessmentList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAssessmentList: this.setAssessmentList,
      setUsersAssessmentList: this.setUsersAssessmentList,
      setUsersRecurringAssessmentList: this.setUsersRecurringAssessmentList
    }
    return (
      <AssessmentsContext.Provider value={value}>
        {this.props.children}
      </AssessmentsContext.Provider>
    )
  }
}
