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
      } else {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        clearInterval(priceSetInterval);
      }

    }    
    updateClock();
  }

  countTimer('10 november 2020 02:26:00');


  //menu

  const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu'),
          closeBtn = document.querySelector('.close-btn'),
          menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    
  };

  toggleMenu();

  //popup

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupClose = document.querySelector('.popup-close');
          
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    });

    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  };

  togglePopUp();

});