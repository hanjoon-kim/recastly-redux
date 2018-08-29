import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import fetch from 'whatwg-fetch';

var handleVideoSearch = q => {
  return fetch('https://www.googleapis.com/youtube/v3/search', {
    q: q,
    key: YOUTUBE_API_KEY,
    maxResults: 5,
    videoEmbeddable: true,
    part: 'snippet',
    type: 'video'
  })
    .then(response => response.json())
    .then(videos => dispatch(changeVideoList(videos)))
    .catch(console.log('error with search'));
};

export default handleVideoSearch;
