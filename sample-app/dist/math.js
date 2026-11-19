/**
 * Math utility module providing basic arithmetic operations.
 * Designed for unit testing and CI demonstration.
 */

// Function 1: add()
// Accepts two numbers (a, b) and returns their sum.
function add(a, b) {
    return a + b;
}

// Function 2: multiply()
// Accepts two numbers (a, b) and returns their multiplication result.
function multiply(a, b) {
    return a * b;
}

// Export functions using CommonJS module system so other files and test suites can import them.
module.exports = { add, multiply };

