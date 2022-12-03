function endGame(escore, eout, estrike, meow, earr) {

    const nyan = document.querySelectorAll('#catnum');
    const kidcat2=document.querySelector('.btn');
    const kidcat3=document.querySelector('.ctn');
    let score=escore;
    let kitty=[...earr]


    if(escore<=0||eout==3||estrike==meow) {
        if(estrike==meow) {
            score=escore+countScore(meow);
        }

        else {
            for(let i=0;i<meow;i++) {
                document.querySelector(`.num_${i+1}`).value=kitty[i];
            }
            score=0;
        }

        [].forEach.call(nyan,function(nyan){
            nyan.classList.add('written');
            kidcat2.classList.add('no');
            kidcat3.classList.remove('no')
            nyan.disabled=true;
        }); 

        return score;

    }

    else {
        for(let i=0;i<meow;i++) {
            document.querySelector(`.num_${i+1}`).value='';
        }
    
        return score;
    
    }


}