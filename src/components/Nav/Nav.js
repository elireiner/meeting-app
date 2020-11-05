import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Hyph } from '../Utils/Utils'
import './Nav.css'

export default class Nav extends Component {
  handleLogoutClick = () => {
  }

  renderHomeNav() {
    const path = { 
        pathname: `/trends`, 
        state: { recurringMeetings: true }
      };
    return (
      <div className='Nav__logged-in'>
          <h1>Meeting App</h1>
        <Link
          to={path}>
          Trends
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
        <Link
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
