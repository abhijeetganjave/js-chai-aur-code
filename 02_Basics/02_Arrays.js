const marvel_hero = ["thor","IronMan","spiderman"]

const dc_hero = ["superman","flash","batman"]

marvel_hero.push(dc_hero)


console.log(marvel_hero);
console.log(marvel_hero[3]);
console.log(marvel_hero[3][0]);
console.log(marvel_hero[3][1]);
console.log(marvel_hero[3][2]);

const allHeroes = marvel_hero.concat(dc_hero)

console.log(allHeroes);


const all_new_heroes = [...marvel_hero, ...dc_hero]

console.log(all_new_heroes);


const another_arr = [1,2,3,[4,5,6],7,[8,9,[10,11,12],13]]

const reaL_another_arr = another_arr.flat(Infinity)

console.log(reaL_another_arr);



console.log(Array.isArray(allHeroes));
console.log(Array.isArray("abhijeet"));
console.log(Array.from("Abhijeet"));
console.log(Array.from({name: "Abhijeet"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));

