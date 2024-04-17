
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


/* Advanced Level
Question 5: Using Closures

Implement a function
createCounter
that initializes a counter to 0 and returns a function. When invoked, the returned function should increment the counter by 1 and return the new count, but without allowing direct access to the counter variable. */

function createCounter() {
    let counter = 0
    return function() {
        counter++
        return counter
    }
}
const counter = createCounter()

console.log(counter())
console.log(counter())


/* Question 6: Function Currying

Define a curried function
add
that can take three numbers as arguments but does so one at a time. For example,
add(1)(2)(3)
should return 6. */

function add(a) {
    return function(b) {
        return function(c){
            return a + b + c
        }
    }
}

const numbers = add(1)(2)(3)

console.log(numbers)


/* Expert Level

Question 7: More Advanced Closure

Write a function
configureDevice
that takes an
id
for a device. It should return a function that accepts a command. When this function is called with a command, it should return a string combining the
id
and the command, e.g.,
"Device 001 execute: reboot". */

function configureDevice(a) {
    return function(b) {
        return `Device ${a} execute: ${b}`
    }
}
const device = configureDevice("001")

console.log(device("reboot"))


/* Question 8: Complex Currying and Closures

Create a function
createMathOp
that takes a mathematical operator as a string ('+', '-', '*', '/'). Return a function that takes two parameters (a and b). When this returned function is called, it should apply the operation to
a
and
b
and return the result. Use currying and closures to encapsulate the operator and operands. */

function createMathOp(operator) {

    return function(a) {

        return function (b) {

         if (operator = "+") {
            return a + b
         } else if (operator = "-") {
            return a - b
         } else if (operator = "*") {
            return a * b
         } else if (operator = "/") {
            return a / b
         }

        }
    }
}

const result = createMathOp("+")(5)

console.log(result(4))

//It just adds a and b up. Not sure why all the other operators won't work somehowww//