import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navBar.css'

const SimpleNavBar = () => {
  return (
      <div className="nav-bar">
        <div className="link-container">
          <NavLink exact to="/" className="link"  activeClassName="selected">home</NavLink>
        </div>
        <div className="link-container">
          <NavLink to="/text" className="link" activeClassName="selected">text</NavLink>
        </div>
        <div className="link-container">
          <NavLink to="/form" className="link" activeClassName="selected">form</NavLink>
        </div>
        <div className="link-container" id="user-link">
          <NavLink to="/user" className="link" activeClassName="selected">user</NavLink>
        </div>
      </div>
  )
}

export default SimpleNavBar
