import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Text from './Text';
import Form from './Form';
import User from './User';
import Home from './Home';
import '../styles/app.css'
import NavBar from './NavBar';
import Search from './Search';

class App extends Component {

  state = {
    text: {}
  }

  handleText = (text) => {
    this.setState({
      text: text
    })
    
  }

  render (){
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <div className="main-container">
          <Route exact path="/" component={Home}/>
            <Route path="/text" render={(props)=> <Text text={this.state.text} {...props}/>}/>
            <Route path="/form" render={(props) => <Form handleText={this.handleText} {...props}/>}/>
            <Route path="/search" component={Search}/>
            <Route path="/user" component={User}/>
          </div>
        </Router>
      </div>
    )
  };
}

export default App;
