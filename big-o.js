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