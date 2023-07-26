import { f } from "./funciones.js";
import filtrarPalabras from "./palabras.js"

//DUPLICAR LISTA

const lista = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(f.duplicarLista(lista));

//FIBONACCI

for (let i = 0; i < 10; i++) {
    console.log(f.fibonacci(i));
}

//FACTORIAL

console.log(f.factorial(5));

//FILTRAR PALABRAS

const misPalabras = ["Lobo", "Gato", "Perro", "Caimán", "Avestruz"];

console.log(filtrarPalabras(misPalabras));