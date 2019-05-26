import axios from 'axios';

export const getUser = () => {
  return axios.get('https://api.github.com/users/gmayc')
}