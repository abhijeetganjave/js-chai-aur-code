const myArr = [0,1,2,3,4,5,true,"Abhijeet"]

console.log(myArr[7]);

myArr.push(9);

console.log(myArr);

myArr.pop();

console.log(myArr);

myArr.unshift(36)

console.log(myArr);

myArr.shift()

console.log(myArr);

console.log(myArr.includes(51));
console.log(myArr.indexOf(true));

//const newArr = myArr.join()     // converts array into string

console.log(myArr);
//console.log(newArr);

console.log("A " + myArr);

// SLICE

const new1 = myArr.slice(0,2) // 2nd index not included
console.log("B " + myArr);
console.log(new1);


// SPLICE

const new2 = myArr.splice(0,2) // 2nd index included and original array changes (i.e splice part is excluded from original array)
console.log("C " + myArr);
console.log(new2); 