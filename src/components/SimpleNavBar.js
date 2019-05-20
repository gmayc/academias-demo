import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navBar.css'

const SimpleNavBar = () => {
  return (
      <div className="nav-bar">
        <Link className="link" to="/">home</Link>
        <Link className="link" to="/text">text</Link>
        <Link className="link" to="/form">form</Link>
        <Link className="link" to="/user">user</Link>
      </div>
  )
}

export default SimpleNavBar
