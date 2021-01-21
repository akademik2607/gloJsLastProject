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

            const request  = new XMLHttpRequest();

            request.addEventListener('readystatechange', () =>{
                statusMessage.textContent = loadMessage;

                if(request.readyState !== 4) return;

                if(request.status === 200){
                    statusMessage.textContent = succesMessage;
                    
                }else{
                    statusMessage.textContent = errorMessage;

                }

            }); 

            request.open('GET', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            const data = new FormData(item);
            const body = {};
            data.forEach((item, index) => {
                body[index] = item;
            });
            request.send(JSON.stringify(body));

            
            
        });
    });
};

export default formRequest;
