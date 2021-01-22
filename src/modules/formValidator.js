const formValidator = () => {
    const tel = document.querySelectorAll('input[name="tel"]')('input[name="tel"]'),
        fio = document.querySelectorAll('input[name="fio"]');
    
    tel.forEach((item) => {
        item.addEventListener('input', (event) => {
            const target = event.target;
            target.value = target.value.replace(/[^\d\+]/, '');
        });
    });
    fio.forEach((item) => {
        item.addEventListener('input', (event) => {
            const target = event.target;
            target.value = target.value.replace(/[^а-яА-Я]/, '');
        });
    });
};

export default formValidator;
