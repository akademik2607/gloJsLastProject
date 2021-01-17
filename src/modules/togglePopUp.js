const togglePopUp = () => {
    const callbackBtn = document.querySelectorAll('.callback-btn'),    
        modalCallback = document.querySelector('.modal-callback'), 
        modalOverlay = document.querySelector('.modal-overlay');

    callbackBtn.forEach( (item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            modalOverlay.style.display = 'block';
            modalCallback.style.display = 'block';
        });

    console.log(callbackBtn);
    });
};

export default togglePopUp;
