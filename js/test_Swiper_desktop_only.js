
/* Swiper
**************************************************************/
var swiper= Swiper;
var init = false;



/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for desktop)
    if(desktop.matches) {
        if (!init) {
            init = true;
            var swiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                threshold: 200, 
                //  threshold 可調整敏感度。滑动超过px，才会触发显示下一页/上一页
                slidesPerView: 1,
                spaceBetween: 30,
                mousewheel: true,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                  renderBullet: function (index, className) {
                        
                            switch(index){//用来显示自定义的文本，将(index + 1)替换为text即可
                                case 0:text='Home';break;
                                case 1:text='About';break;
                                case 2:text='Work';break;
                                case 3:text='Show';break;
                                case 4:text='Hobby';break;
                            }
                       
                        // return `<span class="${className}">${(index + 0)}</span>`;
                        return `<span class="${className}">${text}</span>`;
                    },
          },
            });
            // swiper = new Swiper('.swiper-container', {
            //     slidesPerView: 3,
            //     autoplay: {
            //         delay: 100,
            //         disableOnInteraction: false,
            //     },
            //     centeredSlides: true,
            //     loop: true,
            //     spaceBetween: 10,
            //     direction: 'horizontal',
            //     effect: 'coverflow',

            //     navigation: {
            //         nextEl: '.swiper-button-next',
            //         prevEl: '.swiper-button-prev',
            //     },

            //     coverflowEffect: {
            //         rotate: 0,
            //         stretch: 0,
            //         depth: 0,
            //         modifier: 0,
            //         slideShadows: false,
            //     },

            //     breakpoints: {

            //         767: {
            //             slidesPerView: 1,
            //             spaceBetween: 0,
            //             effect: 'coverflow',

            //             coverflowEffect: {
            //                 rotate: 0,
            //                 stretch: 20,
            //                 depth: 120,
            //                 modifier: 3,
            //                 slideShadows: false,
            //             }
            //         }

            //     }

            // });
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for mobile)
    else if(mobile.matches) {
        swiper.destroy();
        init = false;
    }
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});