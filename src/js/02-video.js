import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');

const framePlayer = new Player(iframe);
  



  function saveTime(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
  }

  framePlayer.on('timeupdate', throttle(saveTime, 1000));
  
    const savedTime = Number(JSON.parse(localStorage.getItem('videoplayer-current-time')));


        framePlayer.setCurrentTime(savedTime).then(function(seconds) {
        })
  


