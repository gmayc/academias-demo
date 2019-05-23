import React, { Component } from 'react';
import { TextField, Button, Icon } from '@material-ui/core'
import '../styles/form.css';

const submitButtonStyle = {
  fontSize: '18px', 
  backgroundColor: '#3f51b5', 
  color: 'white',
  textTransform: 'none'
}

class Form extends Component {
  state = {

  }
  render(){
    return (
      <div className="form-container">
        <form>
          <h3>React Academy</h3>
          <p>Let us know your experience in the academy, hope you had a blast!</p>
          <div className="text-field">
            <TextField
              fullWidth 
              multiline
              name="title" 
              label="Title" 
              required 
            />
          </div>
          <div className="text-field">
            <TextField
              fullWidth
              multiline 
              name="subtitle" 
              label="Subtitle" 
              required 
            />
          </div>
          <div className="text-field">
            <TextField
              fullWidth
              multiline 
              name="sub-subtitle" 
              label="Moto" 
              required 
            />
          </div>
          <div className="text-field">
            <TextField
              fullWidth
              multiline 
              rows="4" 
              label="Description" 
              required 
            />
          </div>
          <Button style={submitButtonStyle} type="submit" name="Submit">
            submit
            <Icon style={{marginLeft: '10px'}}>
              send
            </Icon>
          </Button>
        </form>
      </div>
    );
  }
  
};

export default Form;
