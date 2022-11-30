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
    let score = 0;

    [].forEach.call(start,function(start){
        start.addEventListener('click', function() {
            meow=this.value;
            if(!meow) {
                meow=randomValue();
            }
            let com=startCheck(meow);
            console.log(com);
            comAttack=[...com];
            console.log(comAttack);
            $first.style.display="none";
            $third.style.display="block";
            $bighead.style.alignItems="flex-start";
            score=totalScore(meow);
            console.log(score);
        })
    }); 

    attack.addEventListener('click', function() {
        let myAttack=attackNumber(meow);
        console.log(myAttack);
        numberChecker(comAttack,myAttack,meow);
        gameBoard(meow);

        for(let i=0;i<meow;i++) {
            document.querySelector(`.num_${i+1}`).value='';
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