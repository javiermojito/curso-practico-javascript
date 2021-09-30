const lista = [100, 200, 300, 500];

function calcularMediaArimetica(lista) {
    ////Primera forma de hacerse
    // let sumarLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumarLista += lista[i];
    // }

    ////Segunda forma de hacerse
    const sumaLista = lista.reduce(function (
        valorAcumulado = 0,
        nuevoElemento
    ) {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumarLista / lista.length;
    return promedioLista;
}
