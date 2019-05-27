import React from 'react';
import { 
  Link, 
  Avatar, 
  ListItem, 
  ListItemAvatar, 
  ListItemText 
} from '@material-ui/core';

export const ListItemEntry = (props) => {
  const { repo } = props

  return (
    <div>
      <Link href={repo.html_url}>
        <ListItem button >
          <ListItemAvatar src={repo.owner.avatar_url}>
            <Avatar src={repo.owner.avatar_url}/>
          </ListItemAvatar>
          <ListItemText primary={repo.name} secondary={`Star Count: ${repo.stargazers_count}`}/>
        </ListItem>
      </Link>
    </div>
  )
}