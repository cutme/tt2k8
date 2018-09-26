import InView from 'inview';

document.addEventListener('DOMContentLoaded',function() {
    
    let el = document.getElementsByClassName('anim');
    
    for (let i = 0; i < el.length; i ++) {

        let inview = InView(el[i], function(isInView, data) {
    
            if (isInView) {
                if (data.elementOffsetTopInViewHeight < data.inViewHeight - 100) {
                    el[i].classList.add('anim--visible');
                    //this.destroy();
                }
            } else {
                el[i].classList.remove('anim--visible');
            }
        });
    }
    
    


}, false);
