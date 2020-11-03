import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Hyph } from '../Utils/Utils'
import './Nav.css'

export default class Nav extends Component {
  handleLogoutClick = () => {
  }

  renderHomeNav() {
    const trends = { 
        pathname: `/trends`, 
        state: { recurringMeetings: true }
      };
    return (
      <div className='Nav__logged-in'>
          <h1>Meeting App</h1>
        <Link
          to={trends}>
          Trends
        </Link>
      </div>
    )
  }

  renderNonHomeNav() {
    const trends = { 
        pathname: `/`,
      };
    return (
      <div className='Nav__logged-in'>
        <Link
          to={trends}>
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
