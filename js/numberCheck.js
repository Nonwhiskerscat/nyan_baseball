function numberChecker(input1, input2, len, neko,){
    const kidcat11=document.querySelector('')
    
    let ball=0;
    let strike=0;
    let currentNeko=neko;


    for(let k=0;k<len;k++){
        for(let l=0;l<len;l++){
            if(input1[k]==input2[l]){
                ball++;
                if(k==l) {
                    strike++;
                    ball--;
                    currentNeko=strikeScore(len, currentNeko);
                }
            }
        }
    }

    if(ball==0&&strike==0){
        alert('아웃입니다. 다시 생각하세요!');
        out++;
        currentNeko=outSet(currentNeko);
        return currentNeko;
    }

    else if(strike==len) {
        alert('축하합니다. 승리하셨습니다.');
        
    }

    else {

        alert(`볼: ${ball} 스트라이크: ${strike}`);
    }


    currentNeko=countScore(len, currentNeko);
    return currentNeko;
}