import { fizzBuzz } from "./fizzBuzzImp.js";

test("fizzBuzz should return Fizz when the number is multiple of 3", () => {
    const number = 6;
    const expectResult = fizzBuzz(number);
    expect(expectResult).toEqual("Fizz");
});

test("fizzBuzz should return Buzz when the number is multiple of 5", () => {
    const number = 10;
    const expectResult = fizzBuzz(number);
    expect(expectResult).toEqual("Buzz");
});

test("fizzBuzz should return FizzBuzz when the number is multiple of 3 and 5", () => {
    const number = 30;
    const expectResult = fizzBuzz(number);
    expect(expectResult).toEqual("FizzBuzz");
});

test("fizzBuzz should return the same number when the number is not multiple of 3 or 5", () => {
    const number = 8;
    const expectResult = fizzBuzz(number);
    expect(expectResult).toEqual(8);
});