//------- Código del Cuadrado -------//
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//------- Código del Triángulo -------//
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//------- Código del Círculo -------//
console.group("Círculo");
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}

function areaCirculo(radio) {
    return radio ** 2 * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
//--- Cuadrado ---//
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//--- Triangulo ---//
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("lado1Triangulo");
    const lado1 = input1.value;

    const input2 = document.getElementById("lado2Triangulo");
    const lado2 = input2.value;

    const input3 = document.getElementById("baseTriangulo");
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("baseTriangulo");
    const base = input1.value;

    const input2 = document.getElementById("alturaTriangulo");
    const altura = input2.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}
