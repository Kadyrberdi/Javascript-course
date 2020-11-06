window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  //timer
  function countTimer(deadline) { 
    let timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');
    
    function  getTimeRemaining() { 
      let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60) % 24;
      return {timeRemaining, hours, minutes, seconds };
    }

    // Add Zeros
    function addZero(n) {
      return (parseInt(n, 10) < 10 ? "0" : "") + n;
    }
    
    function updateClock() {
      let timer = getTimeRemaining();
      let priceSetInterval;
      
      timerHours.textContent = addZero(timer.hours);
      timerMinutes.textContent = addZero(timer.minutes);
      timerSeconds.textContent = addZero(timer.seconds);
      
      if(timer.timeRemaining > 0) {
        priceSetInterval = setInterval(updateClock, 1000);
      } 
      if(timer.timeRemaining <= 0) {
        clearInterval(priceSetInterval);
      }

    }    
    updateClock();
  }

  countTimer('06 november 2020 13:22:00');

});