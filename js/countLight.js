function ballLight(cat) {
    for(let i=1;i<=cat;i++) {
        document.getElementById(`bcircle_${i}`).classList.add('oball');
    }
}

function strikeLight(cat) {
    for(let i=1;i<=cat;i++) {
        document.getElementById(`scircle_${i}`).classList.add('ostrike');
    }
}

function outLight(cat) {
    document.getElementById(`ocircle_${cat}`).classList.add('sout');
}

function offLight() {
    document.querySelector('.ball_count').classList.remove('oball');
    document.querySelector('.strike_count').classList.remove('ostrike');
    
}


