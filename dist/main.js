(()=>{"use strict";new class{constructor(e){this.slider=document.querySelector(e),this.items=this.slider.querySelectorAll(".item"),this.currentSlide=0,this.createDots(),this.dots=this.slider.querySelectorAll(".slick-dots li"),this.sliderAnimation(),this.indInterval=""}prevSlide(){this.currentSlide>0?this.currentSlide--:this.currentSlide=0}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}removeActive(){this.removeClass(this.items[this.currentSlide],"active"),this.removeClass(this.dots[this.currentSlide],"slick-active")}addActive(){this.addClass(this.items[this.currentSlide],"active"),this.addClass(this.dots[this.currentSlide],"slick-active")}nextSlide(){this.currentSlide<this.items.length-1?this.currentSlide++:this.currentSlide=0}sliderAnimation(){this.removeActive(),this.nextSlide(),this.addActive()}initAnimation(){this.indInterval=setInterval(this.sliderAnimation.bind(this),3e3),this.clickDots()}createDots(){const e=document.createElement("ul");e.classList.add("slick-dots"),this.slider.append(e);for(let t=0;t<this.items.length;++t){const t=document.createElement("li");e.append(t)}}clickDots(){const e=this.slider.querySelector(".slick-dots");e.addEventListener("mouseover",(e=>{e.target.matches("li")&&clearInterval(this.indInterval)})),e.addEventListener("mouseout",(e=>{e.target.matches("li")&&(this.indInterval=setInterval(this.sliderAnimation.bind(this),3e3))})),e.addEventListener("click",(t=>{const i=t.target;if(i.matches("li")){const t=e.querySelectorAll("li");this.removeActive(),t.forEach(((e,t)=>{e===i&&(this.currentSlide=t,console.log(t))})),console.log(this),console.log(this.currentSlide),this.addActive()}}))}}(".top-slider").initAnimation(),(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".modal-callback"),i=document.querySelector(".button-services"),s=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-close"),c=e=>{e.preventDefault(),s.style.display="block",t.style.display="block"};e.forEach((e=>{e.addEventListener("click",c)})),i.addEventListener("click",c);const r=()=>{s.style.display="none",t.style.display="none"};l.addEventListener("click",r),s.addEventListener("click",r)})(),console.dir(document)})();