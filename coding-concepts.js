// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, test predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: UNDEFINED
// b) Verify and explain: It adds "indigo" to the end of the array and console logs the index number to the terminal. The answer was '5'.


// --------------------1) What will this log?

// const cohort = "Alpha 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The code is asking for the length of the string "Alpha 2022". Including the space, the total length is 10.


// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: l
// b) Verify and explain: I forgot that indexes start at 0, not 1. The correct answer is o, not l.


// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: The code is asking to log index position 1 from the laguages array. The answer is "Ruby"
//
//
// // --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: For some reason, the code won't run in my terminal. The terminal keeps telling me that 'to.UpperCase()' is not a function. Either way, I believe the answer will change both Saturday and Sunday to uppercase.

// After further research, I discovered that .toUpperCase cannot be used on the variable weekendDays, even though it holds values that are strings. You should use the .toString() first, then proceed.
//------------------------------------------------------------------------------
// The uppercase only works on string values. We would have to itterate through the array to get each word capitalized - Jacob's answer

//
//
// // --------------------5) What will this log?
//
// const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: 19
// b) Verify and explain: Answer: number. The code is asking for the data type of the length of the string "number". The length is 6, which makes the data type a number!
