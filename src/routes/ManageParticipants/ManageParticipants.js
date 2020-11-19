import React, { Component } from 'react';
import UsersContext from '../../contexts/UsersContext';
import UserApiService from '../../services/users-api-service';
import { Section } from '../../components/Utils/Utils';
import UserLink from '../../components/UserLink/UserLink';
import Nav from '../../components/Nav/Nav';
import './ManageParticipants.css'

export default class ManageParticipants extends Component {
  static contextType = UsersContext

  async componentDidMount() {
    this.context.clearError()


    // TODO: change dynamically depending on user
    let currentUser = 1
    await UserApiService.getUser(currentUser)
      .then(this.context.setUser)
      .catch(this.context.setError)

    UserApiService.getAllUsers()
      .then(res => {
        this.context.setUsersList(res)
      })
      .catch(this.context.setError)
  }

  renderUsers() {
    let onlyTrends = false;
    const path = this.props.match.path;
    if (path === '/user-trends') {
      onlyTrends = true;
    }

    const { usersList = [] } = this.context

    return usersList.map(user =>
      <UserLink
        className='mainLink'
        key={user.user_id}
        user={user}
        onlyTrends={onlyTrends}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <>
        <Nav />
        <h1>Add Participants</h1>
        <h2>Users</h2>
        <Section list className='ManageParticipantsPage'>
          {error
            ? <p className='red'>There was an error, try again</p>
            : this.renderUsers()}
        </Section>
      </>
    )
  }
}