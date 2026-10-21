const thunderbolt=document.getElementById("button1");
const electriccharge=document.getElementById("button2");
const quickattack=document.getElementById("button3");
const spark=document.getElementById("button4");
const mylabel=document.getElementById("mylabel");
let hp=100;
hp=Number(hp);
if(hp<=0){
    mylabel.textContent=`You have won`;
}

thunderbolt.onclick=function(){
    hp-=25;
    mylabel.textContent=hp;
}
electriccharge.onclick=function(){
    hp-=35;
    mylabel.textContent=hp;
}
quickattack.onclick=function(){
    hp-=20;
    mylabel.textContent=hp;
}
spark.onclick=function(){
    hp-=15;
    mylabel.textContent=hp;
}


