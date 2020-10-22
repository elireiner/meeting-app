import React, { Component } from 'react'

const TeamListContext = React.createContext({
  teamList: [],
  usersTeamList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTeamList: () => {},
  setUsersTeamList: () => {}
})
export default TeamListContext

export class TeamListProvider extends Component {
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
      <TeamListContext.Provider value={value}>
        {this.props.children}
      </TeamListContext.Provider>
    )
  }
}
