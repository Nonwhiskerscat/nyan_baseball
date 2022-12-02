function attackNumber(cat) {

    const nyan = document.querySelector('.kitty');
    const nyans= document.querySelectorAll('.kitty #catnum');

    let attack=[];
    for(let i=0;i<cat;i++) {
        let meow = Number(nyan.querySelector(`.num_${i+1}`).value);
        if(isNaN(meow)||meow=='') meow='X';
        attack.push(meow);
    }
    
    return attack;
}
