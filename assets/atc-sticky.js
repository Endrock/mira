document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.sticky-atc').style.opacity = '0';

    function scrollDetect(){
        var lastScroll = 0;
      
        window.onscroll = function() {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            var topVariation = document.querySelector("[data-sticky-top] .sticky-atc");
            var header = document.querySelector(".header");
      
            if (currentScroll > 0 && lastScroll <= currentScroll){
              lastScroll = currentScroll;
              topVariation.style.top = '0px'; 
              topVariation.classList.add("position-up");
            }else{
              lastScroll = currentScroll;
              topVariation.style.top = '70px'; 
              header.classList.add("position-up");
            }
        };
      }    
      
    scrollDetect();

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    };
    
    let target = document.querySelector(".product-form-custom");
    var varTop = target.getBoundingClientRect().top;

    let observer = new IntersectionObserver( function(entries){
        var moveBtn = document.querySelector("[data-sticky-bottom] .needsclick");
        var moveLtr = document.querySelector("[data-sticky-bottom] #kustomer-ui-sdk-iframe");
        var stickyAtc = document.querySelector('.sticky-atc');

        entries.forEach((entry) => {
            if (entry.isIntersecting){
                stickyAtc.style.opacity = '0';
                stickyAtc.style.display = 'none';
                moveBtn.style.bottom = '0px';
                moveLtr.style.bottom = '0px';
            }
            else {
                if( window.scrollY > varTop){
                    stickyAtc.style.opacity = '1';
                    stickyAtc.style.display = 'flex';    
                    moveBtn.style.bottom = '110px';
                    moveLtr.style.bottom = '115px';
                }
            }
        });
    } , options );

    observer.observe(target);
});



