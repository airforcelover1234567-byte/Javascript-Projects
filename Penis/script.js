const input=document.getElementById("myinput");
const submit=document.getElementById("mysubmit");
const img1=document.getElementById("img1");
const img2=document.getElementById("img2");
const img3=document.getElementById("img3");
const h1=document.getElementById("desc");

submit.onclick=function(){
    let size =Number(input.value);
    if(size<7){
        document.getElementById("img1").style.display="block";
        h1.textContent='You have a small dih. Try to make it bigger';
    }
    else if(size>7<10){
        document.getElementById("img2").style.display="block";
        h1.textContent='Nice. You have a good one. It is enough for enjoyment.'
    }
    else if(size>15){
        document.getElementById("img3").style.display="block";
        h1.textContent="OMG!. It is so big. Bro it probably leaks out of your pants like this when it is hard"
    }
}

