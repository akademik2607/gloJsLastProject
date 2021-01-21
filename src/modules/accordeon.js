const accordeonAction = () =>{
    const activeContentStyle = () => {
        const body = document.querySelector('body'),
            activeContent = document.createElement('style');
        activeContent.textContent = '.accordeon .active-content{ display:block;} .accodeon content-element{display: none !important;}';
        body.append(activeContent);

    };

    activeContentStyle();

    const accordeon = document.querySelector('.accordeon'), 
        elements = accordeon.querySelectorAll('.element'),
        elementContent = accordeon.querySelectorAll('.element-content');
    
    let currentIndex = 0;
    
    accordeon.addEventListener('click', (event) => {
        const target = event.target.closest('.element');
        if(elements[target] === elements[currentIndex]){
            return;
        }

        elements[currentIndex].classList.remove('active');
        elementContent[currentIndex].classList.remove('active-content');
        elements.forEach((item, index) => {
            if(target === item){
                currentIndex = index; 
            }
        });
        elements[currentIndex].classList.add('active');
        elementContent[currentIndex].classList.add('active-content');

    });
};


export default accordeonAction;
