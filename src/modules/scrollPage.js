const scrollPage = () => {
    const up = document.querySelector('.up'),    
        services = document.getElementById('services');
    up.style.display = 'none';
    document.addEventListener('scroll', (event) => {
        if(document.documentElement.scrollTop < services.offsetTop){
            up.style.display = 'none';
        }else{
            up.style.display = 'block';
        }
    });

    
    up.addEventListener('click', (event) => {
        let animateId = '';
        animateId = setInterval(() => {
            if(document.documentElement.scrollTop > 0){
                document.documentElement.scrollTop -= 220;
            }else{
                document.documentElement.scrollTop = 0;
                clearInterval(animateId);
            }

        }, 50);
        //console.dir(document.documentElement);
    });
};


export default scrollPage;




