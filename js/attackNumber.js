function attackNumber(cat) {

    const nyan = document.querySelector('.kitty');

    let attack=[];
    for(let i=0;i<cat;i++) {
        let meow = Number(nyan.querySelector(`.num_${i+1}`).value);
        attack.push(meow);
    }
    
    return attack;
}
