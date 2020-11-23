const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcСount = document.querySelector('.calc-count'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total'),
        calcItems = document.getElementsByClassName('calc-item');


        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }


            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;

            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });

        //валидация в калькуляторе
        for (let i = 1; i < calcItems.length; i++) {
            calcItems[i].addEventListener('input', () => {
                calcItems[i].value = calcItems[i].value.replace(/\D/g, '');
            });
        }

        // меняем картинки в блоке с картинками Наша Команда
        const img = document.getElementsByClassName('command__photo');
        for (let i = 0; i < img.length; i++) {
            let oldSrc = img[i].src;

            img[i].addEventListener('mouseover', (e) => {
                e.target.src = e.target.dataset.img;
            });
            img[i].addEventListener('mouseout', (e) => {
                e.target.src = oldSrc;
            });
        }
};

export default calc;