function fnRoll(){
    var i=1;
    var int=setInterval(function(){
        i=i+1;
        document.querySelector('.rotate').style.left=i+'px';
        if(i==500){
            clearInterval(int)
        }
    },50)
}