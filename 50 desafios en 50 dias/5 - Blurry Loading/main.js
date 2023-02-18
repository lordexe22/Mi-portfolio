let currentLoad = 0;
const $bg = document.querySelector('img');
const $text = document.querySelector('p');

let loadBG = setInterval(() => {
    if(currentLoad<100){
        let opacity = (100 - currentLoad) / 100;
        let blur = ( 20 - currentLoad/5);
        currentLoad++;
        $text.textContent = `${currentLoad.toString()}%`;
        $text.style.opacity = `${opacity}`
        $bg.style.filter = `blur(${blur}px)`;
    }
    else {
        clearInterval(loadBG);
    }
}, 50);