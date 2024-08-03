let num = 100
console.log(num)

let newNum = new Number(100)
console.log(newNum);

console.log(num.toString())
console.log(num.toString().length)
console.log(num.toFixed(3))

const otherNum = 23.3365

console.log(otherNum.toPrecision(3));


const n = 10000000000000

console.log(n.toLocaleString('en-IN'));


// *********************** Maths ****************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(9.8));
console.log(Math.round(9.2));
console.log(Math.ceil(4.1)); //always top value
console.log(Math.floor(9.7));// always take lower value
console.log(Math.max(1,2,4,3,6,9,5))
console.log(Math.min(9,5,2,7,1))

console.log((Math.random() * 10) + 1);

console.log(Math.random());
console.log((Math.random() * 10) + 1 );
console.log(Math.floor((Math.random() * 10) + 1));

let max = 30
let min = 20

console.log(Math.floor((Math.random() * (max - min +1)) + min));