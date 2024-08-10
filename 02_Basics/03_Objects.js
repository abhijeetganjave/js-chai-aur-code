//creation of symbol

const mySym = Symbol("key1")


//creation of object
const Jsuser = {
    name : "Abhijeet",
    [mySym] : "myKey1",
    age : 20,
    "full name" : "Abhijeet Vilas Ganjave",
    location : "Karad",
    email : "abhijeetganjave04@gmail.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , "Saturday"]
}

console.log(Jsuser.name);//run,but not right way
console.log(Jsuser["name"]);//right way
console.log(Jsuser["full name"]);//not work using . operator
console.log(Jsuser[mySym]);


//how to change values of objects
Jsuser.email = "abhi@gmail.com"
//Object.freeze(Jsuser) // changes made further does not affect
Jsuser.name = "Abhi"

console.log(Jsuser);

// function in JS
Jsuser.greeting = function(){
    console.log("hello JS user");
}

Jsuser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

