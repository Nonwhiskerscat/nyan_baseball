function outField(neko, meow, kidcat, play) {
    const outres=document.getElementById('outer');

    let score=neko;
    let newarr=[...kidcat];

    
    if(outres.querySelector('.store_btn').classList.contains('sold')) {
        alertCommon(6);
    }
    
    else if(score<=5000)
        alertCommon(4);

    else {
        confirmCommon(3, score, meow, newarr, play);
    }
    return score;
}

function inField(neko, meow, kidcat, play) {
    const inneres=document.getElementById('inner');

    let score=neko;
    let newarr=[...kidcat];

    if(inneres.querySelector('.store_btn').classList.contains('sold')) {
        alertCommon(6);
    }
    
    else if(score<=8000)
        alertCommon(4);


    else {
        confirmCommon(4, score, meow, newarr, play);

    }
    return score;
}

function tableSeat(neko, meow, kidcat, play) {
    const tables=document.getElementById('table');

    let score=neko;
    let newarr=[...kidcat];
    
    if(tables.querySelector('.store_btn').classList.contains('sold')) {
        alertCommon(6);
    }
    
    else if(meow<4) {
        alertCommon(5);
    }

    else if(score<=20000)
        alertCommon(4);

    else {
        confirmCommon(5, score, meow, newarr, play);
    }
    return score;
}