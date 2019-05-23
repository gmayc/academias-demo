import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Text from './Text';
import Form from './Form';
import User from './User';
import Home from './Home';
import '../styles/app.css'
import NavBar from './NavBar';

class App extends Component {

  state = {
    
  }

  render (){
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <div className="main-container">
          <Route exact path="/" component={Home}/>
            <Route path="/text" component={Text}/>
            <Route path="/form" component={Form}/>
            <Route path="/user" component={User}/>
          </div>
        </Router>

      </div>
    )
  };
}

export default App;
