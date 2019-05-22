import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
import '../styles/navBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <AppBar>
        <Toolbar>
          <NavLink to='/' className="link"  activeClassName="selected">
            <IconButton color="inherit">
              <MenuIcon/>
            </IconButton>
          </NavLink>
          <NavLink to="/text" className="link" activeClassName="selected">
            <Button color="inherit">Text</Button>
          </NavLink>
          <NavLink to="/form" className="link" activeClassName="selected">
            <Button color="inherit">Form</Button>
          </NavLink>
          <NavLink to="/user" className="link" activeClassName="selected">
            <Button color="inherit">User</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
