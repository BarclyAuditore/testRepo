import { f } from "./funciones.js";

test("duplicarLista should return doubles", () => {
    const miLista = [1, 2, 3];
    expect(f.duplicarLista(miLista)).toEqual([2, 4, 6]);
});

test("factorial should return factorial result when giving a number", () => {
    const number = 5;
    expect(f.factorial(number)).toBe(120);
});

test("factorial should return 1 when giving 0", () => {
    const number = 0;
    expect(f.factorial(number)).toBe(1);
});

