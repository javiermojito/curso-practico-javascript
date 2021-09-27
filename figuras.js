//------- Código del Cuadrado -------//
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado(45);

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//------- Código del Triángulo -------//
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del tríangulo miden: " +
//         ladoTriangulo1 +
//         "cm, " +
//         ladoTriangulo2 +
//         "cm, " +
//         baseTriangulo +
//         "cm."
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//------- Código del Círculo -------//
console.group("Círculo");
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

function diametroCirculo(radio) {
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

const PI = Math.PI;
// console.log("PI es: " + PI);

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

function areaCirculo(radio) {
    return radio ** 2 * PI;
}
// const areaCirculo = radioCirculo ** 2 * PI;
// console.log("El area del círculo es: " + areaCirculo + "cm^2");
console.groupEnd();
