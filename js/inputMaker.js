function inputMaker(cat) {
    console.log(`실행중 ${cat}`);
    const inkitty= document.querySelector('.kitty');
    let link='<label for="second_number">숫자를 입력해 주세요.</label>';
    link +='<div class="kitty_flex">';
    for(let i=0;i<cat;i++) {
        link+=
        `<div class=kitties>
        <p>${i+1}번째 숫자</p>
        <input id="catnum" class="num_${i+1}" type="text" maxlength="1">
        </div>`;
    }

    link+='</div>';
    inkitty.innerHTML=link;
    
}
