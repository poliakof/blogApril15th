
/* Basic Level

Question 1: Basic Return Value

Write a function named
calculateArea
that takes the radius of a circle as an argument and returns the area of the circle. */

function calculateArea(radius){
    return radius * radius * 3.14159
}

console.log(calculateArea(10))


/* Question 2: Conditional Return

Write a function called
gradeTest
that takes a score out of 100 and returns "Pass" if the score is 50 or higher, and "Fail" if the score is less than 50. */

function gradeTest(score){
    if (score >= 50) {
        return "Pass"
    } else {
        return "Fail"
    }
}

console.log(gradeTest(50))


/* Intermediate Level
Question 3: Multiple Returns

Create a function
processUserInput
that accepts an integer. If the integer is less than 10, return "Input is less than 10". If the integer is between 10 and 20, return "Input is between 10 and 20". Otherwise, return "Input is greater than 20". */

function processUserInput(integer){
    if (integer < 10) {
        return "Input is less than 10"
    } else if (integer > 10 && integer < 20) {
        return "Input is between 10 and 20"
    } else {
        return "Input is greater than 20"
    }
}

console.log(processUserInput(19))


/* Question 4: Returning Functions

Write a function
makeMultiplier
that takes one parameter. This function should return another function that takes one parameter and returns the product of both parameters. */

function makeMultiplier(parameter1) {

    return function (parameter2) {
      return parameter1 * parameter2
    }

  }
  
const double = makeMultiplier(5)

console.log(double(6))
