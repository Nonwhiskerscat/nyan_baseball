window.addEventListener('load', function() {

    const $bighead=this.document.querySelector('.bighead');
    const start=document.getElementById('cat').querySelectorAll('button');
    const attack=document.getElementById('kidcat2');
    const retire=document.getElementById('kidcat3');
    const $first=document.querySelector('.first_screen');
    const $second=document.querySelector('.second_screen');
    const $third=document.querySelector('.third_screen');

    // $second.style.display="none";
    $third.style.display="none";

    let comAttack=[];
    let meow = 0;
    let tscore = 0;
    let play = 0;
    let myOut = 0;

    [].forEach.call(start,function(start){
        start.addEventListener('click', function() {
            meow=Number(this.value);
            if(!meow) {
                meow=randomValue();
            }
            let com=startCheck(meow);
            comAttack=[...com];
            console.log(comAttack);
            $first.style.display="none";
            $third.style.display="block";
            $bighead.style.alignItems="flex-start";
            tscore=totalScore(meow);
            scoreBoard(tscore);
            countMaker(meow);
            
            
        })
    }); 

    attack.addEventListener('click', function() {

        play++;

        let myAttack=attackNumber(meow);
        let myStrike=strikeCount(comAttack, myAttack, meow);
        let myBall=ballCount(comAttack, myAttack, meow);

        console.log(myBall);


        console.log(myAttack);
        // tscore=numberChecker(comAttack, myAttack, meow, tscore);

        scoreBoard(tscore);
        gameBoard(play, myAttack, myBall, myStrike, myOut);

        for(let i=0;i<meow;i++) {
            document.querySelector(`.num_${i+1}`).value='';
        }

        if(!(myStrike||myBall)) {
            alert('아웃!');
            myOut++;
        }

        if(myOut==3) {
            alert('게임이 종료되었습니다!');
        }
    })

    retire.addEventListener('click', function() {
        const giveup=confirm('정말 포기하시겠습니까?');
        if(giveup) {
            alert('게임이 끝났습니다.');
            location.reload();
        }
    })
    
});