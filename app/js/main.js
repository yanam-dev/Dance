$(function(){

    $('.header__top-slider').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 800,
        slidesToShow: 1
    });
    $('.works-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="images/icons/chevron-left.svg" alt="Link to...">',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="images/icons/chevron-right.svg" alt="Link to...">',
    });
    
    // menu button
    const navSLide = () => {
        const menu__btn = document.querySelector('.menu__btn');
        const nav = document.querySelector('.menu__list');
        const navLinks = document.querySelectorAll('.menu__list li');
        
        menu__btn.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('menu-active')
    
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            // Burger ANimation
            menu__btn.classList.toggle('toggle');
        });
    }
    navSLide();
    
    // wow animation
    wow = new WOW(
        {
        boxClass:     'wow',
        animateClass: 'animated', 
        offset:       0,         
        mobile:       true,      
        live:         true   
      }
      )
    wow.init();
});