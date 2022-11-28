function startCheck(cat) {

    const start=document.getElementById('kidcat1');
    const $part1=document.querySelector('.part1')

    if(cat<2||cat>9) {
        alert('2부터 9까지의 숫자를 입력하세요!');
        return 0;
    } 
    
    else {
        alert('게임 시작!');
        $part1.style.display='none';
        inputMaker(cat);
        const numArr = new Array();
        const com = numberMaker(cat);
        return com;
    }
}
