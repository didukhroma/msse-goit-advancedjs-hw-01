//Import
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

//Reference
const playerRef = document.querySelector('#vimeo-player');

//Constants
const localStorageKey = 'videoplayer-current-time';

//Check local storage
const savedTime = Number(localStorage.getItem(localStorageKey));

//New Player
const player = new Vimeo(playerRef);

//Set time from local storage
if (savedTime) player.setCurrentTime(savedTime);

//Time handler
const handleTime = ({ seconds }) => {
  localStorage.setItem(localStorageKey, seconds);
};

// Check event when player play video
player.on('timeupdate', throttle(handleTime, 1000));
