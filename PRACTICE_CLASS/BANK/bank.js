function fnBl() {
    var blnc = 0;
    /*res++;*/
    if (blnc < 1500) {
        alert('insufficient balance');
    }
    else {
        document.querySelector('span').innerText = blnc;
    }
}

function fnDs() {
        var pavRef = document.getElementById('n1');
        var kumRef = document.getElementById('n2');
        var npkRef = document.getElementById('n3');
        var pav = pavRef.value;
        var kum = Number(kumRef.value);
        var npk = npkRef.value;
        var res = pav + kum + npk;
        document.querySelector('span:last-child').innerText = res;

}

function fnWd() {
    var witDraw = document.getElementById('wd');
    var wt = witDraw.value;
    confirm("please select");
    var myWindow = window.open("", "", "width=200,height=100");
    myWindow.document.write("<p>hello</p>");
    myWindow.focus();
}
function fnCd(){
    
}