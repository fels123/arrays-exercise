// array from range
// const numbers = arrayFromRange(1, 4);
// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }

//includes method
const numbers = [1, 2, 3, 4];
console.log(includes(numbers, 5));

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}
