import React, { Component } from 'react'

const TeamsContext = React.createContext({
  teamList: [],
  usersTeamList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTeamList: () => {},
  setUsersTeamList: () => {}
})
export default TeamsContext

export class TeamsProvider extends Component {
  state = {
    teamList: [],
    usersTeamList: [],
    error: null,
  };

  setTeamList = teamList => {
    this.setState({ teamList })
  }

  setUsersTeamList = usersTeamList => {
    this.setState({ usersTeamList })
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
      teamList: this.state.teamList,
      usersTeamList: this.state.usersTeamList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTeamList: this.setTeamList,
      setUsersTeamList: this.setUsersTeamList
    }
    return (
      <TeamsContext.Provider value={value}>
        {this.props.children}
      </TeamsContext.Provider>
    )
  }
}
