import { calculator } from "./calculator.js"
import { expect, jest, test } from '@jest/globals';

test("add should return an addition when two numbers are entered", () => {
    const number1 = 2;
    const number2 = 4;
    const expectResult = calculator.add(number1, number2);
    expect(expectResult).toBe(6);
});

test("subtract should return a substract when two numbers are entered", () => {
    const number1 = 8;
    const number2 = 5;
    const expectResult = calculator.subtract(number1, number2);
    expect(expectResult).toBe(3);
});

test("multiply should return a multiply when two numbers are entered", () => {
    const number1 = 4;
    const number2 = 4;
    const expectResult = calculator.multiply(number1, number2);
    expect(expectResult).toBe(16);
});

test("divide should return a division when two numbers are entered", () => {
    const number1 = 36;
    const number2 = 4;
    const expectResult = calculator.divide(number1, number2);
    expect(expectResult).toBe(9);
});

test("divide should return an error message when attempting to divide by 0", () => {
    const number1 = 36;
    const number2 = 0;
    const expectResult = calculator.divide(number1, number2);
    expect(expectResult).toEqual("No se puede dividir entre 0");
});

test("multiplyByRandom calculator should return a random multiply when a number is entered", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(4);
    const number1 = 8;
    const expectResult = calculator.multiplyByRandom(number1);
    expect(!Number.isNaN(expectResult)).toBe(true);
    expect(expectResult).toBe(32);
});

test("multiplyByRandom should return a error message when parameter is a non digit string", () => {
    const number1 = "s";
    const expectResult = calculator.multiplyByRandom(number1);
    expect(isNaN(expectResult)).toBe(true);
    expect(expectResult).toEqual("Error: Non digit string");
});