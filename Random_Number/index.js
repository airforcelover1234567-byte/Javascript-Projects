// Random Number Generator
const mybutton=document.getElementById("mybutton");
const mylabel=document.getElementById("mylabel");
const min=1;
const max=6;
let random;

mybutton.onclick=function(){
    random = Math.floor(Math.random()*max)+min;
    mylabel.textContent = random;
}