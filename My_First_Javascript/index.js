console.log(`Hello World`);

//window.alert("I like Biriyani!");
//These are comments
document.getElementById("myh1").textContent =`Hello`;
document.getElementById("myp").textContent=`I love Biriyani!`;

//variable-anything that stores something

let x = 123;
let y = 231;
console.log(x);
console.log(y);

let price=10.99;
console.log(price); 
console.log(typeof price);

let firstname="Rounak Roy";
console.log(typeof firstname);
console.log(`Your name is ${firstname} `);

let online=false;
console.log(typeof online);
if(online){
    console.log("You are online");
}
else{
    console.log("You are offline");
}

let fullname="Rounak Roy";
let age=14;
let student=true;

document.getElementById("p1").textContent=`Hi ${fullname}`;
document.getElementById("p2").textContent=`Your age is ${age}`;
document.getElementById("p3").textContent=`You are a student:  ${student}`;

let a=5;
let b=4;
console.log(a+b);
console.log(typeof a);

// var is global scoped, while let is block scoped