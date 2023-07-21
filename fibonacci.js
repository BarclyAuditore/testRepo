

function fibonacci(num) {
    const fib = [0,1]

    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        
    }

    return fib[num];
}

/* for (let i = 0; i < 10 ; i++) {
    console.log(fibonacci(i));
}
 */

function listaDoble() {
    let lista = [1,2,3,4,5,6,7,8,9];

    for (let i = 0; i < lista.length; i++) {
        lista[i] = (i+1) * 2;
    }

    return lista;
}

/* console.log(listaDoble()); */
