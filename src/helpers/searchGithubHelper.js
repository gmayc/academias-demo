import axios from 'axios';

export const searchGithub = () => {
  return axios.get('https://api.github.com/search/repositories', { 
    params:{ 
      q: 'stars:>=25000'
    }
  })
}