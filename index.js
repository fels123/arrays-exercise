// array from range
// const numbers = arrayFromRange(1, 4);
// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }

//includes method
// const numbers = [1, 2, 3, 4];
// console.log(includes(numbers, 5));

// function includes(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//   return false;
// }

//Except excluding elements from an array
const numbers = [1, 2, 3, 4, 1, 1];
const output = except(numbers, [1]);

console.log(output);

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}
