// Código del cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm."); */
function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm.");
function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();

// Código del triangulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaTriangulo(a, b, c) {
    let resultado;
    if (a === b && c != '' && a != '' && a != c) {
        resultado = Math.sqrt((a * b) - (c * c) / 4);
    } else {
        resultado = "No es un triángulo isósceles";
    };
    return resultado;
}
console.groupEnd();

// Código del Circulo
console.group("Circulos");

//DIÁMETRO
function diametroCirculo(radio) {
    return radio * 2;
}
//PI
const PI = Math.PI;
//PERIMETRO
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}
//AREA
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);

    alert(perimetro);
}

function calcularAlturaTriangulo() {
    const inputA = document.getElementById("InputA");
    const inputB = document.getElementById("InputB");
    const inputC = document.getElementById("InputC");
    const valueA = inputA.value;
    const valueB = inputB.value;
    const valueC = inputC.value;

    const altura = alturaTriangulo(valueA, valueB, valueC);

    alert(altura);
}