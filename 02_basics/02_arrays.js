const marvel_heroes = [ "thor", "ironman", "hulk", "captain america"];

const dc_heroes = ["Superman", "flash", "batman"]
// marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes); // Output the updated marvel_heroes array
//console.log(marvel_heroes[3][1]);
//const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes); // Output the concatenated array

const allHeroes = [...marvel_heroes, ...dc_heroes];
console.log(allHeroes); // Output the concatenated array using spread operator