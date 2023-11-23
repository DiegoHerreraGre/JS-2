let numerosNaturales = [];

for (let i = 2; i <= 1000; i++) {

    numerosNaturales.push(i);
}
function buscarPrimos (numeros) {

    let numerosPrimos= [];

    for (let i = 0; i < numeros.length; i++){

        let esPrimo = true;

        for (let j = 2; j < numeros[i]; j++) {

            if (numeros[i] % j === 0) {

                esPrimo = false;

                break;

            }

        }

        if (esPrimo) {

            numerosPrimos.push(numeros[i]);
        }
    }

    return numerosPrimos;

}

let primosEncontrados = buscarPrimos(numerosNaturales);
console.log(primosEncontrados);