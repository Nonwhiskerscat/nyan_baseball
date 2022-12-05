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
    let myAttack=[];
    let myStrike=0;
    let myBall=0;



    [].forEach.call(start,function(start){
        start.addEventListener('click', function() {
            alertCommon(1);
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
            inputEnter();
        })
    }); 


    attack.addEventListener('click', function() {

        play++;
        firstFocus();
        nextFocus(meow);
        offLight();
        
        myAttack=attackNumber(meow);
        myStrike=strikeCount(comAttack, myAttack, meow);
        myBall=ballCount(comAttack, myAttack, meow);

        if(outCount(myStrike, myBall)) {
            myOut++;
            outLight(myOut);
            if(myOut<3) {
                alertCommon(2, myStrike, myOut);
            }
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
        confirmCommon(1, tscore, meow, comAttack, play);        
    })

    again.addEventListener('click', function() {
        confirmCommon(2, tscore, meow, comAttack, play);
    })

    
});