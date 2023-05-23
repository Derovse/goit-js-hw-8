import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAY_VIDEO = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(PLAY_VIDEO, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = Number(localStorage.getItem(PLAY_VIDEO));

player.setCurrentTime(currentTime);
