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

function alturaTrianguloIsoceles(strLado1, strLado2, strBase) {
    try {
        let lado1 = Number(strLado1);
        let lado2 = Number(strLado2);
        let base = Number(strBase);

        console.log(lado1);
        console.log(lado2);
        console.log(base);

        if (lado1 === lado2 || lado2 === base || base === lado1) {
            let calcLado = 0;
            let result = 0;
            let calcBase = 0;
            if (lado1 == lado2) {
                calcLado = lado1;
                calcBase = base;
            } else if (lado2 == base) {
                calcLado = lado2;
                calcBase = lado1;
            } else {
                calcLado = base;
                calcBase = lado2;
            }

            result = Math.sqrt(calcLado ** 2 - calcBase ** 2 / 4);
            alert(result);
        } else {
            alert("No es isoceles");
        }
    } catch (error) {
        alert("Por favor ingresa un valor numérico.");
    }
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
    const lado1 = input1.value;

    const input2 = document.getElementById("lado2Triangulo");
    const lado2 = input2.value;

    const input3 = document.getElementById("baseTriangulo");
    const base = input3.value;

    alturaTrianguloIsoceles(lado1, lado2, base);
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

function getNumberFromBoolean(boolean) {
    return boolean ? 1 : 0;
}

// Checkbox
function handleCheckbox(element) {
    let options = ["none", "block"];
    let bCheck = element.checked;

    const containerAltura = document.getElementById("containerAlturaTriangulo");
    containerAltura.style.display = options[getNumberFromBoolean(!bCheck)];

    const btCalcAlturaIsoceles = document.getElementById(
        "btCalcularAlturaIsoceles"
    );
    btCalcAlturaIsoceles.style.display = options[getNumberFromBoolean(bCheck)];
}
