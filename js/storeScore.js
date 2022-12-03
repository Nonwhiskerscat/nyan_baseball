function outField(neko, meow, kidcat) {
    let score=neko;
    let newarr=[...kidcat];

    if(score<=1500)
    alert('아이템 구매 불가!');
    else {
        score=neko-1500;
        alert(kidcat[2]);
    }
    return score;
}

function inField(neko, meow, kidcat) {
    let score=neko;
    let newarr=[...kidcat];

    if(score<=4000)
    alert('아이템 구매 불가!');
    else {
        score=neko-4000;
    }
    return score;
}

function tableSeat(neko, meow, kidcat) {
    let score=neko;
    let newarr=[...kidcat];

    if(score<=8000)
    alert('아이템 구매 불가!');

    else if(meow<4) {
        alert('4자리 이상 게임에서만 사용 가능!');
    }

    else {
        score=neko-8000;
    }
    return score;
}