
let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());

let myCreatedDate = new Date("01-04-2023")

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor( Date.now() / 1000 ));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
