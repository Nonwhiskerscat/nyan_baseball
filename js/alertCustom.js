function alertResult(cat, escore, earr, etry) {
    const rst$=document.getElementById('result_alt');
    const rstH4=rst$.querySelector('.alertbx h4');
    const rstImg=rst$.querySelector('.alertbx img')
    const rstNtc=rst$.querySelector('.alertbx .notice');
    const rstTitle=rst$.querySelectorAll('.alertbx .scorebox h5');
    const rstScore=rst$.querySelector('.ts p');
    const rstTrial=rst$.querySelector('.tt p');
    const rstRes=rst$.querySelector('.tr p');
    const rstCls=rst$.querySelector('.cls h6')

    const lolly=cat;
    const score=escore;
    const com=earr;
    const trial=etry;

    rst$.classList.remove('no');
    document.body.classList.add('no_scroll');
    document.querySelector('.container').style.touchAction='none';
    
    if(lolly==1) {
        rstH4.innerHTML=`CLEAR`;
        rstImg.src='../img/alert/catclear.png';
        rstNtc.innerHTML=`축하드립니다. <br>공격에 성공하셨습니다.`;
    }

    else {
        rstH4.style.color='#ff0000';
        [].forEach.call(rstTitle, function(rstTitle) {
            rstTitle.style.color='#ff0000';
        })
        rstH4.innerHTML=`Failed`;
        rstImg.src='../img/alert/catfailed.png';

        if(lolly==2) {
            rstNtc.innerHTML=`보유 점수 파산으로 인해 <br>공격에 실패하였습니다.`;
        }

        else if(lolly==3) {
            rstNtc.innerHTML=`쓰리 아웃으로 인해 <br>공격에 실패하였습니다.`;
        }

    }

    rstScore.innerHTML=score;
    rstTrial.innerHTML=trial;
    rstRes.innerHTML=com;



    rstCls.addEventListener('click', function() {
        rst$.classList.add('no');
        document.body.classList.remove('no_scroll');
        document.querySelector('.container').style.touchAction='auto';

    })


    


}