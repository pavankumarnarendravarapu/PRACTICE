var i=1;
setInterval(function(){
    i++;
    document.querySelector('img').setAttribute('src',i+'.jpg');
    if (i==3){
        i=0;
    }
},2000)