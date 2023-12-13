// ----------- This is my responsive (Hamburger Menu)----------- //

const menuBtn = document.querySelector('.header__responsiveMenue__Button');
const closeBtn = document.querySelector('.header__responsiveMenue__close');
const menuResponsive = document.querySelector('.header__responsiveMenue');

menuBtn.addEventListener('click', function(){
    menuResponsive.classList.add('is__active');
})

closeBtn.addEventListener('click', function(){
    menuResponsive.classList.remove('is__active');
})

// ----------- This is the end of responsive (Hamburger Menu)----------- //


// ----------- This is my Header Scroll up----------- //

const menu = document.querySelector('.header');
    
lastScrollTop = 0;
window.addEventListener('scroll', function(){
    let scrolltop = window.pageYOffset

    if( scrolltop > lastScrollTop) {
        menu.style.display="none";
    }
    else if (lastScrollTop > scrolltop){
        menu.style.display="inline-flex";
    }

    lastScrollTop = scrolltop
});

// ----------- This is the end of Header Scroll up----------- //
