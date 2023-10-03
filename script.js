const navEL = document.querySelector('.browser');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navEL.classList.add('nav-scrolled');
    } else if (window.scrollY <= 50) {
        navEL.classList.remove('nav-scrolled');
    }
});

function imgroll() {
    var img = document.getElementById('logo');
    var link1 = document.getElementById('a1')
    var link2 = document.getElementById('a2')
    var link3 = document.getElementById('a3')
    var link4 = document.getElementById('a4')
    var link5 = document.getElementById('a5')
    var hamburguerDivs = document.querySelectorAll('.hamburguer div')
    var scrolltop = window.scrollY;
    var screenWidth = window.innerWidth;

    if (scrolltop >= 50) {
        img.src = "images/logo_Tout-removebg-preview.png";
        link1.style.color = "#593520"
        link2.style.color = "#593520"
        link3.style.color = "#593520"
        link4.style.color = "#593520"
        link5.style.color = "#593520"
        hamburguerDivs.forEach(function(div) {
            div.style.backgroundColor = "#000";
        });
    } else {
        img.src = "images/Design_sem_nome-removebg-preview.png"
        link1.style.color = "#FFF"
        link2.style.color = "#FFF"
        link3.style.color = "#FFF"
        link4.style.color = "#FFF"
        link5.style.color = "#FFF"
        hamburguerDivs.forEach(function(div) {
            div.style.backgroundColor = "#29180F";
        });
    }

    if (screenWidth <= 1100) {
        img.src = "images/logo_Tout-removebg-preview.png";
        link1.style.color = "#593520";
        link2.style.color = "#593520";
        link3.style.color = "#593520";
        link4.style.color = "#593520";
        link5.style.color = "#593520";
    }
}

window.addEventListener("scroll", imgroll);
window.addEventListener('resize', imgroll);

imgroll()

// slider window

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 0;

var manualNav = function(manual) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        btns[index].classList.remove('active');
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    currentSlide = manual;
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (!btns[i].classList.contains('active')) {
            manualNav(i);
        }
    });
});

var repeat = function() {
    var repeater = function() {
        setTimeout(function() {
            manualNav((currentSlide + 1) % slides.length);
            repeater();
        }, 10000);
    };
    repeater();
};

repeat();

function showAlert() {
    alert("Your reservation has been made!");
}