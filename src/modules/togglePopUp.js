const togglePopUp = () => {
    const callbackBtn = document.querySelectorAll('.callback-btn'),    
        modalCallback = document.querySelector('.modal-callback'), 
        buttonServices = document.querySelector('.button-services'),
        modalOverlay = document.querySelector('.modal-overlay'),
        modalClose = document.querySelector('.modal-close');

    const openPopUp = (event) => {
        event.preventDefault();
        modalOverlay.style.display = 'block';
        modalCallback.style.display = 'block';
    };

    callbackBtn.forEach( (item) => {
        item.addEventListener('click', openPopUp);
    });

    buttonServices.addEventListener('click', openPopUp);

    const closePopUp = () => {
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
    };

    modalClose.addEventListener('click', closePopUp);
    modalOverlay.addEventListener('click', closePopUp);
};

export default togglePopUp;
