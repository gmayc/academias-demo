import React, {useEffect, useState} from 'react'
import { Avatar, Typography, Card, Link } from '@material-ui/core'
import aang2 from  '../pics/aang2.jpg'
import { getUser } from '../helpers/getUser';

const avatarStyle= {
  width: '140px', 
  height: '140px', 
  marginLeft: 'auto',  
  marginRight: 'auto'
}

const typographyStyle ={
  marginTop: '20px'
}

const cardStyle = {
  width: '400px',
  hight: '600px',
  padding: '50px',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const User = () => {
  const [user, setUser] = useState({avatar: aang2, name: 'Aang', link: 'aang@firenation.com', repos: 'hmmmm?' })

  useEffect(() => {
    getUser()
    .then(res => res.data)
    .then(data => setUser({
      avatar: data.avatar_url,
      name: data.login,
      link: data.html_url,
      repos: data.public_repos
    }))
    .catch(err => console.log(err))

  }, []);

  return (
    <div>
      <h1>User</h1>
      <Card style={cardStyle}>
        <Avatar alt="aang" src={user.avatar} style={avatarStyle} />
        <Typography variant='h5' style={typographyStyle}> {user.name} </Typography>
        <Link style={typographyStyle} href={user.link}> {user.link} </Link>
        <Typography style={typographyStyle}> {user.repos} public repos </Typography>
      </Card>
    </div>
  )
}

export default User
