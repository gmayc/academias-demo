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
    title: '',
    subtitle: '',
    shortDescription: '',
    description: '', 
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleText(this.state)
    this.props.history.push('/text')
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render(){
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h3>React Academy</h3>
          <p>Let us know your experience in the academy, hope you had a blast!</p>
          <div className="text-field">
            <TextField
              fullWidth 
              multiline
              name="title" 
              label="Title"
              value={this.state.title} 
              onChange={this.handleChange}
              required 
            />
          </div>
          <div className="text-field">
            <TextField
              fullWidth
              multiline 
              name="subtitle" 
              label="Subtitle" 
              value={this.state.subtitle} 
              onChange={this.handleChange}
              required 
            />
          </div>
          <div className="text-field">
            <TextField
              fullWidth
              multiline 
              name="shortDescription" 
              label="Short Description" 
              value={this.state.shortDescription} 
              onChange={this.handleChange}
              required 
            />
          </div>
          <div className="text-field">
            <TextField
              fullWidth
              multiline 
              rows="4" 
              name="description" 
              label="Description" 
              value={this.state.description} 
              onChange={this.handleChange}
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
