import axios from 'axios';

const KEY = 'AIzaSyDUrY8RrdkEuKR5dX5sFRXxTEaUuLO-qO4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    maxResults: 5
  }
});
