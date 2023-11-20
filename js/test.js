let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarParImpar (numeros) {
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log('El número ' + numeros[i] + ' es par')
            true;
        } else {
            console.log('El número ' + numeros[i] + ' es impar')
            false;
        }
    }
}

buscarParImpar(numeros);