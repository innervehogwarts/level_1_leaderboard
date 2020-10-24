let json;
let pw;
let xhr = new XMLHttpRequest();

xhr.open('GET', "./csvjson.json", false);

xhr.onload = function(){
    json=JSON.parse(this.responseText)
}
xhr.send();

let xyl= new XMLHttpRequest();
xyl.open('GET', "./username.json", false);

xyl.onload = function(){
    pw=JSON.parse(this.responseText)
}
xyl.send();




