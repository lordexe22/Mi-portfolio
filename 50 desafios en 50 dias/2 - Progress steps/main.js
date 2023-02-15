const $nextBtn = document.getElementById('next-btn');
const $prevBtn = document.getElementById('prev-btn');
const $lineProgress = document.querySelector('.line-progress');
const numbers = document.querySelectorAll('.number');
const numOfItems = numbers.length;
let currentProgress = 0;
const progress = 100/(numOfItems-1); // 33% for 4 items

const nextClickEvent = () => {
    if(!(currentProgress<100)) return;
    currentProgress += progress;
    if(currentProgress>100) currentProgress=100;
    update();
} 
const prevClickEvent = () => {
    if(!(currentProgress>0)) return;
    currentProgress -= progress;
    if(currentProgress<0) currentProgress=0;
    update();
} 
const update = () => {
    if(currentProgress===100){
        $nextBtn.setAttribute('disabled','');
        $nextBtn.classList.add('disabled');
    } else if (currentProgress===0){
        $prevBtn.setAttribute('disabled','');
        $prevBtn.classList.add('disabled');
    }
    if(currentProgress>0){
        $prevBtn.disabled = false;
        $prevBtn.removeAttribute('disabled');
        $prevBtn.setAttribute('class','btn enabled');
    }
    if(currentProgress<100){
        $nextBtn.disabled = false;
        $nextBtn.setAttribute('class','btn enabled');
    }
    $lineProgress.style.width = `${currentProgress}%`;
    
    numbers.forEach((number,index) => {           // index      0   -   1   -   2   -   3
        if(currentProgress>=index*progress) number.classList.add('done');
        else number.classList.remove('done');
                             
    });
}


$nextBtn.addEventListener('click',nextClickEvent);
$prevBtn.addEventListener('click',prevClickEvent);

