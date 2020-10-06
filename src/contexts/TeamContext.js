import React, { Component } from 'react'

export const nullTeam = {
  author: {},
  tags: [],
}

const TeamContext = React.createContext({
  team: nullTeam,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setTeam: () => {},
  clearTeam: () => {},
  setComments: () => {},
  addComment: () => {},
})

export default TeamContext

export class TeamProvider extends Component {
  state = {
    team: nullTeam,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setTeam = team => {
    this.setState({ team })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearTeam = () => {
    this.setTeam(nullTeam)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      team: this.state.team,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTeam: this.setTeam,
      setComments: this.setComments,
      clearTeam: this.clearTeam,
      addComment: this.addComment,
    }
    return (
      <TeamContext.Provider value={value}>
        {this.props.children}
      </TeamContext.Provider>
    )
  }
}
