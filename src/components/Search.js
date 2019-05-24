import React, { Component } from 'react'
import { 
  Button, 
  Typography, 
  Link, 
  Avatar, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText 
} from '@material-ui/core';
import { searchGithub } from '../helpers/searchGithubHelper';
import { SearchRounded } from '@material-ui/icons';


class Search extends Component {

  state = {
    repos: []
  }

  handleSearch = () => {
    searchGithub().then(repos => {
      this.setState({
        repos: repos.data.items
      })
    })
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
            <Link href={repo.html_url}>
            <ListItem key={key} button style={{paddingLeft: '40%'}}>
              <ListItemAvatar src={repo.owner.avatar_url}>
                <Avatar src={repo.owner.avatar_url}/>
              </ListItemAvatar>
                <ListItemText primary={repo.name} secondary={`Star Count: ${repo.stargazers_count}`}/>
                <ListItemText >
                </ListItemText>
              </ListItem>
              </Link>
          ))}
        </List>
      </div>
    )
  }
}

export default Search
