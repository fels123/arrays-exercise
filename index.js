// array from range
// const numbers = arrayFromRange(1, 4);
// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }
// *********************************************************************
//includes method
// const numbers = [1, 2, 3, 4];
// console.log(includes(numbers, 5));

// function includes(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//   return false;
// }
// *********************************************************
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
// *************************************************************************
//moving elements in an array
// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, 5);
// console.log(output); // Output: [2, 3, 4, 1]

// function move(array, index, offset) {
//   const newPosition = index + offset;

//   // Check if newPosition is out of bounds
//   if (newPosition > array.length || newPosition < 0) {
//     console.error("Invalid Offset");
//     return;
//   }

//   const output = [...array]; // Create a copy of the original array
//   const element = output.splice(index, 1)[0]; // Remove the element at index
//   output.splice(newPosition, 0, element); // Insert the element at newPosition
//   return output;
// }
// *************************************************************************
//count occurances using reduce method
// const numbers = [1, 2, 3, 1, 4];
// const count = countOccurances(numbers, 1);
// console.log(count);
// function countOccurances(array, searchElement) {
//   //   let count = 0;
//   //   for (let element of array) if (element === searchElement) count++;
//   //   return count;
//   return array.reduce((accumulator, current) => {
//     const occurance = current === searchElement ? 1 : 0;
//     console.log(accumulator, current, searchElement);
//     return accumulator + occurance;
//   }, 0);
// }

// ****************************************************************
// get max
// const numbers = [1, 2, 3, 7];
// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   //   let max = array[0];
//   //   for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
//   //   return max;

//   return array.reduce((a, b) => (a > b ? a : b));
// }

// ********************************************************
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

//all the movies in 2018 with rating > 4 displayed
//sort them by their rating
//decending order
//pick their title

const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort(
    (a, b) => a.rating - b.rating
    //a =4.5
    //b=4.5
  )
  .reverse()
  .map((m) => m.title);

console.log(titles);
