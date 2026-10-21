 //.checked-to check if a radio file or checkbox element is selected

 const subscribe=document.getElementById("subscribe");
 const phonpe=document.getElementById("phonpe");
 const bharatpe=document.getElementById("bharatpe");
  const paypal=document.getElementById("paypal");
 const mysubmit=document.getElementById("mysubmit");
const subresult=document.getElementById("subresult");

mysubmit.onclick=function(){
    if(subscribe.checked){
        subresult.textContent=`You are subscribed`;
    }
    else if(phonpe.checked){
        subresult.textContent=`You use phonepe`;
    }
    else if(bharatpe.checked){
        subresult.textContent=`You use bharatpe`;
    }
     else if(paypal.checked){
        subresult.textContent=`You use Paypal`;
    }
    else{
        subresult.textContent=`You must select a payment type`;
    }
}