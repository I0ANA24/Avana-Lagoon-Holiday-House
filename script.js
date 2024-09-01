let hamburger = document.getElementById('menu-icon');
let close = document.getElementById('menu-icon-close');
let menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.style.display = "none";
    close.style.display = "block";
    menu.style.display = "flex";

    document.addEventListener('click', (event) => {
        if(close.style.display === "block" && !menu.contains(event.target) && !hamburger.contains(event.target)) {
            close.style.display = "none";
            hamburger.style.display = "block";
            menu.style.display = "none";
            document.body.style.overflow = "scroll";

            if(event.target.tagName === 'A' || event.target.tagName === 'IMG') {
                event.preventDefault();
            }
        }
    });
});

close.addEventListener('click', () => {
    close.style.display = "none";
    hamburger.style.display = "block";
    menu.style.display = "none";
    document.body.style.overflow = "scroll";
});

let startX = 0;
let endX = 0;

document.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchmove', function(e) {
    endX = e.touches[0].clientX;
});

document.addEventListener('touchend', function(e) {
    let deltaX = endX - startX;

    if (deltaX > 100) { // swipe right
        hamburger.style.display = "none";
        close.style.display = "block";
        menu.style.display = "flex";
        document.body.style.overflow = "hidden";
    } else if (deltaX < -100) { // swipe left
        close.style.display = "none";
        hamburger.style.display = "block";
        menu.style.display = "none";
        document.body.style.overflow = "scroll";

    }
});