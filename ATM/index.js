const PIN=1977;
const mypin=document.getElementById("submit1");
const myinput=document.getElementById("input1");
const button1=document.getElementById("button1");
const button2=document.getElementById("button2");
const button3=document.getElementById("button3");
const withdrawalinput=document.getElementById("withdrawalinput");
const withdrawsubmit=document.getElementById("withdrawsubmit");
const myh22=document.getElementById("myh22");
const depositioninput=document.getElementById("depositioninput");
const depositsubmit=document.getElementById("depositsubmit");

let depositinput;
let pin; 
let balance=10000;
let wtdraw;
let counter=0;
let retry=0;

mypin.onclick=function(){
    pin=Number(myinput.value);
    if(pin==PIN){
    document.getElementById("myh2").textContent=`You have successfully entered!`;
    document.getElementById("secretbuttons").style.display="block";
    button1.onclick=function(){
        document.getElementById("withdrawal").style.display="block";
        withdrawsubmit.onclick=function(){
            wtdraw=Number(withdrawalinput.value);
            wtdraw=Math.abs(wtdraw);
            balance=balance-wtdraw;
            myh22.textContent=balance;
            myh22.style.display=`block`;
            if(balance<=0){
                document.getElementById("myh22").textContent=`You have ran out of money`;
            }
        }
    }
    button2.onclick=function(){
        document.getElementById("myh22").textContent=balance;
    }
    button3.onclick=function(){
          document.getElementById("deposition").style.display="block";
        depositsubmit.onclick=function(){
            depositinput=Number(depositioninput.value);
            balance=balance+depositinput;
            myh22.textContent=balance;
            myh22.style.display=`block`;
    }
}
    }
else{
    document.getElementById("myh2").textContent=`Entered Wrong PIN!`;
    retry++;
    if(retry==3){
        window.close();
    }
} 
}
