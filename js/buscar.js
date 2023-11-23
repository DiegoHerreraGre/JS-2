let numeros = [];

for (let i = 1; i <= 1000; i++) {
    numeros.push(i);
}
console.log(numeros);

for (let j = 0; j < numeros.length; j++) {
    if (numeros[j] === 39) {
        console.log('Encontrado en la posición ', j);
        break;
    }
}

