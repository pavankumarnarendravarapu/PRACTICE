function fnBtus() {
    var o = new XMLHttpRequest();
    o.open('get', 'https://jsonplaceholder.typicode.com/users', true);
    o.send();
    o.onload = function() {
        var res = o.responseText;
        document.querySelector('span').innerText=res;
    }
    o.onerror = function() {
        var res = console.log("somthing went wrong");
        document.querySelector('span').innerText = res;

    }

}
function fnBt2() {
    var o = new XMLHttpRequest();
    o.open('get', 'https://jsonplaceholder.typicode.com/comments', true);
    o.send();
    o.onload = function() {
        var res = o.responseText;
        document.querySelector('span').innerText=res;
    }
    o.onerror = function() {
        var res = console.log("somthing went wrong");
        document.querySelector('span').innerText = res;

    }

}
function fnBt3() {
    var o = new XMLHttpRequest();
    o.open('get', 'https://jsonplaceholder.typicode.com/posts', true);
    o.send();
    o.onload = function() {
        var res = o.responseText;
        document.querySelector('span').innerText=res;
    }
    o.onerror = function() {
        var res = console.log("somthing went wrong");
        document.querySelector('span').innerText = res;

    }

}

function fnBtreq() {
    var usref = document.querySelector('us');
    var psref = document.querySelector('ps');

    var us = usref.value();
    var ps = psref.value();

    var dataObj={
        Mail: 'pavan@gmail.com',
        Password: 'pavan123',
    };

}
