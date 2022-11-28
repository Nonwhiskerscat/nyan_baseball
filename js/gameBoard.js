function gameBoard(cat) {

    const $part4=document.querySelector('.part4');

    let contents='';
    const catarr=attackNumber(cat);
    for(let i=0;i<cat;i++) {
        contents+=`${catarr[i]}`;
        if(i==cat-1) {
            contents+='<br>'
        }
    }
    contents

    $part4.append(contents);
    
}