function scoreCalculator(nyan, meow, kidcat) { 

    const kitty=kidcat*strikeScore(meow);
    const mitty=countScore(meow);

    console.log(nyan);
    console.log(meow);
    console.log(kidcat);
    console.log(kitty);
    console.log(mitty);


    nyan=nyan+kitty-mitty;
    console.log(nyan);
    return nyan;

}