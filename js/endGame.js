function endGame(escore, eout, estrike, meow) {

    const nyan = document.querySelectorAll('#catnum');
    const kidcat1=document.querySelector('.btn');
    const kidcat2=document.querySelector('.ctn');
    let score=escore;


    if(escore<0||eout==3||estrike==meow) {
        if(estrike==meow) {
            escore+=countScore(meow);
        }

        else {
            score=0;
        }

        [].forEach.call(nyan,function(nyan){
            nyan.classList.add('written');
            kidcat1.classList.add('no');
            kidcat2.classList.remove('no')
            nyan.disabled=true;
        }); 

    }

    return score;

}