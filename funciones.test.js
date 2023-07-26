import { f } from "./funciones.js";

test("duplicarLista should return doubles", () => {
    const miLista = [1, 2, 3];
    expect(f.duplicarLista(miLista).toBe([2, 4, 6]))
})