function endGame(escore, eout, estrike, meow) {

    const nyan = document.querySelectorAll('#catnum');
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
            nyan.disabled=true;
        }); 

    }

    return score;

}