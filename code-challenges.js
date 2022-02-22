// // ASSESSMENT 1: Coding Practical Questions
//
// // To run file: navigate to the correct directory in terminal, $ node code-challenges.js
//
// // Pseudo coding is required.
//
// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.
//
// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
//
// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
//
//
// // --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
//
// //Pseudo code: create if statement
// // if 42 or lower = below
// // if exactly 212 = Boiling
// // else 350 or above = above
//
// // const temp1 = 42
// // const temp2 = 350
// // const temp3 = 212
// //
// // if (temp1 <= 211) {
// //   console.log("42 is below boiling point")
// // } elseif (temp2 >= 349); {
// //   console.log("350 is above boiling point")
// // } else; {
// //   console.log("212 is at boiling point")
// // }
//
//
// // --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10
//
// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]
//
// // psuedo code: declare both variables (done), concat myNumbers1 into myNumbers2, execute .length into console.log()
//
// const myNumbers3 = myNumbers1.concat(myNumbers2)
// console.log(myNumbers3)
//
// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ahplA"
//
// psuedo code: Start with "Alpha 2022", console.log the string with the reverse tag, profit?

// const currentCohort = "Alpha 2022"
// return currentCohort.reverse
// console.log(currentCohort.reverse())

// // --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// psuedo code: create if statement, check values against %2, === 0 means, it's even, else odd

// const myArray = [13, 34, 5, 10, 27, 42]
// if (myArray.index % 2 != 0) {
//   console.log("The number is odd.")
// } else {
//   console.log("The number is even.")
// }


// // --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3
//
// psuedo code: declare function, assign value to the function so they can be called upon, return the value of the bigger - smaller, console.log
//
// Set one:
const number1 = 58
const number2 = 100

let b = subtractionFunction(number2,number1)
function subtractionFunction(x,y) {
  return number2 - number1
}
console.log(b)

// Set two:
const number3 = 27
const number4 = 24
//
let c = subtractionFunction2(number3,number4)
function subtractionFunction2(x,y) {
  return number3 - number4
}
console.log(c)
