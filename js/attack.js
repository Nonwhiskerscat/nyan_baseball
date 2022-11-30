attack.addEventListener('click', function() {
    let myAttack=attackNumber(meow);
    console.log(myAttack);
    numberChecker(comAttack,myAttack,meow);
    gameBoard(meow);

    for(let i=0;i<meow;i++) {
        document.querySelector(`.num_${i+1}`).value='';
    }
})