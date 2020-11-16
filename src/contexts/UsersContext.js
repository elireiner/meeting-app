import React, { Component } from 'react'

const UsersContext = React.createContext({
  user: [],
  usersList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  setUsersList: () => {},
})

export default UsersContext

export class UsersProvider extends Component {
  state = {
    user: [],
    usersList: [],
    error: null,
  };

  setUser = user => {
    this.setState({ user })
  }

  setUsersList = usersList => {
    this.setState({ usersList })
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
      user: this.state.user,
      usersList: this.state.usersList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      setUsersList: this.setUsersList,
    }
    return (
      <UsersContext.Provider value={value}>
        {this.props.children}
      </UsersContext.Provider>
    )
  }
}
