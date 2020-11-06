window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  let greeting = document.querySelector('#greeting'),
      day = document.querySelector('#day'),
      time = document.querySelector('#time'),
      newYear = document.querySelector('#new-year');

  const Days = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье",
  };

  function showTime() {
    let today = new Date(),
      dayOfWeek = today.getDay(),
      hour = today.getHours();

    const newYear2021 = new Date('01 january 2021'),
          timeRemaining = (newYear2021 - today) / 1000,
          dayRemaining = Math.floor(timeRemaining / 60 / 60 / 24);

    for(let i = 0; i < 24; i++) {
      if(hour[i] > 7 && hour[i] < 11) {
        greeting.innerHTML = 'Доброе утро';
      } else if(hour[i] < 18) {
        greeting.innerHTML = 'Добрый день';
      } else if (hour[i] < 22) {
        greeting.innerHTML = 'Добрый вечер';
      } else {
        greeting.innerHTML = 'Добрый ночи';
      }
    }

    day.innerHTML = `<span>Сегодня : </span>${Days[dayOfWeek]}`;
    time.innerHTML = `<span>Текущее время : </span>${today.toLocaleTimeString('en')}`;
    newYear.innerHTML = `<span>До нового года осталось : </span>${dayRemaining}<span> дней</span>`;
    

  }
  showTime();
});