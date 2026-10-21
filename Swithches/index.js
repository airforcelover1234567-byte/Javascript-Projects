//switches- efficient replacement to replace if else statements

let testscore=60;
let lettergrade;

switch(true){
    case testscore>=90:
    lettergrade="A";
    console.log(lettergrade);
    break;

     case testscore>=80:
    lettergrade="B";
    console.log(lettergrade);
    break;

     case testscore>=70:
    lettergrade="C";
    console.log(lettergrade);
    break;

     case testscore>=60:
    lettergrade="D";
    console.log(lettergrade);
    break;

    default:
        console.log("You failed");
        break;
}