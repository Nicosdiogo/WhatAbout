const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 1;
    const interval = parseInt(carousel.getAttribute('data-interval'));

    function nextSlide() {
        slides[currentIndex].classList.remove('active'); // Remove a classe 'active' do slide atual
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active'); // Adiciona a classe 'active' ao próximo slide
    }

    setInterval(nextSlide, interval); // Altera para o próximo slide com o intervalo definido

    // Adiciona uma verificação para reiniciar o índice quando atingir o último slide
    setInterval(() => {
        if (currentIndex === slides.length - 1) {
            currentIndex = 0;
            slides.forEach(slide => slide.classList.remove('active'));
            slides[currentIndex].classList.add('active');
        }
    }, interval * slides.length);
});

(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);

