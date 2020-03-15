function fnAdd(){
	debugger;
	//take referecences
	var n1Ref=document.querySelector('p:first-child>input');
	var n2Ref=document.querySelector('p:nth-child(2)>input');
    var resRef=document.querySelector('p:last-child>span');
    //take values

    var n1=n1Ref.value;
    var n2=n2Ref.value;

    //find sum

    var sum=Number(n1)+Number(n2);
	resRef.innerText=sum
}

