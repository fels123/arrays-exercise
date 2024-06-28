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
// const numbers = [1, 2, 3, 4, 1, 1];
// const output = except(numbers, [1]);

// console.log(output);

// function except(array, excluded) {
//   const output = [];
//   for (let element of array)
//     if (!excluded.includes(element)) output.push(element);
//   return output;
// }

//moving elements in an array
const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 5);
console.log(output); // Output: [2, 3, 4, 1]

function move(array, index, offset) {
  const newPosition = index + offset;

  // Check if newPosition is out of bounds
  if (newPosition > array.length || newPosition < 0) {
    console.error("Invalid Offset");
    return;
  }

  const output = [...array]; // Create a copy of the original array
  const element = output.splice(index, 1)[0]; // Remove the element at index
  output.splice(newPosition, 0, element); // Insert the element at newPosition
  return output;
}
