document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('atcButton');

    if (button) {
        button.addEventListener('click', function () {
            const header = document.querySelector('.header');
            const headerHeight = header.clientHeight;

            var section = document.getElementById('atc-section');

            if (section) {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                const scrollToPosition = headerHeight - sectionTop;
    
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth',
                });
            } 

        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.sticky-atc').style.opacity = '0';

    function scrollDetect(){
        var lastScroll = 0;
      
        window.onscroll = function() {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            var topVariation = document.querySelector("[data-sticky-top] .sticky-atc");
      
            if (currentScroll > 0 && lastScroll <= currentScroll){
              lastScroll = currentScroll;
              topVariation.style.top = '0px'; 
            }else{
              lastScroll = currentScroll;
              topVariation.style.top = '70px'; 
            }
        };
      }    
      
    scrollDetect();

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    };
    
    let target = document.querySelector(".product-form__buttons");
    let observer = new IntersectionObserver( function(entries){
    var moveBtn = document.querySelector("[data-sticky-bottom] .needsclick");
    var stickyAtc = document.querySelector('.sticky-atc');

        entries.forEach((entry) => {
            if (entry.isIntersecting){
                stickyAtc.style.opacity = '0';
                stickyAtc.style.display = 'none';
                moveBtn.style.bottom = '0px';
            }
            else {
                stickyAtc.style.opacity = '1';
                stickyAtc.style.display = 'flex';    
                moveBtn.style.bottom = '90px';
            }
        });
    } , options );

    observer.observe(target);
});




