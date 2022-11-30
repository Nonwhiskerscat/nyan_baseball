function strikekitty(cat, kitty) { 
    return kitty+=5*Math.pow(cat,3);
}

function ballkitty(cat, kitty) {
    return kitty+=2*Math.pow(cat,3);
}

function outkitty(cat, kitty) {
    return kitty-=Math.pow(10,cat-1)*3;
}

function countkitty(cat, kitty) {
    if(cat==2||cat==3) {
        return kitty-=10;
    }
    return kitty-=Math.pow(10,cat-2);
}

function outfield() {
    return kitty-=1500;
}

function tableSeat() {
    return kitty-=4000;
}

function skyBox() {
    return kitty-=8000;
}
