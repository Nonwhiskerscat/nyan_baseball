function endGame(escore, eout, estrike, meow, earr) {

    const nyan = document.querySelectorAll('#catnum');
    const kidcat1=document.querySelector('.btn');
    const kidcat2=document.querySelector('.ctn');
    let score=escore;
    let kidcat3=[...earr]


    if(escore<=0||eout==3||estrike==meow) {
        if(estrike==meow) {
            score=escore+countScore(meow);
        }

        else {
            for(let i=0;i<meow;i++) {
                document.querySelector(`.num_${i+1}`).value=kidcat3[i];
            }
            score=0;
        }

        [].forEach.call(nyan,function(nyan){
            nyan.classList.add('written');
            kidcat1.classList.add('no');
            kidcat2.classList.remove('no')
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