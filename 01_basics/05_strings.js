const name = "Tushtee"
const repoCount = 10
//console.log("Hello " + name + ", you have " + repoCount + " repositories.")

console.log(`Hello ${name}, you have ${repoCount} repositories.`)

const gameName = new String("Tetris")
console.log(gameName)
console.log(gameName[0]);
console.log(gameName.__proto__); // String.prototype
console.log(gameName.length); // 6
console.log(gameName.toUpperCase()); // TETRIS
console.log(gameName.toLowerCase()); // tetris
console.log(gameName.charAt(0)); // T
console.log(gameName.indexOf("e")); // 1
console.log(gameName.lastIndexOf("e")); // 1
console.log(gameName.includes("tris")); // true
console.log(gameName.startsWith("T")); // true
console.log(gameName.endsWith("is")); // true
console.log(gameName.slice(0, 3)); // Tet
console.log(gameName.substring(0, 3)); // Tet
console.log(gameName.split("e")); // [ 'T', 'tris' ]
console.log(gameName.replace("Tetris", "Pacman")); // Pacman
console.log(gameName.trim()); // Tetris (no leading or trailing spaces)

const url = "https://www.example.com/path/to/resource?query=string#fragment"
console.log(url.startsWith("https://")); // true
console.log(url.endsWith(".com")); // true
console.log(url.includes("example")); // true
