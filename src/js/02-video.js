//Import
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

//Reference
const playerRef = document.querySelector('#vimeo-player');

//Constants
const localStorageName = 'videoplayer-current-time';

//Check local storage
const savedTime = Number(localStorage.getItem(localStorageName));

//New Player
const player = new Vimeo(playerRef);

//Set time from local storage
if (savedTime) player.setCurrentTime(savedTime);

//Time handler
const handleTime = ({ seconds }) => {
  localStorage.setItem(localStorageName, seconds);
};

// Check event when player play video
player.on('timeupdate', throttle(handleTime, 1000));
