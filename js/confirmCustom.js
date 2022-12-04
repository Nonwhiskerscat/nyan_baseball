function confirmCommon(cat) {
    const comm$=document.getElementById('common_con');
    const commH4=comm$.querySelector('.contbx h4');
    // const commImg=comm$.querySelector('.alertbx img')
    const commNtc=comm$.querySelector('.contbx .notice1');
    const commNtc2=comm$.querySelector('.contbx .notice2');
    const commYes=comm$.querySelector('.con_btn .yes');
    const commNo=comm$.querySelector('.con_btn .nope');

    const lolly=cat;

    comm$.classList.remove('no');
    document.body.classList.add('no_scroll');
    document.querySelector('.container').style.touchAction='none';
    

    if(lolly==1) {
        commH4.innerHTML='Give Up';
        commNtc.innerHTML=`정말로 포기하시겠습니까?`;
        commNtc2.innerHTML=`포기하실 경우 획득 점수가 모두 사라집니다.`
    }

    if(lolly==2) {
        commH4.innerHTML='Retry';
        commNtc.innerHTML=`게임을 다시 시작하시겠습니까?`;
        commNtc2.innerHTML=`점수 및 기록은 저장되지 않습니다.`
    }

    commYes.addEventListener('click', function(){
        location.reload();
    });


    commNo.addEventListener('click', function(){
        comm$.classList.add('no');
        document.body.classList.remove('no_scroll');
        document.querySelector('.container').style.touchAction='auto';
    });

    return 0;


}