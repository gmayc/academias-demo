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

const Text = () => {
  return (
    <div>
      <Paper style={papaerStyle}>
        <Typography style={textStyle} variant='h3'>Lorem Ipsum</Typography>
        <Typography style={textStyle} variant='h5'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</Typography>
        <Typography style={textStyle} variant='h6'>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</Typography>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio lacus, euismod id iaculis sed, varius ac neque. Pellentesque iaculis massa non ligula pellentesque, ac dignissim justo dapibus. Pellentesque sagittis scelerisque ligula et tristique. Vivamus ut tellus ultricies, placerat neque dictum, imperdiet eros. Vestibulum viverra nec nibh eu mollis. Integer aliquam velit at enim luctus, in venenatis ipsum placerat. Donec aliquet, erat laoreet lobortis placerat, sapien ante mattis mauris, eu euismod odio dui non sapien.</p>
      </Paper>
    </div>
  )
}

export default Text
