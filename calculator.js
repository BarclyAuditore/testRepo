const add = (number1, number2) => number1 + number2;

const subtract = (number1, number2) => number1 - number2;

const multiply = (number1, number2) => number1 * number2;

const divide = (number1, number2) => (number2 === 0) ? "No se puede dividir entre 0" : (number1 / number2);

const multiplyByRandom = (number1) => (isNaN(number1)) ? "Error: Non digit string" : Math.round(number1 * Math.random());

export const calculator = { add, subtract, multiply, divide, multiplyByRandom };