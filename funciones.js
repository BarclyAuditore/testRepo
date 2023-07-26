const duplicarLista = lista => lista.map(e => e * 2);

const factorial = numero => {
    if (numero == 0) {
        return 1;
    }
    return numero * factorial(numero - 1);
};

function fibonacci(num) {
    let fib = [0, 1]

    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[num];
}

export const f = { duplicarLista, factorial, fibonacci };