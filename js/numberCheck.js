function numberChecker(input1, input2, len){
    for(let k=0;k<len;k++){
        for(let l=0;l<len;l++){
            if(input1[k]==input2[l]){
                ball++;
                if(k==l) {strike++; ball--;}
            }
        }
    }
    if(ball==0&&strike==0){
        alert('아웃입니다. 다시 생각하세요!');
        return false;        
    }
    else if(strike==len) {
        alert('축하합니다. 승리하셨습니다.');
        return true;
    }
    else {
        alert(`볼: ${ball} 스트라이크: ${strike}`);
        ball=0;
        strike=0;
        return false;
    }

}