window.addEventListener('load', function() {

    const $bighead=this.document.querySelector('.bighead');

    const $first=document.querySelector('.first_screen');
    const start=document.getElementById('cat').querySelectorAll('button');

    const $second=document.querySelector('.second_screen');

    const $third=document.querySelector('.third_screen');
    const attack=document.getElementById('kidcat2');
    const outbtn=document.getElementById('outer');
    const inbtn=document.getElementById('inner');
    const tablebtn=document.getElementById('table');
    const retire=document.getElementById('kidcat4');
    const again=document.getElementById('kidcat3');
    

    // $second.style.display="none";
    $third.style.display="none";

    let comAttack=[];
    let meow = 0;
    let tscore = 0;
    let play = 0;
    let myOut = 0;
    let outArr= ['원','투','쓰리'];


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
            firstFocus();
            nextFocus(meow);
        })
    }); 

    attack.addEventListener('click', function() {

        play++;
        firstFocus();
        nextFocus(meow);
        offLight();
        
        let myAttack=attackNumber(meow);
        let myStrike=strikeCount(comAttack, myAttack, meow);
        let myBall=ballCount(comAttack, myAttack, meow);

        if(outCount(myStrike, myBall)) {
            myOut++;
            outLight(myOut);
            alert(`${outArr[myOut-1]}아웃!`);
            tscore=outScore(tscore);
        }

        console.log(myAttack);
        // tscore=numberChecker(comAttack, myAttack, meow, tscore);

        ballLight(myBall);
        strikeLight(meow,myStrike);


        gameBoard(play, myAttack, myBall, myStrike, myOut);
        dashAttack(myAttack);

        tscore=scoreCalculator(tscore, meow, myStrike);
        tscore=endGame(tscore, myOut, myStrike, meow, comAttack, play);
        scoreBoard(tscore);

    })

    outbtn.querySelector('.store_btn').addEventListener('click', function() {
        tscore=outField(tscore, meow, comAttack);
        scoreBoard(tscore);
    });

    inbtn.querySelector('.store_btn').addEventListener('click', function() {
        tscore=inField(tscore, meow, comAttack);
        scoreBoard(tscore);

    });

    tablebtn.querySelector('.store_btn').addEventListener('click', function() {
        tscore=tableSeat(tscore, meow, comAttack);
        scoreBoard(tscore);

    });

    
    retire.addEventListener('click', function() {
        const giveup=confirm('정말 포기하시겠습니까?');
        if(giveup) {
            alert('게임이 끝났습니다.');
            location.reload();
        }
    })

    again.addEventListener('click', function() {
        const again=confirm('다시 시작하시겠습니까?');
        if(again) {
            alert('게임을 다시 시작합니다.');
            location.reload();
        }
    })

    
});