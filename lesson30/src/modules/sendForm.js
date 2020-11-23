const sendForm = () => {
        const errorMessage = 'Что то пошло не так ...',
            loadMessage = 'Загрузка ...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const form = document.querySelectorAll('form'),
        phone = document.querySelectorAll('input[name="user_phone'),    
        name = document.querySelectorAll('input[name="user_name"]'),   
        email = document.querySelectorAll('input[name="user_email"]'),   
        message = document.querySelectorAll('input[name="user_message"]');
        
        for (let i = 0; i < 3; i++) {
            name[i].setAttribute('required', '');
            email[i].setAttribute('required', '');
            phone[i].setAttribute('required', '');
        }   
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2 rem;';
        statusMessage.style.color = 'grey';
        
        for (let i = 0; i < form.length; i++) {
            form[i].addEventListener('submit', (event) => {
                const inputs = document.querySelectorAll('form input');
                
                event.preventDefault();
                form[i].appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                const formData = new FormData(form[i]);
                let body = {};
                
                formData.forEach((val, key) => {
                    body[key] = val;
                });   
                //4) После отправки инпуты должны очищаться
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';
                }  
                
                postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        statusMessage.textContent = successMessage
                    })
                    .catch((error) => {
                        statusMessage.textContent = errorMessage
                        console.log(error);
                    });
            });
        }

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
                credentials: 'include'
            });
        };

        //validator 
        for (let i = 0; i < form.length; i++) {
            const validator = function () {
                phone[i].value = phone[i].value.replace(/[^0-9+]/ig, '');
                name[i].value = name[i].value.replace(/[^а-яА-Я \ ]/ig, '');
                message[0].value = message[0].value.replace(/[^а-яА-Я \ ]/ig, '');
            }
        phone[i].addEventListener('input', validator);
        name[i].addEventListener('input', validator);
        message[0].addEventListener('input', validator);
        };
};

export default sendForm;