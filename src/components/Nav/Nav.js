import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  handleLogoutClick = () => {
  }

  renderHomeNav() {
    const path = { 
        pathname: `/meetings`, 
        state: { recurringMeetings: false }
      };
    return (
      <div className='Nav__logged-in'>
          <h1>Meeting App</h1>
          <Link  className="nav-link new-meeting-link" to='/new-meeting-teams'>Create meeting</Link>
        <Link
        className="nav-link All-meetings-link"
          to={path}>
          All Meetings
        </Link>
      </div>
    )
  }

  renderNonHomeNav() {
    const path = { 
        pathname: `/`,
      };
    return (
      <div className='Nav__logged-in'>
        <h1 className="appName">Meeting App</h1>
        <Link
          className="nav-link home-link"
          to={path}>
          Home
        </Link>
      </div>
    )
  }

 /* renderLoginLink() {
    return (
      <div className='Nav__not-logged-in'>
        <Link
          to='/register'>
          Register
        </Link>
        <Hyph />
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }*/

  render() {
    return (
      <nav className='Nav'>
        {this.props.page === 'home'
          ? this.renderHomeNav()
          : this.renderNonHomeNav()}
      </nav>
    )
  }
}
