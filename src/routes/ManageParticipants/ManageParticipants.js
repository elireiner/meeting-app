import React, { Component } from 'react';
import UsersContext from '../../contexts/UsersContext';
import UserApiService from '../../services/users-api-service';
import MeetingApiService from '../../services/meetings-api-service';
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

  createParticipantsList = () => {
    return Array
      .from(document.getElementsByName('checkBox'))
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
  }

  handelSubmit = async (e) => {
    e.preventDefault();
    const list = await this.createParticipantsList()
    const participantsObject = {
      participants: list,
      meetingId: 1
    }
    console.log(participantsObject)
    MeetingApiService.postMeetingParticipants(participantsObject)
      .catch(e)
  }

  renderUsers() {
    const { usersList = [] } = this.context
    return (usersList.map(user =>
      <UserLink
        className='mainLink'
        key={user.user_id}

        user={user}
      />
    ))
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
            : this.renderUsers()
          }
          {!error ?
            <div className="blockDiv">
              <p>Add all selected users</p>
              <input
                className="selectSubmit"
                type="submit"
                name="selectSubmit"
                value="Submit"
                onClick={(e) => this.handelSubmit(e)}
              />
            </div> :
            <></>
          }
        </Section>
      </>
    )
  }
}