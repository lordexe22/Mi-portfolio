//-----------------------------------------------------------------------------//
//                              METHODS SECTION                                //
//-----------------------------------------------------------------------------//

const loadEvent = () => {
    const $template = document.querySelector('template');
    const $tempItem = $template.content.querySelector('.card');
    const nImages = 5;

    for( i=1 ; i<=nImages ; i++ ){
        const $currentItem = $tempItem.cloneNode(true);
        let title;
        if(i===1) {
            $currentItem.setAttribute('current','');
            title = 'Deportivo amarillo'
        } 
        else if(i===2) title = 'Sedan deportivo azul';
        else if(i===3) title = 'Sedan deportivo rojo';
        else if(i===4) title = 'Sedan deportivo plateado';
        else if(i===5) title = 'Sedan deportivo negro';

        $currentItem.querySelector('img').setAttribute('src',`./images/car-${i}.jpg`);
        $currentItem.querySelector('p').textContent = title;
        
        document.querySelector('.container').appendChild($currentItem);
    }
        const $currentCard = document.querySelector('.card[current]');
        $currentCard.querySelector('.title').style.opacity = '1';
}

const clickEvent = (e) => {
    const $clickedElement = e.target.parentElement.parentElement; 

    if($clickedElement.hasAttribute('class','card')){ // click on an image
        const $lastCard = document.querySelector('.card[current]');
        $lastCard.removeAttribute('current');
        $lastCard.querySelector('.title').style.opacity = '0';
        $clickedElement.setAttribute('current','');
        $clickedElement.querySelector('.title').style.opacity = '1';        
    }    
}

//-----------------------------------------------------------------------------//
//                               EVENTS SECTION                                //
//-----------------------------------------------------------------------------//

window.addEventListener('DOMContentLoaded',loadEvent);
window.addEventListener('click',clickEvent);



//-----------------------------------------------------------------------------//
//                                DOCUMENTATION                                //
//-----------------------------------------------------------------------------//

/*                                  loadEvent
*/