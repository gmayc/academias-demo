import React from 'react'
import { Avatar, Typography, Card } from '@material-ui/core'
import aang2 from  '../pics/aang2.jpg'

const avatarStyle= {
  width: '140px', 
  height: '140px', 
  marginLeft: 'auto',  
  marginRight: 'auto'
}

const typographyStyle ={
  fontSize: '40px',
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
  return (
    <div>
      <h1>User</h1>
      <Card style={cardStyle}>
        <Avatar alt="aang" src={aang2} style={avatarStyle} />
        <Typography style={typographyStyle}> Aang </Typography>
        <Typography style={typographyStyle}> aang@firenation.com </Typography>
        <Typography style={typographyStyle}> hmmmm? </Typography>
      </Card>
    </div>
  )
}

export default User
