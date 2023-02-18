
const clickEvent = (e) => {
    // console.log(e.con)
    if(e.target.matches('.loop-icon')){
        const container = document.querySelector('.container');
        const input = document.getElementById('text')
        if(container.classList.contains('hidden')){
            container.classList.add('displayed');
            container.classList.remove('hidden');
            input.style.color = 'rgba(0,0,0,1)';
            return;
        }
        container.classList.add('hidden');
        container.classList.remove('displayed');
        input.style.color = 'rgba(0,0,0,0)';
    }


}

window.addEventListener('click',clickEvent);
