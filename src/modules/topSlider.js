const topSlider = () => {
    
    class Slider{
        constructor(sliderSelector){
            this.slider = document.querySelector(sliderSelector);
            this.items = this.slider.querySelectorAll('.item');
            this.currentSlide = 0;
            this.createDots();
            this.dots = this.slider.querySelectorAll('.slick-dots li');
            this.sliderAnimation();
            this.indInterval = '';
        }

        prevSlide(){
            if(this.currentSlide > 0){
                this.currentSlide--;
            }
            else{
                this.currentSlide = 0;
            }
        }
        addClass(item, className){
            item.classList.add(className);
        }

        removeClass(item, className){
            item.classList.remove(className);
        }
        
        removeActive(){
            this.removeClass(this.items[this.currentSlide], 'active');
            this.removeClass(this.dots[this.currentSlide], 'slick-active');
        }

        addActive(){
            this.addClass(this.items[this.currentSlide], 'active');
            this.addClass(this.dots[this.currentSlide], 'slick-active');
        }

        nextSlide(){
            if(this.currentSlide < (this.items.length - 1)){
                this.currentSlide++;
            }
            else{
                this.currentSlide = 0;
            }
        }

        sliderAnimation(){
            this.removeActive(); 
            this.nextSlide();
            this.addActive();
        }

        initAnimation(){
            this.indInterval = setInterval(this.sliderAnimation.bind(this), 3000);
            this.clickDots();
        }

        createDots(){
            const ul = document.createElement('ul');
            ul.classList.add('slick-dots');
            this.slider.append(ul);
            for(let i = 0; i < this.items.length; ++i){
                const dot = document.createElement('li');
                ul.append(dot);
            }
        }

        clickDots(){
            const slickDots = this.slider.querySelector('.slick-dots'); 
            slickDots.addEventListener('mouseover', (event) => {
                const target = event.target;
                if(target.matches('li')){
                    clearInterval(this.indInterval);
                }
            });
            slickDots.addEventListener('mouseout', (event) => {
                const target = event.target;
                if(target.matches('li')){
                    this.indInterval = setInterval(this.sliderAnimation.bind(this), 3000);
                }
            });
            slickDots.addEventListener('click', (event) => {
                const target = event.target;
                if(target.matches('li')){
                    const dotLis = slickDots.querySelectorAll('li');
                    this.removeActive();

                    dotLis.forEach((item, index) => {
                        if(item === target){
                            this.currentSlide = index;
                            console.log(index);
                        }
                    });
                    console.log(this);
                    console.log(this.currentSlide);
                    console.log('click');
                    this.addActive();
                }
            });
        }
    };


    const slider = new Slider('.top-slider');
    slider.initAnimation();

};


export default topSlider;
