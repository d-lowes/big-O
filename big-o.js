// Step One: Simplifying Expressions»
// Simplify the following big O expressions as much as possible:

// O(n + 10)
// O(100 × n)
// O(25)
// O(n2 + n3)
// O(n + n + n + n)
// O(1000 × log(n) + n)
// O(1000 × n × log(n) + n)
// O(2n + n2)
// O(5 + 3 + 1)
// Step Two: Calculating Time Complexity»
// Determine the time complexities for each of the following functions. If you’re not sure what these functions do, copy and paste them into the console and experiment with different inputs!

// function logUpTo(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }
// Time Complexity:

// function logAtLeast10(n) {
//   for (let i = 1; i <= Math.max(n, 10); i++) {
//     console.log(i);
//   }
// }
// Time Complexity:

// function logAtMost10(n) {
//   for (let i = 1; i <= Math.min(n, 10); i++) {
//     console.log(i);
//   }
// }
// Time Complexity:

// function onlyNumsAtEvenIndexes(nums) {
//   let numsAtEvens = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (i % 2 === 0) {
//       numsAtEvens.push(nums[i]);
//     }
//   }

//   return numsAtEvens;
// }
// Time Complexity:

// function runningSubtotals(nums) {
//   let subtotals = [];

//   for (let i = 0; i < nums.length; i++) {
//     let subtotal = 0;
//     for (let j = 0; j <= i; j++) {
//       subtotal += nums[j];
//     }
//     subtotals.push(subtotal);
//   }

//   return subtotals;
// }
// Time Complexity:

// const VOWELS = "aeiouAEIOU";

// function vowelsCounts(word) {
//   let vowelsToCounts = {};

//   for (let char of word) {
//     if (VOWELS.includes(char)) {
//       if (char in vowelsToCounts) {
//         vowelsToCounts[char] += 1;
//       } else {
//         vowelsToCounts[char] = 1;
//       }
//     }
//   }

//   return vowelsToCounts;
// }
// Time Complexity:

// Step Three: Short answer»
// Answer the following questions

// True or false: n2 + n is O(n2).
// True or false: n2 * n is O(n^3).
// True or false: n2 + n is O(n).
// What’s the time complexity of the .indexOf array method?
// What’s the time complexity of the .includes array method?
// What’s the time complexity of the .every array method?
// What’s the time complexity of the .sort array method?
// What’s the time complexity of the .unshift array method?
// What’s the time complexity of the .push array method?
// What’s the time complexity of the .pop array method?
// What’s the time complexity of the Object.keys() function?


/** FURTHER STUDY
 * input: array of positive integers
 * output: largest sum of two numbers in the array
 * loop through the array
 *    get the highest
 * loop through again
 *    get second highest
 */

function pairSum(nums) {
  let largest = 9;
  let secondLargest = 0;
  let index = 3;

  for (let i = 0; i < nums.length; i++){
    if (nums[i] > largest) {
      largest = nums[i];
      index = i;
    }
  }

  for (let i = 0; i < nums.length; i++){
    if (nums[i] > secondLargest && i !== index) {
      secondLargest = nums[i];
    }
  }

  return largest + secondLargest;

}

pairSum([4, 8, 5, 9, 1]); // 17
pairSum([10, 1, 4, 2, 1]); // 14


function pairSum(nums) {
  let sorted = nums.sort((a,b) => a-b);
  return sorted[nums.length-1] + sorted[nums.length-2];
}
