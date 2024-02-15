document.addEventListener('DOMContentLoaded', function () {


    var button = document.getElementById('myButton');
    console.log('Este es el boton que existe:', button)

    if (button) {
        button.addEventListener('click', function () {
            const header = document.querySelector('.header');
            const headerHeight = header.clientHeight;

            var section = document.getElementById('atc-section');

            if (section) {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                const scrollToPosition = sectionTop - headerHeight;
    
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


window.addEventListener('scroll', function () {
    var scroll = window.scrollY;
    var atcSectionPosition = document.querySelector('#atc-section').getBoundingClientRect().top + window.scrollY;
    var stickyAtc = document.querySelector('.sticky-atc');

    if (scroll > atcSectionPosition) {
        stickyAtc.style.opacity = '1';
        stickyAtc.style.display = 'flex';
    } else {
        stickyAtc.style.opacity = '0';
        stickyAtc.style.display = 'none';
    }
});



