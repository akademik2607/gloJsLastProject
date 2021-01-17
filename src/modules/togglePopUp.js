const togglePopUp = () => {
    const callbackBtn = document.querySelectorAll('.callback-btn'),    
        modalCallback = document.querySelector('.modal-callback'), 
        modalOverlay = document.querySelector('.modal-overlay'),
        modalClose = document.querySelector('.modal-close');
    callbackBtn.forEach( (item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            modalOverlay.style.display = 'block';
            modalCallback.style.display = 'block';
        });

    const closePopUp = () => {
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
    };

    modalClose.addEventListener('click', closePopUp);
    modalOverlay.addEventListener('click', closePopUp);
    console.log(callbackBtn);
    });
};

export default togglePopUp;
