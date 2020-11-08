window.addEventListener('DOMContentLoaded', () => {


    //timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function  getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60) % 24;
            return { timeRemaining, hours, minutes, seconds };
        }

        // Add Zeros
        function addZero(n) {
            return (parseInt(n, 10) < 10 ? "0" : "") + n;
        }

        function updateClock() {
            const timer = getTimeRemaining();
            let priceSetInterval;

            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);

            if (timer.timeRemaining > 0) {
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
    countTimer('07 november 2020 02:26:00');


    //menu

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);

        menu.addEventListener('click', event => {
            if (event.target.tagName === 'A') {
                handlerMenu();
            }
        });

    };
    toggleMenu();

    //popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = document.querySelector('.popup-content');

        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                let count = 0;
                if (screen.width > 768) {
                    const animatePopup = function() {
                        count++;
                        popupContent.style.left = count * 20 + 'px';
                        popupContent.style.top = count * 5 + 'px';
                        if (count < 15 && screen.width > 768) {
                            setTimeout(animatePopup, 60);
                        }
                    };
                    animatePopup();
                }
                if (screen.width > 920) {
                    const animatePopup = function() {
                        count++;
                        popupContent.style.left = count * 9 + 'px';
                        popupContent.style.top = count * 3 + 'px';
                        if (count < 80 && screen.width > 768) {
                            setTimeout(animatePopup, 60);
                        }
                    };
                    animatePopup();
                }
            });
        });

        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });
    };
    togglePopUp();

    //tabs

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tabContent[i].classList.remove('d-none');
                    tab[i].classList.add('active');
                } else {
                    tabContent[i].classList.add('d-none');
                    tab[i].classList.remove('active');
                }
            }
        };
        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab'); // если не найдет поднимается на вверх и ищет его родителей
            if (target.classList.contains('service-header-tab')) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    tabs();

});
