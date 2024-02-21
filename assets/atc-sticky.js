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
});

document.addEventListener("scroll", function() {
    var moveBtn = document.querySelector(".needsclick");
    var scroll = window.scrollY;
    var atcSectionPosition = 1300 ;
    var stickyAtc = document.querySelector('.sticky-atc');
    
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



