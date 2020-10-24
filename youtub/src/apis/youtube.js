import axios from 'axios';

const KEY = 'AIzaSyCCkYLNtemy1UK_y5DUR-9aMREOoYmpxbg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
