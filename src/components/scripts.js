document.addEventListener('DOMContentLoaded', function() {
    // Hero Carousel
    let heroSlides = document.querySelectorAll('#hero-carousel .slide');
    let heroIndex = 0;

    function showNextHeroSlide() {
        heroSlides[heroIndex].classList.remove('active');
        heroIndex = (heroIndex + 1) % heroSlides.length;
        heroSlides[heroIndex].classList.add('active');
    }

    setInterval(showNextHeroSlide, 5000); // Change slide every 5 seconds

    // Services Carousel
    let serviceSlides = document.querySelectorAll('#services-carousel .slide');
    let serviceIndex = 0;

    function showNextServiceSlide() {
        serviceSlides[serviceIndex].classList.remove('active');
        serviceIndex = (serviceIndex + 1) % serviceSlides.length;
        serviceSlides[serviceIndex].classList.add('active');
    }

    setInterval(showNextServiceSlide, 5000); // Change slide every 5 seconds
});

var swiper = new Swiper('.swiper', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
    },
});

