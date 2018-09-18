// Touch button

(function() {
    
    let el;

    const init = function() {
            
        const body = document.body,
              html = document.documentElement;
          
        let scroll_pos = window.pageYOffset || window.scrollY,
        status = false, height;

        const action = function() {
        
            height = Math.max( body.scrollHeight, body.offsetHeight, 
                     html.clientHeight, html.scrollHeight, html.offsetHeight );
    
            scroll_pos = window.pageYOffset || window.scrollY;            
            
            if (scroll_pos + window.innerHeight >= height - 400) {
                if (status === false) {
                    el.classList.add('is-hidden-important');
                    status = true;
                }
            } else {
                if (status === true) {
                    el.classList.remove('is-hidden-important');
                    status = false;
                }
            }
        }
        
        window.addEventListener('scroll', action);

    } 
    
    document.addEventListener('DOMContentLoaded',function() {
        
        el = document.getElementById('touch');
        el ? init() : false;
        
    }, false);

})();