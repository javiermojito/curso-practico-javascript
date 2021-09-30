function calculcarModa(lista) {
    const listaCount = {};

    lista.map(function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    });

    const listaArray = Object.entries(listaCount).sort(function (
        elementoA,
        elementoB
    ) {
        //Compara el valor acumulado con el nuevo valor
        //si VA > NV retorna un número positivo
        //Si VA == NV retorna 0
        //Si VA < NV retorna un número negativo
        //se puede hacer con is..else if

        // if (elementoA > elementoB) return 1;
        // if (elementoA === elementoB) return 0;
        // if (elementoA < elementoB) return -1;

        //pero otra mejor forma en la siguiente.
        return elementoA[1] - elementoB[1];
    });

    const moda = listaArray[listaArray.length - 1];
    return moda;
}
