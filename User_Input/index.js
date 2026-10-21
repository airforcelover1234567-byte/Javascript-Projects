//Accept user input
//1. EASY WAY- Window Prompt
//2. Professional way- HTML textbox

let username;
//username=window.prompt(`What is your name`);
//console.log(username);
document.getElementById("mysubmt").onclick = function(){
    username=document.getElementById("myinput").value;
    document.getElementById("myh1").textContent=`Hello ${username}`;
}