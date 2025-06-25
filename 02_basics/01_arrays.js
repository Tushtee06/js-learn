//array

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myArr[0]); // Accessing the first element
console.log(myArr[myArr.length - 1]); // Accessing the last element
myArr.push(10); // Adding an element to the end
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myArr.length); // Length of the array
console.log(myArr.includes(5)); // Checking if the array includes the number 5
console.log(myArr.indexOf(5)); // Finding the index of the number 5
console.log(myArr.lastIndexOf(5)); // Finding the last index of the number 5
console.log(myArr.slice(2, 5)); // Slicing the array from index 2 to 4
console.log(myArr.splice(2, 3)); // Removing 3 elements starting from index 2
console.log(myArr); // Array after splice operation
console.log(myArr.join(", ")); // Joining the array elements into a string
console.log(myArr.reverse()); // Reversing the array
console.log(myArr.sort()); // Sorting the array (note: this sorts as strings by default)
console.log(myArr.map(x => x * 2)); // Mapping the array to double each element
console.log(myArr.filter(x => x > 5)); // Filtering the array to get elements greater than 5
console.log(myArr.reduce((acc, curr) => acc + curr, 0)); // Reducing the array to sum all elements
console.log(myArr.every(x => x > 0)); // Checking if every element is greater than 0
console.log(myArr.some(x => x < 0)); // Checking if some elements are less than 0
console.log(myArr.find(x => x > 5)); // Finding the first element greater than 5
console.log(myArr.findIndex(x => x > 5)); // Finding the index of the first element greater than 5
console.log(myArr.fill(0, 2, 5)); // Filling elements from index 2 to 4 with 0
console.log(myArr); // Array after fill operation