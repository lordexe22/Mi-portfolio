let rotated = false;








const animateScrollMenu = (e) => {
    const scrollMenu = document.getElementById('scroll-menu');
    const content = document.getElementById('content');
    const nav = document.querySelector('nav');

    if(e.target.matches('.scroll-menu') && !rotated){
        scrollMenu.style.transform = 'rotate(-90deg)';
        rotated = true;
        content.style.transform = 'rotate(-20deg)';
        nav.style.transform = 'translateX(0px)';
        return;
    }
    scrollMenu.style.transform = 'rotate(0deg)';
    rotated = false;
    content.style.transform = 'rotate(0deg)';
    nav.style.transform = 'translateX(-500px)';
}


window.addEventListener('click',animateScrollMenu);

