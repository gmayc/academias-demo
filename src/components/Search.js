import React, { Component } from 'react'
import { 
  Button,  
  List, 
} from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import { searchGithub } from '../helpers/searchGithubHelper';
import ListEntry from './ListEntry';


class Search extends Component {

  state = {
    repos: []
  }

  componentDidMount () {
    this.handleSearch()
  }

  handleSearch = () => {
    searchGithub()
    .then(repos => {
      this.setState({
        repos: repos.data.items
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Button color='inherit' onClick={()=> this.handleSearch()}>
          Search github
          <SearchRounded style={{marginLeft: '10px'}}/>
          </Button>
        <List style={{marginLeft: 'auto', marginRight: 'auto'}}>
          {this.state.repos.map((repo, key) => (
            <ListEntry key={key} repo={repo}/>
          ))}
        </List>
      </div>
    )
  }
}

export default Search
