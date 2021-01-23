const formRequest = () => {
        const forms = document.querySelectorAll('form'),
            errorMessage = 'Ошибка!',
            loadMessage = 'Загрузка...',
            succesMessage = 'Спасибо, мы скоро с Вами свяжемся!',
            statusMessage = document.createElement('div');
            

    forms.forEach((item) => {
        item.addEventListener('submit', () => {
            event.preventDefault();
            item.append(statusMessage);

            const fio = item.querySelector('input[name="fio"]'),
                tel = item.querySelector('input[name="tel"]');
               if(fio.value.trim().length < 2 || tel.value.trim().length > 11 
                    || tel.value.trim().length < 6) return; 

            const request  = new XMLHttpRequest();

            request.addEventListener('readystatechange', () =>{
                statusMessage.textContent = loadMessage;

                if(request.readyState !== 4) return;

                if(request.status === 200){
                    statusMessage.textContent = succesMessage;
                    
                }else{
                    statusMessage.textContent = errorMessage;

                }
                setTimeout(() => {statusMessage.textContent = '';}, 5000);
            }); 

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            const data = new FormData(item);


            fio.value = '';
            tel.value = '';

            const body = {};
            data.forEach((value, index) => {
                body[index] = value;
            });
            request.send(JSON.stringify(body));

            
            
        });
    });
};

export default formRequest;
