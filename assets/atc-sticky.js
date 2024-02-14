document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('myButton');

    if (button) {
        button.addEventListener('click', function () {
            var section = document.getElementById('atc-section');

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        });
    }
});

/*

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.sticky-atc').style.opacity = '0';
});


window.addEventListener('scroll', function() {
  var scroll = window.scrollY;
  var headerHeight = document.querySelector('#atc-section').offsetHeight;
  var stickyAtc = document.querySelector('.sticky-atc');

  if (scroll > headerHeight) {
      stickyAtc.style.opacity = '1';
      stickyAtc.style.display = 'flex';
  } else {
      stickyAtc.style.opacity = '0';
      stickyAtc.style.display = 'none';
  }
});
*/


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