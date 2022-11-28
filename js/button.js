window.addEventListener('load', function() {

    const start=document.getElementById('kidcat1');
    const attack=document.getElementById('kidcat2');
    const retire=document.getElementById('kidcat3');
    const first=document.getElementById('goyang');
    // const val1=first.value;

    start.addEventListener('click', function() {
        const val1=first.value;
        let com=startCheck(val1);
        console.log(com);

    })

    attack.addEventListener('click', function() {
        const val1=first.value;
        let myattack=attackNumber(val1);
        console.log(myattack);
        gameBoard(val1);

    })

    retire.addEventListener('click', function() {
        const giveup=confirm('정말 포기하시겠습니까?');
        if(giveup) {
            alert('게임이 끝났습니다.');
            location.reload();
        }
    })
    
});