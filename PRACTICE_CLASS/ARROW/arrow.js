/*function fnHit(){
    var left=0;
var myInt=setInterval(function(){
    left++;
    document.querySelector('.arrow').style.left=left+'px';
    if(left==390){
        clearInterval(myInt);
        document.querySelector('.balloon').style.display='none';
    }
},15);
}*/
window.addEventListener('keyup',
    function (e) {
        if (e.keyCode == 13) {
            var left = 0;
            var myInt = setInterval(function () {
                left++;
                document.querySelector('.arrow').style.left = left + 'px';
                if (left == 390) {
                    clearInterval(myInt);
                    document.querySelector('.balloon').style.display = 'none';
                }
            }, 15);
        }
    })