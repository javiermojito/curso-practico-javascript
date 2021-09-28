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

function alturaTrianguloIsoceles(lado, base) {
    return Math.sqrt(lado ** 2 - base ** 2 / 4);
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

function calcularAlturaTrianguloIsoceles() {
    const input1 = document.getElementById("lado1Triangulo");
    const lado = input1.value;

    const input2 = document.getElementById("baseTriangulo");
    const base = input2.value;

    const altura = alturaTrianguloIsoceles(lado, base);
    alert(altura);
}

//--- Circulo ---//
function calcularPerimetroCirculo() {
    const input1 = document.getElementById("radioCirculo");
    const radio = input1.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input1 = document.getElementById("radioCirculo");
    const radio = input1.value;

    const area = areaCirculo(radio);
    alert(area);
}

// Checkbox
function handleCheckbox(element) {
    if (element.checked) {
        const container = document.getElementById("containerAlturaTriangulo");
        container.style.display = "none";

        const containerLado = document.getElementById(
            "containerLado2Triangulo"
        );
        containerLado.style.display = "none";

        const button = document.getElementById("btCalcularAlturaIsoceles");
        button.style.display = "block";
    } else {
        const container = document.getElementById("containerAlturaTriangulo");
        container.style.display = "block";

        const containerLado = document.getElementById(
            "containerLado2Triangulo"
        );
        containerLado.style.display = "block";

        const button = document.getElementById("btCalcularAlturaIsoceles");
        button.style.display = "none";
    }
}
