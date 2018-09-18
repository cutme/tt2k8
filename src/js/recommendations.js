import Siema from 'siema';

document.addEventListener('DOMContentLoaded',function() {
    
    const mySiema = new Siema({
        selector: '.js-recommendations',
        duration: 400,
        loop: true,
    });
    
    
    document.querySelector('.js-recommendations--next').addEventListener('click', () => mySiema.next());
    
}, false);

