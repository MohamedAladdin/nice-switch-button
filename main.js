document.getElementsByClassName('the-key')[0].onclick = function () {
    
    'use strict';
    
    document.getElementsByClassName('the-circle')[0].classList.toggle('off');
    document.getElementsByClassName('the-circle')[0].classList.toggle('on');

    if (document.getElementsByClassName('the-circle')[0].classList.contains('on')) {
        
        this.style.backgroundColor = '#2ecc71';
        
    } else {
        this.style.backgroundColor = '#e74c3c';
    }

};

// Be More Calm
