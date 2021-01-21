const menu = () => {
    const topMenu = document.querySelector('.top-menu');

    topMenu.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.matches("[href='#services']")){
            const services = document.getElementById('services');
            console.dir(services);
            document.documentElement.scrollTop = services.offsetTop;
        }else if(target.matches("[href='#faq']")){
            const services = document.getElementById('faq');
            console.dir(services);
            document.documentElement.scrollTop = services.offsetTop;

        }else if(target.matches("[href='#contacts']")){
            const services = document.getElementById('contacts');
            console.dir(services);
            document.documentElement.scrollTop = services.offsetTop;

        }

    });
    
};


export default menu;
