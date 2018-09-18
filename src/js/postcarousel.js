import Siema from 'siema';

document.addEventListener('DOMContentLoaded',function() {
    
    const textSiema = new Siema({
        selector: '.js-postcarousel--text',
        duration: 400,
        loop: true,
        onChange: () => {
            
        }
    });

    const imageSiema = new Siema({
        selector: '.js-postcarousel--images',
        duration: 400,
        loop: true,
        onChange: () => {
            textSiema.next()
        }
    });
    
    
    document.querySelector('.js-postcarousel--next').addEventListener('click', () => imageSiema.next());
    document.querySelector('.js-postcarousel--prev').addEventListener('click', () => imageSiema.prev());
    
}, false);

