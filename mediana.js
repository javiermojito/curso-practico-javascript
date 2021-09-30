const lista1 = [100, 200, 500, 500, 400000000];

function esPar(numero) {
    return numero % 2 === 0;
}

console.log(calcularMediana([100, 200, 500, 500, 400000000]));
console.log(calcularMediana([100, 200, 500, 400000000]));

function calcularMediana(lista) {
    let mediana;

    //Se ordena la lista
    lista.sort();

    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularMediaArimetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}

function calcularMediaArimetica(lista) {
    const sumaLista = lista.reduce(function (
        valorAcumulado = 0,
        nuevoElemento
    ) {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
