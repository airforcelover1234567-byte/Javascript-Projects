//const-Values that cannot be changed

const PI=22/7;
let radius;
let circumference;

document.getElementById("mysubmit").onclick=function(){
    radius=document.getElementById("myinput").value;
    circumference=2*PI*radius;
    console.log(`The circumference of the circle is ${circumference}`);
}