import React, { Component } from 'react'

const TeamListContext = React.createContext({
  teamList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTeamList: () => {},
})
export default TeamListContext

export class TeamListProvider extends Component {
  state = {
    teamList: [],
    userTeamList: [],
    error: null,
  };

  setTeamList = teamList => {
    this.setState({ teamList })
  }

  setUserTeamList = userTeamList => {
    this.setState({ userTeamList })
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
      userTeamList: this.state.userTeamList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTeamList: this.setTeamList,
      setUserTeamList: this.setUserTeamList
    }
    return (
      <TeamListContext.Provider value={value}>
        {this.props.children}
      </TeamListContext.Provider>
    )
  }
}
