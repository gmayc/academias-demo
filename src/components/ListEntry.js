import React from 'react'
import { 
  Link, 
  Avatar, 
  ListItem, 
  ListItemAvatar, 
  ListItemText 
} from '@material-ui/core';

const ListEntry = ({repo}) => {
  const {
    html_url,
    owner,
    name,
    stargazers_count
  } = repo

  return (
    <Link href={html_url}>
      <ListItem button>
        <ListItemAvatar src={owner.avatar_url}>
          <Avatar src={owner.avatar_url}/>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={`Star Count: ${stargazers_count}`}/>
      </ListItem>
    </Link>
  )
}

export default ListEntry
