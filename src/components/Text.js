import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const papaerStyle = {
  marginTop: '30px', 
  padding: '40px', 
  width: '600px', 
  marginLeft: 'auto',  
  marginRight: 'auto'
}

const textStyle = {
  marginBottom: '30px'
}

const Text = (props) => {
  const {
    title,
    subtitle,
    shortDescription,
    description
  } = props.text

  return (
    <div>
      <Paper style={papaerStyle}>
        <Typography style={textStyle} variant='h3'>{title || 'Title'}</Typography>
        <Typography style={textStyle} variant='h5'>"{subtitle || 'Subtitle'}"</Typography>
        <Typography style={textStyle} variant='h6'>"{shortDescription || 'Short Description'}"</Typography>
        <p>{description || 'Description'}</p>
      </Paper>
    </div>
  )
}

export default Text
