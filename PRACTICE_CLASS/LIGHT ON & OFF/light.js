function fnSwitchClick(){
    var btnRef=document.querySelector('input');
    var value=btnRef.getAttribute('value');

    if(value == 'off'){
        btnRef.setAttribute('value','on');
        document.querySelector('div').style.background='yellow'
    }else{
        btnRef.setAttribute('value','off');
        document.querySelector('div').style.background='white'
    }
}