document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.sticky-atc').style.opacity = '0';
    function scrollDetect(){
        var lastScroll = 0;
      
        window.onscroll = function() {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            var topVariation = document.querySelector("[data-sticky-top] .sticky-atc");
            var header = document.querySelector("header");
      
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
});

document.addEventListener("scroll", function() {
    var moveBtn = document.querySelector(".needsclick");
    var scroll = window.scrollY;
    var stickyAtc = document.querySelector('.sticky-atc');

    if (window.location.toString().includes("en-int")){
        var atcSectionPosition = 1300;
    }
    else {
        var atcSectionPosition = 500;
    }
    
    if (scroll > atcSectionPosition) {
        moveBtn.style.bottom = "90px"
        stickyAtc.style.opacity = '1';
        stickyAtc.style.display = 'flex';
    } else {
        stickyAtc.style.opacity = '0';
        stickyAtc.style.display = 'none';
        moveBtn.style.bottom = "0px"
    }
});



