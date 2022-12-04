function outField(neko, meow, kidcat) {


    let score=neko;
    let newarr=[...kidcat];

    if(score<=1500)
    alertCommon(4);
    else {
        score=confirmCommon(3, score);
    }
    return score;
}

function inField(neko, meow, kidcat) {
    let score=neko;
    let newarr=[...kidcat];

    if(score<=1500)
    alertCommon(4);
    else {
        confirmCommon(4, score);
    }
    return score;
}

function tableSeat(neko, meow, kidcat) {
    let score=neko;
    let newarr=[...kidcat];

    if(score<=8000)
    alertCommon(4);

    else if(meow<4) {
        alertCommon(5);
    }

    else {
        confirmCommon(5, score);
    }
    return score;
}