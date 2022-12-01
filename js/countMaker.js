    function countMaker(cat) {

        const nyan = document.querySelector('.ball_count');
        const meow = document.querySelector('.strike_count');

    
        let bcircle='';
        for(let i=0;i<cat;i++) {
            bcircle+=`<li class="circle"></li>`
        }
        
        nyan.innerHTML=bcircle;
        meow.innerHTML=bcircle;
    }
