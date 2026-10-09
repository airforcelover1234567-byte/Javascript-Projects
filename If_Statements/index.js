let age=23;
let haslicense=true;
if(age>=16){
    console.log(`You are eligible to drive`);
    if(haslicense){
        console.log("You are not allowed to drive as you do not have a license");
    }
    else{
        console.log(`You do not have your license yet`);
    }
}
else{
    console.log(`You are not eligible to drive`);
}