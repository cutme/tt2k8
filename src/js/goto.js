/*


(function() { 
    
    
    
})();

export {scrollTo};
*/


// GoToTarget


(function() {

    'use strict';

	const speed_calculate = function (target) {
    	let base_speed  = 50,
    		page_offset = window.pageYOffset || document.documentElement.scrollTop,
        	offset_diff = Math.abs(target - page_offset),
        	speed = ((offset_diff * base_speed) / 1000)/100;

    	return speed;
	};

	const clickAction = function(e) {
	
	    const that = e.currentTarget;

	    let src = that.getAttribute('href'),
	        window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

	    const obj = document.getElementById( src.slice(1, src.length) );

	    if (obj) {
	        let offset = that.getAttribute('data-offset');

            if (!offset) {
                offset = 0;
            }
            
            document.body.removeAttribute('style');
	    
	        let target = window_pos + obj.getBoundingClientRect().top - offset;
	        scrollToo(target, speed_calculate(target), offset);
	    }
        
        if (window.e) {
            window.e.returnValue = false;
        }
        
	    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
	};
	

    document.addEventListener('DOMContentLoaded',function() {
    
        const btn = document.getElementsByClassName('js-goto');
        
        if (btn.length>0) {
        	for (let i = 0; i < btn.length; i++) {
                btn[i].addEventListener('click', clickAction);
            }
        }
        
    }, false);

})();
