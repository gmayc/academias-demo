import React from 'react'
import { 
  IconButton,
  Button, 
  AppBar,
  Toolbar 
} from '@material-ui/core'
import { AccountCircle, HomeRounded, SearchRounded } from '@material-ui/icons';
import { NavLink } from 'react-router-dom'
import '../styles/navBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <AppBar>
        <Toolbar>
          <NavLink to='/' className="link"  activeClassName="selected">
            <IconButton color="inherit">
              <HomeRounded/>
            </IconButton>
          </NavLink>
          <NavLink to="/text" className="link" activeClassName="selected">
            <Button color="inherit">Text</Button>
          </NavLink>
          <NavLink to="/form" className="link" activeClassName="selected">
            <Button color="inherit">Form</Button>
          </NavLink>
          <NavLink to="/search" className="link" id='search-link' activeClassName="selected">
            <IconButton color="inherit">
              <SearchRounded/>
            </IconButton>
          </NavLink>
          <NavLink to="/user" className="link" id='user-link' activeClassName="selected">
            <IconButton color="inherit">
              <AccountCircle/>
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
