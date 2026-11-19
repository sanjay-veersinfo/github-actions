/**
 * Automated test suite for math.js using Node.js built-in test runner.
 * 'node:test': Provides the test() runner function without external packages like Jest or Mocha.
 * 'node:assert': Provides strict comparison functions to verify expected vs actual values.
 */

const test = require('node:test');
const assert = require('node:assert');

// Import the functions to be tested from math.js
const { add, multiply } = require('./math');

// ==============================================================================
// ADD FUNCTION UNIT TESTS (4 Test Cases)
// ==============================================================================

// Test Case 1: Verifies addition of two positive integers
test('add should return the sum of two positive numbers: 2 + 3 = 5', () => {
    const result = add(2, 3);
    assert.strictEqual(result, 5, 'Expected 2 + 3 to equal 5');
});

// Test Case 2: Verifies addition of larger numbers
test('add should return the sum of larger numbers: 10 + 20 = 30', () => {
    const result = add(10, 20);
    assert.strictEqual(result, 30, 'Expected 10 + 20 to equal 30');
});

// Test Case 3: Verifies addition with negative numbers
test('add should return zero when adding opposite numbers: -2 + 2 = 0', () => {
    const result = add(-2, 2);
    assert.strictEqual(result, 0, 'Expected -2 + 2 to equal 0');
});

// Test Case 4: Verifies addition with zero inputs
test('add should return zero when adding zero to zero: 0 + 0 = 0', () => {
    const result = add(0, 0);
    assert.strictEqual(result, 0, 'Expected 0 + 0 to equal 0');
});

// ==============================================================================
// MULTIPLY FUNCTION UNIT TESTS (4 Test Cases)
// ==============================================================================

// Test Case 5: Verifies multiplication of two positive integers
test('multiply should return the product of two positive numbers: 2 * 3 = 6', () => {
    const result = multiply(2, 3);
    assert.strictEqual(result, 6, 'Expected 2 * 3 to equal 6');
});

// Test Case 6: Verifies multiplication of two double-digit numbers
test('multiply should return the product of numbers: 5 * 4 = 20', () => {
    const result = multiply(5, 4);
    assert.strictEqual(result, 20, 'Expected 5 * 4 to equal 20');
});

// Test Case 7: Verifies multiplication with negative numbers
test('multiply should return a negative product when multiplying positive and negative: -2 * 3 = -6', () => {
    const result = multiply(-2, 3);
    assert.strictEqual(result, -6, 'Expected -2 * 3 to equal -6');
});

// Test Case 8: Verifies multiplication by zero
test('multiply should return zero when multiplying any number by zero: 0 * 10 = 0', () => {
    const result = multiply(0, 10);
    assert.strictEqual(result, 0, 'Expected 0 * 10 to equal 0');
});

