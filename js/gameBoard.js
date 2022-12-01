function gameBoard(cat, kitty, kidcat1, kidcat2, kidcat3) {

    const plusdata=document.querySelector('.part4 .result_t tr');

    const kidcat0 = kitty.join('');

    let contents='';
    contents+=
    `
    <tr>
    <td>${cat}</td>
    <td>${kidcat0}</td>
    <td>${kidcat1}</td>
    <td>${kidcat2}</td>
    <td>${kidcat3}</td>
    </tr>
    `

    plusdata.append(contents);
    
}