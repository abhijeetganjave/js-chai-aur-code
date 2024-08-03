//stack memory

let name = "Abhijeet"

let name2 = name;

console.log(name2);

name2 = "Ganjave"

console.log(name2);


//Heap memory

let obj1 = {
    n1 : "abhi",
    age : 20
}

let obj2 = obj1 

console.log(obj2.n1);
console.log(obj2.age);

obj2.n1 = "Ganjave"

console.log(obj2.n1);
console.log(obj1.n1);
console.log(obj1.age);

